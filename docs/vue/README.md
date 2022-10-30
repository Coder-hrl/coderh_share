```html
<div id="app"></div>
//view
```

```js
const app = Vue.createApp({}) // model
app.mount('#app')
```

CDN 引用的方式,引用 Vue 源代码.

```js
Vue.createApp({}).mount('#app')
```

链式结构

```html
<script type="x-template" id="why"></script>
```

```js
Vue.createApp({
  template: '#why',
})
```

有上述写法,<template></template>是不会被浏览器渲染的.
<template></template>会放到 vue 中再次处理
以上写法也等同于上述写法,同时这也是最常用的方法.
注意: 直接在 createApp({})里面写的 template 的话是不需要注册的.

data 数据变化 也是会在 Vue 的响应式中被劫持,进行动态刷新.
在 method 里面使用的方法 不要使用**箭头函数**.
箭头函数的 this 不受词法作用域的影响,哪里调用,绑定哪里的 this
因为 this 不会按照期望的指向组件实例,他会指向**父作用域上下文**.

{{}}里面可以使用`表达式`,`数据绑定`,
同时也可以在里面写`函数`,也可以写`计算属性`,赋值语句等是不可以使用的.

v-once 只会在初始化时渲染一次,后续在数据更新时,会被认定为静态数据,
如果在`父组件`中使用这个方法,后续的`子组件`也`不会`再去`更新渲染` (提高性能).

v-text = "name" 等同于`{{name}}`语法.

v-html = "<h1></h1>" 会将 `html语法渲染`,如果没有这个语法,vue 只会默认文字渲染

v-pre `跳过组件和子组件的解析过程`,显示 mustach 语法 (提高性能).

v-clock 为了防止在渲染时出现{{}}导致用户体验不佳,会给元素添加一个值为`[v-clock]`的`class`属性,
需在 style 里面定义[v-clock]{display: none} 当渲染结束后 vue 会自动去除 class 属性

v-bind 语法糖 为: `动态绑定属性`, 让 src 或 class 等属性都要动态绑定 data 中定义的值
他是可以是一个数值,也可以是一个对象. (如果元素的属性值不是`默认属性`,而是`自定义属性`需要加 : )
`!!!` 当元素 attribute 与 v-bind="" 绑定的对象发生冲突时,v2.0 元素 attribute 优先级高于绑定的对象
在 v3.0 后,会根据 编写顺序,来决定冲突,后面总是会覆盖前面,总是显示后面的属性
也可以用对象类型, 示例

```html
<div
  :class="{active:boolean,'title':boolean}"
  style="width:200px"
  :style="{width:'200px',color:'red'}"
>
  <!-- 上面class的对象写法,''可以加也可以不加. -->
  <!-- 如果想让代码更加清晰,还可以定义在data里面
  <div :class="classObj"></div>
  data(){return{ classObj: {active:boolean,'title':boolean}}}
   -->
  <!--  三元表达式       对象写法 -->
  <!-- 还可以使用数组类型,如["class","",isActive? ?:? ,{}] -->
  <!-- 通过动态给元素添加属性,可以提高用户体验. -->

  <!-- 用v-bind:style里 属性最好也加一个''或者使用驼峰命名法,
  属性值必须要加 '',数组里面放两个对象,两个对象后面会合并  示例: [{},{}]
  动态绑定属性名称         属性名称也可能是不固定的<div :[name]="value"></div>
  data(){return{name:'abc',value:'s'}}
  -->
  <!-- <div v-bind="info"></div> 结果是<div height:'1.88',width:'1.2'> </div>
  适合给元素上添加很多自定义属性,绑定一个全是attribute的属性
  data(){return{info:{height:'1.88',width:'1.2'}}} -->
</div>
```

在 vue2 中,<template></template> 必须要`有且只有一个根元素`<div></div>.
但是在 vue3 中是`允许多个根元素并存`的.

v-on 交互事件,`绑定事件`,语法糖为`@`,所绑定的方法定义在 `methods:{}`里面.
在@click 里面也是可以`绑定一个表达式`的,如@click="counter++"
或者使用 v-on="{click:btnClik,mousemove:mouseMove}"
@修饰符
.stop 阻止`冒泡` .prevent 阻挡`默认事件` .self `本身`触发回调 .left `左键` .right `右键`
.middle `中键` .once 只`触发一次`事件 .{enter}`enter键触发`

v-if 他是惰性的,只有为 true 的时候才会被渲染,在为 false 的时候,根本`不会被渲染`或`被销毁`.
v-if 在执行顺序里面高于 v-for 的,`支持 template` 使用 v-if 或 v-else 可以减少一层的 div 元素渲染

v-show 只是将元素的 style 属性 display:none,会将`元素渲染`出来,`不支持 template` 使用.
在`频繁的切换元素`的时候,会用到这个属性.

v-for 尽可能`不要在同一个元素上`使用`v-for和v-if`,`支持 template` 使用
在赋值的时候是`按照顺序赋值`形参,`最后一个`是 `index` 属性,同时 index 是可以`省去`的
用法: v-for="(item,index) in fileLists" 数组类型
用法: v-for="(value,key,index) in info" 对象类型
用法: v-for="(num,index) in 10" 遍历数字

数组更新检测 以下方法可以被 vue 方法检测到
`(push(),pop(),shift(),unshift(),splice(),reverse(),sort())`
以下方法是重新创建一个新的数组
`(filter,slice,concat)`

v-for 中 key 的作用

- 主要是在 vue 的虚拟 Dom 算法中,常用于新旧 VNodes 的比较
  - VNodes 虚拟节点,`组件和元素`在 vue 中的表现形式都是`VNodes`(虚拟节点)
  - 首先在 template 里面的元素会被 vue 再次处理,处理成 VNodes,虚拟 Dom 然后再次渲染成真实 Dom
  - VNodes 在处理多端,跨平台(服务端,浏览器端,手机端等)时,有很大的好处,(多次重绘重排对浏览器性能消耗很大)
  - 虚拟 Dom 是`多个虚拟节点VNodes`构成的树, 虚拟 Dom 是一个大的对象,是由多个虚拟节点构成的
- 如果不使用 key,会在更新的时候,尽可能减少动态元素,并尽可能的`就地修改或复用相同类型`的元素
  - 快速将原来的 VNodes 元素和新的 VNodes 元素进行`判断排列`,就是 diff 算法
  - diff 对有 key 和没有 key 是两种完全不同的算法,
  - 如果将 index 定为每个元素的 key 值,那这样在插入的时候会重新定 key.
  - `所以尽量不要用index作为key,除非只有push操作`
  - 先将新旧 Dom 进行比较,没有 key 的话,会`优先遍历 length 低`的数组,然后调用 mount 方法创建新的虚拟节点
  - 如果旧 Dom 数组长度高于新 Dom 数组长度,会调用`unmount`方法,卸载删除虚拟节点
- 如果使用 key,他会重新排列元素,同时会移除和销毁没有 key 的元素
  - 在有 key 的情况下的 diff 算法是,会去通过比较 key 值和节点类型来判断是否是相同的节点
  - `从头`开始遍历,遇到`不同`的 `break`
  - 然后`从尾`开始遍历,遇到`不同`的 `break`
  - 如果旧节点遍历完了,还要剩余就是`新增`
  - 如果新的节点都遍历完了,还有旧的节点就是`移除`
  - 如果新旧长度不变,可能是移除了旧的,新增了新的,会尽量去利用复用`相同`的节点,`移除旧的节点`,移动节点,`挂载新的节点`

computed 对包含很多复杂数据的处理都应该使用 computed,同时计算属性自动绑定组件的上下文
对 data 进一步处理,将`数据转换后使用`或者`将多条数据结合`起来处理显示,
计算属性是有 getter 和 setter 方法的,我们一般使用的是计算属性的 getter 方法.

watch 侦听器, 当数据变化时,监听到定义在 data 数据里面的变化.

- 当 data 数据发生改变进行`逻辑处理`的时候,比如表格求和.
- 默认情况下,监听器只能侦听对象的改变,对象里面的属性侦听不到
- 两种方式,一种是`语法糖`模式,`name(newValue,oldValue)`
- 另一种是,name:{`handler:function(newValue,oldValue){}`}
- 同时可以使用对象里面的单独属性, 如`'info.name'()`类型
- 修饰符, deep:true, immediate:true,是指从 undefined 到页面渲染
  示例

```js
watch: {name(newValue,oldValue){}}
watch: { name:{handler:function(newValue,oldValue){},deep:true}}

created(){
  const unwatch = this.$watch('name', function(newValue,oldValue){
    console.log(newValue,oldValue)
  },{deep:true, immediate:true})
  // 调用 unwatch() 来取消监听
}
```

v-model `双向数据绑定`
只是简单的在用户输入时`更新数据`
原理等同于

```html
<input :value="search" @input="search = $event.target.value" />
```

`v-model.lazy` _懒绑定_ 等敲回车的时候才会处理转换为 change 数据绑定
`v-model.number`_绑定数据转化为数字类型_ v-model 自动绑定的是 string 类型,如果有字符串自动滤过
`v-model.trim`_自动过滤掉首尾空格_

组件化 将页面拆分,将一个大的问题拆分成一个小的功能快
现在整个大前端都是组件化的天下,将一个个页面拆分成一个个`组件`
前面的 CreateApp(app).mount('#app')这里面的 `app 就是根组件`,
`组件化`是一种抽象,我们可以开发出一个个`独立可复用`的组件来构成我们的页面

```js
;<template id="component-a"></template>
app.component('component-a', {
  template: ``,
  template: '#component-a',
})
```

上述所讲的东西都是可以在组件中使用的
一般很少在全局中注册全局组件,一般在组件中注册局部组件

```js
const app = {
  components: {
    //要以键值对的形式,平常的是直接用的对象简化
    // 如 MyComponent :  MyComponent,可以简化为Mycomponent
  },
}
```

`组件化开发`
对组件化进行拆分,拆分成一个个小的组件,然后再组合在一起构成一个应用

`组件间的通信`
理清逻辑关系,组件之间相互通信
父传子使用 `props`
父可以使用`:title="data定义"`方式,也可以使用`title="普通"`.
最后一种方式`v-bind="data定义"`.

- 可以在子组件中注册`一些自定义`的属性.
- 父组件可以通过这些`自定义属性`来给子组件进行`传值`.
- 父传递什么数据,子组件就使用什么数据
  - props 两种方式,`字符串`方式
    - props:["title","content"] 只会展出 props 字符串名字
  - 第二种`对象类型`(复杂一点) - props:{title:String,content:String,content:{type:String,required:true,default:()=>{return {}}}} - 类型可以写很多个,title:[String,Number] - 当对象是一个 Object 类型的时候,需要写成一个函数 `dafault(){return {}}` - 因为在使用同一个对象的时候,他们用的都是一个`对象地址`,与 data() 原因相同
  - 使用`自定义检验方式` props:{validator(value){return ['success','faild'].includes(value)}}
  - 在 vue 中 props 里面`大小写也是不敏感`的,大写的 DefaultMsg 与 default-msg 效果是相同的
- 如果传入一个非 props 的 attribute 的时候,会自动传递给子组件的根组件上
  - 可以禁用掉,通过在 inheritAttrs:false
- 也可以在子组件的非 props 属性上传入$attrs.class,示例

```vue
<!-- 父 -->
<!--以下可以在给不同的组件添加样式的时候使用 -->
<show-msg class="李白"></show-msg>
<!-- 子  在需要的元素属性上添加需要添加的class属性, 这个$attrs只会读取！父！放在子组件非props属性 -->
<h2 :class="$attrs.class"></h2>
<h2 v-bind="$attrs"></h2>
```

子传父使用 emit

- `emits:[]`,在前面写会让阅读代码更加清晰
- `emits:{}`,`对象验证`,`参数验证`. 同时 emit 也对`事件名大小写不敏感`
- 如果只是监听事件的话,用 null 就可以,如果要给参数的话
  - emits:{add:null,sub:null,odd:(num,name,age)=>{if(num>10){return true}}}
    如果`没通过验证数据会传过去`,但`报错`.

非父子组件之间的通信

- provide 和 inject
  - 无论层级有多深,`父组件`都会给`子组件`提供一个`依赖提供者`,
  - 子孙之间都是通过实现 `longlongprops` 来实现的
  - 父组件使用 provide 是提供方,子组件使用 inject 来使用依赖项.
  - 父和子组件都不知道提供方和使用方
    示例==>
  ```js
    // 父 只是为子孙后的使用来提供的
    provide:{name: "longlongprops",age:12}
    //子
    inject:['name','age']
  ```
  - 如果要在 provide 里面使用 data 里面定义的数据时,
  - 应该使用 provide(){return{}}. 问题 this 引用异常,对象弱绑定
  - 如果要是对 data 定义的属性实现响应式的话,最好使用 computed 属性,会自动计算响应后的数据
- Mitt 全局事件总线 需要用 npm install mitt
  - 发射方用 `emit` 来进行`发射`,接收方用 `on` 来进行`接受`
  - 首先要在 js 中引入 mitt 然后声明一个`函数来定义` `const emitter = new mitt()`
  - 在需要使用`常用在事件位置`的地方添加一个 emitter.emit("type 类型",传递的消息,可以用 this)
  - 后在需要使用的地方在 created()的时候使用,emitter.on("type 类型",info => info)
  - 如果需要全部清空 `emitter.all.clear()`,单个取消监听使用 `emitter.off("type 类型",info)`参考定时器取消

`slot`插槽

- 设计组件时,使用者可以`决定组件内某个区域`可以使用什么元素,抽取共性,预留不同
- slot 作为占位 ,可以插入`元素`,插入`文本`,插入`组件`
- 在组件内使用 slot 的时候,可以直接在`组件`里面写入`默认内容`
- 如果在子组件中使用`slot`的时候,用默认插槽,不用具名插槽的时候,他会重复渲染
- 用 name 给组件命名,如果没有名字的话他会默认加上一个名字叫 default
- 在使用插槽的时候使用 v-slot:default,或者使用#default,`#`是插槽的语法糖
- v-slot:[],可以使用<template></template>,目前 `v-show`和 `v-model` 不可以使用

`作用域插槽`
我们有的时候需要访问`子组件的某些内容`,示例
当我们想要替换子组件遍历数组的元素的时候

```html
<!-- 子 -->
<template v-for="(item, index) in items" :key="item">
  <slot :item="item" :index="index"></slot>
</template>
<!-- 父 -->
<nav-bar>
  <!-- 注意slotProps是固定的,不可改的. 但是可以通过对象解构来解决这个问题 -->
  <template #default="slotProps">
    <button>{{slotProps.item}}</button>
  </template>
</nav-bar>
<!-- 独占默认插槽缩写,直接在组件上使用这个v-slot=""  多个插槽存在会报错-->
<!-- 多个插槽需要使用<template #default=""></template> -->
<nav-bar v-slot="slotProps"></nav-bar>
```

`动态组件`
当需要实现小路由方式的操作时,一种是用 v-if v-else-if 和 v-else 来解决,
另外一种就是用动态组件,示例.

```html
<!-- 一般是用v-bind:is="",很少直接使用is="默认值" -->
<component :is=""></component>
<!-- 可以走三元
    is 里面是组件的动态值,可以是由app.component('',{})注册的组件,
    另外一种就是由组件内components注册的组件 -->
```

keep-alive 缓存数据,提高性能,保存状态,在需要缓存的地方最外面加上`<keep-alive>`
`include` 支持字符串,正则和数组,会被缓存,检验的是注册后的组件名
`exclude` 不会被缓存
`max` 不会被使用缓存的组件
keep-alive 经常会与 router-view 一起使用

`定义异步组件和代码分包` 异步组件是为了代码分包,加快首屏渲染速度

```js
import {defineAsyncComponent} from vue
include = 'a,b'
:include = "/a|b/"
:include= "['a', 'b']"
defineAsyncComponent(()=>import('./demo/src/HelloWord.vue'))
const AsyncCategory = defineAsyncComponent({
  loader:()=>import('./demo/src/HelloWord.vue'),
  // loader是需要按需加载的组件
  loadingComponent:loading
  delay:2000,
  // 当过了两秒还没有加载出loader的时候才显示loading组件
  // loadingComponent是当loader没有加载的时候显示的组件
  // errorComponent:    这个组件是当loader未引入成功显示的组件
  onError:function(error,retry,fail,attempts){}
})
```

`Suspense` 异步组件 新增 不要用到生产环境中,都是为了分包,提高下载速度

```html
<suspense>
  <template #default></template>
  <template #fallback></template>
</suspense>
```

`Ref` 对组件进行操作
相当于原生中 id ,对于`原生属性`,他会去获取`原生属性本身`
对于组件的话,相当于获得子组件的`所有信息`,可以直接操作子组件的所有内容
`this.$root` 和 `this.$parent`,vue3 中已经移除掉了$children
`$el 组件实例`正在使用的根 DOM 元素

一个组件在别的地方被引用,找到的是一个组件实例
每个组件实例的父组件都是不同的,

`生命周期`
创建,挂载,更新,卸载. 可以在特殊的时期做一些逻辑代码.
可以通过`生命周期钩子函数`来清楚的知道,`组件现在所处的周期`.来进行开发,v-if=""是可以让一个组件从创建到卸载的全过程的
beforeCreate => created => beforemount => mounted => beforeUpdate => updated => beforeUnmount => unmounted 可以在 beforeUnmouted 里面写入取消监听.
activated(活跃的)=> deactivated(不活跃的),在 keeep-alive 里面是存在的

```vue
组件的v-model` 先绑定一个默认的属性,是 v3 `内置了一个 props 和 emits `的实现过程
都需要在子组件里面写入 `props 为 modelValue` 和 `emits 为 update:modelValue`
定义 目的是省去`冗余代码`,让`代码更加清晰
<!-- 默认是v-model绑定的是modelValue,如果后面有名字的话定义为props:{title:string} -->
<!-- emits:[update:title] 前缀都是update: ?? 后面是自定义 -->
<my-input v-model="message" v-model:title=""></my-input>
<!-- 等同于 -->
<my-input
  modelValue="message"
  @update:model-value="message = $event"
></my-input>

<!--需要在子组件的props里面定义一个modelValue的属性 -->
props:{modelValue:String} ,emits:[@update:modelValue]
```

`过渡`
`显示`和`消失时的动画`
使用 <transition name="自定义名称用$代替" type="谁时间长用哪个" :duration="数值类型会覆盖下面" mode="in-out" appear></transition>来包裹需要加动画的组件(只有一个)
`mode` in-out out-in 在两个元素相互切换时使用(v-if v-else)时
`appear` 默认有动画效果,或设置为:appear = "true"
他会在显示和隐藏的时候给元素添加一个类名,
$-enter-from => $-enter-active => $-enter-to
$-leave-from => $-leave-active => $-leave-to
$-enter-active 定义 transition 属性

动画的值也可以在 @keyframes 动画名 自定义的动画,transition 是可以叠加的
在$-enter-active和$-leave-active
在恰当的时机添加和删除类名,如果在 css 里面没有定义,他会立刻执行逻辑代码

动画库 `animate.css` `准备好`的,`跨平台`的`动画库`,注意力引导
注意！！！！在定义<transition></transition>的时候用 transition 属性
在使用 animation.css 的时候,css 用 animation 属性

直接在页面中使用 enter-active-class = "" leave-active-class = ""
如果要使用 js 来执行动画的话,要将:css="true",不再检测 css,性能会变高
与 gsap 库 使用 js 代码
<transition-group tag="ul" name="自定义$"></transition-group>渲染一个列表
内部元素需要唯一的一个 key,他针对的是元素的类
在 css 中用的是$-move{transition:transform}

```
mixin` 混入, `extends` 继承,在软件开发中会存在很多相同的代码,
有的时候我们需要将相同逻辑的代码抽取在一起. (`代码`复用) vuex 是(`数据`共享)
mixin 内部的执行顺序,不同混合,相同就近原则.
`当内部数据和mixin的数据重复的话,会使用内部数据
```

- 如果是 data 返回的数据,则将会被合并
- 如果是 created 等生命周期函数,则混合在一个数组中都会被执行
- 如果是像 methods,watch,computed 等对象,则会混入合并成一个对象
- 在 main.js 里面使用的是全局混入属性

components 认识,
`Options` API,

- 需要很多对象,比如 data,methods,watch 等对象
- 某个功能在进行开发时,需要不停的在 data 和 methods 里面切换
- 逻辑结构比较分散

`Components` API

- 所有内容都在 setup 里面写
- 一个功能的代码逻辑全在一块,不需要上下寻找
- 注意 setup `里面是没有 this 的` `没有绑定`this
- props 在 setup(props,context)
- 可以进行解构 setup(props,{attrs,slots,emit}){}
  - attrs 所有非 prop 的属性
  - slots 父组件传递过来的插槽
  - emit 因为内部没有 this,所有要用 emit 来传递事件
- setup 的返回值可以在模板中使用,相当于 data() return{}
- 如果能`从setup里面取得数据`就不会#往后面取数据#
- setup 的调用事件非常早,因为在执行 setup 的时候,data 和 methods 和 computed 都是没有创建
- 所以无法使用 this

  - reactive 包裹一个对象,内部被 proxy 代理
  - ref 返回的响应式对象,作为一个被引用的响应式对象维护内部的值

以下的 api 都需要被`引进`
`isProxy` reactive ref({对象}) 和 readonly 走的都是 proxy 对象
`isReactive` 是否是由 reactive 创建的对象,如果由 readonly 定义的对象,对象是 reactive,也会报 true
`isReadonly`
`toRaw` 返回被 readonly 和 reactive 创建的原生对象
`shallowReactive`浅响应式,不执行嵌套对象深层的响应式
`shallowReadonly` 不执行内部的 readonly
用的`比较多`的 api
!!!!!!!注意对于 toRef 后的对象,是对里面的属性的引用
`toRefs` 传入一个被 reactive 封装后对象的函数,会将里面所有的值转换为 ref 响应式值,注意在 toRefs 的对象会对 reactive 的对象里面所有的属性有一个引用,会导致双向改变.
`toRef`对里面的单个属性进行引用,传入一个被 reactive 封装后的对象和需要被引用的属性.示例 const age = toRef(info,"age")
以下较少使用
`unRef` 返回一个被引用属性内部的 value
`isRef` 是否是一个 ref
`shallowRef` 浅层响应式
`triggerRef`手动触发和 shallowRef 的父作用
`customRef`自定义一个 ref,形成一个 hook,可以给 ref 添加一个防抖节流等功能

`watchEffect`自动收集响应式依赖,
执行时机:在挂载和与元素创建之前执行.可以在后面的{里面选执行时机,有 pre,post}

```js
const stop = watchEffect(() => {
  console.log('只要在里面写入需要监听的属性,都会被监听')
})
// 使用stop() 停止侦听
```

`watch`具有惰性,更能具体的说明哪个状态发生了改变
和 options api 的 watch 很一样
监听的是一个响应式对象,ref 和 reactive 对象都是可以的
侦听多个数据源

```js
watch(
  () => info.name,
  (newvalue, oldvalue) => {}
)
watch(
  () => {
    return { ...info }
  },
  (newvalue, oldvalue) => {}
)
watch([info, name], ([newinfo, newname], [oldinfo, oldname]) => {}, {
  deep: true,
  immediate: true,
})
vue3 高级语法补充`
在 vue 中代码的抽象和复用还是用的是`组件`
`自定义指令
```

- 局部指令和全局指令 directives
- 自定义指令的修饰符,只要传入,指令就会变为 true

- Teleport `vue内部组件` 组件传送 远距离传送
- to = "移动到哪里,可以使用 id 选择器" disable = ""

## `vue-Router`

基于路由和组件,将访问路径和组件联系在一起
可以在 routes 里面设置{path:"/",redirect:''}

<router-link>to 默认调用的 push() 压入栈</router-link>

在 setup 里面是没有 this 的所以要使用`useRoute()`
需要在 vue-router 引入 import {useRoute()} from 'vue-router'
动态路由会做到刷新页面,参数不缺失.

编程式导航

## vuex

在开发中我们需要保存很多数据,这些数据的管理叫做`状态管理`
因为需要管理的数据越来越多 兄弟之间的共享 `vuex`
将组件内部数据抽离出去,`抽取到一个示例对象`上.
构成一个巨大的 `view`, 里面所有的东西都可以使用里面的数据.
mulation 里面定义了很多函数
commit `提交` `mulation` 对 `state` 进行更新 _mulation 不允许 异步请求_
增加了一个 fragment,也可以使用模块化`module`

采用的是 SSOT 单一数据源.`single-source of Truth`

能让我们快速的在`单一数据树`上找到数据进行开发

```js
computed:{
 sync(){
  return this.$store.state.age
  }
}
```

mapState 两种写法,一种是数组,一种是对象

```js
...mapState(['couter','name'])
//当store里面定义的data与页面有冲突的话使用对象语法
// 当没有冲突的话 mapState([])数组语法会更简便一些
...mapState({
  sCouter:state=>state.couter,
  SName:state=>state.name
})
```

如何在`setup里面使用mapState`

```js
import {mapState,useStore} from 'vuex'
import {computed} from 'vue'
<script setup>
  const store = useStore()
  const name = computed(()=>store.state.couter)
  const stores = mapState(['name','age'])
  const newStores = {}
  Object.keys(stores).forEach(fnkey=>{
    // 因为里面的值都是key value类型的,我们需要将里面的key值取出来
    // value为一个函数
    // 然后重新定义一个{}
    const fn = stores[fnkey].bind({$store:store})
    // 因为内部computed fn是一个函数
    newStores[fnkey] = computed(fn)
  })
<script>
```

mapState()返回内部值都是一个个函数

vuex state getters mutations module

state 数据流,单一数据流

`getters` 对`state`的数据进行操作转换后返回的值,对`state原数据`无影响

`mutations`直接对 state 数据进行操作

都是同步函数

注意！ 在 mapGetters 和 mapState 用法差不太多,他支持对象类型和数组类型

mapGetters 返回的也是一个函数,和 mapState 也是一样的

在每次修改数据的时候,都要执行`提交commit操作`

```js
mutations:{
  increment(state,payload){
    state.counter += payload
  }
}
this.$store.commit('increment',data)
this.$store.commit({
  type:"increment",
  n:'10'
})
```

使用 mutation-types.js 定义常量 ,后在[常量] ()

注意 mapMutations 是写在 methods 里面的,因为 mapMutations 是直接写在方法里面的,所以在 setup componentsAPI 中就不需要这么麻烦了 直接使用...mapMutations

```js
const mapMutation = mapMutation(['', ''])
return {
  ...mapMutation,
}
```

因为 mutation 不支持异步操作,所以

- 在组件内部 created 生命周期时,使用异步操作
- 使用 action 层,可以再 action 层完成异步操作

所以在组件和 mutation 之间增加了一层 actions

(context,payload) 默认传回鼠标事件

actions 是提交 mutation,但是可以在 actions 里面使用异步操作

可以将一些需要提前请求的异步操作,转换成 actions 里面定义的函数

可以使用 promise 的方法解决异步完成后才进行操作

```js
actions: {
  //放函数
  increment(context, payload)
  //可以使用context.commit('mutation')
  //调用action 提交mutation, 使用mutation改变state
}
```

action 的分发操作, context `commit` ,`dispatch`,getters

`mapActions`的操作

#### Modules

模块化开发,每个模块里面都有属于自己的 state，getter，mutation

```js
$store.commit('home/space') //大概就是这种类型的数据
```

在 mutation 和 action 里面都需要使用...mapMutation

```js
import { createNamespacedHelpers } from 'vuex'
```

直接引用`命名空间的vuex`

### vue.config.js

改变 vue 的官方设置,以便来更好的开发

可以改变

```js
module.exports = []
```

#### nextTick

将回调退到下一次 dom 更新执行,在下一遍 dom 更新执行之后会立刻执行回调

promise.resolve.then() 微任务 微任务最后是 nextTick 任务
