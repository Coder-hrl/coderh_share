## react

> 是一个优秀操作视图的JavaScript库,
>
> 目前大公司用的最多,如果要进阶,react必不可缺.上限比较高,下限比较低
>
> 前端的先驱者,也是目前前端开发者用的最多的框架
>
> 单一数据流,虚拟Dom和diff算法操作视图
>
> Vue自动挡,React手动挡,Vue使用模板,React拥抱js使用jsx

- 起源

2013年开源的框架,以组件的方式划分成一个个组件,

Ul以`jsx`来描述,以`state`来存储组件里面的状态,听过setState来改变组件状态

- 声明式编程

它允许只需要改变状态来更新页面,通过最新的状态来更新我们的UI页面

- 组件化开发

通过一个个组件来实现一个个页面,实现组件工程化

- 多平台适配 react-native

可以在多端适配

- 学习react-hooks来学习react的思想

#### 学习React

在`getElementByTagName`方式和`querySelector`方式中获取的元素也不同

一步步的命令进行操作,称之一个命令式编程

###### 依赖三个库     因为react-native所以拆分成了三个库

`react` 核心代码库,react和react-native共同的代码.

`react-dom` react渲染不同平台所依赖的库,渲染dom的代码

`babel` 将jsx编译解析为js文件,目前还有**@babel/preset-typescript,@babel/preset-env,@babel/preset-react**

###### 引入方式

1. CDN引入
2. 下载库本地引用
3. npm包,脚手架下引用

###### 默认导出一个ReactDOM

可以通过`ReactDOM.render()`来渲染一个函数

第一个参数是渲染的对象,第二个则是需要挂载的对象

```js
<script type="text/babel">
    // 里面存在一个ReactDOm的对象
    const app = document.querySelector('#app');
    // 需要使用里面的render函数,第二个对象则为挂载对象
    ReactDOM.render(<h2>hello world</h2>, app)
 </script>
```

**若需要挂载的对象里面有内容则会被覆盖**

在微信小程序和Vue里面使用`{{}}`胡须语法,在react里面则使用`{}`大括号语法

`jsx`多个组件或标签,**在最外层只能有一个标签**,一种方法是使用一个**div作为根标签**,另一种是片段来代替

```js
<button onClick={test}></button> 
// 需要使用{}
```

**react需要自己手动进行渲染**

```js
function render(){
  ReactDOM.render(
    <div>
          <h2>{message}</h2>
          <button onClick={test}>点我进行改变</button>
    </div>
  ,app)
}
// 每次进行函数操作的时候需要手动进行render()
render()
```

##### 组件化实现

将自己所写的代码放到class类中,进行封装

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

需要使用**setState来进行修改state里面的参数**

```js
this.state = {
  message:'libai'
}
// 这两个方法都是固定的,不能随便取名字
// 同时this.setState是一个函数方法
this.setState({
  name:'qingfengwuya'
})
```

在类中render函数需要使用 

```js
render(){
  // 注意这里的return是(),
  return()
}
```

