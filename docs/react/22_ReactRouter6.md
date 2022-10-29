分为react-router和react-router-dom和react-router-native

> 移除了 Switch 新增了Routes
>
> `注意点`指的是路由5里面是传入注册的路由对象,路由6中则是传入组件
>
> 由**component={}** 变化成了 **element={`<About />`}**
>
> useParams useNavigate useMatch
>
> 新增了函数式组件的多个hook
>
> 官方明确推荐函数式组件
>
> 可以使用Route路由表配置,也可以使用useRoutes配置路由表进行展示,但需要和Outlet配置使用
>
> 在使用**Navigate**替换了Redirect来进行使用默认路由跳转
>
> ```js
> <route path="/" element={<Navigate 传入to  或者replace模式 /> } />
> ```
>

##### BrowserRouter  history路由

用的是ES6新增的history模式,使用的是栈数据模型对url进行路由跳转的

```js
history.push()
history.replaceState()
history.back()
```



##### HashRouter  哈希路由

用的是在进行改变的时候锚点,监查锚点的改变

###### Navigator

只要Navigator一旦被渲染就会进行使用

###### 当URL放生改变Routes会查看所有的子路由来做到精准匹配

###### 同时里面也出现了一个属性来判断是否区分大小写路径是否匹配

###### 在初次渲染模板的时候就调用了className,使用函数匹配

```js
<NavLink className={(isActive)=>isActive?"":''}>
一般被精准匹配 isActive就就会为true,不被匹配就会为false
```

###### useRoutes()路由表的使用

> 在ReactRouter5的时候,使用的是React-Router-config 里面的renderRoutes

```js
const routes =[ 
  {
    path:'/about',
    element:<About />,
    children:[
    {path:'name'}
    ]
  },
  {
    path:"/",
    element:<Navigate to />
  },
  // 通配符路由
  {path:"*"}
]
// 逻辑 useRoutes
const element  = useRoutes(routes)
//视图层
{element}
```

##### NavLink  无须携带父级路由,可以进行精准路由匹配

> 新添加了一个end属性,如果匹配到,父级路由不会进行匹配

```js
// 是不可以携带路径的/的,如果要匹配子路由
<Navlink to="news"> </Navlink>

```

##### Outlet路由空间匹配

> 指定路由组件呈现的位置,就跟Vue3中vueRouter中的`<router-view>`差不多，他所做的给子级路由的展示的位置放一个插槽

##### useParams 新增Api

```js
cost a  = useParams()
a 拿到的值时路由跳转时传过来的参数对象
```

##### useSearchParams      使用setSearch来进行修改search

> 跟useState差不多 , 
>
> `const [search,setSearh] = useSearchParams()`
>
> `Search.get()`来取到里面所需要的数据

##### useMatch     useLocation

> `const x = useLocation()`   拿到的是location对象
>
> **可以通过对象多层解构来拿到里面的数据**

#####  Link 传入参数

```js
<Link to="" state={{}} />
useLocation 能拿到大部分的路由对象
```

##### Link 和 NavLink

> 都会被渲染到页面上都是成为a 标签

###### 在Router5里面使用的是props.history进行改变

###### 在Router6里面的函数式编程,使用useNavigate

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

因为整个app都被包裹在`<BrowserRouter>`路由组件里面

###### useNavigationType 输出一个POP或者REPLACE

###### useOutlet呈现当前组件下面的嵌套路由组件

`useOutlet`没有挂载为null

###### useResolvePath() 对当前路径进行输出

###### 使用React.lazy(()=>import())

###### 使用<React.Suspense fallback={<>...</>}> 传入异步组件的失败情况下的组件

###### 与ReactRouter5不一样的是,他可以把所有的路由都进行渲染,而无需去重新在props里面重新渲染路由,至于需要渲染的路由的位置,可以通过《Outlet》

###### 可以 `Redirect:"/"`或者 `redirect:{name}` 
