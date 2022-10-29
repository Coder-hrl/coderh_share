## 今日

#### Promise 

then方法的返回值

Promise.then()   Promise.catch()方法

###### promise.then函数方法本身就是返回一个新的promise的

这个promise的resolve和rejecte是需要自己来定义的

可以来return **作为第二个then的res值**

promise是支持链式调用的

###### promise所处的状态

会等待之前的状态

resolve要有不同的区别

######  重复调用Promise.then(),这是因为promise的方法 返回值是返回一个promise的

promise本身是支持链式调用的

每一个新的promise的都是新的调用.链式中的then是等待新的Promise之后执行的

可以使用throw Error Error自己抛出一个异常,来reject调用

只有当上一个promise.then()有成功或者失败回调之后才会进行处理

pending 

fuifilled

rejected

###### finally 无论Promise是成功还是失败,一定会执行这个回调的

###### Promise的类方法

Promise.all(),Promise.race(),Promise.resolve(),Promise.then()

当我们确定有自己的内容了,需要一个Promise来使用的话

分为三种方式   普通的值,thenable的值,或者一个新的Promise

Promise.reject()

****

**Promise.all()** 当所有的值都获取到之后,才会去执行后面的值,无论成功还是失败

新的Promise是由包裹的所有Promise共同决定的

当所有的Promise都为resolve的话,状态为resolve,会将收到的值合成**一个新的数组**

当有一个Promise为reject的话,状态就会变为reject,只会呈现出失败的值,调用catch函数

**allSettled方法**,等到所有的Promise都有状态(无论成功还是失败)的时候才会去执行这个过程

**会返回一个数组,数组里面是对象,里面包含一个status和value两个属性**

****

**race方法**,竞争竞赛的意思,谁先有结果,我就使用谁的结果,无论成功还是失败

**any方法**,Promise.any方法,他会等到只要有一个Promise有成功结果的时候调用这个函数

如果所有的Promise都是reject的话,就会报一个错误

###### 执行顺序  微任务/宏任务/事件队列

#### 迭代器

Iterator-Generator 迭代器操作   

容器:数组/链表/哈希表/树结构

依次访问数组/链表/哈希表等

在JavaScript中,只要符合迭代器对象,就能称之为迭代器

产生一系列(有限还是无限个)的标准方式

使用特定的next方法

一旦done为true,value为undefined,代表这个迭代器对象已经遍历完了

###### 使用迭代对象 数组

```js
const createArrayIteractor = {
next(){
  if(index < names.length){
    // 每调用一次就自增一次
    return { done: false, value: names[index++] }
  }else{
    return { done: true, value: undefined }
  }
}}
```

###### 迭代器 可迭代对象

**自己实现一个迭代对象**

```js
const infos = {
  [Symbol.iterator]:function(){}
}
```

const iterator = infos`[Symbol.iterator]()`

数组内部是用[Symbol.iterator]函数实现的

甚至可以使用 `nums[Symbol.iterator]()`实现可迭代对象

###### 原生的迭代器对象

对象本身是不可迭代的,并不是迭代对象

使用Object.entries()或者Object.keys()

iterator 迭代器

for of 和展开语法,yield生成器关键词

new WeakSet , new Set (iterator)

Promise.all(只要传入的是可迭代对象)就可以使用

Promise.race() Promise.all()  Array.from()

##### 面向对象的本质就是将一个对象进行拆分,调用,执行;

在解构的时候,没有解构所有的值

通过break,return和throw来中断循环的操作

##### 生成器  ` [Symbol.iterator](){}`  函数控制和使用的方案

更加灵活的控制函数什么时候执行和暂停执行

**yield 暂停等待结果**,   

1. 在function后面添加*号,
2. 生成器函数通过yield关键字控制函数的执行流程   
3. 函数本身返回值是一个生成器

默认会被yield来控制

`如果要执行函数内部的代码,需要生成器对象,调用他的next操作`

当遇到yield操作的时候,函数会进行挂起

##### 通过调用生成器函数,会返回一个生成器对象

在每一次调用next的时候,就会执行下一步操作

所有的yield的全部进行迭代

```js
function* foo(){
  console.log("zhixing111")
  yield "123"
}
```

是通过获取函数之后的对象之后的next进行调用的

如果要传递参数的话 const name = yield “”

##### return函数 让生成器提前结束

在function* 生成器生成的函数

在通过调用之后生成的对象,可以调用next操作符,也会调用return操作符

return意味着直接断掉

throw就是抛出一个异常  也会断掉整个生成器流程

```js
function* create(arr){
  yield* arr
}
```

yield* 去迭代其中的一个值,但是这个值一定是可以被迭代的

##### await和async 就是使用了yield和async,在里面使用的是非常多的

`[Symbol.iterator](){}`

###### 迭代器中断执行 

使用return,throw和break等关键字都可以中断使用