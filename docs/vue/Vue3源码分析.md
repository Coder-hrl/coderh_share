## 源码分析

> 下载源码,然后逐行分析

```js
// 传递createApp
const app = createApp(APP)
app.use(store).use(router).mount(#app)
```

先拿到一个渲染器,然后渲染器返回一个 app 对象

app 对面里面挂载了 config,mixin,component,directive.

同时对 mount 函数进行了重写,重写到可以传入字符串,创建一个 Vnode,然后经过 patch

渲染 VNode,通过 patch 函数进行挂载.

同时对是元素类型和组件类型进行区分.创建 VNode 只是一个 JavaScript 对象

组件的 Vnode 和 instance 节点的区别,instance 用来保存组件的各个状态

#### 前端路由

> 路由器和交换机
>
> 路由器内部维护了一个路由映射表,在进行路由查询的时候,可以帮助.
>
> 映射表会决定数据的走向

`history模式`和`hash模式`,`ip地址对应mac地址`

后端路由 `直接将生产好的HTML网页返回给客户端进行渲染`,不需要加载 js 和 CSS,有利于`SEO优化`

==> 前后端协调 `后期有了ajax可以发射服务器请求才慢慢变成了前后端协调`,从静态服务器获取,后端只是提供 API,前端专注于用户展示和交互过程,后端专注于数据开发

==>前端路由 又出现了`spa模式的开发`,具体体现在单页应用程序,通过路由跳转来实现,/about==>about.Vue,/home==>home.Vue,在前端路由进行维护.

#路径的 hash 值,不会去服务器再次请求资源,运用了锚点,来回改变 hash 值的内容

```js
<a herf='#home'>home</a>
// 通过location.hash来拿到hash值
// 通过监听网页里面的location.hash变化来进行页面改变
```

##### HTML 的 history 模式,改变 url 而不刷新页面(HTML5 新增)

> 栈类型结构,有记忆,可以进行回退和前进,目前也是用的比较多的方式
>
> 使用的 location.pathname

`replaceState()` 替换没有回退属性 pushState () popState ()

`back` 后退一步

`go` 传入数值,向前是`go(1)`,向后是`go(-1)`

`forword()`向前走一步
