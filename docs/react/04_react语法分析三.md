> reduce里面第一个回调函数,第二个值是初始化值
>
> pre, 前一次回调函数的结果,第一次的回调函数的结果用初始化值,**item,当前值index,当前索引`arr ,被遍历的数组`**
>
> React设计原则,要保持state数据的不可变性
>
> 我们永远不要直接去修改state里面的数据,而是返回一个新的数据

jsx的本质是`React.createElement()`

我们所编写的jsx代码最终都会被转换为`React.createElement`

##### React.createElement()

第一个参数是标签名,第二个是配置{标签的属性},第三个是标签内容

##### 也可以在babel里面进行配置转换

```js
<h2>hello world</h2> React.createElement("h2",null,"hello world")
```

`null,代表这个位置是对象类型的`

##### 虚拟DOM的创建过程

> 通过createElement创建出一个Element对象树
>
> 是一种**编程理念**,通过React.render将虚拟dom和实际dom联系在一起
>
> 然后经过**React-dom**`render成真实Dom`,因为直接去修改真实Dom的代价是非常高的,而通过对象类型去比较代价就比较低了
>
> 使用JavaScript对象表现出来的一个树结构,用来表示标签的嵌套关系

通过React.createElement()创建出react.Element.

再根据reac.element创建出一个**JavaScript对象树**,JavaScript对象树就是**虚拟Dom**,

组织数据的方式二叉树组织dom的方式

##### 为什么使用虚拟Dom而不使用真实Dom渲染呢

第一,**元素状态不容易跟踪,不容易Dom改变后进行按需修改**

第二,**操作真实的Dom,性能是非常低的,而且我们要尽可能不要进行重复频繁的Dom操作**

第二，**为了适配`多端`应用,我们应该将多个修改dom的操作,连在一起对真实dom进行更新**

##### 使用diff算法,计算最少的差异区别,按需对Dom进行更新操作

Vue里面存在diff双端对比元素对象

注意,在首屏渲染的时候是不会进行diff算法

##### 自己所遇到的问题,因为我在索引号用的是index++,这样就会导致我们修改的是index本身,而不是单纯的index+1

##### 对于在编写代码时,对于渲染render,我们放到render函数的上面,功能放到render的下面