##### finalization 可以在你的对象被垃圾回收时请求一个回调

在注册表中注册的对象被回收时,请求在某个时间点上调用一个清理回调

```js
const finalRegistry = new Finalization(()=>{
  clg("huishou")
})
finalRegistry.register(info,"why")
```

##### 逻辑赋值运算符

类似message = message ||=“默认值”

目前使用message = message ??= “逻辑赋值运算符”

Obj && obj.running && obj.running()

**非空判断加赋值**

###### method.at()

可以按索引号去拿到数组和字符串的值,可以传入负值的方式

Object.prototype.hasOwnProperty()  原型方法

Object.hasOwn()    静态方法 只是替代原型上hasOwnProperty

```js
Object.hasOwn(obj,"names")
```

##### 类方法和对象实例方法

在ES13里面加入了真正的类私有属性 **以#开头的类属性**

static totalCount = “70以”   公共属性

还可以设置静态代码块  static {} 

##### 类在编写的时候并不如函数那样更加方便

#### proxy 和Reflect 

之前通过Object.defineProperty来监听属性的变化 

##### 在Vue中使用Object.defineProperty来进行监听属性

是为了做监听值的改变,对于删除和新增是没有办法的,因为defineProperty根本不是用来做代理监听的.

###### 使用Proxy和reflect来代理整个对象

new Proxy(监听对象,handler)

```js
new Proxy(obj,{
  set:function(target,key,newValue){
    target[key] = newValue
  },
  get:function(target,key){
    return target[key]
  }
})
```

具有set和get两种模式,target,newValue,receiver代理

13个捕获器的效果和作用

1. getPropertyOf() 查看原型
2. setPropertyOf() 设置原型
3. defineProperty()设置属性描述符
4. deleteProperty() 监听删除属性
5. has()监听属性值是否发生了变化
6. apply(target,thisArgs,otherArgs)监听apply属性
7. construct() 监听new操作符

部分需要自己来实现代理的效果,比如apply(),delete(),

##### Reflect 代理对象操作符

新增的属性,Reflect本身就是一个对象,意味着反射

里面提供了很多操作JavaScript里面的方法

Object本身就是一个构造函数,不应该往里面添加过多的东西,而且作为一个顶级的构造函数

**使用proxy可以不操作原对象**,对proxy非常重要!

defineProperty,Reflect.delete,configurable属性为不可配置的,不可删除的

Reflect.deleteProperty() 返回值是一个布尔值,是否成功删除

##### Reflect的方法和Proxy上的方法是一一对应的

目前是和proxy一起来完成使用的

Reflect.set(target,key,newValue),他是会返回一个boolean类型

我们可以使用这个类型去做很多事,包括receiver属性

###### 传入的recevier值,对象就是Proxy对象

**Reflect和construct相配合,共同实现**

Person.call和apply两种方式

****

###### 异步代码的困境

回调地狱的困境

学习Promise的语法和操作

Promise.then(res)

const promise = new Promise(resolve,reject)

##### Promise解决异步处理

需要成功的回调和失败的回调,然后根据不同的回调去进行操作

返回一个对象,在对象上面添加成功和失败两种原型方法

Promise 类似这种方法,是放到原型上的方法

```js
const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{})
})
return promise
//同时这个写法是可以进行链式调用的,then监听成功,catch是监听失败的
```

##### Promise 其实就是一个契约  

传入一个回调函数,有两个参数,一个是resolve,另外一个是reject

##### Promise 状态的区分

创建一个promise对象

const Promise = new  Promise((resolve,reject)=>{

成功传入回调resolve()

失败传入 reject()

})

pendding  待定状态  已初始化 但没有兑现 也没有拒绝

fulfilled    兑现状态   

rejected   拒绝状态

##### 无论传入多少次,只会执行第一次的代码

**Promise的状态一旦发生改变 就会被锁死  就不会再进行改变**

executor是在创建Promise的时候,这个回调函数会被立即执行

###### resolve可以传入的值 

1. 普通值
2. 数组
3. 对象

###### resolve() 传入一个promise

当前promise的状态,他会根据传入的promise的状态来进行判断Promise的状态

传入一个promise的时候,会根据传入Promise的状态进行判断

resolve({

name:“kaobe”,

then(){}

})

##### 添加多个promise.then(res=>{})的方法

他每新创建一次  promise.then(()=>{}) 就会执行一次

每一个使用 promise.then()    或者使用 promise.catch的时候

都会是返回一个全新的promise

##### 