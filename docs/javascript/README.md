## javascript 补充知识

> 命令式编程和声明式编程的区别在与,命令式是说一下做一下,注重过程
> javascript 是一门单线程解释型语言，或者可以叫做`即时编译型语言`
>
> 声明式编程则是直接使用,直接得到结果
>
> 区别在于他是否自己真正去实现一个功能

### 编译型语言

需要先过滤一遍文件，看看是否有错别字，最后编译成计算机所认识的二进制代码

##### javascript 是一门`高级编程语言` 解释性语言

运行速度对比: 机器语言`>`汇编语言`>`高级语言

计算机本身并`不认识高级语言`,需要将我们所编写的代码`转换`为`机器指令`

高级语言又被分为`编译性语言`和`解释性语言`

##### javascript 永远不会被 typescript 代替

因为 typescript 是源于 javascript,终于 javascript.

##### javascript 如何运行的

浏览器内核帮助我们将 html 代码,css 代码和 js 代码解析成网页.

可以跑到`浏览器`和`node`环境上,因为 node 是`基于v8引擎`可以`运行js的环境`.

域名通过 DNS 查询找到服务器的 ip 地址,并查询到他的端口号(http 默认 80,https 默认 443),发送请求.

遇到`link`标签 `解析css内容`,遇到`script`标签 `解析js内容`.

##### 浏览器内核

`javascript引擎`会帮我助我们把 js 代码转换为`cpu`所认识的指令集

`webkt` 基于 THTML 进行开发的,被 safari 浏览器和前期的谷歌使用

`blink` 被谷歌和 edge 等等使用

##### 解析

`html`会被 html parse 解析器解析,然后根据标签构建成一个 dom 树

`css` 会被 css parse 解析器解析, 然后根据 css 规则构建成一个 css 树

然后两者会混合在一起,形成一个渲染树,根据浏览器的窗口状态进行重新计算布局

最后形成一个我们所看到的真实页面

`回流` 每次某一元素发生尺寸改变或者浏览器的窗口改变,都会导致浏览器重新计算布局,渲染

`重绘` 当某一元素的背景颜色,显示状态和一些不会改变布局的行为都会被称之为重绘

`回流`的成本高于`重绘`

##### js 引擎

`javascript core` 苹果公司开发 `小程序`也基于这个引擎

`v8引擎` 谷歌公司开发,对 js 的代码`解析的非常快` c++编写 可以`单独运行`也可以`嵌入在c++程序中运行`

- 会进行词法分析,然后进行语法分析,生成 AST 语法树. `parse模块解析`
- 不同的 cpu 架构,所执行的机器指令也是不同的. `Ignition解释器`
- 然后转换为字节码,然后根据字节码 cpu 再进行成为机器指令. `turbofun编译器`
- 在重复使用函数的时候,如果只是使用同一类型参数的代码,在底层的优化是非常大的
- 因为在 typescript 中进行了类型限制,所以函数执行中只会使用相同的机器指令码

```js
function sum(num1, num2) {
	return num1 + num2;
}
sum(1, 2); // 因为在机器指令相加求和,和拼接在一起是两个完全不同的机器指令.
sum('1', '2'); // 因为在v8引擎中的优化,在函数中重复执行同种类型的机器指令是高于执行不同类型的机器指令的.
```

##### 内核构成部分

`WebCore`: 负责 html 解析和布局,渲染部分

`javascriptCore` : 负责解析,执行 js 代码

##### javascript 解析是单线程

因为防止`解析时多个DOM操作`同时对`同一个DOM`进行操作

缺点:当一个 javascript 出错误,会`堵塞整个线程`,导致`后续的js无法进行解析`

##### js 代码解析阶段

> 只有解析之后,才会进行全局执行.

解析阶段会创建一个`globalObject`,有 console.log,有 setTimeOut 属性

同时有一个`window`属性指向`自身`

在代码解析阶段,里面所有的代码并没有执行,里面属性的值都为 undefined

```js
var name = 'libai';
var class = '清枫无涯'
class globalObject{
  window:this,
  name:undefined,
  class:undefined
  // 在解析阶段会进行变量初始化
}
```

v8 引擎里面会有一个`执行上下文栈`,是一个栈结构

只会在全局代码执行的时候才会有`全局执行上下文`

`因为在刚开始的时候,globalObject里面是全局变量的,只不过值为undefined,只有执行到这个属性点的时候才会被赋值执行,所以称之为的变量提升.有一部分原因是因为在js在解析阶段已经创建了属性且值为undefined`

##### 在 js 引擎中看到函数后

会在代码解析阶段,globalObejct 会创建一个`函数对象,`函数对象中会有一个函数存储地址

内存地址一般是以`0x`开头,分为调用栈和内存堆,栈中保存的都是`内存地址`

创建 ao (activation Object) 进行变量初始化

一般开始执行,会创建一个`全局执行上下文`,然后在每一次执行函数的时候都会重新创建一个`函数执行上下文`,同时创建一个函数的 ao 对象,初始化 ao 对象键都为 undefined

一旦代码执行到`函数调动`的时候,他会根据`内存地址把堆中的函数取出`,同时创建一个 AO 对象放到栈中执行

##### 函数作用域链

当在函数内部查找一个`函数变量`的时候,他会进一步沿着`作用域链到上层作用域`去寻找,直到找到或者报一个 not defined.**只会随着作用域链去寻找**

函数的`父级作用域和函数体,this`等等是在`代码解析编译`时就已经解析确定了的.

在函数嵌套存在的时候,他也会预解析.

函数一旦`执行完毕就会被销毁掉`,window 里面是默认有一个 name,所以尽量不要使用 name 当变量名

```js
function foo() {
	console.log(n); // 这里的n并不会去寻找外面的n,因为在自身AO对象里面是存在n属性的
	var n = 12;
	console.log(n);
	// undefined和12
}
var n = 200;
foo();
```

在函数`词法解析`的时候,是不会在乎`有没有return`,都会进行`解析`

```js
function foo() {
	n = 120; // 如果不使用var 他会自动注册一个全局n并给n赋值
}
foo();
console.log(n); // 120
```

```js
var a = (b = 20);
// 相等于var a = 20; b = 20
// 在使用函数的时候会有所不同
```

### 内存管理

不管使用什么编程语言,在代码运行时,都需要为它`分配内存`,`分配cpu`来进行解析,执行.某些语言需要手动来进行分配内存,有些语言会自动的帮助我们管理内存

##### 垃圾回收机制 简称 GC

申请内存 ==> 使用内存 ==> 释放内存

对`基本数据类型会放到栈空间`里面,对于`复杂数据类型则会放到堆空间`里面

当放到堆空间的时候,他会同时`返回一个指向内存地址`的`变量引用`

因为**内存大小**是有限的,所以会将一些不再使用的变量和引用清除掉

当一个变量或者函数,如果`不再进行使用`,就会把`所使用的内存释放掉`

###### 垃圾回收算法 简称 GC 算法

- 引用计数

  - 判断变量被引用的次数,如果次数为 0 的话则会被回收
  - 循环引用(**当两个变量相互引用**)会导致内存泄漏,导致无法被回收

- 标记清除 (**js 广泛使用**)

  - 会定期从根开始查找,对被引用的对象,打上标记.对没有被引用的对象,打上不可用标记
  - 将没有被标记的变量回收掉

  **新生代(当一个属性在经受好几轮迭代后会被放到旧生代中)**

###### 内存泄漏的方法

1. 闭包
2. 多余的全局变量
3. 被遗忘的定时器和循环器
4. 当元素已经被删除后,仍存在引用该元素的 js 代码

### 闭包

##### 在 javascript 里面函数是一等公民

在 js 里面是通过函数来进行开发各种功能的,而 java 则是通过对象来进行开发的

##### 函数可以作为另外一个函数的参数,或者另外一个函数的返回值来使用

```js
function foo(aa) {
	aa();
}
function bar() {
	console.log('bar');
}
// 在这里面是可以传入一个参数的。
foo(bar);
function foo(num1, num2, fn) {
	fn(num1, num2);
}
// 这个是非常灵活的,可以给fn传入不同的函数来去计算结果
```

##### javascript 是支持函数中定义另外一个函数,支持嵌套定义

当函数接受`另外一个函数为参数`或者`使用一个函数`作为返回值称之为`高阶函数`

当一个函数成为了`某个对象的函数`的时候,我们称`这个函数为对象的方法`

`filter`重新返回一个`新的数组` 作用: 过滤,对符合条件的推入到一个新的数组

`map` 重新返回一个`新的数组` 作用: 映射,对数组内元素统一进行操作并返回一个新数组

`forEach`没有 return 值 作用:对数组进行迭代,相当于`for of,for in` 遍历操作

`find` 返回第一种找到的元素 作用:对数组内进行查找操作 `findIndex`返回元素的索引

`reduce`返回定义的 total 值 作用:对数组内的数值进行`累加操作`

`flatMap`返回一个新的数组 作用:数组扁平化形成数组 无限(Infinity)

```js
const hd = [1, 21, 24, 18];
let total = hd.reduce(
	(preValue, item) => {
		return preValue + item;
	},
	0,
); // 这个为初始值0,返回值total为相加后的结果
```

##### 闭包的定义

`计算机科学`中:

1. `词法闭包`和`函数闭包`
2. 支持`头等函数`的编程语言,词法绑定的技术.
3. 是一个结构体,他存储了一个`函数`和他`所关联的环境`.
4. 当捕捉闭包的时候,他的`自由变量`会在捕捉时确认(指的是访问的变量),即使脱离`捕捉的上下文`(指的是 return 后的值运行在函数变量外部),也会`照常运行`

`javascript`中:

1. 设计理念来自 scheme 程序
2. 一个函数与其周围状态引用捆绑结合在一起,这就是闭包.
3. 每当创建一个函数的时候也会同时创建出来

**闭包**是一个`函数`和一个可以访问的`自由变量`

**必须要有 return 函数** **访问了外层作用域自由变量**

因为函数是有作用域的,外层变量无法访问内部作用域,但是通过 return 出来的变量则是可以访问内部作用域的。

上层作用域是在词法解析时就已经确定了

##### 从内存讲闭包

因为在函数执行结束之后,函数执行作用域从调用栈弹出,所引用的 ao 对象会被直接销毁掉.

因为在`父函数被销毁`的时候,在全局对象已经有一个变量指向了销毁函数`内部对象的地址(子函数地址)`,而`子函数内部地址中的parentScope指向了函数地址` 因为函数地址还有被引用,所以不会被销毁掉.

因为父函数不会被销毁掉,所以会造成内存泄漏 **指该被销毁掉释放的内存没有被释放**

##### 如何将闭包所引用的内存释放掉

```js
function foo() {
	var name = '123';
	var age = 18;
	function bar() {
		console.log(name);
	}
	return bar;
}
var a = foo();
a();
// 因为调用了foo 返回的bar函数,同时赋值给a为foo函数的返回值,
// 而bar函数的父作用域是foo,所以当foo执行完被调用栈弹出的时候,foo所创建的ao对象并没有被销毁掉
// 因为a已经分配了 bar的内存地址,而在函数预解析的时候,会创建一个函数体和parentScope,
// 而parentScope保留的是父级函数的引用
// 因为父级函数有被引用,所以不会被垃圾回收
a = null;
// 在真实的引擎中age是会被销毁掉的,只会保留所需要的属性
// 但是如果将被引用的对象直接赋值为null的时候,则不会造成内存泄漏
foo = null;
```

##### 快速创建一个高内存的数组

```js
const arr = new Array(1024 * 1024).fill(
	1,
);
// js引擎进行了优化,所以小于2的32次方的都只是占4个字节
// 一个整数为4位   1024*4 = 4kb*1024 = 4M
```

### 函数中的 this 指向

##### 箭头函数的 this 是指向上层作用域,同时他是在编译时确定的 this

#### this 的绑定

`this所指向的位置`,与所处的环境是没关系的,与`函数所调用的方式`是有关系的

指的是`运行的环境`,与所定义的环境是无所谓的,但是箭头函数指的是`所被定义的环境`

1. 通过在`对象`里面定义方法,使得 this 进行改变,为`隐式绑定`,绑定对象上.
2. bind 绑定,call 绑定,apply 绑定`强绑定`.
3. new 实例化对象时 this 绑定.
4. 构造函数中的 new 关键字

```js
const box =
	document.querySelector('div');
box.onclick = function () {}; // 只能给元素添加一个事件
box.addEventListener(
	'click',
	function () {},
);
```

可以给数组中的`forEach和map`等函数,都是可以可以传入`第三个参数`为绑定的 this

#### this 绑定优先级

**(new 优先级)大于(强绑定 this)大于(隐式绑定)大于(全局默认绑定)**

new 关键词不能和 call,aplly,bind 等函数使用

`aplly,bind,call`为 null,undefind 的时候会默认绑定全局对象

##### 箭头函数

没有`this`,没有`arguments`,不能成为`构造函数`,不能使用`new进行调用`

如果在使用箭头函数的时候,添加一个`括号`,代表返回的是对象类型

```js
const name = () => ({
	name: 'libai',
	age: 12,
}); // 如果在箭头函数,函数体外面添加一个括号的话,则代表这个箭头函数返回的是一个对象,而不是一个函数体

// bind的使用 foo.bind('name')   这是一个整体,如果使用在后面添加一个()就可以了
```

箭头函数的 this,并不是随着运行环境的不同进行改变

`箭头函数`无论被 call 调还是 apply 调还是隐式绑定,都不会改变箭头函数的 this,可以说箭头函数没有 this,**他永远会指向他的父级作用域**

```js
const obj = {
	foo: () => {
		// 注意此时的上级作用域是window,而不是obj,obj只是一个对象
	},
};
function foo() {
	return () => {
		console.log('12');
	};
}
```

##### Aplly,call,bind 实现

不会过度考虑边界情况

给函数原型上面添加 apply 和 call 方法

```js
Function.prototype.call();
// 给所有函数上都添加一个方法
```

使用**Object(参数)**这样所有的都会进行转换成相对应类

##### ES6 的接受剩余参数

```js
// 当我们不确定所传过来的参数有多少的时候,我们可以使用...来接受多余的参数
function(num1,...num2){
  // 此时的num2为数组类型,无论传过来的参数有多少
}
// 同时我们也可以使用...展开运算符
// 可以使用... 进行数组扁平化
// arguments箭头函数是没有的,他会去找上层作用域的arguments
```

每个普通函数都有`arguments`,它包含了所传入的所有参数,只是一个伪数组,其实是一个对象 **其实内部是 index 和对象相对应**,并没有数组的方法

转换为 Array **Array.prototype.slice.call()**

**Array.from 将一个 arguments 转换为一个真正的数组**

**Array.of(传入参数) 创建一个新的数组**

### 纯函数

1. 相同的输入,一定会返回一个相同的输出
2. 在执行过程中不会有任何副作用

副作用: 意外修改了全局变量,修改参数,外部存储.

`splice`在函数执行后,会修改原数组,所以不能称之为纯函数

`slice`在函数执行后,会返回一个新的数组,并不会影响原数组,可以称之为纯函数

**作用是**

- 可以安心的编写和使用
- 只需要单纯的实现自己的业务逻辑便可,不需要关心传入的参数和依赖的外部变量发生变化
- 自己确定正确的输入有正确的输出

##### 函数柯里化

只传递函数一部分参数去调用他,让他返回一个函数去处理另外的参数

**让处理事务变得更加的简单**

```js
// 是指foo()()
function foo(a, b, c, d) {}
foo(1, 2, 3, 4);
function foo(a) {
	return function (b) {
		return function (c) {
			return a + b + c;
		};
	};
}
const foo = x => y => c => x + y + Z;

foo(1)(2)(3)(4);
// 这个过程就是函数柯里化
// 函数职责单一,不让多个参数传入到一个函数中
// 而是每一个函数,处理的事务应该是单一的
```

函数柯里化扩展优化

可以先在前面定义一个通用的参数,后根据实际情况分别传入参数

```js
var newlog = foo(x);
newlog(y);
```

##### with 语句 可以形成自己的作用域 **非常不推荐使用**

```js
// with(扩展的作用域){}
const obj = {name:'libai'，age:12}
let name = 'kate'
function foo(){
  with(obj){
    console.log(name)
    // 所以这里会直接找到obj函数中的this
  }
}
```

##### eval 方法 将传过来的字符串当做 js 代码来运行

```js
let js = 'var name="libai",age=18';
eval(js); // 也是一段js代码
```

1. 可读性非常差,逻辑性非常差
2. js 引擎不会对其进行优化
3. 可能会被意外截获,造成风险

##### javascript 严格模式

1. 会以更严格的形式来对`代码进行检测和执行`
2. 让自己所写的代码更具有健壮性,更加的具有可维护性
3. 不能使用 arguments, `不可声明后不赋值`

优点

1. 通过抛出错误,来消除了一些`静默错误`
2. 严格模式,让引擎在执行代码的时候有`更好的优化`(因为不需要对特殊语法进行解析)

```js
"use  strict"
// 不允许使用进制数
// 在object.defineProperty(,{configurable:false})会报错
// with不允许使用
// eval不会向上引用变量了
// 严格模式下,log(this)会指向undefined
// 属性描述符, 如果是直接添加属性的话 以下配置都是为false
const obj = {name:'libai',age:28}
// 属性描述符,以下属性都为false
Object.defineProperty(obj,'value',{
  value:'值',
  // 以下的配置若不配置都是有默认属性的  都为false
  configurable:false,// 是否可以配置,删除,
  writable:false // 是否可以被修改
  enumerable:false // 是否可以被遍历使用
})
```

`不能使用保留字和关键字 `

##### Vue2 响应式的原理

```js
data(){}
Object.keys(data).forEach(o=>{
  // 可以在这里进行数据拦截,同时触发多个函数
  // 这个函数可以是通知修改,存储修改,等函数
  // 在vue2中用的比较多 订阅者模式  发布者发布内容,到信息中心,各个用户在信息中心取得数据
  Obejct.defineProperty(data,o,{
    get(){},
    set(){}
  })
})
Object.defineProperties(){}
// 在js里面以下划线开头的属性或方法为私有属性和方法
```

```js
Object.seal();
//
Object.freeze();
// 不允许进行任何操作,冻结
```

##### 创建多个对象的方案

###### 工厂模式

```js
function(name,age,height){
  const p = {}
  p.name=name
  p.age = age
  p.height = height
  p.say(){},
  p.run=function(){}
}
// 没有类型 对象类型缺点 对于类型 过于宽泛
// 获取不到真正的类型
```

###### 构造函数

构造函数都有构造器 constructor

创造对象的时候所需要的构造器

通过`new` 关键字 来使一个函数变成一个构造函数

构造函数的名称`首字母`都是**大写 Person**

构造函数的缺点:

1. 会浪费内存空间,因为所有的对象都是一个`独立的空间,包括里面的方法函数的地址`

**在类里面声明的方法在被不同的对象调用之后函数地址是不变的**

##### 对象原型

```js
const obj = { name: 'libai', age: 18 };
// 他的内部都是有prototype
// __proto__ 是浏览器提供的方法
// 使用Object.getPrototypeOf()来查找到object的原型
// 为隐式原型,可以获取原型中的方法
```

**当拿一个属性的时候,他会先去在自身对象里面查找,如果在对象里面查找不到的话会去原型里面查找** for in 会顺着原型链去遍历属性

##### 函数原型

`函数既是函数也是对象` 来自`new Function`一个大的构造函数类型

函数里面是有 prototype 属性的.

实例的`__proto__` 会指向函数的`显式原型prototype`

**里面有父级作用域,原型 prototype,函数的执行体**

Person 函数的原型对象

原型对象的 constructor 直接指向的函数 foo

如果通过 foo.prototype = {} 这样是相当于

重新创建一个 prototype 对象,重新开辟地址

创造构造函数的方法,原型方法和构造函数,使用关键字 class,来实现这个效果.

##### 原型链和继承

原型链查询是针对对象的,作用域链查询是针对函数上的

构造函数和类起名的时候都要以大写开头如 Person Name

封装==> 将多个属性和方法封装到一个类中

继承==> 可以节省很多重复的代码

多态==> 没有继承就不会存在多态

**当自身没有的时候,回去原型对象查询,如果原型对象都没有,会去下一个原型对象找**

顶层原型(Object :null [prototype])

##### 顶层原型 null 的来自哪里

```js
const obj = {};
const obj2 = {};
obj.__proto__ = obj2;
// 将obj.__proto__变成obj2，而不是 之前的object原型对象
// 因为当原型对象没有上层的时候,就会为null ,代表没有原型了
```

1. 代码进行`复用,继承`
2. `寄生式继承`,在`一方修改原型`的时候,另一方`也会被修改`

```js
foo.prototype = father.prototype;
// 父类原型直接赋值给子类,成为子类原型
// 子类修改方法,会直接修改父类
```

3. `重生式继承`,` 重新克隆一个父原型`,这样就不会造成改变

```js
Object.create('父对象');
```

```js
//原型式继承,与上述的Object.create()一模一样
function create(o) {
	const newObj = {};
	Object.setPropertyOf(newObj, o);
	return newObj;
}
// 冷知识,Object.setPropertyOf(传入的是一个对象)
// 工厂函数,通过传入不同的值,来不停的创建出一个个类似的产品
```

##### 对象.hasOwnProperty

定义在对象本身上,不再往原型上寻找

#### 函数有显式原型也有隐式原型

显式原型是指 foo.prototype

隐式原型是指 foo.`__proto__`

因为函数既是函数也是一个被 Function 类创建的原型对象

就跟[]的`__proto__`是 Array 一样,他另外一个显示原型则是 foo.prototype

##### Class 类 是构造函数和原型链的语法糖

```js
// Typeof 类 function 可读性较强
class Person {
	// 构造器
	constructor(name, age) {
		super();
		// super一定要早于this调用.
		this.name = name;
		this.age = age;
		this._address = '北京市';
	}
	// 普通的实例方法
	// 创建出来的对象进行访问的
	eating() {
		console.log('name');
	}
	// 属性访问器
	get address() {
		return this._address;
	}
	//类方法,可以通过类名直接来访问的方法
	static createPerson() {}
}
class libai extends Person {
	constructor(name, age) {
		super(name, age);
	}
	eating() {
		// super.的方式来调用父类的构造方法
		super.eating();
	}
}
```

##### webpack (tree-shaking)

当一行代码从来没有被用过的话,他会在 babel 转换后自动被清除掉

bookMarks

##### class 继承内置类

javascript 只能实现单继承,不能实现多继承

```js
class my extends Array {
	say() {}
}
```

##### 类多态

1. 必须有继承,
2. 必须有子类重写父类方法
3. 必须父类引用指向子类对象

###### let const

```js
console.log(name);
//  已经被创建出来了,但是不能被访问,直到词法赋值
//  这是js引擎内部做的优化
//  虽然没有变量提升, 但是还是被创建出来,直到执行到这一行才会进行作用域提升
let name = 'libai';
// 块级作用域
{
	let name = 'libai';
}
console.log(name); // name define property
```

##### 模板字符串``

```js
`this.name${name}`;
// 冷知识
function foo(name, age) {
	console.log(name);
}
const name = '12';
foo`hello${name} world`;
// 第一个参数是[hello,world] 第二个参数是name
```

##### 默认参数

**在进行对象解构的时候,要以 const obj1 = ({ name, age } = { name: 'libai', age: 21 })**

**对象是一个引用类型,并不是像基本数据类型一样,它改变是将所有东西都会改变的**

```js
function foo(name，age){
  name = name || '123'
  console.log(name,age)
}
// 或者使用   上述是有bug 当传入空'' null undefined 和0 的时候都为false
// 都会使用后面的值,导致自己想传的传不进去
function foo(name = '123',age){
}
function foo({name,age} = { name:'libai',age:12 }){}
foo({ name:'kate',age:14 })
```

##### 函数的剩余参数补充

restparamter 以...为前缀,他会将`剩余参数放到一个数组里`,包含`未匹配的形参`

```js
function foo(name, ...list) {
	console.log(name);
	console.log(list);
}
foo('liabi', 12, 34, 12, 11);
// name是  libai     list则是一个数组[12,34,12,11]
```

##### 箭头函数

箭头函数的 prototype 是指向 undefined 的,没有显示原型,但是是具有隐式原型的,他的**proto**也是指向 Function 的

```js
// typeof 是指向function的
// instanceof 是指向Obejct的
// 函数名.apply(绑定的this,传入的参数)
```

##### es6 的展开语法的使用(没什么好写的)

```js
const arr = ['anme', 'age'];
const name = 'name';
console.log(...arr); // 'name' 'age'
console.log(...name); // 'n' 'a' 'm' 'e'
```

展开运算符做的是一个**_浅拷贝_** 非常重要

浅拷贝是指无法复制对象内部中`引用类型的堆内存`的,他只是复制了一个`内存地址`

##### es6 中表示数值的方式

```js
const 二进制 = 0b100;
const 八进制 = 0o100;
const 十六进制 = ox100;
```

##### symbol 独一无二的标识

**注意不需要加 new,他是一个基础数据类型**

```js
const name = Symbol('name');
const s1 = Symbol('aaa');
const s2 = Symbol('aaa');
// Symbol.for()传入一个key 两个相同的key是相同的
const key = Symbol.keyfor(s1);
// 可以通过Symbol.keyfor() 来获取这个Symbol的key值
```

obj.name 是通过字符串 name 来查找的

###### 之前的存储方式

对象和数组,在 es6 又新增了两个数据解构,set 和 map

##### Set 基本使用

不允许元素的重复,对于引用类型的重复是指引用地址的重复

set 并非是数组类型的结构 而是

```js
const set = new Set();
const n1 = { name: 'libai' };
const n2 = n1;
set.add(n1);
set.add(n2);
console.log(set); // set 只有一个
// for of 只能对可迭代对象进行迭代
// size方法,查看里面有多少元素
set.delete();
set.has(); // 是否包含某个元素
set.clear(); // 清除set里面所有的数据
set.forEach(item => {
	console.log(item);
});
```

###### WeakSet 只能存放对象类型

```js
// weakSet只能存放对象类型,不能存放普通数据类型
// 里面都是弱引用,会被GC回收(垃圾回收)
const weakSet = new weakSet();
// 当引用清除的时候,如果只剩下weakSet存储这对象的引用,也是会被清除的
```

##### Map 可以存储对象为键

```js
const map = new Map([]);
map.set();
map.delete();
map.has();
```

##### ES6 中 includes

```js
// 在indexof里面是无法判断有没有NaN的
// 而includes方法则是可以判断数组中有没有NaN的
const arr = [12, 11, 32];
arr.includes(12, 起始的索引);
```

##### es7 中的运算符

```js
// Math.row()指数运算符
// 2**2 2的二次方
```

##### Object.values()提供所有的 value 值

`Obejct.keys()`获得里面所有的 key 值拿到的所有的值都是`数组`类型的

`Object.entries()`获得一个数组,分别是键数组和值数组

##### String Padding

前后填充,`padStart(),padEnd()`

```js
padStart(10,'')  前一个是指填充到多少字符,另外一个就是填充的东西
```

##### flat 降维降调

```js
flat(infinitfy);
flatMap(e => e.split(','));
```

##### bigInt 最大值

```js
Number.MAX_SAFE_INTEGER;
// 他是一种类型
// 相加的时候要使用bigInt()来进行转化
```

##### 空值运算符?? 可选链运算符?.

```js
// aaa为undefined或者null的时候会直接返回后面的数值
const name = aaa  || default value
// 当aaa为false '' 0 隐式转换都为false的时候才会返回后边
const name = aaa ?? default value

// 在进行实际开发中 有的时候会因为请求的数据尚未到达导致 函数方法并未在null或undefined报错
// ?. 可选链 在null或undefined的时候会进行短路,在有值的时候会重新进行
```

##### 在 node 和浏览器中拿到全局对象的方法是不一样的

```js
//浏览器环境下
console.log(this);
console.log(window);
// node环境下
console.log(global);

console.log(globalThis); // 在所有里面都会找到this
```

##### weakRef 弱引用

weakRefs

##### 监听到对象的操作

```js
Object.defineProperty(obj,'name'{
  get(){},
  set(){}
})
// 在vue2 中使用的是,Object.keys递归调用添加属性描述符数据劫持,递归调用
// Object.keys(data).forEach(e)
// 在新增和删除属性的时候,是在Object描述符里面触发不了的
```

Proxy 类 有 13 种捕捉器

```js
// proxy 是可以劫持整个对象的,他并不需要去递归添加方法
// 所有速度比Object.defineProperty要快的 可以创建一个代理
// 对对象所有的操作都会通过代理来完成,然后通过监听对原来对象的操作
const obj = {name:'libai',age:12}
const newProxy = new Proxy(obj,{
  // target 自己所代理的对象
  get:function(target,key){
    return target[key]
  }
  set:function(target,key,newValue){
  target[key] = newValue
}
  has:function(target,key){
    return key in target
  }
})
// getPrototypeof 拿到对象的原型对象
```

##### reflect 是一个对象,并不是一个类,反射，配合 proxy 使用,同时也有 13 种方法

```js
// Reflect.getPropertyOf  是类似 Object.getPropertyOf
// 提供了很多操作javascript的方法
```

**把里面的一些方法放到 reflect 对象里面**

```js
const newProxy = new Proxy(obj, {
	get(target, key) {
		return Reflect.get(target, key);
	},
});
```

`receiver`参数的作用,是指的代理对象.`receiver是完全相等于创建的代理对象的`

会执行两次 get 或 set 函数

##### Reflect 的 construct 方法

```js
Reflect.construct(
	目标类,
	参数,
	需要被new的类,
);
```

##### 响应式

当对象里面的一个东西发生改变后,需要同时改变其他所引用的方法

类似,`订阅者 订阅模式`,封装一个响应式函数

### Promise

newPromise 是指对象上的方法,因为 then 是 new Promise.then()

promise 的出现是为了解决`回调地狱`

then 方法也是有返回值的,返回值也是一个 promise 对象,链式调用

```js
new Promise()
	.then(res => {})
	.then(res => {});
// return 出来的值指的是下一层then的res值
```

返回一个 Promise 的情况,返回一个 thenable 的情况.

```js
const promise = new Promise();
promise
	.then(res => {
		return {
			then: function (resolve, reject) {
				resolve(), reject();
			},
		};
	})
	.catch(err => {});
```

`promise.catch() 捕获错误` 传入错误拒绝的回调,`可以捕获reject()也可以捕获throw new Error `

`finally` 在 fullfill 和 reject 的状态下都会进行回调,怎么样都会进行回调。

`then catch finally` 都属于实例方法

##### Promise 类方法

`Promise.resolve(传入参数) ===> 与new Promise((resolve,reject)=>{return resolve()})`

`Promise.reject()`

##### Promise.all(Array)

传入一个数组的同时,也返回一个数组,里面包含着所有 promise 结果的数组

##### Promise.allSettled(Array)

返回一个`数组`,但是`数组内是对象`,对象里面有一个`状态为fullfiled或reject`

##### Promise.race(Array)

至少等到一个结果的时候,才会返回这个结果,无论是 resolve 还是 reject

**无论是 resolve 和 reject 都会进行 race**

##### Promise.any(Array)

只要有一个执行完毕且状态为 fullfiled 的时候,就会触发这个方法,直接返回结果

**只会返回状态为 fullfiled 的消息**

setTimeOut 是宏任务,同时也可以使用 queueMicrotask

### 生成器和迭代器

容器对象(数组和链表)上遍访的对象,`是一个对象,有next函数`

存在`done和value`两个属性,当迭代器结束之后`done返回一个true,说明迭代完毕`

```js
const names = [
	'janmes',
	'kate',
	'youyou',
];
// return value:'janmes',done:false
// return value:'kate',done:false
// return value:'youyou',done:false
// return value:undefined,done:true
```

将`内部迭代器对象和需要被迭代的对象和标识`封装到一个对象里面称之为可迭代对象

```js
const iterable = {
	//符合可迭代对象Symbol.iterator函数
	[Symbol.iterator]: function () {
		let index = 0;
		return {
			next: () => {
				if (index < names.length) {
					return {
						done: false,
						value: names[index++],
					};
				} else {
					return {
						done: true,
						value: undefined,
					};
				}
			},
		};
	},
};
```

`for of只能迭代可迭代对象`,for of 无法遍历普通对象,是因为普通对象不是可遍历对象

是 next 的`语法糖`,当 done 为 true 的时候会停止迭代,Symbol.iterator

String,array,arguments,Map,Set,在使用`Array.from()`的时候,需要传入可迭代对象

#### 生成器

可以让我们更加灵活的控制函数,什么时候`开始执行`,什么时候`暂停执行` 通过 yield 来暂停

生成器函数,也是一种函数,需要在函数后面加一个\*,使用`yield`来暂停代码

`可以使用return(),终止生成器`,或者使用`throw()来抛一个异常`

yield\* 迭代可迭代对象,迭代的语法糖

async 和 await 是把生成器和 promise 结合在一起,await 相当于 yield

```js
// 生成器
function* foo() {
	// 生成器函数返回一个生成器对象,是一个特殊的迭代器对象
	console.log('函数');

	const value10 = 10;
	console.log(value10);
	yield;

	const name1 = '112';
	console.log(name1);
	yield;
}
// 每次执行next的时候都会执行一段代码,在第一次调next的时候,会执行到第一段yield
// foo().next()
// foo() 如果没有next不会执行任何代码
// 遇到yeild暂停执行,遇到return 直接返回函数结果
// 第二次调用某个代码的时候
```

#### async 和 await

promise(契约)是为了解决回调地狱的问题,async 意思是声明异步函数的,await 是用来接收 resolve 和 reject 结果的

事件队列:同步任务队列,微任务队列,宏任务队列

javascript 是单线程,主线程管理其他线程

微任务和宏任务,都是有回调的,需要放到队列中去执行

宏任务,ajax 请求,点击时间,SetTimeOut,SetInterval

微任务, queueMicrotask,promise.then 调用

在执行任何一个宏任务的时候都会去微任务队列查看有无微任务需要执行

async 和 await 在函数执行过程中

```js
async function foo() {
	console.log(111);
	await bar();
	// bar会立即执行,与yiled类似,只不过后面的代码则是被分配为promise函数
}

//当async函数没有返回值的时候会默认返回undefined,默认为promise.resolve(undefined)
```

### throw 抛出错误方案

当程序执行`发生错误`的时候,应该需要`抛出一个错误`

调用栈,`错误的话会将调用栈会全部展示`出来

```js
// 如果不对错误进行处理,函数就会终止,并将异常抛给调用者
// 抛出字符串,抛出错误对象,用类来new对象
// const err = throw new Error('')
// err.name   err.stack
// RangeError syntaxError TypeError
```

##### try Catch 的作用

因为 throw`抛出异常会直接将这个函数给终止掉`,为了不将整个函数终止掉。

可以使用`tryCatch捕获异常.保证函数的正常运行`,一般会在 finally 里面做一些补充操作。

### 模块化开发

1. 将项目分成一个个`小的结构`,对每个小模块的开发就称之为模块化开发
2. 这个结构中有属于自己的作用域和空间
3. 同时可以把将想要暴露出去的数据暴露出去,
4. 导入自己想要导入的数据

AMD,CMD,即将被淘汰。

common.js es6 方案

```js
var moduleA = (function () {
	return {};
})(); // 立即执行函数外加闭包
// 缺点是需要基础moduleA,不同公司的规范是不一样的
//都在使用esmodule
```

##### Node 使用的就是 commonjs 的规范

> 同步规范

module.exports exports require

也可以使用`解构导进来的对象`.

**_module.exports 才是默认导出的_**

`module.exports = {} Exports = module.exports 所以exports与module.exports指向的是同一个对象`

exports.name =name 相当月 module.exports ={name}

但是`exports={}则与module.exports不同,这种是不会被导出的`

##### require()引入对象

是一个函数,引入其他文件导出的对象,查找规则:

path ,http,fs 模块 `require('./abc')`会先去

1. 查找有没有 abc 这个文件,
2. 没有的话会自动添加.js 后缀
3. 没有的话会自动加.json 后缀
4. 没有的话会自动加.node 后缀

如果`没有文件,会去查找文件夹`按 index.js ==> index.json ==> index.node

如果啥也没有找到,然后报一个 not found

##### 模块化

1. 模块在第一次被引用的时候,会默认执行一次,执行结束后就会进行缓存
2. 被多次引用的时候,只会执行一次引入的代码

模块加载顺序,采用深度优先算法,执行第一个 require,同时进行深度遍历

事件循环

```md
┌───────────────────────┐
┌─>│ timers │<————— 执行 setTimeout()、setInterval() 的回调
│ └──────────┬────────────┘
| |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│ ┌──────────┴────────────┐
│ │ pending callbacks │<————— 执行由上一个 Tick 延迟下来的 I/O 回调（待完善，可忽略）
│ └──────────┬────────────┘
| |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│ ┌──────────┴────────────┐
│ │ idle, prepare │<————— 内部调用（可忽略）
│ └──────────┬────────────┘
| |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
| | ┌───────────────┐
│ ┌──────────┴────────────┐ │ incoming: │ - (执行几乎所有的回调，除了 close callbacks、timers、setImmediate)
│ │ poll │<─────┤ connections, │
│ └──────────┬────────────┘ │ data, etc. │
│ | | |
| | └───────────────┘
| |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
| ┌──────────┴────────────┐
│ │ check │<————— setImmediate() 的回调将会在这个阶段执行
│ └──────────┬────────────┘
| |<-- 执行所有 Next Tick Queue 以及 MicroTask Queue 的回调
│ ┌──────────┴────────────┐
└──┤ close callbacks │<————— socket.on('close', ...)
└───────────────────────┘
```

在导出方案中,先将 module 中所有的方法导入,最后在 index 文件中一键导出

`import()`函数是一个 promise,走的`是异步队列`

其他的`import{} from vue属于是同步`,可能会阻塞

1. 构建 `找js文件` 下载记录,同时对`各个依赖关系内的js代码进行静态分析`

浏览器内部有一个 map 做`映射关系`

2. `实例化分配内存空间`

3. ` 运行 赋值`

作为一个导入者,是无法修改导入的数据的

不允许`循环导出引入`

### npm 包管理工具

共享代码,将代码上传到 Github 上面去,这样世界各地的程序员都可以下载这个代码并使用

package.json 记录所安装的库或包 npm 5.0 之前是比较难用的

npm 管理很多包,有配置文件,记录包的版本,项目名称,版本号,项目描述

`private 私有属性`,当有 private 为 true 的时候不会被 npm publish

main 属性是指,在`上传包的入口文件`,import axios from axios 是从 main 指定的文件导出

`npm run serve 等价于 npm serve`

`dependencies` 生产和开发环境所需要的包如 vue axios vuex

`devDependencies` 开发环境所需要的包 eslint gunt

`peerDependencies` 对等依赖,比如 element-plus 依赖 vue3

依赖的`版本管理`

^ ~ 次版本号更新,兼容之前的版本

^匹配最新的大版本 改变次版本号 因为后版本会兼容前版本,

~匹配最近的小版本 改变修订版本

`主版本号:大的改动的版本号,` `次版本号:增加了新的功能,` `修订号:修复了之前的bug,向前兼容`

package.lock 里面展示的是真实的版本,当有 package.lock 会锁住当前的版本

会根据 lock 记录的信息来进行 npm install,为了保证协同开发时的一致性

engines 引擎参数 指定 node 和 npm 版本号

也可以将 eslint 和 browserslist 等文件也放到 package.json

##### npm install

`-g 全局安装 -D 运行时依赖 -S 生产时依赖 ` 全局安装一般都是用于`工具属性包`来安装

对于项目和局部的工具属性,即时在外部存在,也会进行局部安装

npm 也支持`缓存策略`了,可以在本地拿缓存,减缓远程仓库的压力,跟网络缓存很相似

npm Cache clean 清除缓存, npm rebuild

##### yarn 工具

yarn 为了解决 npm 的一些缺陷从而出现的,安装速度非常慢,版本混乱等情况,会发生重复依赖循环安装的问题

`yarn add 包 -D -S ` ` yarn remove` `yarn install --force`重新构建 `yarn Cache clean`

##### cnpm 工具,国内的仓库,以便快速下载包

淘宝镜像仓库

### JSON 数据存储

`重要的数据格式,可以再客户端和服务端来回传输的数据` 轻量级的资源交换格式

通用格式在各个编程语言中使用,实用性较广

有 XML 前期的数据交换形式,protobuf 在以后使用越来越多的数据格式

可以有`基础类型,复杂类型,没有undefined` 全都是双引号

为什么需要 JSON 序列化

因为在存储的时候,如果不序列化会被存储为[Object Object]

`JSON.stringify()`,在存储 localStorage 的时候,需要扁平化存储,转化成 JSON 字符串

后面的参数是需要被转换的参数

`JSON.parse()`,将`JSON.stringify()`的数据进行解析操作,将扁平化合成一个对象

```js
JSON.stringify(obj, (key, value) => {
	// 可以对数据进行拦截操作
	return value;
});
// 第三个参数是传递缩进的字符串
```

利用 JSON 序列化,来进行代码深拷贝,**_但是不能 JSON 深拷贝一个函数_**。

#### 浏览器存储方案

localStorage 本地存储 `setItem(key,value)` 永久性的存储方法,可以使用 expires 和 cacheControl 来控制

sessionStorage 会话级存储 关闭即结束,清除 sessionStorage 的存储

vuex 是存储在浏览器端内存中的

一个标签代表一次会话,当标签关闭后会销毁 sessionStorage,打开一个标签建立一个新的会话

##### IndexedDB

如果确实需要存储很多大量的数据,则需要 indexDB,是一个`事务型的数据库(一个操作单元)`

基于 javascript 面向对象数据库,当成一个事务

```js
const request = IndexedDB.open(''); // 有则复用,无则创建
```

### cookie

服务端存储在浏览器端辨识用户身份

浏览器会携带 cookie 去访问服务端,然后服务端根据 cookie 来鉴别

有一个内存 cookie 或者硬盘 cookie,可以设置过期时间

response headers 里面有一个 set-cookie 可以设置过期时间

domain 可以接受的域名,可以设一个`goole.org`,可以在`doc.goole.org`子域名中访问

`大小限制只有4kb` 只有浏览器才会自动携带 cookie 去请求数据

### BOM

`一定要学会自己查找文档,自己学习知识`

browser object model 一个链接 javascript 和浏览器的桥梁

`window` 包括全局属性和方法 全局对象,在 node 里面是 global 属性

`location` 链接到对象的位置

`history` 网页历史

`document` 文档对象

setTimeOut 和 Date 等类都是作为全局对象存在的

console 存在`大量属性` `大量方法` `大量事件` 包括继承的属性和方法 removeEventListener

ScreenX screenY 浏览器距离屏幕两侧的距离

scrollTo({top:2000}) window.onLoad

location.replace history.pushstate

### DOM

当函数有默认参数的时候,就会独自生成一个参数作用域,里面的参数,改变会`改变参数x和y值`

`参数也有属于自己的作用域`

通过`document object model` 网页中最重要的就是控制这些元素,所以 dom 就非常重要了

`Doucument.querySelector()` 里面填入选择器

```js
const div =document.querySelector('div')
div.nodeName div.nodeType
textContent
// 不允许调用 document.appendChild(div)
```

Bom 和 DOM 都是继承来自于 targetEvent

### 事件监听

鼠标点击,滚动,失去焦点,输入内容,移动,获取焦点,给元素或其他绑定事件处理程序

行内 onclick 获取元素.onClick 获取元素.addEventListener

`事件冒泡`和`事件捕获`适用于父子元素

冒泡 从内到外,捕获 从外到内

addEventListner 最后一个参数为 true 则是冒泡,为 false 则是捕获 event.target currentEvent.target

先是事件捕获,后是事件冒泡

preventDefault 阻止默认行为

#### 防抖节流

因为大量的重复连续的操作会影响浏览器性能,防抖是防止重复改变 input 节流是按钮,点击一次当请求没有收到响应的时候,不允许再次发起请求

debounce,在 input 输入发起网络请求输入,频繁点击某个事件,监听浏览器滚动事件,用户的 resize 事件 一定的频率触发,一定频率触发了重新计时

节流操作 throttle, 设一个标志符,标志符 停下的时候触发, 一定的时间内,只做一件事

防抖 触发了重新计时,一定时间内只做一件事

```js
//  防抖
```
