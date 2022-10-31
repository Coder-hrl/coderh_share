## Koa 详解

> 默认导出一个类,使用
>
> ```js
> const app = new Koa();
> app.use((ctx, next) => {});
> app.listen(8000, () => {});
> ```

`不可以连续注册中间件` 所有东西都可以在 ctx.request 对象里面

> 需要下载 koa-router 来进行下载使用,通过中间件进行洋葱模型
>
> ```js
> const Router = require('koa-router')
> const userRouter = new Router({prefix:'/users'})
> // 判断方式 上面为主路径 ,下面为拼接的路径
> userRouter.get('/'，(ctx,next)=>{})
> // 路由的基本使用,使用方法
> app.use(userRouter.routes())
> app.use(userRouter.allowedMethods())
> ```

> 在 koa 中的参数处理,
>
> 通过`ctx.request.url,query,params等数据`
>
> ```js
> userRouter.get(
> 	'./:id',
> 	(ctx, next) => {
> 		// params取到的是 :后面的内容
> 		console.log(ctx.request.params);
> 		console.log(ctx.request.query);
> 		// query指的是 ? 以后的内容
> 	},
> );
> ```

> 使用 koa-bodyparser,下载安装`npm install koa-bodyparser`
>
> ```js
> const app = new Koa();
> const bodyparser = require('koa-bodyparser');
> app.use(bodyparser());
> ```

> 使用 koa-multer, 下载安装
>
> ```js
> const multer = require('koa-multer');
> // 解析form-data类型
> const upload = multer();
> app.use(upload.any());
> ```
>
> ctx.req.body 和 ctx.request.body 拿到的东西是不一样的
>
> `multer是不一样的,koa则不一样`

> 文件上传的处理
>
> ctx 会自动转化为 json 数据,为对象类型,`const obj = { name:"libai",age:21 }`
>
> 会被解析为`“name”:"libai","age":"21"`
>
> ctx.status = 203 要去封装一套 错误处理的信息
>
> ctx.response.body =“ ”
>
> Ctx.response.status = 202

##### 将 responese 里面的属性 转化成了 ctx.params

> 了解真相才能获得最大的自由

使用 koa-static 来`部署静态资源`

```js
const static = reuqire('koa-static');
app.use(static('./')); // 传入一个路径
```

> 监听错误
>
> ```js
> app.on('error', (err, ctx) => {
> 	ctx.body = '';
> });
> ```

会将**所有的中间件执行结束**之后,才会返回一个 response,可以在核心的代码中清晰的看见,这也是洋葱模型

###### Koa 和 Express 对比

1. Koa 更加简洁,更加自由的,

2. express 是完整的强大的,内置完全的

express 是指**req，res，next**, koa 则用一个**context 代替全部**

`第一个中间件里面写入,第二个也写入,第三个也写入,然后通过第一个中间件返回res`

这就是洋葱模型

Express 处理异步数据有点问题,无法实现返回异步数据,可以通过 await 当做函数来处理

```js
const midlewarea1 = () => {};
const midlewarea2 = () => {};
const midlewarea3 = () => {};
app.use(
	midlewarea1,
	midlewarea2,
	midlewarea3,
);
```

Koa 中则不一样

```js
// 使用await next()函数来进行操作,告诉他是一个异步函数,等异步有结果之后再去寻找下一步
```
