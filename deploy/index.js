// 引入scp2
const client = require('scp2');
const ora = require('ora');
const { server } = require('./config');
const spinner = ora(
	'正在发布到服务器...',
);
const Client = require('ssh2').Client; // 创建shell脚本
const conn = new Client();
console.log('正在建立连接');
conn
	.on('ready', function () {
		console.log('已连接');
		if (!server.pathNmae) {
			console.log('连接已关闭');
			conn.end();
			return false;
		}
		// 这里我拼接了放置服务器资源目录的位置 ，首选通过rm -rf删除了这个目录下的文件
		conn.exec(
			'rm -rf /root/' +
				server.pathNmae +
				'/*',
			function (err, stream) {
				console.log('删除文件');
				stream.on(
					'close',
					function (code, signal) {
						console.log('开始上传');
						spinner.start();
						client.scp(
							server.locaPath,
							{
								host: server.host,
								port: server.port,
								username:
									server.username,
								password:
									server.password,
								path:
									'/root/' +
									server.pathNmae,
							},
							err => {
								spinner.stop();
								if (!err) {
									console.log(
										'项目已成功上传！',
									);
								} else {
									console.log(
										'err',
										err,
									);
								}
								conn.end(); // 结束命令
							},
						);
					},
				);
			},
		);
	})
	.connect({
		host: server.host,
		port: server.port,
		username: server.username,
		password: server.password,
		//privateKey: '' //使用 私钥密钥登录 目前测试服务器不需要用到
	});
