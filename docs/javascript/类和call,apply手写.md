---
title: class类
---

## class 类的三大特性

> 在 JavaScript 中类是原型的语法糖，其实内部还是使用的函数 prototype 实现的

1. 封装
2. 继承
3. 多态

**多态的前提是继承**,(实现接口) 2. 必须有父类引用,指向子类对象

不同数据类型实体,提供统一的接口,但是出现不同的表现行为

### ts 对没有限制的代码加上静态类型检测

不同的数据类型进行同一操作,表现出不同的行为,就是多态.

### JavaScript 中是一定存在多态的

### 对象字面量增强

1. 属性的简介

```js
let name = "obj"
var obj = {
  name,
  say(){}
  [key]
}
```

1. 方法的简写

### 计算属性的简写

### 使用[]的方式,实现对象里面的计算属性增强,可以让键值 key 引用外部的值

### 解构拆包 都是可以添加默认值的

数组和对象都是具有解构语法,可以快速的拆分对象和数组 非常常用

**在数组结构中,他的解构赋值是具有严格的顺序要求的**

解构也是可以写默认值的 const [name1 , name3=“default” ] = names

### ...剩余语法和展开语法

### 对象是根据 key 来获取对象值的

对象**重命名** const { height:Wheight } = obj

### 应用 在函数的参数中进行解构

```js
function ({ id , x , y }){
 	console.log(id,x,y)
}
```

自动对函数其解构赋值,在实际开发中经常使用

---

### 手写 call 和 apply 函数

Function.prototype.call(thisArgs,...otherArgs)

```js
thisArgs = thisArgs == null || thisArgs == undefined ? window : Object(thisArgs);
Object.defineProperty(this.Arg, 'fn', { configurable: true, ennumberable: false, value: fn });

// 使用delete 方法 可以进行删除属性
delete fn;
```

封装组件,全部拆分

### Bind 函数 会返回一个绑定 this 之后的新的函数

```js
return () => {}; //因为是箭头函数,所以此处的this是函数的this
```

### 先将基本功能函数完成,然后再一点点的新增功能

### ECMA 新描述概念

词法环境 **一般由环境记录和外部环境一起构成,在函数声明的时候,代码块语句,try-catch,当代码执行的时候,就会被创建出来**

暂时性死区,存在变量提升,但是存在暂时性死区

**只有在执行到之后才可以被访问**

### 环境记录 ER (environment record)
