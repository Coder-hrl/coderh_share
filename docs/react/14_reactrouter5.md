## reactRourter

> 直接安装 react-router-dom,因为 react-router 是依赖于 react-router 的,
>
> 安装 react-router-dom 的时候会默认安装

分为 BrowserRouter 对应的是 history 和 Hashrouter 对应的是 hash 模式

link 标签本质是 a 标签,navlink 只是多加几层,跟 router-link 一样 一样使用 to

route 已经转为**element 代替为 component**

`NavLink 和 Link的区别` 可以给 NavLink 多一个 activeStyle 激活之后的样式

可以使用**activeClassName 来进行自定义修改激活后的属性**

Route5 应该使用`Redirect` 进行路径匹配
