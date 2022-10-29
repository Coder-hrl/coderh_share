#### 项目初始化

创建一个`.editorconfig` 文件

来进行统一编码风格,来使`编码习惯进行统一。`

使用`prettier`来进行代码开发中的格式化

`eslint`对项目进行编写风格进行约束

在进行项目搭建选择的时候,已经配好了对eslint和prettier设置

使用 **husky**工具对commit`提交代码之前`进行一个代码规范

```shell
npx husky-init && npm install
```

使用`Commitizen工具`来使`提交规范变的更加规范`

1.安装Commitizen

```shell
npm install commitizen -D
```

2.安装cz-conventional-changelog，并且初始化cz-conventional-changelog：

```shell
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

使用`@commitlint/config-conventional @commitlint/cli`工具对不符合规定的进行验证

1.安装 @commitlint/config-conventional 和 @commitlint/cli

```shell
npm i @commitlint/config-conventional @commitlint/cli -D
```

2.在根目录创建commitlint.config.js文件，配置commitlint

```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

3.使用husky生成commit-msg文件，验证提交信息：

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

#### 修改默认vue.config.js

```js
module.exports={}
```

#### 在开发时需要修改不同的环境

常见三种环境是 `development` ` production`  ` test`

三种解决方式是  **手动修改**  **创建多种模式**

`process.env.NODE_ENV` 然后进行多次判断来进行切换url和其他东西

```js
//创建一个新的.env
let BASE_URL = ''
let BASE_NAME =''
if (process.env.NODE_ENV === 'production'){
  
}else if(process.env.NODE_ENV === 'development'){
  
}else if(process.env.NODE_ENV ==='test'){
  
}
export { BASE_URL ,BASE_NAME}
// 可以在 vue文件中 创建不同的环境文件变量.env.production
// 自定义一个新的属性 VUE_APP_##_## 的新属性
// .env.production
// .env.test
// 注意要在shims-vue.d.ts  里面进行定义  在vue cli 进行查看
// 使用process.env.VUE_APP_##_##
```

创建的对象是一个类,我们可以根据这个类创建很多组件实例

instanceType 构造函数的实例,可以通过这个方法拿到

使用expireTime给localstorage里面的键值对添加过期时间

用户表  对应 角色表   角色表生成路由表

第一种  将所有传过来的路由拿到,然后在前端进行截取取值

第二种  菜单动态生成路径映射,根据传过来的路径和组件路径进行动态注册

将返回来的菜单选项,动态渲染到router里面





将所有的store和router 常调的方法,在顶级组件provide()







弹窗里面也是一个from ,from封装好之后可以多重复用





v-model绑定的是modelValue 默认绑定事件为$emit[update:modelValue]



 声明在app.config.properties上面的属性,可以直接在模板上使用便可



一些动态的东西是不放到page里面  对于一些固定的配置则可以放到



v-model简单的双向绑定     ref中的.value



如果需要在ref中找到  需要在子组件中return出这个方法才会被找到,要不然则不可以 





return [ ]

才可以使用 const [ ]  =   

v-model：page  会自动绑定page 和update:page



store.getters 取数据的时候  用 store.getters[`“”`]取数据



按钮权限控制

先通过递归 获取所有的权限字符

然后通过一个函数 来在权限字符中寻找 

找到的话就返回true  然后再v-if button



根据公共部分 个性部分来进行区分这些函数



逻辑与  当前面有值的时候才会调用后面的函数  或者是



响应式  可以解决 setup优先高于vuex执行的,且setup只执行一遍 computed可以保证在vuex执行之后仍然可以动态赋值

要在拿到token的时候进行优化

模块要调用根组件的dispatch的时候需要在后面添加dispatch(“”,null,{root:true})



递归 先是自顶向下,然后自下向上

将一个大问题,一个个的拆分成一个个小的问题,然后从小的问题开始攻克



display为none元素依然会被渲染,只不过是css发生变化

