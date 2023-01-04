---
title: Promise、生成器和迭代器
---

## Promise 的实现

### Promise

then 方法的返回值

Promise.then() Promise.catch()方法

#### promise.then 函数方法本身就是返回一个新的 promise 的

这个 promise 的 resolve 和 rejecte 是需要自己来定义的

可以来 return **作为第二个 then 的 res 值**

promise 是支持链式调用的

#### promise 所处的状态

会等待之前的状态

resolve 要有不同的区别

#### 重复调用 Promise.then(),这是因为 promise 的方法 返回值是返回一个 promise 的

promise 本身是支持链式调用的

每一个新的 promise 的都是新的调用.链式中的 then 是等待新的 Promise 之后执行的

可以使用 throw Error Error 自己抛出一个异常,来 reject 调用

只有当上一个 promise.then()有成功或者失败回调之后才会进行处理

pending

fuifilled

rejected

#### finally 无论 Promise 是成功还是失败,一定会执行这个回调的

### Promise 的类方法

Promise.all(),Promise.race(),Promise.resolve(),Promise.then()

当我们确定有自己的内容了,需要一个 Promise 来使用的话

分为三种方式 普通的值,thenable 的值,或者一个新的 Promise

Promise.reject()

---

**Promise.all()** 当所有的值都获取到之后,才会去执行后面的值,无论成功还是失败

新的 Promise 是由包裹的所有 Promise 共同决定的

当所有的 Promise 都为 resolve 的话,状态为 resolve,会将收到的值合成**一个新的数组**

当有一个 Promise 为 reject 的话,状态就会变为 reject,只会呈现出失败的值,调用 catch 函数

**allSettled 方法**,等到所有的 Promise 都有状态(无论成功还是失败)的时候才会去执行这个过程

**会返回一个数组,数组里面是对象,里面包含一个 status 和 value 两个属性**

---

**race 方法**,竞争竞赛的意思,谁先有结果,我就使用谁的结果,无论成功还是失败

**any 方法**,Promise.any 方法,他会等到只要有一个 Promise 有成功结果的时候调用这个函数

如果所有的 Promise 都是 reject 的话,就会报一个错误

#### 迭代器

Iterator-Generator 迭代器操作

容器:数组/链表/哈希表/树结构

依次访问数组/链表/哈希表等

在 JavaScript 中,只要符合迭代器对象,就能称之为迭代器

产生一系列(有限还是无限个)的标准方式

使用特定的 next 方法

一旦 done 为 true,value 为 undefined,代表这个迭代器对象已经遍历完了

###### 使用迭代对象 数组

```js
const createArrayIteractor = {
	next() {
		if (index < names.length) {
			// 每调用一次就自增一次
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
```

###### 迭代器 可迭代对象

**自己实现一个迭代对象**

```js
const infos = {
	[Symbol.iterator]: function () {},
};
```

const iterator = infos`[Symbol.iterator]()`

数组内部是用[Symbol.iterator]函数实现的

甚至可以使用 `nums[Symbol.iterator]()`实现可迭代对象

###### 原生的迭代器对象

对象本身是不可迭代的,并不是迭代对象

使用 Object.entries()或者 Object.keys()

iterator 迭代器

for of 和展开语法,yield 生成器关键词

new WeakSet , new Set (iterator)

Promise.all(只要传入的是可迭代对象)就可以使用

Promise.race() Promise.all() Array.from()

##### 面向对象的本质就是将一个对象进行拆分,调用,执行;

在解构的时候,没有解构所有的值

通过 break,return 和 throw 来中断循环的操作

##### 生成器 ` [Symbol.iterator](){}` 函数控制和使用的方案

更加灵活的控制函数什么时候执行和暂停执行

**yield 暂停等待结果**,

1. 在 function 后面添加\*号,
2. 生成器函数通过 yield 关键字控制函数的执行流程
3. 函数本身返回值是一个生成器

默认会被 yield 来控制

`如果要执行函数内部的代码,需要生成器对象,调用他的next操作`

当遇到 yield 操作的时候,函数会进行挂起

##### 通过调用生成器函数,会返回一个生成器对象

在每一次调用 next 的时候,就会执行下一步操作

所有的 yield 的全部进行迭代

```js
function* foo() {
	console.log('zhixing111');
	yield '123';
}
```

是通过获取函数之后的对象之后的 next 进行调用的

如果要传递参数的话 const name = yield “”

##### return 函数 让生成器提前结束

在 function\* 生成器生成的函数

在通过调用之后生成的对象,可以调用 next 操作符,也会调用 return 操作符

return 意味着直接断掉

throw 就是抛出一个异常 也会断掉整个生成器流程

```js
function* create(arr) {
	yield* arr;
}
```

yield\* 去迭代其中的一个值,但是这个值一定是可以被迭代的

##### await 和 async 就是使用了 yield 和 async,在里面使用的是非常多的

`[Symbol.iterator](){}`

###### 迭代器中断执行

使用 return,throw 和 break 等关键字都可以中断使用
