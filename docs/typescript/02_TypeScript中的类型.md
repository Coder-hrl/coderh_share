# JavaScript类型

#### 数组 Array

> 注意事项:在真实的开发中,数组一般存放相同的类型,不要存放不同的类型

string[]:数组类型,并且数组中存放的字符串类型

Array<srting>泛型方式:数组类型,字符串类型

```js
const names:string[] = ["12","234"]
```

#### Object 类型

> 使用type 或者使用interface 接口形式

```ts
type oneObject = {
  name:string,
  age:number
}
const a:oneObject ={
  name:"123",
  age:23
}
const b:{
  name:string,
  age:number
} = {
  name:"asjkhd",
  age:123
}
```

#### null 和undefined类型

> 在TypeScript中null不仅仅是值,也是类型

```ts
const null1:null = null
const und1:undefined = undefined
```

#### 函数的类型

> 匿名函数,最好不要添加类型注解.也没有必要添加
>
> 他会根据上下文中的类型自动进行推导类型

声明函数时,可以在每个参数后添加类型注解,以声明函数接受的参数类型

```ts
function increment(num1:number,num2:number):number {
  return num1+num2
}
```

当在函数中使用`对象类型`的时候,可以使用`type或者interface`创建两个

#### Type 类型

```ts
type obj = {
  name:string,
  age:number
}
```

#### any类型  anyScript  没毛病 老铁

如果我们没法确认一个变量的类型,这个类型是要发生改变的,我们可以修改为any类型,如果类似于下面这种

```js
let name = "agc"
name = 12
name = {a:213}
```

any类型有点像讨巧的TypeScript手段,我们可以在对象里面取到任何的值类型

场景:

1. 对某些数据的处理过于复杂了,如果处理的话需要很麻烦
2. 或者引入一些第三方库时,缺失了类型注解,这个时候我们可以使用any类型

#### unknown类型  和any类型有点相似    (类型缩小校验)

> 但是在未进行缩小校验下,直接对unknown类型上面做任何的操作都是不合法的
>
> 不确定的类型,不知此类型是什么

需要进行**类型缩小校验**操作,才能根据缩小之后的类型,进行对应的操作

```js
let foo:unknown = "aaa"
foo = 123
// 必须要先进行类型缩小校验
if(typeof foo === "string"){
  clg(foo.length)
}
```

#### void 类型  

>  void通常是用来指定一个函数如果是没有返回值的,那么他的返回值就是void类型

```ts
function foo(num:number):void{
  console.log(num)
}
const foo => void =()=>{}
// 可以传递不同类型的参数
const ExecFnType = (...args:any[]) => void
```

非常重要的一个点是type和interface,当类型比较复杂的情况下,我们可以使用type抽离出来

#### 函数类型表达式

```ts
type FooType = () => void
```

void通常是用来指定一个函数是没有返回值的

当上下文的类型推导出返回类型为void的类型时,不会强制要求函数一定不能返回值

#### never类型   极少使用never类型

> 永远不会发生值的类型
>
> 如果函数是一个死循环,或者抛出一个异常的话,使用never类型

某些情况下会自动定义推导出never类型

开发框架(工具)的时候可能会用到never

封装一些类型工具的时候,可以使用never类型体操的题目 never

```ts
function foo():never{
  throw new Error("12223")
}
// 因为直接返回一个空数组,会自动推导出一个never
function parseLyric():never[]{
  return []
}
```

#### 联合类型

当一个函数可以传入字符串类型或者是数组类型的话,可以使用联合类型

```ts
function foo(message:string|number){
  console.log(message)
}
```

#### tuple类型  元组类型  

> TypeScript提供了元组类型,元组类型在数组中使用,可以使用对象平替
>
> 元组数据结构中可以存放不同的数据类型,取出来的每个item也是有明确的类型的
>
> 介于数组和对象之间的一种类型
>
> useState的封装

```js
const names: [number,string,obj] = [12,"12",{12:12}]
```

可以在数组,或者使用自定义useHooks的时候,使用这个内容,可以使用元组,自定义返回结果

使用场景   `不同的类型`不推荐放到数组中( 可以放到对象或者元组当中 )

元组中是一定会确认返回值的,

## TypeScript细节

#### 联合类型和交差类型

从现有类型中重新构建出新类型   (**类型缩小**)

但在使用的时候需要特别的小心,使用类型缩小才可以使用

TypeScript可以根据我们缩小的代码结果,推断出更准确的类型

```ts
let foo:number | string = "123"
foo = 123
```

联合类型是由两个或者多个其他类型组成的类型,表示可以是这些类型中的任何一个值,联合类型中的每个成员都可以称之为联合对象

```ts
let foo:number & string = "123"
```



#### type和interface

#### 类型断言和非空断言

#### 字面量类型和类型缩小

#### 函数的类型和函数签名

#### 函数的重载和this类型

