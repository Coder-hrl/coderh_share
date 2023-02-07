---
title: Http请求操作
---

## XHR 和 fetch 发送 http 请求

### XMLHttpRequest 学习

1. 前端数据请求
2. Http 协议的解析
3. XHR 的基本用法
4. XHR 的进阶和封装
5. fetch 的使用详解
6. 前端文件上传流程

### 前端数据请求 formData

**DRY don't repeat yourself** 需要一个渲染数据的模板

SSR 和爬虫之间的关系是,爬虫会自动爬取网页之间的内容,没有请求会导致单页面无内容

前期的网页都是通过后端渲染来完成的:服务端渲染 SSR `serve side render`

SSR 的优势是,提前在后端渲染好,然后前端去请求渲染好的页面,有利于 SEO 优化

劣势是本质上只是一些数据发生了变化,不过却要将重绘的整个页面返回给浏览器加载,同时也会带来不必要的带宽

### 通过调用请求头的 xhr 和 fetch 来进行请求数据

通过网络请求去 API 服务器来进行请求接口,前后端模式开发,在客户端进行组装数据,渲染页面,称之为客户端渲染

优势,可以进行局部更新加载,减少了网络带宽

劣势,在爬虫时 不及服务端渲染,会导致 SEO(搜索引擎)优化较差

`无页面刷新,获取服务器数据的技术` **多了一个存储静态资源的前端服务器**

### 不重新刷新的页面的情况下,去动态刷新页面

发起网络请求,将数据渲染出来

### HTTP 协议

是属于应用层的超文本传输协议,可以传输音频,视频等各种数据

通过 URL 来统一资源定位符,和 URI 统一资源标识符

### 累计确认 差错控制 滑动窗口 拥塞控制

HTTP 请求到指定的 ip 服务器的指定端口(默认 80,https 默认端口 443)

客户端称之为 用户代理服务器 服务器端称之为 原服务器

## HTTP 的组成

请求报文 和 响应报文

### 请求报文

请求行 method -- url -- http 协议

请求头 主机地址,是否保持连接,内容类型和内容长度

请求体 需要以一个空行来区分请求头

### 响应报文

响应头 http 协议 状态码 状态短语

### HTTP1.1 目前使用最广泛的版本

增加了 Put 和 Delete 方法

采用了持久连接,多个请求可以共同使用一个 TCP 链接

1. post 提交到指定资源进行操作,提交数据
2. put 请求有效载荷替换目标资源
3. delete 删除指定的资源
4. patch 用于对资源应部分修改
5. connect 建立一个到目标资源标识的服务器隧道,通常在代理服务器,网页开发很少用到
6. trace 执行一个消息回环测试

content-type,content-length connection accept-encoding

1. application/json 表示是一个 json 类型
2. text/plain 表示是一个文本类型
3. multipart/form-data 表示这是一个上传文件 formdata 类型

http 的可靠传输就是靠 TCP 实现的

### 浏览器会自动配置压缩文件,可以通过 webpack 自动配置 gzip 压缩,生成 abc.js.gz 的文件

100 请求正在创建

103 服务端推送

200 请求成功

201 资源已创建

301 资源临时重定向 强制改为 post

302 资源永久重定向

400 客户端请求错误

401 未授权,未携带身份信息

403 forbid 拒绝访问,限制访问

404 资源未找到 请求路径有问题

500 服务端错误

501:服务器不具备完成请求的功能

## XMLHttpRequest

状态改变以及不同的含义

1.  值为 1 open 方法已经调用
2.  值为 2 sende 方法已经被调用,头部和状态已经获取
3.  值为 3 下载中 responseTxt 包含部分数据
4.  值为 4 下载已经完成

XMLHttpRequest.DONE 是一个常量为 4

axios 内部封装了 xhr ,所以是一个宏任务,然后又被 promise 包裹了,然后又是微任务

### 其他事件监听

loadStart 请求开始

progress 响应数据包到达

abort 取消了请求

error 发生链接错误

load 请求成功完成

timeout 请求超时而取消改请求

loadend 在 load,error,timeout 或 abort 之后触发

### xhr.status 状态码 和 xhr.response 也可以拿到自己想要的数据

将所有的东西都放到了 xhr 对象上面

### get query 参数 在路径上以 ?name=why&键值对的形式存在

Post formData 表单元素或者在上传文件的时候使用

Post json 数据

Content-type application/x-www-form-urlencoded

### setRequestHeader

`xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")`

const formdata = new FormData(直接传入值)

我们可以通过 FormData 将表单进行静态转换

JSON.stringify **axios 就做了这样的操作**

```js
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
const formData = new FormData();
formData.append('why', 'asc');
JSON.stringify({ name: 'why', age: 18 });
```

### 一步步的实现功能,一步步的完善代码,最终完成操作

fetch 本身返回一个 Promise,而且不像 XMLHttpRequest 所有的操作都在一个对象上满

fetch 初始化的其他参数里面有 method,url,data

```js
async function getData() {
	const response = await fetch('');
}
```

### 大文件上传 断点上传

如果文件的大小比较大,我们需要实现断点上传来进行存在
