> 之前使用的是原生的,XmlHttpRequest
>
> 在jquery里面则是使用的ajax,这时就出现了一个更好的网络请求库,axios
>
> axios使用的**是原生的XHR进行二次封装**实现的,还有一个**fetch**方式
>
> axios本质上是一个函数

##### fetch 

> 1. 基于promise实现的,进行了分离
>
> 2. 没有封装各种各样的API来供你使用
>
> 3. 需要自己设置content-type,还要自己携带cookie
>
> 4. 错误处理，只有网络错误才会触发错误,404,500
>
> 5. 不支持取消网络请求,不支持查看请求的进度

##### 这个时候Axios应运而生

1. 自动转换Json数据 
2. 自动防御跨站请求伪造(XSRF)
3. 转换请求和响应数据,同时还可以拦截请求和响应
4. 基于promise
5. 使用XMl封装

> 很多使用并不是用ts来写的,只是使用ts来编写了定义文件
>
> axios实例上面的get请求,post请求,都是使用axios.request请求来进行请求的

目前又开始使用async和await关键字,这个使用了生成器里面的yiled

> 在async和await中本来捕捉错误是使用try catch的方法来捕捉错误
>
> 但是我们可以使用 await-to-js这个库来帮助我们进行错误判断
>
> ```js
> const [err,res] = await to(promise对象)
> ```

###### axios.all([])本质上使用promise.all

```js
const res1= axios.get()
const res2= axios.get()
axios.all([res1,res2]).then(()=>{})
promise.all() // 两个都为resolve的时候才会进行产生回调
```

config   发送请求信息的数据信息,里面同时包括请求头的header

header  响应内容的header

request 创建的对象

##### baseUrl

写入一个baseUrl,就可以在每一次进行发送的时候,只需要传递一个`url`就可以

##### 创建新的实例

`const server1 = axios.create()` 

我们需要对axios进**行二次封装**,来使开发更加方便使用

将config配置文件进行二次封装,

process.env.NODE_ENV 里面来判断是**production**还是**development**模式

BASE_URL  和 TIMEOUT 来进行二次封装