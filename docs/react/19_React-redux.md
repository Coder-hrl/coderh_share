> redux为React单独创建了一个React-redux
>
> ```js
> import {Provider} from 'react-redux'
> ```
>
> `<Provider value="传入一个state"></Provider>`
>
> 子函数有一个connect函数
>
> ```js
> import {connect} from 'react-redux'
> // 手动封装了一个connect函数
> ```
>
> dispatch actions ==> reducer ==> state 

要将请求数据的过程放到redux里面,我们应该将网络请求的过程也放到redux里面,

就好比在Vue里面的action一样

###### redux-thunk

> 出现原因   **redux不能自己进行异步网络请求**
>
> 解决方法, **中间件,middleware   cookie解析,文件创建,异步请求,扩展代码**
>
> 在dispatchAction和reducer里面插入一个中间件,发送异步请求
>
> 使用redux-thunk,这个可以被当做用来使用中间件

默认是一个action对象,在redux-thunk中做到的就是可以传递一个**action函数**

###### 一般系统库和第三方库都要放到上面进行使用

放到actionCreater里面,进行使用 

```js
const dispatch=(dispatch,getState)=>{
  //定义函数
  dispatch()
}
```

###### redux-saga

`使用了ES6里面的 generator语法`,生成器概念,

> applyMiddleware(sagaMiddleware)
>
> `sagaMiddleWare.run()`

###### 中间件的实现方式