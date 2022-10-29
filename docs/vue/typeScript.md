## Typescript

- 在代码编写过程中，错误出现的越早越好.ide的作用就是帮助我们提早发现错误
- 能在开发解决的bug就不要留在项目上线,静态类型检测
- 因为javasript没有自己的类型检测，所以typescript帮助我们做到这件事
- typescript是javascript代码的超集，加强版的javascript
- 源于javascript，终于javascript。可以编译出纯净,简洁的javascript
- 因为javascript在一些很明显的缺失参数的代码不能进行校验
- 一个小小的错误可能会导致整个项目陷入崩溃
- 前端人员对类型思维的缺失,从其他转过来的人总是担心代码不够健壮,太过松散

1.flow和typescript 2. typescript 胜出 

   小写的string 和大写的String 的区别

大写的String 是js里面的包装类类型  尽量不要使用大写的String

string 则是ts的基本数据类型

如果一个变量没有声明,他会根据你声明的变量来`进行类型推断`

```js
let foo ="name" // 刚开始会做类型推断
//是不允许再一次给foo 赋值为123的
```

typescript包含着javascript,他有强类型，他是完全包含js的，同时又有很多新的特性

`不区分int类型和float类型`

```ts
let name:number = 12
let name:number = 0x100
```

```ts
let bol:boolean = true
const string:string = "message"
```

在给未知的类型赋值时,要加一个类型

```ts
const name: [string,number] = ['1',2] //不推荐
const name: Array<string> = ['1','2'] //不推荐
const name: string[] = [] //推荐
const info = {} //让自身做一个对对象的推断
const a: null = null
const unde: undefined = undefined
```

ts类型检测,不能在对象里面使用相同的key

有的时候我们无法确定即将传来的数据是什么类型的,这个时候就可以使用any类型

any 当我们进行一些类型断言的时候,我们可以先转换为any类型

any  当我们不想写方法或者过渡重构any的时候可以使用any,在引入第三方库的时候,如果不太懂ts类型注解可以使用any

unknown 不确定的数据类型,当我们不能明确知道数组类型的时候,可以使用any类型，也可以使用unknown类型

unknown和any,any随便用都不会报错,但是unknown在一些情况下,是不能使用的

在传入unknown类型的时候,在对其他进行赋值的时候会进行报错,尽量不要使用unknown

当一个函数没有返回值的时候会返回一个void类型.

```ts
function(num1: number,num2: number)：void{
  可以返回一个null和undefined类型的
}
```

  `never` 类型永远不会有返回值的类型 , 应该后边加一个never类型

当返回错误的时候也可以使用never

```ts
function (num1: string|number){
  switch(typeof num1){
    case ’string':
      console.log()
      break;
  }
} //联合类型
```

##### tuple 元组类型  多种元素结合在一起 的类型

tuple类型就是将数组类型结合在一起,组合成类似数组的方式

数组的弊端,我们无法知道我们拿到的数组的类型, 可以使用泛型来进行优化

```ts
const info: [string,number,number] = ['a',1,2]
//元组类型 只有元组才可以这样使用 ,可以进行解构
//数组的使用则是
const info: string[] = []
```

函数的参数类型判断和返回值类型判断,如果参数类型都有的话,会进行一个类型推断

在定义一个函数的时候,参数类型最好都要加上类型注解,

在函数中,上下文中的函数他能推导出来对应的一些类型注解.

```ts
function printPoint(point:{x: number,y: number,z?: number}){}
//属性之间的分割可以用逗号,也可以用分号
?. //可选链类型
```

##### type 可以给某些属性 起一个别名.

Typescript,可以让我们使用一个联合类型,由两个,或者多个类型,可以进行选择

```ts
function print(x: number|string|boolean){}
// 使用联合类型的时候,会在使用方法的时候,导致方法报错,无法实现
// narrow 缩小
// 让一个参数本身变成可选的,function(num?:string)
```

在函数调用 都不写的情况下,也会传入一个undefined类型

type 是用来定义类型别名的.

```ts
type Idtype = string|number|boolean
```

##### 类型断言  as (把什么东西当做什么)

有时候typescript会无法获取到具体的数据类型,你可以直接使用 as 断言成一个类型

```ts
const el = document.getElementById('') as HTMLimageElement
//将一个宽泛的类型转换成一个具体的数据类型
const message = 'message'
//将一个message string类型重新赋值给一个数字
const num:number = (message as any) as number
//这样就可以将一个string类型强制转换为一个number类型
```

#### 非空类型断言

在参数为 可选的时候 ?:   在使用方法的时候会出现参数可能为空的情况

ts-node在执行的时候会默认使用一个tsconfig.js,会导致编译出错的情况发生

这个时候就可以使用一个`非空断言 !` 告诉typescript一定不为空

`?. 可选链 `在javascript和typescript的时候使用 ,在js和ts中都存在 `ECMAscript2020可选链`

当`读取对象属性为空`的时候,会`进行短路`并立刻`返回我一个undefined` , 当对象属性不为空会接着执行下去,

所以我们`可以在对象有值的时候取,没值的时候不取`,使用_?._来让我们达到这个判断

#### !! 和??

!!     `强制类型转换`,转换为`boolean类型`, 运算符,和boolean()作用相同

??    `空值合并操作符`,如果一方为`undefined或null`的情况下,返回另一方的值

建议使用空值合并操作符??

字面量类型

```ts
const name:123 = 123   const str:'' = ''
//这种定义不为string 或者number 而是具体一个数的类型,则为字面量类型
type String = 'center'|'left'|'right'
//如果要在后面添加一个{},则是对象里面的字面量
//这个的用法常用于 给元素加可选值.给元素加限定值
type methods = 'POST'|'GET'
//或者使用类型断言 as  直接转化为methods类型
```

#### 类型缩小

1. typeof 类型缩小  可以用if()进行类型判断
2. ==或===
3. switch case 进行类型判断
4. instanceof 原型链判断  instanceof 创建实例
5. type Fish={swimming()=>{}}
6. if {swimming in name}

函数是javascript的一等公民,函数在javascript里面很重要的东西

在javascript里面函数可以作为另一个函数的返回值,进行传递

#### 函数类型

```ts
() => void 函数类型
type foo :() => void
//定义常量时的类型
type AddFun = (num,num1)=>number
const Add:AddFun =(num:number,num1:number)=>{}
type (num:number,num2:number)=>number
```

联合类型,需要进行很多类型判断才可以进行相加。

函数名称相同,但是函数的参数不同就会进行函数重载,在js中多个

```ts
//在函数的重载操作中,ts与其他语言不同
function add(num:number,num2:number):number
function add(num:string,num2:string):string
function add(num:any,num2:any):any{
  return num + num2
}
//这就是函数的重载 虽然上面num是any  但是在调用的时候,他还是会进行与上面函数的匹配
```

如果能直接通过`联合类型直接实现`的话就用`联合类型`, 

但是如果`联合类型不太方便`实现的话就使用`函数重载`

```ts
class person{
  name:string
  age:number
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
  eating(){}
}
// 值都是要初始化的     
// 只要保证 定义的对象都是继承于一个类的时候,可以使用
public   // 任何人可见的
private  // 私有属性   无法通过 const name =new Person() name.进行访问
protected // 受保护的
// 只能在子类或者类内部进行使用,其他地方无法访问
readonly // 只读属性
class person{
  readonly name:string = ""
  constructor(name:string){
     this.name =name
  }
  // 可以在创建类的时候进行一个赋值给一个初始值.
  // 私有属性以_来开头
  static 静态属性  // 直接定义在类上面的,无需去new 一个实例去使用
}
// 抽象类是不可以被实例化的
```

```ts
const info:{name:string,age:number}{
  name:'21',
   age:21
}
//起别名的方式来声明对象
type infoType = {name:string ,age:number}
// 另外一种声明对象的方式则是接口的形式
// 一般在使用接口的时候会使用I为开头
interface IinfoType{
 readonly name:string
  age:number
  score?:number
}
// 通过interface来定义索引内容
interface class{
  [index:number]:string
  [name:string]:number
}
type info =(n1:number,n2:number)=> number
// 多继承
interface Iclass{
  eating:() => void
}
// implements
// interface和 type的区别   interface 一般定义对象类型 其他的一般使用type类型
//interface 可以重复定义属性和方法 但是type 别名则不一样 不可以重复定义
interface Info{
  name:string
}
interface Info{
  age:number
}
```

`interface定义的接口`是可以重复定义的,但是由`type定义的则不可以重复定义`

`enum` 枚举属性

```ts
enum Direction{
  //如果将LEFT的值设为1,的时候,他会在后面的数字依次增加
  LEFT,
  RIGHT,
  TOP,
  BOTTOM
}//代码阅读性很强，必须要穷举结束才可以
function turnDirection(direction:Direction){
  switch(direction){
    case Direction.LEFT:{
      
    }
  }
}
```

认识泛型,泛型在函数式编程中非常重要

软件工程，编写一些可复用的代码

在定义这个函数的时候不完全写死,这些类型,而是在使用参数的形式来决定他的类型

```ts
function sum<Type>(sum:type):type{
  
}
function add<T>(n1:T,n2:T):T{
  
}
//要在这个地方写上自己的type类型
sum<string>('21')
<K,V> key value类型
  <O> object 类型
  <E> element 类型
...agrs:O[]
// 必须参数必须要在可选参数的前面
const arr = stirng[]
```

#### 模块化和命名空间

有的时候会出现命名冲突的问题

```ts
namespace name{
  export function format(time:string){
    // 命名空间默认是在内部使用的,如果要使用,是要导出来进行使用的
  }
}
```

.d.ts 类型检测,类型说明  提前告诉ts,不让typescript进行报错

内置类型声明是指typescript内置放进去的类型说明