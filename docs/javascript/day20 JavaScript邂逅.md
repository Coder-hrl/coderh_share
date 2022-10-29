## 编程语言 JavaScript

变量和数据结构

JavaScript本身是有缺陷的,早期设计的缺陷.

HTML,多做项目,多练习CSS和javascript

###### 对javascript学习精通还是很难的.

地基打好,再去学习其他框架

###### HTML  超文本标记语言  CSS  层叠样式表 

javascript 高级程序语言 编程语言,计算机语言就是**人要和计算机沟通的语言**

###### javascript给予了整个网页的生命

计算机语言 人与计算机进行交互的语言,包括HTML语言和CSS语言,包括脚本语言

编程语言 计算机程序的形式语言,被标准化的交流技巧,让程序员精确地定义计算机所需要的数据的语言.  高级程序语言 ==> 汇编语言 ==> 机器语言

1. **数据结构和数据**   
2. **指令和流程控制**  
3. **引用机制和重用机制**   
4. **设计哲学**

从一开始的机器语言,再慢慢的变成更适合人类学习的高级编程语言

对数据类型并没有严格的要求,是一门函数为第一公民的语言

###### 机器语言

由0和1进行组成,由一连串的二进制编码成机器指令,后由计算机执行机器指令

不用经过汇编,直接交给计算机来进行执行,效率非常非常高,

###### 汇编语言

只是把指令集通过汇编器转换为机器语言,速度也快,符号非常多,非常难记

###### 高级语言

比较智能化,自然语言,用英文来进行编写的语言.

因为大部分的高级语言是由国外发明的,英文是非常重要的

普通人都可以进行学习的,我们只需要把精力放到如何实现功能上面就可以了

在进行编译过程中,效率也会降低.种类比较繁多,高级语言过多.

###### javascript语言特点

1. 是一门解释性语言,高级的编程语言
2. 是一门基于原型和头等函数的语言,是一门多范式语言

了解这门语言的历史,刚开始是脚本语言,后来在NodeJs帮助下,可以在客户端开发,在微信小程序和React-native在移动端也大放异彩,允许嵌入到网页中.

函数为第一公民,javascript继承了非常多的语言

ECMAscript是一个规范,他规范了javascript实现的细节,而javascript则是这个规范的实现,

同时web端的javascript操作同时具有Dom操作(操作文档)和Bom操作(操作浏览器)

###### 之前大部分讲ES5的内容,javascript高级语言,才讲ES6

先学习ECMAscript语言,规范语言比较通用的语言,因为2015年才出现了ESMAsript6的规范

###### javascript是通过js引擎解释器来进行解析的

浏览器引擎包括 排版引擎,javascript届时引擎

JS引擎帮助把javascript代码翻译成cpu可以运行的机器语言

同时这个javascript也可以通过NodeJs来进行运行,

###### JS引擎

1. javascriptCore 苹果开发的引擎,webkit,

   ,目前有小程序和ios和苹果产品的js解释器

2. v8引擎 谷歌开发的强大的javascript引擎 

3. spiderMonkey 第一款javascript解释器

###### webkit 

Webcore 和 javascriptCore一起组成的

###### 任何一个可以用javascript来实现的应用程序,都会用javascript来进行实现

###### web开发

1. Vue React 原生javascript

###### 移动端开发

React-native

###### 后台开发

Koa ,express,nextJS,eggjs

###### 小程序端开发

微信小程序,支付宝小程序

###### 桌面elector开发

`onclick=""`可以直接编写,`alert("")` `prompt`

###### 引入javascript的方式

1. 行内样式
2. script编写
3. 引入javascript

###### 优雅降级

使用`<no-script>`标签元素,当浏览器没有开启javascript的使用下,出现的内容.

更好的提示用户,开启javascript内容 `text="text/javascript"`

javascript是HTML文档的一部分,加载顺序是自上而下.

如果javascript需要解析的时间太多的话,则会影响HTML的执行,渲染.

所以尽可能的把javascript代码放到文档的最后面(body最后面),

window.onload 当文档执行完之后,才进行执行

Javascript 严格区分大小写,在HTML和CSS中并不严格区分

`alert()弹窗内容`  `prompt()输入框` `console.log()将内容输出到控制台中` 

`document.write()文档写入 写入到文档当中` ,可以拿到prompt的内容

###### 调试工具

chrome 调试 javascript,使用shirt-enter 进行换行操作

还可以使用debugger来进行调试工具   `prompt()函数`

当使用空格的时候,他会自动添加分号,隐式分号

###### javascript中常见的注释

1. //单行注释    2. /***/ 多行注释 3. 文档注释 

文档注释 可以单独对每个注释进行注解

![image-20220519112408814](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220519112408814.png)

文档注释,一般在js文件中单独编写的时候存在,在HTML中并不存在

###### console.log()

###### 变量规范问题

javascript变量编写原则,我们使用的并不是一成不变的数据,而是一直变化的变量

存放的数值是可以变化的,称之为变量,是可以随时变化的

可以称变量为一个盒子,盒子里面的数值是不停的变化的.

###### 变量的命名格式        严格区分大小写

变量的声明  告诉js引擎,要定义一个变量  ,变量名  和   变量值

var  a = 12 ,可以声明多个变量 var a = 1, b = 2

必须是字母下划线$,要保持见名知意,使用**驼峰命名法**,不能使用关键字和保留字

使用换行符,会自动添加分号

###### 变量使用规范

1. 变量不可未声明就使用,会直接报错  (默认全局有一个name属性,存在window对象) 
2. 有声明未赋值的时候为undefined, null则是为空值
3. var 会将属性定义到window属性上的  可以不使用var来进行声明

###### 可以处理数据类型和数据结构

String Number Boolean  Null  undefined Object Symbol Bigint

**变量是具有自己专属的类型**         js是`动态类型` **类型比较灵活**

在ts中具有自动类型推导,或者可以使用强制String类型,ts则具有静态类型检测

###### typeof 操作符

不需要添加小括号   一个东西要不要加小括号,不如看看是不是函数

null的typeof是object类型,指的是为空值,判断一个是不是为Null,使用Object.isNull

###### defer和async 等待 和异步方式

defer 等HTML更新完才进行加载   async 异步加载

###### javascript拥有8种数据类型,7种原始,1种复杂