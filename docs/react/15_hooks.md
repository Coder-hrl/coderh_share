## React Hook

##### Hooks 让我们不编写 class 的情况下完全写出替代 class 组件的函数组件

```js
function hooks() {
	return <div></div>;
}
```

可以使用函数组件,拆分成更小的组件

函数组件里面不能维护自己的环境变量,hooks 则可以保存组件里面的状态

Hook 就是 JavaScript 函数,这个函数可以帮助你钩入 React State 以及生命周期等特性

###### class 组件缺点

```js
1. 变的越来越复杂的,我们会编写大量的逻辑代码,让整个逻辑更加混乱
2. componentDidMount 里面将添加的定时器等东西 取消掉
3. 我们需要搞定this的指向,让处理函数的时候 还需要手动去指定this 并不优雅
4. 组件复用状态会很难
```

我们需要使用高阶组件和 render-props

如果多次使用 consumer 进行多次嵌套,代码过于复杂

> hooks 出现,解决了 class 组件的一些问题,向下兼容。
>
> 且只能在函数组件中使用,并不能在类组件中使用。

本身是一个函数,有参数和返回值 useState ,返回一个当前的状态

```js
const arr = useState();
let state = arr[0];
const setState = arr[1];
```

函数最外层调用 hooks,不要在循环和条件判断使用 hooks

```js
for(var i = 0; i < 10;i++){
  const [state,setState] = useState(0s)
}
```

学习 React hooks,对象解构 数组解构

> 可以在一个组件使用多个变量和复杂变量进行操作

通过使用多个 useState 函数来进行定义组件中的状态

```js
const [state, setState] = useState({
	name: 'libai',
	age: 18,
});
const [count, setCount] = useState(10);
const [person, setPerson] = useState({
	name: 'libai',
	age: 18,
});
```

都要保持**状态的不可变性**,都要重新使用一个变量去覆盖之前的变量

使用浅拷贝的含义,最重要的还是让`react知道这个函数发生了改变`

和 this.setData,差不太多

`effecthooks`完成副作用之类的东西,所以称之为 effecthook

##### useEffect 执行时机

**函数会在组件渲染到真实 dom 上进行执行,不管第一次还是以后的每一次更新都会进行渲染**

因为请求网络资源,手动更新 Dom 都是 React 更新 Dom 的一些副作用

只要重新渲染 useEffect 钩子函数就会重新执行一遍

> 第三个参数是 需要被监听的参数,指的是被监督的参数
>
> 如果什么也没有传入的话,则初次更新渲染之后每次更新不会重新执行,
>
> 如果没有deps的话,则每次更新都会执行

##### 使用 useContext 的使用

`特殊场景所用到的hook`、`性能优化的hook`和`自定义hook`,React18的hook.

使用函数式组件和hooks  useState和useEffect是最重要的,还有一个万金油useRef,对于react-redux则是useSelector,useDispatch,和react-router useRouter,和useRoute.

> 注意!!! useContext 和useSelector都是一旦数据发生改变,就将用到的地方都进行一遍更新

之前的做法

```js
const userContext = createContext()
<userContext.provider value={}>
</userContext.provider>
<userContext.consumer>
      {user=>{

      }}
</userContext.consumer>
///////////在hooks里面使用
const user = useContext(userContext)
// 在共享时,仍然使用的是<user.provider value={}></user.provider>
// 拿到的是provider 中的value
// 在这个里面可以拿到父级共享的context作用域中共享的value
```

##### useReducer (了解)

useReducer 可以是 useState 的替代方案   tookit

userReducer + useContext 类似于redux

> 如果state的处理逻辑比较复杂,可以使用useReducer用来替代
>
> 使用dispatch来进行多种操作,原理也就是将对state的不同操作封装成函数
>
> 本质上与编写函数,来动态传入值效果一样,只是可读性比state稍微好了一些
>
> 用来管理一些比较复杂的数据时候使用,对复杂数据操作的时候

```js
// useReducer的使用
const [state, dispatch] = useReducer();
// 可以dispatch 一个action对象
// 不能共享数据的,只能共享这个函数,不如useContext()
```

##### useCallback   (性能优化)

> 因为每一次的刷新,组件内部都是会重新执行一次函数,根据如果依赖值不变,直接返回函数结果这个特点,我们可以进行数组,根据依赖值,使用**memo 函数组件**,useCallback需要与memo相配合使用
>
> 前置
>
> 1. 组件更新,函数会重新渲染,props和state更新,组件重新会发生渲染
> 2. 子元素向父元素传递函数,或者触发父元素函数时,都会让子元素重新渲染
>
> 使用场景
>
> 1. 将一个函数传递给子组件时,最好使用useCallback进行一个优化 
> 2. 使用useRef,让useRef.current= count,然后在setState(useRef.current+1)
> 3. 在修改的时候使用,setState(item=>(...item,新值))
>
> 组件中的函数,传递给子元素这个函数时,使用 useCallback 进行性能优化,因为这个函数没有发生重新的声明,而简单的不让子组件跟随这个函数的改变重新更新渲染,使用 memo 就可以,memo针对的是props中的state值??

> 实际上是进行的性能优化,传入一个回调函数,同时返回一个 memorize 记忆值,在依赖不变的话,多次调用,返回值时相同的
>
> ```js
> const increment = useCallback(() => {
> 	first; // 逻辑代码
> }, [second]);
> // 不同的性能优化
> const increment =useCallback(function foo(){
>   console.log("inrement")
>   setCount(count + 1)
>   // 此时传入的count是初次执行的闭包,  也就是一个闭包
> },[])
> //如果useCallback的依赖值不发生改变,这个函数的count永远是第一次渲染获取到的值
> //可以用到发送网络请求吗??
> 
> const foo = function(name){
>   return function(name){
>     console.log(name)
>   }
> }
> bar =foo("libai")
> // bar已经是一个写死的函数了,无论怎么样都不会发生改变
> ```
>
> second 是传入一个依赖的数组

```js
function HYbutton(props) {
	return <button>{} </button>;
}
```

##### useMemo

> useCallback和useMemo之间的区别,useCallback对于函数传递给子组件时进行性能优化,useMemo也可以对子组件传递props进行性能优化
>
> 1. useMemo对返回结果进行优化 useMemo(()=>fn,[])
>    - 将返回值进行优化,这个对大数据逻辑有很好的的帮助
>    - 对子组件传递一个相同的对象,使用useMemo进行优化
>    - 指的是不再修改的值,使用useMemo来进行优化
> 2. 而useCallback对函数进行优化 useCallback(fn,[])
>    - 不希望子组件随便进行渲染
>
> 而useMemo则只是对组件进行优化,相当于computed的操作,用来缓存数据,缓存因为组件更新导致函数重新渲染计算
>
> 对函数的返回结果来进行操作,和computed 还不大一致
>
> conputed? 比较像 Vue 中的 computed,对返回值做优化
>
> ```js
> const memo = useMemo(() => {
> 	// 只有在count发生改变的时候才会进行改变
> 	return difCount(count);
> }, [count]);
> // 无需传入一个函数,而通过传入函数的调用来实现
> const memo = useMemo(()=>{
>   return cacelCount(count)
> },[count])
> ```

##### useRef

> 使用方法是 const userRef = useRef()
>
> ref 默认有一个**current**属性对象
>
> 1. 引用 DOM(或者组件,但是也需要 class 组件)元素
> 2. 保存一个数据,这个对象在生命周期中不变
>
> ```html
> <div ref="{userRef}"></div>
> ```
>
> 还可以出传入一个数据,他是可以得到数值前一个值和目前这个值的
>
> 还可以用来**保存数值的前一个值和后一个值**
>
> Ref 保存的是 Count 上一次的值
>
> ```js
> const numRef = useRef(count);
> numRef.current是Count的上一次值;
> ```

###### useDispatch 和 useSelector

> ```js
> const dispatch = useDispatch();
> dispatch();
> ```
>
> useSelector 使用的是数据,useDispatch 使用的是 dispatch
>
> ```js
> const {} = useSelector(state => ({
> 	// 因为这里返回的是一个对象,所以我们需要使用
> 	// ()=>({})的方式来进行得到返回对象
> }));
> ```

###### useImperativeHandle 最小暴露原则

`只暴露自己可以暴露的,最小暴露原则`

> **配合 forwardRef 这个 hook 包裹函数组件进行使用** > **然后使用这个 hook 来进行自定义暴露** > **就好比在 Vue3 里面的 defineExpose 里面的自定义暴露**

```js
import { forwardRef,useImperativeHandle}
const newRef = forwardRef((props,ref)=>{
  useImperativeHandle(ref，()=>({
    focus:()=>{
      //相当于自定义ref方法,可以用的非常好,也很好用
      inputRef.current.focus()
    }
    // 依赖项指的是ref
  }),[new])
})
```

###### useLayOutEffect `很少使用` `提高性能`

`类似useEffect的使用流程`,一个是在 dom 更新之前,一个是在 dom 更新之后执行

![image-20220402143306970](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220402143306970.png)

更新 dom 前进行`触发的钩子函数`,但是会**阻塞 Dom 更新**,防止渲染两次 Dom

一般用于一登录就立马修改一个值的时候 立马就渲染的情况   很少使用

只有在useEffect使用会出现闪烁的时候,才需要使用useLayOutEffect

```js
useLayOutEffect(() => {
	// 逻辑操作
	if (set == 1) {
		setCount(count++);
	}
}, []);
```

###### 自定义 hooks

> 封装 hook,对相同逻辑的代码进行封装

**对相同逻辑的 hook 进行了封装抽取**,然后引入 hook,实现耦合性降低

###### 使用 useContext

传入一个`context`

### fiber

屏幕赫兹,指的是一秒刷新 120 次,越高,看着越丝滑

GPU 绘制,交给电脑屏幕,根据固定的频率去取绘制来的图像

本质上是一帧帧的图像,1 秒三十帧.一秒播放 30 帧图像

> GUI 渲染和 JavaScript 执行是在一个线程进行的,他们是互斥进行访问的

Fiber 指的是时间碎片,

Fiber==>Fiber 树==>ReactElement,一旦有空闲时间就会去执行 Fiber 碎片单元

RequestAdleCallback,

**hooks 是挂载到 Fiber 上面的,是一一对应的关系**

目前已经被 TypeScript 代替了

1. JavaScript 代码和 Gui 渲染都是在同一个线程,
2. 这样如果 JavaScript 执行时间过长就会阻塞 Gui 的渲染速度,还是互斥操作

webpack 中 publicPath 的作用是在布局 CDN 加速的时候使用

##### key

主要是用来比较虚拟 DOM 算法,在比较新 VNodes 和旧 VNodes 的

如果使用 key,会用来比较 key,来判断元素的新增和删除

如果不使用 key,会最大限度的利用之前的元素位置空间

```js
watch:{
  obj:{
    handler:(newValue,oldValue){
    },
    deep:true,
    immediate:true
  }
}
```

##### 编写接口,多个接口或者类

然后编写联合类型,当然我们也可以使用 type 交叉类型

```js
type Option = bar | newBar;
```
