---
title: Jsx语法分析
---

## jsx 语法分析二

> `for会使用htmlFor`
>
> 绑定 style 属性,style={{`color:‘red’`,key:value}},`在绑定style的时候需要使用{}`
>
> 可以将一个变量逻辑都放到 render(){}里面,让 return()里面编写的更加清晰
>
> 经常学习 react 函数,可以帮助我们提高 JavaScript 函数的基本功的
>
> Filter 返回值为 true 渲染,返回 false 则不推入,**filter 和 map 等方法函数可以进行链式调用**

react 事件绑定,使用 this 绑定问题,`属性绑定undefined`

如何让 this 绑定到类本身上呢.

```js
<div onClick={this.say.bind(this)}>
```

第二种使用的方案,因为箭头函数没有 this,他会去上层作用域去寻找 this,直到找到 this

使用箭头函数

```js
class Person {
  // 使用箭头语法值
  say = () => {}
}
```

第三种使用的方案,通过箭头函数来进行传递参数,使用 onClick 进行传递,我们还可以对 say 进行传递参数

```jsx
<button
  onClick={(e) => {
    this.say()
  }}
></button>
```

我们也可以拿到 event 对象,在函数中.

可以通过各种以函数的方式来判断是否以 li 标签中,渲染甚至可以以下面这种方式来使用,其实是表达式的形式

```js
{
  this.state.movies.map((item, index, arr) => {
    return <li onClick={() => this.site(item, index)}>{item}</li>
  })
}
// 可以通过各种方式来传递参数和函数,使得整个系统更加自由,清晰
```

##### React 的条件渲染

在 Vue 里面使用`v-if v-else`都需要进行使用

`react里面使用if判断语句`,用编写逻辑代码的那种方式去渲染 Dom

```js
render() {
if(flag) {
  this.state=''
}else{
  this...
}
  return()
}
```

`使用三元运算符`但是不适用逻辑复杂,特别长的逻辑

甚至可以使用`onClick={()=>this.state()}`

方案三 逻辑与 ?? 非空判断 !! 转换为 true 或者 false

&& || 逻辑与和逻辑或 哪个有一定的决定的时候

比如&& 只要前面返回 false,直接总结过为 false

但是||,则是只要前面返回 false,并不能决定后面,所以返回后面

##### 在 react 中使用较多的逻辑与与逻辑或,三元表达来进行开发

同时在 Vue 中使用:class=“”的方式 v-bind 进行开发,但是在 react 中则是使用 img={} ,统一使用的{},不管什么情况

While(right)当 right 有值 也就是不为空的时候执行,if() 则是当 right 有值时为 true, 当这个条件为 true 的时候执行

比如 while(num<5)可以称之为 当 num 小于 5 的时候执行这个语法

##### v-if 和 v-show

> 根据对 DOM 的操作频繁程度,来决定是 v-if 还是 v-show

在 Vue 中是封装了很多的指令,如 v-if,v-show,v-bind 等等指令

在 react 中则是需要自己用普通的函数进行开发,自己来实现效果

##### 就比如展示符合条件的数,像 Vue 需要进行 computed 计算属性

在 React 则可以直接根据条件进行渲染，

```js
this.state.numbers
  .filter((item) => {
    return item >= 30
  })
  .map((item) => {
    return <li>{item}</li>
  })
```

forEach 则不是,他是对原数组进行操作遍历

对原数组进行操作的有`splice,pop,push,unsshift,shift,sort,forEach`

返回一个新数组的是`map,filter,slice,concat`

在 React 中基本都是在 this.setState 和其他修改复杂数据类型的值的时候,都是直接返回一个新的数组,而不是对原数组进行操作
