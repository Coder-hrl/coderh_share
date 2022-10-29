##### setState方法使用过程

> 为什么要使用this.state进行存储数据
>
> 为什么要使用this.setState
>
> 我们必须要使用固定的方式才能修改state里面的值,才能进行响应式开发
>
> 在类中调用方法出现this不为空的时候,是因为new绑定了

我们**必须要使用setState这种固定的方式**才能告诉React,我们需要数据进行改变

这个setState是继承自**Component**这个类,这个父类里面是有`setState`这个原型方法的

###### setState是进行异步更新的

```js
this.setState({
  counter:this.state.counter + 1
})
```

他是进行异步更新的,等函数执行之后,放到异步更新队列里面,执行结束之后进行异步更新

1. 可以显著的提高性能,把更新的Dom聚集在一起然后统一进行更新

   如果一次调用setState就更新一次,进行频繁的更新Dom性能优化会很低的,或者造成频繁更新页面

   所以会把所有需要更新的放在一起,统一进行更新,会进行diff算法来比较不同

2. 里面的**state应该与props同步更新**的,否则要出现很多问题

###### 在开发中使用redux还是比较多的

###### this.setState函数里面是有需要更新的数据和回调函数

```js
this.setState({},()=>{})
```

1. setTimeOut是宏任务,肯定能拿到啊

2. 因为元素被点击也是一个异步任务,宏任务级别的,也可以拿到更新后的值

合成事件是为了适应异步平台而出现的

> update加入到一个链表里面

##### setState数据的合并

> 是可以使用`this.setState({})` 可以使用对象,也可以使用回调函数
>
> **这个是一个回调函数,可以对函数重复进行相加**
>
> 没必要做累加的时候,最好使用`this.setState({})`

没有更新的数据,会使用Object.assign来完成对象的拷贝,因为源码做了很多

```js
Obejct.assign({},this.state,{message:需要更新})
// 一个新的对象,然后对其他两个对象进行拷贝
```

this.setState,是会`合并的,他会把所有对state操作的方法合并在一起`

```js
this.setState((prevState,props) => {
  // prevState 是指前一个state值
  return { : prevState. };
});
```

#### React的更新机制

jsx==> 虚拟Dom ==>真实Dom

props或者state发生改变的时候==>render==>构建新的Dom树==>新旧Dom树进行diff算法==>计算出差异进行更新==>更新到真实Dom中

`难点就是如何使用diff算法去更新Dom树`,找出其中的差异.

1. 同层节点相互比较
2. 不同类型的节点,产生不同的树结构,如果类型节点不一样,直接删掉,重新更新
3. 通过key来指定那些节点在不同的渲染下保持稳点

##### 类型不同的话 a标签转换为一个img标签

如果将一个a标签类型,转换为一个img标签属性,Dom更新的时候会直接销毁掉,重新生成子树

##### 如果类型相同 调用diff算法

会将直接的结果进行递归,对子节点进行递归比较

生成一个mutation,所以最好使用key来做一个标识

使用keys做一个优化,减少mutation的操作

但不要使用index来作为一个key,因为是没有任何优化的.

使用一个唯一值作为一个key

##### 问题.当一个小组件被调用的时候,他所有的组件都会被重新调用,但这样会造成性能浪费

应该只要更新需要被更新的组件,使用`shouldComponentUpdate`生命周期函数

```js
shouldComponentUpdate(nextProps,nextState){
  if(this.state.counter !== nextState.counter ){
    return true
  }
  return false
}
```

`PureComponent`这个继承的类组件可以来决定Component是否需要进行更新

###### PureComponent  判断是否需要更新模板

对模块的props和state进行比较,如果发生改变则更新,如果没有发生改变则不再进行更新

官网也建议我们使用pureComponent,从源码方面看到组件是否有isPureComponent,如果有的话,就会去进行**浅层的数据比较,**如果没问题的话会直接false,有问题返回true进行更新

###### memo 一个高阶组件

> 需要通过    `import {memo} from ‘react’`
>
> 使用类用pureComponent,使用函数来使用memo函数来看组件是否需要被更新

```js
const headerMemo = memo(function(){
  return ()
})
```

memo里面包裹函数

```js
const footerMemo = memo(function(){
  return ()
})
```

