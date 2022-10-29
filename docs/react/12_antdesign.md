###### 给className按state进行添加类名样式

```js
<div className ="name age new obj"> </div>
<div className={'name',{active?'':''} }>
  </div>
<div className=['name',(active?':')]>
  </div>
```

###### 你可以通过很多逻辑来进行动态添加class

> 可以使用Vue的写法使用`classnames()`,可以直接传变量
>
> 或者可以使用变量传进去,比如使用 `classnames('name',error)`
>
> 可以使用数组里面添加一个对象,来进行操作,`classnames([{'active':isactive}])`

```html
import classnames from 'classnames'
<div className={classnames('obj','obj2','oooo')}>
  </div>
<-- 我们可以往里面传入一个参数 ->
<div className={classnames({'obj':isActive})}>
  </div
```

##### 使用企业级中后台产品

1. 支持服务端渲染和electron
2. 开箱即用的ui组件
3. typescript开发,类型体验较好
4. 全链路开发,比较稳定

##### Desigin 的使用

> antd 会使用**treeshaking**的形式,只会打包引用的组件,对不引用的组件不会进行打包
>
> 同时他也不会对引用的组件全部打包.只会打包引用的那一部分
>
> treeShaking随着Es6中esmodule的出现,这样就出现了摇树,把`deadcode`摇下来

##### craco 高级设置

如果要修改 create-react-app,不建议去修改cra里面的配置,尤其是对于不会webpack的人

将原本`packagejson`里面的改为craco start craco build

然后创建一个craco.config.js,使用craco进行配置