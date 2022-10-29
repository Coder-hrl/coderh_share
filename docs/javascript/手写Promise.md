## 高阶函数

**一个函数里面传入另外一个函数,同时返回一个函数**

执行的作用域和定义的作用域不在一个区域

##### 函数柯里化 可以帮助我们优化我们的代码

意思就是每次只传入一个变量,更好的分层和复用性.

可以**缓存执行变量**,暂存一个变量

##### compose 主要使用的也是柯里化过程

type of 不可判断复杂数据类型,只可以判断基础数据类型

instanceof 主要使用的是原型链

**Object.prototype.toString.call()**可以用来判断类型变量

```js
Object.prototype.toString.call() == `[Object ${string}]`
```

```js
function isString(typing){
  return function(val){
    return Object.prototype.toString.call() == `[Object ${string}]`
  }
}
```

柯里化最主要的就是**多复用技术**,比如一段时间内一直重复的情况下

于此类似的是,对象实现类的做法

