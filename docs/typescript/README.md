##### 动态类型语言和静态类型语言

JavaScript是弱类型语言和动态类型语言,只有在运行时才能发现错误

TypeScript则是静态类型语言,可以在运行前发现错误

##### 源于JavaScript,始于JavaScript

兼容各种浏览器兼容性,因为他最终的运行结果是转换为JavaScript的

##### 我们为什么要学习TypeScript

1. 使得编写的程序更容易理解,函数的输入和输出以及外部条件
2. 可以在编译期间发现代码的错误, 同时还有代码补全,类型提示
3. 杜绝一些比较低级常见错误,完全兼容JavaScript

##### TypeScript中的数据类型

使用联合数据类型

```js
const arr1: string[] | number[] = [12, 32]
```

##### 类 class  封装继承多态

public 共有属性 

private 私有属性

protected  保护属性

readonly 只读属性

static 静态属性

##### interface  ?:可有可不有

##### 各种泛型加实战   

TypeScript是JavaScript和java的设计思想

##### TypeScript还是高于JavaScript的

类是TypeScript中最为重要的一点

方法器重载,构造器重载

`静态特征称之为属性`,`动态特征称之为方法`

把一个东西抽象成类,包含类中的属性和方法

##### Provide和inject

```js
info1 === info2 // 不等于 因为是不同的函数对象
```

##### 抽分  内聚  低耦合  函数式编程

JavaScript支持函数式编程

面向对象编程

##### 使用setup语法糖

1. 性能更加的简洁
2. 更好的性能
3. 更好的IDE类型推断性能
4. 默认暴露给组件实例

组件内代码会编译成setup函数的形式

##### script放到顶层 , template放到中间 这样更加符合react的编写原则



##### watch 和watchEffect的区别

1. 必须指定数据源

2. 可以拿到前后的value值
3. 默认第一次不会执行,需要配置immediate

watchEffect 

1. 自动收集依赖
2. 默认执行一次
3. 只能拿到最新的值



##### 路由器 交换机

路由器主要是`映射`一个路由表  ,提供`映射关系`

一般用来快速的查询设备



一个网站是可以编写多个网页,也可以在单页面中编写

而Vue-router的作用就是让一个页面中可以编写出现多个页面,通过路由来管理各个页面的映射关系

在页面中进行跳转时不会发生刷新和抖动



##### 前端请求,后端处理返回HTML整个数据

##### 使用ajax 前端将请求过来的数据进行渲染

##### 前后端分离开发

##### 前后端分离的基础上加了一个前端路由

pushState  replaceState  popState  go  forward  back

hash模式和history模式

##### 自动跳转路径

##### 在router-link中,被点击时会自动添加class

##### 登录守卫功能  path Redirect

back( ) 后退一步

forward( ) 前进一步

##### 状态管理库 pinia

跨页面和组件之间的共享

##### pinia用来替换vuex5中的大部分内容

1. 提供了更简单,更少的仪式,更加的适合compositionsAPi
2. 与TypeScript一起使用 更加的可靠的类型推断的支持

##### 在进行开发pinia中,是不可以进行解构的,同时开发的函数要以use为开头

**因为这个会失去响应性**,可以使用storeToRefs来进行解构

可以直接进行修改,而自己无需去进行dispatch



##### 为什么要学习axios

1. 在浏览器中使用XMLhttpRequest
2. 在node环境中使用http包
3. 默认添加使用promise  API
4. 拦截请求和转换数据
5. 默认使用json数据进行添加

##### 大部分公司一般是都具有后台管理系统的实现的

APP使用的一般较少,微信小程序和h5移动端页面比较多

最多的是用来管理的后台管理系统

##### 删除路由的方式

1. 相同的name的路由话,会直接删除掉
2. removeRoute()
3. 拿到获取到的router.addroute 然后执行这个函数

##### router.getRoutes是获取到所有的route对象





##### 有的时候,我们需要将状态 统一的放到全局中



在父子组件中使用props和emit,在使用爷孙组件中使用的时候provide和inject

##### 组件化开发 使用复杂的状态管理方案

vuex会被抽分成一个挂载到全局中的状态库

通过全局单例的形式存在

强制性的规则来维护视图和状态的独立性



##### VueComponent==>dispatch==>action(网络请求)==>commit==>mutation==>mutate==>state==>render==>VueComponent