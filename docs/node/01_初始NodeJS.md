---
Title: fs和event模块的开发
---

## NodeJS是什么

HTML和CSS是由Blink进行解释的,Node则可以来进行服务端开发

NodeJs是在谷歌V8引擎上运行JavaScript的运行环境,也是通过libuv**(C语言开发)**来进行事件循环的

在浏览器上是多了一个支持操作浏览器的API,浏览器拥有自己的事件循环

### 文件系统模块  内置模块fs

> 1. 服务器需要存储各种数据和文件放置到不同的位置
> 2. 用户数据大多放到数据库中
> 3. 某些配置文件或者用户资源是以文件的形式 存在于操作系统上
> 4. 借助Node 我们可以在任何操作系统去操作文件 无需考虑跨平台

#### fs.readFile  读取文件

用于文件模块中的读取操作

```js
const fs  = require("fs")
fs.readFile("./",{},(data,error)=>{
  console.log(data)
})
```



NodeAPI事件循环,应用绑定,文件系统读写和网络IO

#### 服务器开发

使用编程语言编写一个应用来处理客户端的请求,并返回客户端想要的数据

客户端会有 **Android端,IOS端,iphone端,ipad端,网页端,mac端,window端**

### 对NodeJS的要求还是有的

Node包管理的形式进行管理

### Node常见的包管理工具

yarn  npm pnpm 三种包管理工具

使用NodeJs作为web服务器开发,中间件,代理服务器

借助NodeJS完成前后端渲染同构应用

### Node版本切换工具

是可以在电脑上安装多个版本的,使用nvm或者n工具来进行管理版本

防止Node版本过高,或者过低导致项目无法启动

### Node当中是有window和console和global对象的

`__dirname和__fileName`都是属于全局对象上面的方法

可以直接使用如同console和module

process.nextTick()

setImmediate(()=>{})

### globalThis也是指向全局对象的

很多属性都放到global中,而在window中很多都放到了window中

为了减去这段差距,新标准通过globalThis统一说法

### 认识模块化开发

划分成一个个小的结构,编写属于自己的逻辑代码和作用域

可以将自己希望暴露的变量,函数,对象等导出给其结构使用

也可以进行导入结构的变量和函数

### CommonJS和Node

### module.exports

使用立即执行函数

包括前端路由,状态管理等等需求

离不开前端模块化的开发,直到出现ESModule的出现

出现前端工程化,前端模块化,前端组件化的开发

前端工程化,如果将一个项目,当做一个大楼的话,从vuecli和reactcli 快速的搭建的开发环境,外加出现esmodule,commonjs模块化方案,每个人可以干自己的事,其中还有eslient,prietter进行代码编写约束,同时还有很多易用的组件库,自己还可以封装一些常用的组件来帮助开发,其中webpack对前端工程化的帮助非常大

##### 通过module.exports={}和exports.name = name

同时webpack同时也是支持CommonJs的

两种方式,一种是使用module.exports,另外一种则是exports

exports是一个对象,我们可以在对象里面添加很多属性,他是和module.exports是同一个对象

会进行覆盖操作

### 模块化的变量 导入和导出是同步的

require()本质,做了一个引用赋值的方式

###  常量是直接复制,而复杂数据类型则是使用对象的地址类型

引用赋值

module才是真正导出的实现者

### require查找规则   先是按照 实名   js  json Node 的方式去查找

Node提供的内置模块名称

同时也可以在webpack中extension扩展名来配置

/表示根目录的样式,../ ,这种方式会去查找文件

同时也会去默认查找js文件,json文件最后去寻找node文件

然后去查找目录下的index   index.js  index.json index.node

##### 1. 只要引用导入了一个模块 就会把引用的文件里面从头到尾执行一次

##### 2. 每一个引入的模块都可以称之为一个module对象,一旦加载过一次,loaded就会设置为true,代表加载过一次了

##### 使用的是深度优先算法 (图结构)

如果包会被多次引用的话,最终只会引用一次,在引用过一次之后,loaded就会设置为true

##### CommonJs是使用的同步加载,只有所有的模块加载完毕,才会被运行

webpack是通过代码进行打包实现的

##### 浏览器已经原生支持ES Module了

## webpack和打包过程

#####  前端工程化    Vue和React都是基于webpack进行开发的

我们使用yarn npm pnpm来将远程包下载到本地项目中

##### gulp rollup  webpack 都是打包工具,vite打包使用的时候rollup

##### 内置模块path 

path.resolve()在window上使用`\\` 但是在mac上是使用/

解析成绝对路径,如

/Users/huangruilin/code/HandleWriteJs/javascript/其他/.index.js

path.extname() 后缀名

进行路径拼接  path.join()

3. 将多个路径进行拼接合成一个绝对路径

在起别名和,做导出的时候我们需要使用一个绝对路径

##### 我们可能需要使用模块化的方式来进行开发,同时需要一些高级特性来加快速率,我们需要热更新,而不是每次都去刷新页面,我们还需要把开发后的代码进行压缩,合并以及其他优化

##### Vue,React都是基于webpack来做脚手架了

静态的模块化打包工具为现代化的JavaScript应用程序

可以识别CommonJs Esmodule 和其他的模块化方案

通过配置的各种loader来加载不同的文件模块,使其转换为浏览器可以认识的js,css,jpg,png

##### 可以帮助我们将TypeScript转换为JavaScript,可以将ES6转换为ES5

##### 从webpack在进行打包的时候,如果没有指定会自动的寻找src下面的index.js