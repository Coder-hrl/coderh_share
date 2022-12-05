## 补充 ES6 class 类

> 在 React 支持`all in js`语法,觉得 HTML 和 CSS 是密不可分的
>
> Vue 并不灵活,因为他是模块,CSS 和 js 分别区分,而 React 可以进行一个更细的划分.
>
> 标签里面的`title属性`是指,当你把鼠标放到标签上时,所展示的标题属性

在 es6 之前用的是**function 模式**,后来为了让 es6 的人适应就是用`class语法糖定义类`

###### 类中含有 constructor 构造器 通过 new 来进行调用

**实例对象里面的 this 指向的是 new 之后的对象**

现在**使用类,目前使用的是 class 关键字来创建一个类**

Es6 之后的类会更加的方便,不需要添加一个臃肿的`prototype`

在 JavaScript 普通函数中的 this 指向的是运行时的 this

而在箭头函数中 this 则是由定义的位置来决定的.

##### 类中的继承,封装,继承,多态.

`封装` 将逻辑代码封装到一个类中

`继承` 减少重复的代码

目前所缺的就是类型检测,也就是 TypeScript 语言流行的原因.

1. 函数中定义的方法对于其他类型会报错,

2. v8 引擎对于重复类型的函数调用有特殊的优化,

3. 降低在运行前检测出错误的概率

##### this 的用处

当类中的多态,指不同的对象,调用相同的方法,会出现不同的效果.

##### 必须调用 super()

在 React 中必须要调用`super()`来初始化父类 Component 对象.

##### 必须要在 script 里面使用 type= text/babel

##### map 函数

**第一个参数是回调函数**,第二个参数是给**回调函数绑定 this**

回调函数也有三个参数,**第一个参数是这一次执行时的元素**,**第二个是索引值**,**第三个完整的数组对象**

```js
this.state.movies.map(item => {
	return <li>{item}</li>;
});
```

```md
注意点,第一是 他默认返回一个数组,第二个也是在<li></li>里面需要有{}来标识
```

React 是比 Vue 比较灵活的,在 Vue 中`template是比较固定的`

如果你**突然出现一个缺少一个< 的错误情况**,非常有可能 script 缺少一个正确的`type`

### 顶层只能有一个元素,跟 Vue 差不多

### 最好用一个()来对元素进行一个包裹,显得清楚好看

### 在 jsx 里面,都要有一个结束标签,包括单标签元素如 <img src="">

### 添加注释需要使用特殊的方法 {/_ 这也是一个注释_/}

`还必须要使用 {/*这样的方式和方法*/}`

### 在大括号中 string 类型,number 类型,还有数组类型(内部会进行拼接)

### 不能展示 null,不能展示 undefined,不能展示 Boolean 值,不能展示对象值 Object,不能作为 jsx 子类

NaN 是`number`的一种

flag`逻辑或`&&和`逻辑与`||

### 在{}里面是可以调用三元表达式和其他表达式的如

**逻辑或 前方为真返回后边**

```js
render(){
  return()
}
{/*使用拼接符*/}
{firstname+''+lastname}
{/* 运算符的使用 */}
{1+234}
{/* 三元表达式 */}
{flag ? "" : ""}
{/* 调用当前的函数 */}
{this.page()}
```

##### 也可以在 render 函数到 return 中间使用结构或者其他运算

##### react中jsx 的本质原理是通过 React.createElement,然后在其中再传入 props 和其他属性,使用的是 js 创建 createElement 的方式

```js
React.createElement(type, config);
// 以键值对的形式存储
// chidren 以children数组的方式进行存储
// 都会使用React.createElement的方法来创建一个元素
```

所有的jsx都会被转换为React.createElement的函数

`type config 和children`三种属性,type是指创建元素的类型(span,div,p等),config是指创建元素的属性(classname,title),children是指创建的元素值

会创建出来一个ReactElement对象,通过树的形式,再构成虚拟DOM

先是转换为虚拟Dom,多平台适用也是从这里出现的,`可以渲染成Pc端,也可以渲染成App和Ios端React-Native的`

Virtual Dom UI`以一种虚拟化,或者说理想化的形式保存在内存中`,在真正渲染的时候,通过ReactDom render 同步起来

##### 让React页面更新的几种方式

1. 使用useState
2. 父传子props发生改变
3. 子传父emit事件的发生
