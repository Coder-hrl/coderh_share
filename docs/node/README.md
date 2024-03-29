---
title: 栏目浅语
---

> 定律=>当一个东西可以被其他语言编写,那么他也可以被 Js 语言编写
>
> Node 是基于 V8 引擎运行的,但是不仅仅是 V8 引擎,需要文件读写,I/O 操作等操作库
>
> Node.js 是一个开源、跨平台的 JavaScript 运行时环境
>
> 2009 年诞生,更新速度特别快,功能强大,一手异步任务.

**浏览器内核是什么东西,分为 HTMLCSS 渲染器和 JavaScript 解释器**

浏览器排版引擎,分析 DOM 树和 CSS 样式树,然后形成一个渲染树`(layout树)`

分析<script src =“">标签,然后执行 JavaScript 代码,是一门解释性语言,转换成汇编语言,然后转换成机械语言.

### 比较常见的 JavaScript 解析器

**V8 引擎**,谷歌开发,目前 chrome 浏览器使用,底层由`c++`编写,也是 Node 的运行环境, V8 引擎速度快,同时对 ECMAscript 的支持特别好,包含了**100 万行代码**,嵌入到 V8 引擎当中

**JavaScriptCore**,webkit 的解释器,由 apple 公司研发,目前微信小程序 ios,ipados 和 Mac 也在使用`小程序的逻辑层是JavaScriptCore来执行的`

**spiderMonkey**,第一代解释器,**Chakra**微软的解释器

### webket 内核

包括 webCore 和 JavaScriptCore,webCore 是用来 HTML 解析布局渲染

## JavaScript 代码的执行过程

> 是一门高级语言,需要通过解释器转换成汇编语言,然后在被转换成机器语言
>
> 解释型语言的指向效率是高于编译型语言的
>
> 根据 V8 引擎优化,在执行函数时传入相同类型的参数的时候,执行速度会有一定的提高
>
> 所以 TypeScript 在某种程度上也是可以提高性能的.

源码解析会构成一个 AST 代码抽象树,然后经过解释器转换成字节码,

如果遇到`多个相同类型调用的字节码,将会被优化为机器码`

turboFun**将字节码转换成机器码**,如果`遇到不同类型的参数,会被反转换为字节码执行`

_这也是为什么尽可能只让一个函数调用同种类型的参数_

### 浏览器和 Node 的区别

浏览器和 Node 都是需要`调用操作系统的接口来进行操作`的.Node 的**中间层为 libuv**

### libuv 里面有事件循环

Node 里面不同的模块是由不同的语言来编写的,有`C++(68%),JavaScript(29.4%),python`等语言,目前最主要的还是 c++语言。

对于前端工程师来说,Node 是必不可少的语言.越来越多的公司**用 Node 开发后台应用**,不仅有**服务器开发**,也还有**Electron 桌面级开发**,**VsCode**就是使用 electrol 进行开发的.

**没有 window 对象,和#document 对象**

有一个`process`进程对象,`process.nextTick`

### Node 是学习 JavaScript 前端高级必须的知识
