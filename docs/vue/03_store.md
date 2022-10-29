##### 使用单一状态树

vuex中是创建一个总的store,然后module里面引入模块化

最直接的找到某个模块内的东西

##### pinia

而在pinia中则是可以创建多个store,各个store相互之间是独立的

##### Vuex 操作使用

```js
const store = createStore({state:()=>({}),module:{})
```

`mapState()`是用来批量的获取state的

`mapGetters` 批量获取getters方法

```js
...mapState(["name","age"])
...mapState({
  SName:state => state.name
  SLevel:state => state.level
})
```

```js
const store  = useStore()
const {name,age} = toRefs(store.state)
```

