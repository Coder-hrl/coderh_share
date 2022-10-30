> 当一个东西可以被其他语言编写,那么他也可以被Js语言编写
>
> Node是基于V8引擎运行的,但是不仅仅是V8引擎,需要文件读写,I/O操作等操作库
>
> 2009年诞生,更新速度特别快,功能强大,一手异步任务.

**浏览器内核是什么东西,分为HTMLCSS渲染器和JavaScript解释器**

浏览器排版引擎,分析DOM树和CSS样式树,然后形成一个渲染树`(layout树)`

分析<script src =“">标签,然后执行JavaScript代码,是一门解释性语言,转换成汇编语言,然后转换成机械语言.

##### 比较常见的JavaScript解析器

**V8引擎**,谷歌开发,目前chrome浏览器使用,底层由`c++`编写,也是Node的运行环境, V8引擎速度快,同时对ECMAscript的支持特别好,包含了**100万行代码**,嵌入到V8引擎当中

**JavaScriptCore,**webkit的解释器,由apple公司研发,目前微信小程序ios,ipados和Mac也在使用`小程序的逻辑层是JavaScriptCore来执行的`

**spiderMonkey**,第一代解释器,**Chakra**微软的解释器

##### webket内核

包括webCore和JavaScriptCore,webCore是用来HTML解析布局渲染

### JavaScript代码的执行过程

> 是一门高级语言,需要通过解释器转换成汇编语言,然后在被转换成机器语言
>
> 解释型语言的指向效率是高于编译型语言的
>
> 根据V8引擎优化,在执行函数时传入相同类型的参数的时候,执行速度会有一定的提高
>
> 所以TypeScript在某种程度上也是可以提高性能的.

源码解析会构成一个AST代码抽象树,然后经过解释器转换成字节码,

如果遇到`多个相同类型调用的字节码,将会被优化为机器码`

turboFun**将字节码转换成机器码**,如果`遇到不同类型的参数,会被反转换为字节码执行`

*这也是为什么尽可能只让一个函数调用同种类型的参数*

### 浏览器和Node的区别

![image-20220301200055120](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220301200055120.png)

浏览器和Node都是需要`调用操作系统的接口来进行操作`的.Node的**中间层为libuv**

###### libuv里面有事件循环

Node里面不同的模块是由不同的语言来编写的,有`C++(68%),JavaScript(29.4%),python`等语言,目前最主要的还是c++语言。

对于前端工程师来说,Node是必不可少的语言.越来越多的公司**用Node开发后台应用**,不仅有**服务器开发**,也还有**Electron桌面级开发**,**VsCode**就是使用electrol进行开发的.

**没有window对象,和#document对象**

有一个`process`进程对象,`process.nextTick`

###### 使用Node可以进行一些个性化的脚手架搭建