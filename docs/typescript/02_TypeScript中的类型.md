# JavaScript 类型

#### 数组 Array

> 注意事项:在真实的开发中,数组一般存放相同的类型,不要存放不同的类型

string[]:数组类型,并且数组中存放的字符串类型

Array<srting>泛型方式:数组类型,字符串类型

```js
const names: string[] = ['12', '234'];
```

#### Object 类型

> 使用 type 或者使用 interface 接口形式

```ts
type oneObject = {
	name: string;
	age: number;
};
const a: oneObject = {
	name: '123',
	age: 23,
};
const b: {
	name: string;
	age: number;
} = {
	name: 'asjkhd',
	age: 123,
};
```

#### null 和 undefined 类型

> 在 TypeScript 中 null 不仅仅是值,也是一种类型

```ts
const null1: null = null;
const und1: undefined = undefined;
```

#### 函数的类型

> 匿名函数,最好不要添加类型注解.也没有必要添加
>
> 他会根据上下文中的类型自动进行推导类型

声明函数时,可以在每个参数后添加类型注解,以声明函数接受的参数类型

```ts
function increment(
	num1: number,
	num2: number,
): number {
	return num1 + num2;
}
```

当在函数中使用`对象类型`的时候,可以使用`type或者interface`创建两个

#### Type 类型

```ts
type obj = {
	name: string;
	age: number;
};
```

#### any 类型 anyScript 没毛病 老铁

如果我们没法确认一个变量的类型,这个类型是要发生改变的,我们可以修改为 any 类型,如果类似于下面这种

```js
let name = 'agc';
name = 12;
name = { a: 213 };
```

any 类型有点像讨巧的 TypeScript 手段,我们可以在对象里面取到任何的值类型

场景:

1. 对某些数据的处理过于复杂了,如果处理的话需要很麻烦
2. 或者引入一些第三方库时,缺失了类型注解,这个时候我们可以使用 any 类型

#### unknown 类型 和 any 类型有点相似 (类型缩小校验)

> 但是在未进行缩小校验下,直接对 unknown 类型上面做任何的操作都是不合法的
>
> 不确定的类型,不知此类型是什么

需要进行**类型缩小校验**操作,才能根据缩小之后的类型,进行对应的操作

```js
let foo: unknown = 'aaa';
foo = 123;
// 必须要先进行类型缩小校验
if (typeof foo === 'string') {
	clg(foo.length);
}
```

#### void 类型

> void 通常是用来指定一个函数如果是没有返回值的,那么他的返回值就是 void 类型

```ts
function foo(num:number):void{
  console.log(num)
}
const foo:() => void = ():void => {}
// 可以传递不同类型的参数
const ExecFnType = (...args:any[]) => void
```

非常重要的一个点是 type 和 interface,当类型比较复杂的情况下,我们可以使用 type 抽离出来

#### 函数类型表达式

```ts
type FooType = () => void;
```

void 通常是用来指定一个函数是没有返回值的

当上下文的类型推导出返回类型为 void 的类型时,不会强制要求函数一定不能返回值

#### never 类型 极少使用 never 类型

> 永远不会发生值的类型
>
> 如果函数是一个死循环,或者抛出一个异常的话,使用 never 类型

某些情况下会自动定义推导出 never 类型

开发框架(工具)的时候可能会用到 never

封装一些类型工具的时候,可以使用 never 类型体操的题目 never

```ts
function foo(): never {
	throw new Error('12223');
}
// 因为直接返回一个空数组,会自动推导出一个never
function parseLyric(): never[] {
	return [];
}
```

#### 联合类型

当一个函数可以传入字符串类型或者是数组类型的话,可以使用联合类型

```ts
function foo(message: string | number) {
	console.log(message);
}
```

#### tuple 类型 元组类型

> TypeScript 提供了元组类型,元组类型在 `数组`中使用,可以使用对象平替
>
> `元组数据结构中可以存放不同的数据类型`,取出来的每个 `item` 也是有明确的类型的
>
> 介于数组和对象之间的一种类型
>
> useState 的封装

```js
const names: [number, string, obj] = [
	12,
	'12',
	{ 12: 12 },
];
```

可以在数组,或者使用自定义 useHooks 的时候,使用这个内容,可以使用元组,自定义返回结果

使用场景 `不同的类型`不推荐放到数组中( 可以放到对象或者元组当中 )

元组中是一定会确认返回值的,

## TypeScript 细节

#### 联合类型和交差类型

从现有类型中重新构建出新类型 (**类型缩小**)

但在使用的时候需要特别的小心,使用类型缩小才可以使用,类型缩小会让 typescript 能够准确的识别元素的类型

TypeScript 可以根据我们缩小的代码结果,推断出更准确的类型

```ts
let foo: number | string = '123';
foo = 123;
```

联合类型是由两个或者多个其他类型组成的类型,表示可以是这些类型中的任何一个值,联合类型中的每个成员都可以称之为联合对象

> TypeScript 中的交差类型,**两种类型或者多种类型需要同时满足**
>
> 当一个类型即时 IPerson 又是一个 Type 的情况下,但是这个可以使用 interface 重复声明,或者 interface 继承
>
> 对象类型中,同时满足两种类型

```ts
interface Type {
	a: number;
}
interface Type {
	y: number;
}

interface IPerson {
	name: string;
	age: number;
}

const obj3: Type & IPerson = {
	a: 12,
	y: 213,
	name: 'sjkd',
	age: 23,
};
```

#### type 和 interface

> 类型别名,当一个类型需要多处进行使用的话,使用更为方便的话,则需要使用 type 来起别名

```ts
//类名使用type来起别名
type Mynumber = number|string
function (id:Mynumber)
type str = "left" | "right" | "top" // 使用type字面量的方式
```

type 需要使用 = 来进行赋予和赋值 与 const 非常相似

而 interface 则与类的写法非常相似,算是平替类型, interface 对应类,type 对应 const 类型

> 对于 interface 和 type 在使用上面区别并不大,在定义对象类型时,你可以任意选择使用,接口中几乎所有的属性都可以在 type 上使用
>
> 区别;
>
> 1. interface 只能用来声明对象; type 则可以声明基本数据类型
> 2. interface 可以多次声明一个对象(两次声明会合并在一起) 而 type 则不可以重复声明
> 3. interface 是支持继承的,使用 extends 来继承,也可以被类所实现
> 4. 使用`基本数据类型`的话 选择 type 来声明,使用`对象数据类型`的话使用 interface 更好一些,因为 interface 可扩展性会更好一些

```ts
interface Foo {
	x: number;
	y: number;
	z: number;
}
class Dog {}
```

#### 类型断言和非空断言

> **类型断言 as 关键字** 这个关键字是指 **把什么直接当做什么来使用**
>
> 有的时候,TypeScript 无法获取到具体的信息的时候,我们可以使用类型断言,获取更好的提示
>
> TypeScript 只允许转换为`不具体的类型`(any 或者 unknown)或者`转换为更具体的类型`,`不允许进行`强制类型转换
>
> 那如何进行**强制类型转换**呢
>
> `先转换为unknown之后,再进行强制类型转换`

来获取到一个 Dom 元素,有的时候提示不智能,我们可以直接使用断言来提示

有些情况下,我们需要使用类型缩小的操作,来让一个操作更加的合理,也相当于错误检错

```ts
const imgEl = document.querySelector(
	'.img',
) as HTMLImageElement;
```

> **非空类型断言** !. 比较危险 只有确保 friend 一定有值的时候,才可以使用!.方式
>
> 使用`可选链`会更加的安全一点
>
> 因为有的时候类型可能是 null 或者 undefined,这样写会在使用方法的时候可能出现错误,
>
> **可以使用可选链来可选的访问属性**,但是左侧不可以使用可选链对变量进行赋值或者修改

#### 字面量类型和类型缩小

> Ts 中的字面量类型的使用,与枚举的作用是非常相似,也就是 enum 枚举类型

```ts
type Direction =
	| 'left'
	| 'right'
	| 'top'
	| 'bottom';
// 这个在进行使用一个变量中有几个类型的时候 很好使用操作
```

解决方案一 使用类型断言的方式

二, 直接让 info 对象为一个字面量的类型,使用对象类型字面量的方式来使用 **只是其中的一个类型**

```js
const info ={
  name:"sj",
  method:"post"
} as const   // 将info对象类型强制转换为字面量类型  这是一个特殊的语法类型  因为在通过对象类型传入的时候会检测不到是字面量
// 将整个对象进行字面量推理
```

> 类型缩小
>
> 我们可以使用一些 typeof、===、instanceof 或者 if 手段来让类型类型的范围缩小,让推导更加的准确,更加的清楚

```ts
function printID(id: string | number) {
	if (typeof id === 'number') {
		id.toPrecision(2);
	} else {
		id.split(',');
	}
}
```

#### 函数的类型和函数签名

> 什么是函数的类型就是指函数的入参和返回值(arg:number)=>number
>
> 我们可以编写函数类型表达式的形式来表明函数的类型
>
> function type expression (参数列表) => 返回值 表明一个函数

因为在 JavaScript 开发中,函数是最重要的一个参数,是一等公民

**给函数编写属于函数的 TypeScript 类型** 被称之为函数类型表达式

```js
function foo:(arg:number)=>number=(arg:number):number{}


type CalcType = (num1: number, num2: number) => number

function calc(calcFn: CalcType) {
  const num1 = 10
  const num2 = 20;
  return calcFn(num1, num2)
}
```

> **函数类型参数的格式问题** 个数校验是不严格的
>
> TypeScript 对传入的函数类型的参数个数不进行检测
>
> 经典例子 arr.forEach 在这边说明了为什么 TypeScript 对函数的入参个数不校验

> 函数**调用签名** call signing
>
> 函数也是一个对象,自己也可以有自己的属性值
>
> ```ts
> interface IBar {
> 	name: string;
> 	age: number;
> 	//函数可以调用,函数调用签名
> 	(name: string): number;
> }
> ```

如果只是描述函数类型本身(函数可以被调用)

如果 在描述函数作为对象可以被调用,同时函数也有其他的属性的话使用函数调用签名

#### 函数的重载和 this 类型
