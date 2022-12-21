const chalk = require('chalk') //命令行颜色
const ora = require('ora') // 加载流程动画
const spinner_style = require('./spinner_style') //加载动画样式
const shell = require('shelljs') // 执行shell命令
const { NodeSSH } = require('node-ssh') // ssh连接服务器
const inquirer = require('inquirer') //命令行交互
const zipFile = require('compressing') // 压缩zip
const fs = require('fs') // nodejs内置文件模块
const path = require('path') // nodejs内置路径模块
const CONFIG = require('./config') // 配置

const SSH = new NodeSSH()
let config // 用于保存 inquirer 命令行交互后选择正式|测试版的配置

//logs
const defaultLog = (log) =>
  console.log(chalk.blue(`---------------- ${log} ----------------`))
const errorLog = (log) =>
  console.log(chalk.red(`---------------- ${log} ----------------`))
const successLog = (log) =>
  console.log(chalk.green(`---------------- ${log} ----------------`))

//文件夹目录
const distDir = path.resolve(__dirname, '../build') //待打包
const distZipPath = path.resolve(__dirname, `../build.zip`) //打包后地址(dist.zip是文件名,不需要更改, 主要在config中配置 PATH 即可)

//项目打包代码 npm run build
const compileDist = async () => {
  const loading = ora(defaultLog('项目开始打包')).start()
  loading.spinner = spinner_style.arrow4
  shell.cd(path.resolve(__dirname, '../'))
  const res = await shell.exec('npm run build') //执行shell 打包命令
  loading.stop()
  if (res.code === 0) {
    successLog('项目打包成功!')
  } else {
    errorLog('项目打包失败, 请重试!')
    process.exit() //退出流程
  }
}

//压缩代码
const zipDist = async () => {
  defaultLog('项目开始压缩')
  try {
    await zipFile.zip.compressDir(distDir, distZipPath)
    successLog('压缩成功!')
  } catch (error) {
    errorLog(error)
    errorLog('压缩失败, 退出程序!')
    process.exit() //退出流程
  }
}

//连接服务器
const connectSSH = async () => {
  const loading = ora(defaultLog('正在连接服务器')).start()
  loading.spinner = spinner_style.arrow4
  try {
    await SSH.connect({
      host: config.SERVER_PATH,
      username: config.SSH_USER,
      // privateKey: config.PRIVATE_KEY, //秘钥登录(推荐) 方式一
      password: config.PASSWORD, // 密码登录 方式二
    })
    successLog('SSH连接成功!')
  } catch (error) {
    errorLog(error)
    errorLog('SSH连接失败!')
    process.exit() //退出流程
  }
  loading.stop()
}

//线上执行命令
/**
 *
 * @param {String} command 命令操作 如 ls
 */
const runCommand = async (command) => {
  const result = await SSH.exec(command, [], { cwd: config.PATH })
  // defaultLog(result);
}

//清空线上目标目录里的旧文件
const clearOldFile = async () => {
  const commands = ['ls', 'rm -rf *']
  await Promise.all(
    commands.map(async (it) => {
      return await runCommand(it)
    })
  )
}

//传送zip文件到服务器
const uploadZipBySSH = async () => {
  //连接ssh
  await connectSSH()
  //线上目标文件清空
  await clearOldFile()
  const loading = ora(defaultLog('准备上传文件')).start()
  loading.spinner = spinner_style.arrow4
  try {
    await SSH.putFiles([
      {
        local: distZipPath,
        remote: config.PATH + '/build.zip',
      },
    ]) //local 本地 ; remote 服务器 ;
    successLog('上传成功!')
    loading.text = '正在解压文件'
    await runCommand('unzip ./build.zip') //解压
    await runCommand(`rm -rf ${config.PATH}/build.zip`) //解压完删除线上压缩包
    //将目标目录的dist里面文件移出到目标文件
    //举个例子 假如我们部署在 /test/html 这个目录下 只有一个网站, 那么上传解压后的文件在 /test/html/dist 里
    //需要将 dist 目录下的文件 移出到 /test/html ;  多网站情况, 如 /test/html/h5  或者 /test/html/admin 都和上面同样道理
    await runCommand(`mv -f ${config.PATH}/build/*  ${config.PATH}`)
    await runCommand(`rm -rf ${config.PATH}/build`) //移出后删除 dist 文件夹
    SSH.dispose() //断开连接
  } catch (error) {
    errorLog(error)
    errorLog('上传失败!')
    process.exit() //退出流程
  }
  // 删除本地的zip文件
  fs.unlink(distZipPath, (err) => {
    if (err) throw err
  })
  loading.stop()
}

//------------发布程序---------------
const runUploadTask = async () => {
  console.log(
    chalk.yellow(`--------->  欢迎使用 Coderh 2022年自动部署工具  <---------`)
  )
  //打包
  await compileDist()
  //压缩
  await zipDist()
  //连接服务器上传文件
  await uploadZipBySSH()

  successLog('发布成功!')
  process.exit()
}

// 开始前的配置检查
/**
 *
 * @param {Object} conf 配置对象
 */
const checkConfig = (conf) => {
  const checkArr = Object.entries(conf)
  checkArr.map((it) => {
    const key = it[0]
    if (key === 'PATH' && conf[key] === '/') {
      //上传zip前会清空目标目录内所有文件
      errorLog('PATH 不能是服务器根目录!')
      process.exit() //退出流程
    }
    if (!conf[key]) {
      errorLog(`配置项 ${key} 不能为空`)
      process.exit() //退出流程
    }
  })
}

// 执行交互后 启动发布程序
inquirer
  .prompt([
    {
      type: 'list',
      message: '请选择发布环境',
      name: 'env',
      choices: [
        {
          name: '测试环境',
          value: 'development',
        },
        {
          name: '正式环境',
          value: 'production',
        },
      ],
    },
  ])
  .then((answers) => {
    config = CONFIG[answers.env]
    checkConfig(config) // 检查
    runUploadTask() // 发布
  })
