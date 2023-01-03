---
title: this指向
---

## JavaScript 高级

1. 函数细节

2. 对象细节

   - 浏览器原理的内容

   - 渲染树,Dom 树等

3. 进阶型的内容

   - Es6 和原型链 继承等新特性问题
   - ES6 到 Es13 的新的 api

4. 手写原理和工具函数等内容

5. 理解概念,回调函数和其他概念

6. 节流 防抖 深拷贝,手写 Promise,eventBus 等概念

7. 响应式原理和 React 时间片 fiber 原理

8. **要编写逻辑清楚,可读性强的代码**

### **this 的指向问题**

1. 默认调用,对象调用,new 调用 强绑定

函数中的 this 指向

三个不同的调用方式会产生截然不同的效果

直接调用和对象隐式绑定调用和 call,apply,bind 方法进行绑定

1. 默认绑定
2. 隐式绑定
3. new 绑定
4. 强绑定(显示绑定)

严格模式下,独立函数调用的是 undefined,因为严格函数下 this 是 undefined

对象调用是指**是某个对象发起的调用**.内部,偷偷的绑定

- **实现类中的 new 绑定**,这是自动绑定的
- 创建对象,绑定原型 prototype,绑定 this,返回其他对象
- 强制 this 指向 obj 对象

apply 和 call 第一个参数是需要被绑定 this,第二个参数是传给的额外值

bind 会创建一个新的函数,这个函数是已经被绑定了 this 的函数

在 React 中使用的比较多进行调用

### 内置函数的绑定调用

setTimeout 的 this 指向的是 window

第一个是回调函数,第二个则是传入指向的 this 对象

## this 规则绑定的优先级问题

显示绑定的优先级是高于其他绑定的优先级的

**new 绑定的优先级是高于显示绑定的**

new 不可以和 call 和 apply 一起使用的,比 bind 优先级更高

**bind 优先级是高于 call 和 apply 的**

new 高于 bind 高于 call 和 apply 高于隐式高于默认

### 箭头函数 无 this

apply 和 call 之间使用的 null,undefined 则是使用的**默认绑定规则**

## this 绑定之外 忽略显示绑定

1. 如果传入 null 或者 undefined,则是使用默认的 window 绑定规则
2. 严格模式下,传入的 string 是普通类型,一般模式下是包装类型的

默认绑定,则绑定的是 window 对象,严格模式下默认绑定 this 是 undefined

### 箭头函数的使用 arrow-Function

箭头函数不会绑定 this 的,他所绑定的是自己所定义的地方

没有 arguments 参数,箭头函数不能作为构造函数来使用,因为没有 this

如果你要返回一个对象的话,你必须要使用({}),或者=>[]

### 数组是可以进行链式调用

```js
const result = nums.forEach(item=>{}).filter((item,index)=>{}}
```

### 箭头函数的 this

> 不绑定 this,只是箭头函数外层决定 this

箭头函数中就是没有 this,就是变量寻找的问题,

### this 的查找规则

是函数的 this 查找规则,这个 this 的查找规则是函数自己所定义的地方

注意 箭头函数的 this，其实拿到的是外部函数中的 this，对象中是没有 this 的，只有函数才会存在自己的 this

**他会自动去找自己所定义的`函数`中的 this**

**而外部的定义的函数的 this，则是根据运行时的 this 决定的**

```js
const _this = this;
```
