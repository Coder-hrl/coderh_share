## JavaScript高级

1. 函数细节

2. 对象细节

   - 浏览器原理的内容

   - 渲染树,Dom树等

3. 进阶型的内容

   - Es6和原型链 继承等新特性问题
   - ES6到Es13的新的api

4. 手写原理和工具函数等内容

5. 理解概念,回调函数和其他概念

6. 节流 防抖 深拷贝,手写Promise,eventBus等概念

7. 响应式原理和React时间片fiber原理

8. **要编写逻辑清楚,可读性强的代码**

##### **this的指向问题**

1. 默认调用,对象调用,new调用 强绑定

函数中的this指向

三个不同的调用方式会产生截然不同的效果

直接调用和对象隐式绑定调用和call,apply,bind方法进行绑定

1. 默认绑定
2. 隐式绑定
3. new绑定
4. 强绑定(显示绑定)

严格模式下,独立函数调用的是undefined,因为严格函数下this是undefined

对象调用是指**是某个对象发起的调用**.内部,偷偷的绑定

- **实现类中的new绑定**,这是自动绑定的
- 创建对象,绑定原型prototype,绑定this,返回其他对象
- 强制this指向obj对象

apply和call第一个参数是需要被绑定this,第二个参数是传给的额外值

bind会创建一个新的函数,这个函数是已经被绑定了this的函数

在React中使用的比较多进行调用

##### 内置函数的绑定调用

setTimeout的this指向的是window

第一个是回调函数,第二个则是传入指向的this对象

##### this规则绑定的优先级问题

显示绑定的优先级是高于其他绑定的优先级的

**new绑定的优先级是高于显示绑定的**

new不可以和call和apply一起使用的,比bind优先级更高

**bind优先级是高于call和apply的**

new高于bind高于call和apply高于隐式高于默认

##### 箭头函数   无this

apply和call之间使用的null,undefined则是使用的**默认绑定规则**

#### this 绑定之外 忽略显示绑定

1. 如果传入null或者undefined,则是使用默认的window绑定规则
2. 严格模式下,传入的string是普通类型,一般模式下是包装类型的

默认绑定,则绑定的是window对象,严格模式下默认绑定this是undefined

##### 箭头函数的使用 arrow-Function

箭头函数不会绑定this的,他所绑定的是自己所定义的地方

没有arguments参数,箭头函数不能作为构造函数来使用,因为没有this

如果你要返回一个对象的话,你必须要使用({}),或者=>[]

##### 数组是可以进行链式调用

```js
const result = nums.forEach(item=>{}).filter((item,index)=>{}}
```

##### 箭头函数的this

>不绑定this,只是箭头函数外层决定this

箭头函数中就是没有this,就是变量寻找的问题,

###### this的查找规则

是函数的this查找规则,这个this的查找规则是函数自己所定义的地方

**他会自动去找自己所定义的`函数`中的this**

```js
const _this = this
```

