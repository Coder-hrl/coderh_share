## Axios 封装

> 之前使用的是原生的,XmlHttpRequest
>
> 在 jquery 里面则是使用的 ajax,这时就出现了一个更好的网络请求库,axios
>
> axios 使用的**是原生的 XHR 进行二次封装**实现的,还有一个**fetch**方式
>
> axios 本质上是一个函数

##### fetch

> 1. 基于 promise 实现的,进行了分离
>
> 2. 没有封装各种各样的 API 来供你使用
>
> 3. 需要自己设置 content-type,还要自己携带 cookie
>
> 4. 错误处理，只有网络错误才会触发错误,404,500
>
> 5. 不支持取消网络请求,不支持查看请求的进度

##### 这个时候 Axios 应运而生

1. 自动转换 Json 数据
2. 自动防御跨站请求伪造(XSRF)
3. 转换请求和响应数据,同时还可以拦截请求和响应
4. 基于 promise
5. 使用 XMl 封装

> 很多使用并不是用 ts 来写的,只是使用 ts 来编写了定义文件
>
> axios 实例上面的 get 请求,post 请求,都是使用 axios.request 请求来进行请求的

目前又开始使用 async 和 await 关键字,这个使用了生成器里面的 yiled

> 在 async 和 await 中本来捕捉错误是使用 try catch 的方法来捕捉错误
>
> 但是我们可以使用 await-to-js 这个库来帮助我们进行错误判断
>
> ```js
> const [err, res] = await to(
> 	promise对象,
> );
> ```

###### axios.all([])本质上使用 promise.all

```js
const res1 = axios.get();
const res2 = axios.get();
axios.all([res1, res2]).then(() => {});
promise.all(); // 两个都为resolve的时候才会进行产生回调
```

config 发送请求信息的数据信息,里面同时包括请求头的 header

header 响应内容的 header

request 创建的对象

##### baseUrl

写入一个 baseUrl,就可以在每一次进行发送的时候,只需要传递一个`url`就可以

##### 创建新的实例

`const server1 = axios.create()`

我们需要对 axios 进**行二次封装**,来使开发更加方便使用

将 config 配置文件进行二次封装,

process.env.NODE_ENV 里面来判断是**production**还是**development**模式

BASE_URL 和 TIMEOUT 来进行二次封装
