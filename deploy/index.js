// 引入scp2
const scpClient = require('scp2')
const path = require('path')
const ora = require('ora')
const { server } = require('./config')
const spinner = ora('正在发布到服务器...')
const { Client } = require('ssh2') // 创建shell脚本
const conn = new Client()
conn
  .on('ready', function () {
    if (!server.pathNmae) {
      console.log('连接已关闭')
      conn.end()
      return false
    }
    // 这里我拼接了放置服务器资源目录的位置 ，首选通过rm -rf删除了这个目录下的文件
    conn.exec('rm -rf /root/' + server.pathNmae + '/*', function (err, stream) {
      if (err) throw err
      const startTime = +new Date()
      // stream.on('close', (code, signal) => {
      spinner.start()
      scpClient.scp(
        path.resolve(__dirname, server.locaPath),
        {
          host: server.host,
          port: server.port,
          username: server.username,
          password: server.password,
          path: '/root/' + server.pathNmae,
        },
        (error) => {
          spinner.stop()
          if (!error) {
            console.log(
              `发布成功,耗时${((+new Date() - startTime) / 1000).toFixed(2)}s`
            )
            conn.end() // 结束命令
            process.exit()
          } else {
            console.log('err', error)
            throw error
          }
        }
      )
    })
    // })
  })
  .connect({
    host: server.host,
    port: server.port,
    username: server.username,
    password: server.password,
    //privateKey: '' //使用 私钥密钥登录 目前测试服务器不需要用到
  })
