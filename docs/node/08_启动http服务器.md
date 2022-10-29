###### nodemon开发服务器

> 可以进行热更新进行处理,使用`nodemon命令`来进行创建服务器
>
> 可以创建多个服务器来进行服务器开发
>
> 可以在typescript中使用函数的重载来进行重复定义一个函数

`如果不传端口号的话,他会默认启动一个端口号来进行启动服务`,可以使用 `server(定义的名称)`中的address()中的port达到

`localhost本质是一个域名,本质是127.0.0.1`,他是一个回环地址,意思是我们自己发出的包，自己来进行接收,直接从网络层进行捕获操作,不经过数据链路层和物理层

###### req.url  请求地址,我们需要使用不同的请求方式来进行操作

> 如果需要请求的url的时候,可能传过来的url里面`存在请求参数等问题`
>
> 内置对象url,里面有一个parse方法,可以进行解析
>
> ```js
> const url = require('url')
> url.parse(req.url) // url的解析操作
> // 如果感觉代码比较臃肿了,可以使用解构来拿到数据,解构非常重要,也非常常用
> ```
>
> 然后可以对query对象再次使用const  qs = “querythings”来进行使用
>
> qs.parse()来进行代码解析

```js
req.setEncoding('utf-8')
req.on('data',(data)=>{
  console.log(data)
})
```

在http1.0中是需要手动添加connection:keep-alive,服务器也需要使用添加keep-alive,

但是在http1.1中是默认使用connection:keep-alive的

###### res 可以使用write,也可以使用res.close()

可以使用res.write()进行写入操作,然后使用res.end()来进行结尾

401 未授权, 403 拒绝服务 400 请求有问题 ,404  资源未找到

```js
res.statusCode()
res.setHeade()
res.writeHead()
```

可以先使用let 对数据先进行操作,然后合成一个结果让res.end()来进行使用