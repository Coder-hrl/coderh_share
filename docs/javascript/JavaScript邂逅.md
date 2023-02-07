---
title: 初始JavaScript
---

## 编程语言 JavaScript

变量和数据结构

JavaScript 本身是有缺陷的,早期设计的缺陷.

HTML,多做项目,多练习 CSS 和 javascript

### 对 javascript 学习精通还是很难的.

地基打好,再去学习其他框架

### HTML 超文本标记语言 CSS 层叠样式表

javascript 高级程序语言 编程语言,计算机语言就是**人要和计算机沟通的语言**

### javascript 给予了整个网页的生命

计算机语言 人与计算机进行交互的语言,包括 HTML 语言和 CSS 语言,包括脚本语言

编程语言 计算机程序的形式语言,被标准化的交流技巧,让程序员精确地定义计算机所需要的数据的语言. 高级程序语言 ==> 汇编语言 ==> 机器语言

1. **数据结构和数据**
2. **指令和流程控制**
3. **引用机制和重用机制**
4. **设计哲学**

从一开始的机器语言,再慢慢的变成更适合人类学习的高级编程语言

对数据类型并没有严格的要求,是一门函数为第一公民的语言

### 机器语言

由 0 和 1 进行组成,由一连串的二进制编码成机器指令,后由计算机执行机器指令

不用经过汇编,直接交给计算机来进行执行,效率非常非常高,

### 汇编语言

只是把指令集通过汇编器转换为机器语言,速度也快,符号非常多,非常难记

### 高级语言

比较智能化,自然语言,用英文来进行编写的语言.

因为大部分的高级语言是由国外发明的,英文是非常重要的

普通人都可以进行学习的,我们只需要把精力放到如何实现功能上面就可以了

在进行编译过程中,效率也会降低.种类比较繁多,高级语言过多.

### javascript 语言特点

1. 是一门解释性语言,高级的编程语言
2. 是一门基于原型和头等函数的语言,是一门多范式语言

了解这门语言的历史,刚开始是脚本语言,后来在 NodeJs 帮助下,可以在客户端开发,在微信小程序和 React-native 在移动端也大放异彩,允许嵌入到网页中.

函数为第一公民,javascript 继承了非常多的语言

ECMAscript 是一个规范,他规范了 javascript 实现的细节,而 javascript 则是这个规范的实现,

同时 web 端的 javascript 操作同时具有 Dom 操作(操作文档)和 Bom 操作(操作浏览器)

### 之前大部分讲 ES5 的内容,javascript 高级语言,才讲 ES6

先学习 ECMAscript 语言,规范语言比较通用的语言,因为 2015 年才出现了 ESMAsript6 的规范

### javascript 是通过 js 引擎解释器来进行解析的

浏览器引擎包括 排版引擎,javascript 届时引擎

JS 引擎帮助把 javascript 代码翻译成 cpu 可以运行的机器语言

同时这个 javascript 也可以通过 NodeJs 来进行运行,

### JS 引擎

1. javascriptCore 苹果开发的引擎,webkit,

   ,目前有小程序和 ios 和苹果产品的 js 解释器

2. v8 引擎 谷歌开发的强大的 javascript 引擎

3. spiderMonkey 第一款 javascript 解释器

### webkit

Webcore 和 javascriptCore 一起组成的

### 任何一个可以用 javascript 来实现的应用程序,都会用 javascript 来进行实现

### web 开发

1. Vue React 原生 javascript

### 移动端开发

React-native

### 后台开发

Koa ,express,nextJS,eggjs

### 小程序端开发

微信小程序,支付宝小程序

### 桌面 elector 开发

`onclick=""`可以直接编写,`alert("")` `prompt`

### 引入 javascript 的方式

1. 行内样式
2. script 编写
3. 引入 javascript

### 优雅降级

使用`<no-script>`标签元素,当浏览器没有开启 javascript 的使用下,出现的内容.

更好的提示用户,开启 javascript 内容 `text="text/javascript"`

javascript 是 HTML 文档的一部分,加载顺序是自上而下.

如果 javascript 需要解析的时间太多的话,则会影响 HTML 的执行,渲染.

所以尽可能的把 javascript 代码放到文档的最后面(body 最后面),

window.onload 当文档执行完之后,才进行执行

Javascript 严格区分大小写,在 HTML 和 CSS 中并不严格区分

`alert()弹窗内容` `prompt()输入框` `console.log()将内容输出到控制台中`

`document.write()文档写入 写入到文档当中` ,可以拿到 prompt 的内容

### 调试工具

chrome 调试 javascript,使用 shirt-enter 进行换行操作

还可以使用 debugger 来进行调试工具 `prompt()函数`

当使用空格的时候,他会自动添加分号,隐式分号

### javascript 中常见的注释

1. //单行注释 2. /\*\*\*/ 多行注释 3. 文档注释

文档注释 可以单独对每个注释进行注解

文档注释,一般在 js 文件中单独编写的时候存在,在 HTML 中并不存在

### 变量规范问题

javascript 变量编写原则,我们使用的并不是一成不变的数据,而是一直变化的变量

存放的数值是可以变化的,称之为变量,是可以随时变化的

可以称变量为一个盒子,盒子里面的数值是不停的变化的.

### 变量的命名格式 严格区分大小写

变量的声明 告诉 js 引擎,要定义一个变量 ,变量名 和 变量值

var a = 12 ,可以声明多个变量 var a = 1, b = 2

必须是字母下划线$,要保持见名知意,使用**驼峰命名法**,不能使用关键字和保留字

使用换行符,会自动添加分号

### 变量使用规范

1. 变量不可未声明就使用,会直接报错 (默认全局有一个 name 属性,存在 window 对象)
2. 有声明未赋值的时候为 undefined, null 则是为空值
3. var 会将属性定义到 window 属性上的 可以不使用 var 来进行声明

### 可以处理数据类型和数据结构

String Number Boolean Null undefined Object Symbol Bigint

**变量是具有自己专属的类型** js 是`动态类型` **类型比较灵活**

在 ts 中具有自动类型推导,或者可以使用强制 String 类型,ts 则具有静态类型检测

### typeof 操作符

不需要添加小括号 一个东西要不要加小括号,不如看看是不是函数

null 的 typeof 是 object 类型,指的是为空值,判断一个是不是为 Null,使用 Object.isNull

### defer 和 async 等待 和异步方式

defer 等 HTML 更新完才进行加载 async 异步加载

## 变量

javascript 拥有 8 种数据类型,7 种原始,1 种复杂

string number boolean null undefined object Symbol bigint

其中分为值数据类型和引用数据类型

值数据类型特点为

1. 大小固定
2. 体积轻量
3. 相对简单

值变量是无法被修改，但本质上是来调整两者之间的映射关系

```js
let a = 123;
a = 456;
// 以上操作中123会被直接销毁，456会被重新创建 并将a关联到456空间中
```

引用数据类型特点为

1. 复杂
2. 大小不一定
3. 所占空间较大

在使用引用数据类型时，但是不想让原始数据发生改变，我还是建议使用 JSON.stringify 来做一个深拷贝

如果仅仅只是让原始数据进行一个遍历的时候，则直接使用就可，因为深拷贝也会带来性能损失

```js
const obj = { a: 'asjld' };
const obj2 = obj;

// 在以上的操作中，当obj初始化在堆中创造出一个对象空间，同时obj2关联上对象空间
```
