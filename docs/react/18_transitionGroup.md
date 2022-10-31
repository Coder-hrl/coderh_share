## React 动画

> 给页面添加动画,来让用户的体验效果变的更好
>
> **yarn add react-transition-group**

主要包括四个组件,与平台无关的组件,意味着 在`dom`和`react-native`都可以使用

1. Transition 与平台无关的 transition
2. CssTransition 前端开发中 CSS transition 使用
3. SwitchTransition 两个组件显示和隐藏的时候使用
4. TransitionGroup 将多个动画包括其中

也是通过使用 class 类来进行 显示和隐藏的,与 Vue 里面的 transition 还是很一样的

##### CssTransition 会给到三个状态,一个是 apper,一个是 enter,exit

分别是即将进入,进入,退出 。

在 Csstransition

1. 里面有一个`in`传入 boolean 值,
2. 还有一个`classNames`传入类名
3. 传入一个`timeout`传入数字为时间

apper-active apper-done 三个类来自动添加属性

enter-active enter-done

exit-active exit-done

umMountedExit 为 true 会自动销毁,为 false 则不会销毁

onEnter(()=>{})同时也会有很多生命周期函数

> 一个使用 js 的方式,另外一种则是通过 CSS 的形式

##### SwitchTransition 可以与 CSSTransition 一起进行使用

###### 纯函数

> React 中纯函数的核心,**一定的输入保证一定的输出**,
>
> 第二**不会对全局中任何属性产生任何副作用**

1. **确定的输入 一定产生一个确定的输出,**
2. **不会**在全局中**产生副作用**,不能对**其他的东西进行改变**
3. 包括**参与定义的变量不能发生改变**,注意参与定义的变量不能在以后中发生改变

```js
let num1 = 100;
function add(num2) {
	return num1 + num2;
}
// 不是一个纯函数,因为num1可能会发生改变,就不会让一定的输入产生一定的输出
```

不要去修改 props 里面的属性,要保持 state 和 props 的不可变性

> 我们要去像保护纯函数一样去,保护 props 不会发生改变
