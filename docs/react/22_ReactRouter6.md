## ReactRouter6

分为 react-router 和 react-router-dom 和 react-router-native

> 移除了 Switch 新增了 Routes
>
> `注意点`指的是路由 5 里面是传入注册的路由对象,路由 6 中则是传入组件
>
> 由**component={}** 变化成了 **element={`<About />`}**
>
> useParams useNavigate useMatch
>
> 新增了函数式组件的多个 hook
>
> 官方明确推荐函数式组件
>
> 可以使用 Route 路由表配置,也可以使用 useRoutes 配置路由表进行展示,但需要和 Outlet 配置使用
>
> 在使用**Navigate**替换了 Redirect 来进行使用默认路由跳转
>
> ```js
> <route
> 	path='/'
> 	element={
> 		<Navigate
> 			传入to
> 			或者replace模式
> 		/>
> 	}
> />
> ```

##### BrowserRouter history 路由

用的是 ES6 新增的 history 模式,使用的是栈数据模型对 url 进行路由跳转的

```js
history.push();
history.replaceState();
history.back();
```

##### HashRouter 哈希路由

用的是在进行改变的时候锚点,监查锚点的改变

###### Navigator

只要 Navigator 一旦被渲染就会进行使用

###### 当 URL 放生改变 Routes 会查看所有的子路由来做到精准匹配

###### 同时里面也出现了一个属性来判断是否区分大小写路径是否匹配

###### 在初次渲染模板的时候就调用了 className,使用函数匹配

```js
<NavLink className={(isActive)=>isActive?"":''}>
一般被精准匹配 isActive就就会为true,不被匹配就会为false
```

###### useRoutes()路由表的使用

> 在 ReactRouter5 的时候,使用的是 React-Router-config 里面的 renderRoutes

```js
const routes = [
	{
		path: '/about',
		element: <About />,
		children: [{ path: 'name' }],
	},
	{
		path: '/',
		element: <Navigate to />,
	},
	// 通配符路由
	{ path: '*' },
];
// 逻辑 useRoutes
const element = useRoutes(routes);
//视图层
{
	element;
}
```

##### NavLink 无须携带父级路由,可以进行精准路由匹配

> 新添加了一个 end 属性,如果匹配到,父级路由不会进行匹配

```js
// 是不可以携带路径的/的,如果要匹配子路由
<Navlink to='news'> </Navlink>
```

##### Outlet 路由空间匹配

> 指定路由组件呈现的位置,就跟 Vue3 中 vueRouter 中的`<router-view>`差不多，他所做的给子级路由的展示的位置放一个插槽

##### useParams 新增 Api

```js
cost a  = useParams()
a 拿到的值时路由跳转时传过来的参数对象
```

##### useSearchParams 使用 setSearch 来进行修改 search

> 跟 useState 差不多 ,
>
> `const [search,setSearh] = useSearchParams()`
>
> `Search.get()`来取到里面所需要的数据

##### useMatch useLocation

> `const x = useLocation()` 拿到的是 location 对象
>
> **可以通过对象多层解构来拿到里面的数据**

##### Link 传入参数

```js
<Link to="" state={{}} />
useLocation 能拿到大部分的路由对象
```

##### Link 和 NavLink

> 都会被渲染到页面上都是成为 a 标签

###### 在 Router5 里面使用的是 props.history 进行改变

###### 在 Router6 里面的函数式编程,使用 useNavigate

```js
const navigate = useNavigate()
// 使用的是navigate函数,是一个函数
function showDetail(){
  // 与Navlink 差不多,里面的属性都有
  navigate('detail',{
    replace:false,
    state:{}
  })
}
直接使用`navigate(1)`和`navigate(-1)`
```

###### useInRouterContext

因为整个 app 都被包裹在`<BrowserRouter>`路由组件里面

###### useNavigationType 输出一个 POP 或者 REPLACE

###### useOutlet 呈现当前组件下面的嵌套路由组件

`useOutlet`没有挂载为 null

###### useResolvePath() 对当前路径进行输出

###### 使用 React.lazy(()=>import())

###### 使用<React.Suspense fallback={<>...</>}> 传入异步组件的失败情况下的组件

###### 与 ReactRouter5 不一样的是,他可以把所有的路由都进行渲染,而无需去重新在 props 里面重新渲染路由,至于需要渲染的路由的位置,可以通过《Outlet》

###### 可以 `Redirect:"/"`或者 `redirect:{name}`
