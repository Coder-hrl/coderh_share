## TypeScript

##### 动态类型语言和静态类型语言

JavaScript 是弱类型语言和动态类型语言,只有在运行时才能发现错误

TypeScript 则是静态类型语言,可以在运行前发现错误

##### 源于 JavaScript,始于 JavaScript

兼容各种浏览器兼容性,因为他最终的运行结果是转换为 JavaScript 的

##### 我们为什么要学习 TypeScript

1. 使得编写的程序更容易理解,函数的输入和输出以及外部条件
2. 可以在编译期间发现代码的错误, 同时还有代码补全,类型提示
3. 杜绝一些比较低级常见错误,完全兼容 JavaScript

##### TypeScript 中的数据类型

使用联合数据类型

```js
const arr1: string[] | number[] = [
	12, 32,
];
```

##### 类 class 封装继承多态

public 共有属性

private 私有属性

protected 保护属性

readonly 只读属性

static 静态属性

##### interface ?:可有可不有

##### 各种泛型加实战

TypeScript 是 JavaScript 和 java 的设计思想

##### TypeScript 还是高于 JavaScript 的

类是 TypeScript 中最为重要的一点

方法器重载,构造器重载

`静态特征称之为属性`,`动态特征称之为方法`

把一个东西抽象成类,包含类中的属性和方法

##### Provide 和 inject

```js
info1 === info2; // 不等于 因为是不同的函数对象
```

##### 抽分 内聚 低耦合 函数式编程

JavaScript 支持函数式编程

面向对象编程

##### 使用 setup 语法糖

1. 性能更加的简洁
2. 更好的性能
3. 更好的 IDE 类型推断性能
4. 默认暴露给组件实例

组件内代码会编译成 setup 函数的形式

##### script 放到顶层 , template 放到中间 这样更加符合 react 的编写原则

##### watch 和 watchEffect 的区别

1. 必须指定数据源

2. 可以拿到前后的 value 值
3. 默认第一次不会执行,需要配置 immediate

watchEffect

1. 自动收集依赖
2. 默认执行一次
3. 只能拿到最新的值

##### 路由器 交换机

路由器主要是`映射`一个路由表 ,提供`映射关系`

一般用来快速的查询设备

一个网站是可以编写多个网页,也可以在单页面中编写

而 Vue-router 的作用就是让一个页面中可以编写出现多个页面,通过路由来管理各个页面的映射关系

在页面中进行跳转时不会发生刷新和抖动

##### 前端请求,后端处理返回 HTML 整个数据

##### 使用 ajax 前端将请求过来的数据进行渲染

##### 前后端分离开发

##### 前后端分离的基础上加了一个前端路由

pushState replaceState popState go forward back

hash 模式和 history 模式

##### 自动跳转路径

##### 在 router-link 中,被点击时会自动添加 class

##### 登录守卫功能 path Redirect

back( ) 后退一步

forward( ) 前进一步

##### 状态管理库 pinia

跨页面和组件之间的共享

##### pinia 用来替换 vuex5 中的大部分内容

1. 提供了更简单,更少的仪式,更加的适合 compositionsAPi
2. 与 TypeScript 一起使用 更加的可靠的类型推断的支持

##### 在进行开发 pinia 中,是不可以进行解构的,同时开发的函数要以 use 为开头

**因为这个会失去响应性**,可以使用 storeToRefs 来进行解构

可以直接进行修改,而自己无需去进行 dispatch

##### 为什么要学习 axios

1. 在浏览器中使用 XMLhttpRequest
2. 在 node 环境中使用 http 包
3. 默认添加使用 promise API
4. 拦截请求和转换数据
5. 默认使用 json 数据进行添加

##### 大部分公司一般是都具有后台管理系统的实现的

APP 使用的一般较少,微信小程序和 h5 移动端页面比较多

最多的是用来管理的后台管理系统

##### 删除路由的方式

1. 相同的 name 的路由话,会直接删除掉
2. removeRoute()
3. 拿到获取到的 router.addroute 然后执行这个函数

##### router.getRoutes 是获取到所有的 route 对象

##### 有的时候,我们需要将状态 统一的放到全局中

在父子组件中使用 props 和 emit,在使用爷孙组件中使用的时候 provide 和 inject

##### 组件化开发 使用复杂的状态管理方案

vuex 会被抽分成一个挂载到全局中的状态库

通过全局单例的形式存在

强制性的规则来维护视图和状态的独立性

##### VueComponent==>dispatch==>action(网络请求)==>commit==>mutation==>mutate==>state==>render==>VueComponent
