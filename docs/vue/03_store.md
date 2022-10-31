## pinia 和 Vuex

##### 使用单一状态树

vuex 中是创建一个总的 store,然后 module 里面引入模块化

最直接的找到某个模块内的东西

##### pinia

而在 pinia 中则是可以创建多个 store,各个 store 相互之间是独立的

##### Vuex 操作使用

```js
const store = createStore({state:()=>({}),module:{})
```

`mapState()`是用来批量的获取 state 的

`mapGetters` 批量获取 getters 方法

```js
...mapState(["name","age"])
...mapState({
  SName:state => state.name
  SLevel:state => state.level
})
```

```js
const store = useStore();
const { name, age } = toRefs(
	store.state,
);
```
