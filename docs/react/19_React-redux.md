## React-Redux

> redux 为 React 单独创建了一个 React-redux
>
> ```js
> import { Provider } from 'react-redux';
> ```
>
> `<Provider value="传入一个state"></Provider>`
>
> 子函数有一个 connect 函数
>
> ```js
> import { connect } from 'react-redux';
> // 手动封装了一个connect函数
> ```
>
> dispatch actions ==> reducer ==> state

要将请求数据的过程放到 redux 里面,我们应该将网络请求的过程也放到 redux 里面,

就好比在 Vue 里面的 action 一样

###### redux-thunk

> 出现原因 **redux 不能自己进行异步网络请求**
>
> 解决方法, **中间件,middleware cookie 解析,文件创建,异步请求,扩展代码**
>
> 在 dispatchAction 和 reducer 里面插入一个中间件,发送异步请求
>
> 使用 redux-thunk,这个可以被当做用来使用中间件

默认是一个 action 对象,在 redux-thunk 中做到的就是可以传递一个**action 函数**

###### 一般系统库和第三方库都要放到上面进行使用

放到 actionCreater 里面,进行使用

```js
const dispatch = (
	dispatch,
	getState,
) => {
	//定义函数
	dispatch();
};
```

###### redux-saga

`使用了ES6里面的 generator语法`,生成器概念,

> applyMiddleware(sagaMiddleware)
>
> `sagaMiddleWare.run()`

###### 中间件的实现方式
