---
title: React语法分析
---

## React 语法分析

> reduce 里面第一个回调函数,第二个值是初始化值
>
> pre, 前一次回调函数的结果,第一次的回调函数的结果用初始化值,**item,当前值 index,当前索引`arr ,被遍历的数组`**
>
> React 设计原则,要保持 state 数据的不可变性
>
> 我们永远不要直接去修改 state 里面的数据,而是返回一个新的数据

jsx 的本质是`React.createElement()`

我们所编写的 jsx 代码最终都会被转换为`React.createElement`

##### React.createElement()

第一个参数是标签名,第二个是配置{标签的属性},第三个是标签内容

##### 也可以在 babel 里面进行配置转换

```js
<h2>hello world</h2> React.createElement("h2",null,"hello world")
```

`null,代表这个位置是对象类型的`

##### 虚拟 DOM 的创建过程

> 通过 createElement 创建出一个 Element 对象树
>
> 是一种**编程理念**,通过 React.render 将虚拟 dom 和实际 dom 联系在一起
>
> 然后经过**React-dom**`render成真实Dom`,因为直接去修改真实 Dom 的代价是非常高的,而通过对象类型去比较代价就比较低了
>
> 使用 JavaScript 对象表现出来的一个树结构,用来表示标签的嵌套关系

通过 React.createElement()创建出 react.Element.

再根据 reac.element 创建出一个**JavaScript 对象树**,JavaScript 对象树就是**虚拟 Dom**,

组织数据的方式二叉树组织 dom 的方式

##### 为什么使用虚拟 Dom 而不使用真实 Dom 渲染呢

第一,**元素状态不容易跟踪,不容易 Dom 改变后进行按需修改**

第二,**操作真实的 Dom,性能是非常低的,而且我们要尽可能不要进行重复频繁的 Dom 操作**

第二，**为了适配`多端`应用,我们应该将多个修改 dom 的操作,连在一起对真实 dom 进行更新**

##### 使用 diff 算法,计算最少的差异区别,按需对 Dom 进行更新操作

Vue 里面存在 diff 双端对比元素对象

注意,在首屏渲染的时候是不会进行 diff 算法

##### 自己所遇到的问题,因为我在索引号用的是 index++,这样就会导致我们修改的是 index 本身,而不是单纯的 index+1

##### 对于在编写代码时,对于渲染 render,我们放到 render 函数的上面,功能放到 render 的下面
