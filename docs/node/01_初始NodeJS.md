---
title: fs和event模块的开发
---

## NodeJS 是什么

HTML 和 CSS 是由 Blink 进行解释的,Node 则可以来进行服务端开发

NodeJs 是在谷歌 V8 引擎上运行 JavaScript 的运行环境,也是通过 libuv**(C 语言开发)**来进行事件循环的

在浏览器上是多了一个支持操作浏览器的 API,浏览器拥有自己的事件循环

### 文件系统模块 内置模块 fs

> 1. 服务器需要存储各种数据和文件放置到不同的位置
> 2. 用户数据大多放到数据库中
> 3. 某些配置文件或者用户资源是以文件的形式 存在于操作系统上
> 4. 借助 Node 我们可以在任何操作系统去操作文件 无需考虑跨平台

#### fs.readFile 读取文件

用于文件模块中的读取操作

```js
const fs = require('fs');
fs.readFile('./', {}, (data, error) => {
	console.log(data);
});
```

NodeAPI 事件循环,应用绑定,文件系统读写和网络 IO

#### 服务器开发

使用编程语言编写一个应用来处理客户端的请求,并返回客户端想要的数据

客户端会有 **Android 端,IOS 端,iphone 端,ipad 端,网页端,mac 端,window 端**

### 对 NodeJS 的要求还是有的

Node 包管理的形式进行管理

### Node 常见的包管理工具

yarn npm pnpm 三种包管理工具

使用 NodeJs 作为 web 服务器开发,中间件,代理服务器

借助 NodeJS 完成前后端渲染同构应用

### Node 版本切换工具

是可以在电脑上安装多个版本的,使用 nvm 或者 n 工具来进行管理版本

防止 Node 版本过高,或者过低导致项目无法启动

### Node 当中是有 window 和 console 和 global 对象的

`__dirname和__fileName`都是属于全局对象上面的方法

可以直接使用如同 console 和 module

process.nextTick()

setImmediate(()=>{})

### globalThis 也是指向全局对象的

很多属性都放到 global 中,而在 window 中很多都放到了 window 中

为了减去这段差距,新标准通过 globalThis 统一说法

### 认识模块化开发

划分成一个个小的结构,编写属于自己的逻辑代码和作用域

可以将自己希望暴露的变量,函数,对象等导出给其结构使用

也可以进行导入结构的变量和函数

### CommonJS 和 Node

### module.exports

使用立即执行函数

包括前端路由,状态管理等等需求

离不开前端模块化的开发,直到出现 ESModule 的出现

出现前端工程化,前端模块化,前端组件化的开发

前端工程化,如果将一个项目,当做一个大楼的话,从 vuecli 和 reactcli 快速的搭建的开发环境,外加出现 esmodule,commonjs 模块化方案,每个人可以干自己的事,其中还有 eslient,prietter 进行代码编写约束,同时还有很多易用的组件库,自己还可以封装一些常用的组件来帮助开发,其中 webpack 对前端工程化的帮助非常大

##### 通过 module.exports={}和 exports.name = name

同时 webpack 同时也是支持 CommonJs 的

两种方式,一种是使用 module.exports,另外一种则是 exports

exports 是一个对象,我们可以在对象里面添加很多属性,他是和 module.exports 是同一个对象

会进行覆盖操作

### 模块化的变量 导入和导出是同步的

require()本质,做了一个引用赋值的方式

### 常量是直接复制,而复杂数据类型则是使用对象的地址类型

引用赋值

module 才是真正导出的实现者

### require 查找规则 先是按照 实名 js json Node 的方式去查找

Node 提供的内置模块名称

同时也可以在 webpack 中 extension 扩展名来配置

/表示根目录的样式,../ ,这种方式会去查找文件

同时也会去默认查找 js 文件,json 文件最后去寻找 node 文件

然后去查找目录下的 index index.js index.json index.node

##### 1. 只要引用导入了一个模块 就会把引用的文件里面从头到尾执行一次

##### 2. 每一个引入的模块都可以称之为一个 module 对象,一旦加载过一次,loaded 就会设置为 true,代表加载过一次了

##### 使用的是深度优先算法 (图结构)

如果包会被多次引用的话,最终只会引用一次,在引用过一次之后,loaded 就会设置为 true

##### CommonJs 是使用的同步加载,只有所有的模块加载完毕,才会被运行

webpack 是通过代码进行打包实现的

##### 浏览器已经原生支持 ES Module 了

## webpack 和打包过程

##### 前端工程化 Vue 和 React 都是基于 webpack 进行开发的

我们使用 yarn npm pnpm 来将远程包下载到本地项目中

##### gulp rollup webpack 都是打包工具,vite 打包使用的时候 rollup

##### 内置模块 path

path.resolve()在 window 上使用`\\` 但是在 mac 上是使用/

解析成绝对路径,如

/Users/huangruilin/code/HandleWriteJs/javascript/其他/.index.js

path.extname() 后缀名

进行路径拼接 path.join()

3. 将多个路径进行拼接合成一个绝对路径

在起别名和,做导出的时候我们需要使用一个绝对路径

##### 我们可能需要使用模块化的方式来进行开发,同时需要一些高级特性来加快速率,我们需要热更新,而不是每次都去刷新页面,我们还需要把开发后的代码进行压缩,合并以及其他优化

##### Vue,React 都是基于 webpack 来做脚手架了

静态的模块化打包工具为现代化的 JavaScript 应用程序

可以识别 CommonJs Esmodule 和其他的模块化方案

通过配置的各种 loader 来加载不同的文件模块,使其转换为浏览器可以认识的 js,css,jpg,png

##### 可以帮助我们将 TypeScript 转换为 JavaScript,可以将 ES6 转换为 ES5

##### 从 webpack 在进行打包的时候,如果没有指定会自动的寻找 src 下面的 index.js
