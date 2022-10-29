##### Http模块

axios 既支持前端(XMLhttpRequest),也支持在node中进行发送网络请求

```js
const http  = require('http')
http.get()
```

`form-data`一般用于文件上传的方式

> `const url =require(‘url’)  url.parse(req.url).pathName`

通过`fs.createWriteStream()`

```js
const fileWritter = fs.createWriteStream('./foo.png',{flag:"a+"})
fileWritter.write()
req.pipe(fileWritter)  // 这种情况是把请求的数据全部放到fileWritter
```

##### 框架学习

> express 高于koa 出现的,目前有express koa 和egg 
>
> 所有框架的核心都是中间件
>
> ```js
> // 安装express-gengerator
> // 使用express 命令行 来创建一个express 项目
> ```
>
> 本质上是`路由和中间件的一系列调用`  传给express的一个回调函数
>
> 请求对象  响应对象  next 函数调用

##### 执行任何代码   更改请求和响应的过程 请求和响应的结束和开始

```js
app.get('./',(req,res,next)=>{
  // 需要使用next来将控制权给下一个中间件,否则请求将会被挂起
})
```

![image-20220314165848694](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220314165848694.png)

```js
const express  = require('express')
const app = express()
```

看看是否能匹配上中间件,能匹配上就使用中间件

```js
app.get('./',(res,req,next)=>{},()=>{},()=>{})
req.on("data") 或者使用 req.on("end")
```

使用body-parser,来进行解析传回来的数据

`app.use(express.json())`

使用多种解析中间件,保证结果可用 

`formdata 类似表单的方式进行数据传输`

Koa本质上是一个类,但是express 本质上是一个函数

```js
const app = express()
const app = new Koa()
```

