---
title: React起源
---

## react

> 是一个优秀操作视图的 JavaScript 库,
>
> 目前大公司用的最多,如果要进阶,react 必不可缺.上限比较高,下限比较低
>
> 前端的先驱者,也是目前前端开发者用的最多的框架
>
> 单一数据流,虚拟 Dom 和 diff 算法操作视图
>
> Vue 自动挡,React 手动挡,Vue 使用模板,React 拥抱 js 使用 jsx

- 起源

2013 年开源的框架,以组件的方式划分成一个个组件,

Ul 以`jsx`来描述,以`state`来存储组件里面的状态,听过 setState 来改变组件状态

- 声明式编程

它允许只需要改变状态来更新页面,通过最新的状态来更新我们的 UI 页面

- 组件化开发

通过一个个组件来实现一个个页面,实现组件工程化

- 多平台适配 react-native

可以在多端适配

- 学习 react-hooks 来学习 react 的思想

### 学习 React

在`getElementByTagName`方式和`querySelector`方式中获取的元素也不同

一步步的命令进行操作,称之一个命令式编程

### 依赖三个库 因为 react-native 所以拆分成了三个库

`react` 核心代码库,react 和 react-native 共同的代码.

`react-dom` react 渲染不同平台所依赖的库,渲染 dom 的代码

`babel` 将 jsx 编译解析为 js 文件,目前还有**@babel/preset-typescript,@babel/preset-env,@babel/preset-react**

### 引入方式

1. CDN 引入
2. 下载库本地引用
3. npm 包,脚手架下引用

### 默认导出一个 ReactDOM

可以通过`ReactDOM.render()`来渲染一个函数

第一个参数是渲染的对象,第二个则是需要挂载的对象

```js
<script type='text/babel'>
	// 里面存在一个ReactDOm的对象 const app = document.querySelector('#app'); //
	需要使用里面的render函数,第二个对象则为挂载对象 ReactDOM.render(
	<h2>hello world</h2>, app)
</script>
```

**若需要挂载的对象里面有内容则会被覆盖**

在微信小程序和 Vue 里面使用`{{}}`胡须语法,在 react 里面则使用`{}`大括号语法

`jsx`多个组件或标签,**在最外层只能有一个标签**,一种方法是使用一个**div 作为根标签**,另一种是片段来代替

```js
<button onClick={test}></button>
// 需要使用{}
```

**react 需要自己手动进行渲染**

```js
function render() {
	ReactDOM.render(
		<div>
			<h2>{message}</h2>
			<button onClick={test}>点我进行改变</button>
		</div>,
		app,
	);
}
// 每次进行函数操作的时候需要手动进行render()
render();
```

### 类组件化实现

将自己所写的代码放到 class 类中,进行封装,需要 super 继承,后声明初始值 this.state 来进行实现

```js
 class App extends React.Component {
      // 构造器中使用
      constructor() {
        super()
        // 这个名称是固定的,不能起其他名字
        this.state={
          this.message = "hello world"
        }
      }
      // render函数渲染
      render() {
        return (
          <div>
            <h2> {this.message} </h2>
          // 需要在这里使用bind绑定this
            <button onClick={this.test.bind(this)}>改变</button>
          </div>
        )
      }
      // 函数方法
      test() {
        console.log(this);
        // 这里的this是undefined
        // 需要使用this.setState({})函数来进行使用
        // this.message = "libai niubi!!"
      }
    }
```

需要使用**setState 来进行修改 state 里面的参数**

```js
this.state = {
	message: 'libai',
};
// 这两个方法都是固定的,不能随便取名字
// 同时this.setState是一个函数方法
this.setState({
	name: 'qingfengwuya',
});
```

注意这个 setState 在进行操作对象等复杂属性时,因为引用地址的存在,React 是不清楚数据是否发生了改变,需要来**进行浅拷贝来告诉 React 已经发生了改变**

### Jsx 语言在通过 babel 转换之后是默认添加“use static”开启严格模式,所有的 this 是被转换为 undefined 的

### 为什么类中的方法 this 是指向 undefined,因为函数的 this 是动态的,在调用时才会确认 this,对象调用是调用隐式绑定的 this 的

注意在 React 渲染数组中,可以使用数组的 map 返回新数组的方法来进行渲染,但是我还是希望将大层面的数据处理和 HTML 渲染分开,保持上方数据处理,下方视图尽量只是用来渲染.

### JSX 语法介绍和使用

> 是 React 中新型编写 HTML 的一种方式,需要通过 babel 来进行转换,使用 React.createElemnt 的方式来创建元素,其实就是 xml 语法的方式
>
> 是嵌入到 js 中的一种语法方式

```jsx
const apple = <div>{}</div>;
```

1. 在事件绑定中使用 on 外加驼峰的方式声明事件的方式
2. 将 class 在 React 中使用 className 在编写时推荐,当然 class 在 jsx 中是会识别的,会警告!
3. 在 jsx 结构中,只能有一个根元素,可以使用 Fragment 或者使用<></>的方式
4. 在展示 boolean,undefined 和 null 时,React 在界面上展示为空,需要手动转换为字符串来进行展示
5. Object 类型,不能直接放到页面上展示,需要将里面的属性转换为 number 和 string 的方式来展示
6. 可以插入相对应的表达式来进行展示,在日常开发中三元表达式比较多,是返回表达式的结果
7. jsx 中绑定属性,关于属性是如何绑定的,我们可以使用{}的方式来统一进行数据绑定

### 什么情况下使用<></> 什么情况下 使用 Fragment ,什么情况下使用 div 呢

经实践操作之后,**添加 key 时,使用 fragement,什么都不操作,使用<></>,在添加 className 和 id 等属性和事件时,是需要使用 div 的**
