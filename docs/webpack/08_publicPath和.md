## publicPath

##### outPut 的 publicPath (打包时的配置引用)

path 是告诉 webpack 之后输出到哪个目录中

作用属性: 是指定 index.html 文件打包引用的基本路径

如何设置为/的话,会形成以下的效果,默认值是为空的![image-20220731151537540](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220731151537540.png)

如果设置为 abc/的话,会根据之前的正确路径外加 abc/

![image-20220731151849799](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220731151849799.png)

使用**./会产生相对路径**是和默认的效果一致的

```js
js/main.js
./js/main.js // 产生的效果是完全一致的
```

如果部署的话,我们仍然需要使用/来进行运行

##### 和 devServer 的 publicPath

是为开发环境进行服务的

作用是,**是指定本地服务打包后的文件所存在的文件夹**

一般 devServer 中 static 中的 publicPath 和 output 的 publicPath 完全一致

##### devSever 中的 contentBase

在 devServer 中添加 compress 来将静态文件进行 gzip 压缩

![image-20220731160741423](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220731160741423.png)

##### 如何进行跨域操作

通过在 devServer 中 proxy 选项来进行配置

##### historyApiFallback

解决单页面应用在跳转路由时,路由不存在返回 404 的情况

##### 路径方式

绝对路径 获得文件的绝对路径,从根路径进行操作

相对路径 从某个模块来上下文目录,根据文件所处位置.来生成绝对路径

模块路径 默认从 node_modules 里面取查询包

##### alias

##### extensions 配置扩展名

默认是 js json wasm 文件

通过判断 process.env.NODE_ENV 的值来进行

通过 nginx 在服务器上进行跨域配置

```shell
location ^~ /api {
		proxy_pass http://lcoalhost.com
}
```
