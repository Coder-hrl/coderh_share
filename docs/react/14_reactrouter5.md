> 直接安装 react-router-dom,因为react-router是依赖于react-router的,
>
> 安装react-router-dom的时候会默认安装

分为BrowserRouter 对应的是history 和Hashrouter 对应的是hash模式

link 标签本质是a标签,navlink只是多加几层,跟router-link一样   一样使用 to

route 已经转为**element 代替为component**

`NavLink 和  Link的区别` 可以给NavLink   多一个activeStyle 激活之后的样式

可以使用**activeClassName来进行自定义修改激活后的属性**

Route5应该使用`Redirect` 进行路径匹配