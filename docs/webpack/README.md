## webpack 中的配置

##### 1. 为什么 thread-loader 会拖慢打包的过程

通过查询之后,thread-loader 需放置到其他 loader 之前,会开启一个独立的 worker 池中运行,

1. 每一个 worker 都是一个独立的 node.js 进程,开销大概 600ms,同时限制进程的数据交换
2. **请注意仅在耗时的操作中使用此 loader**

##### 2. 在 css 文件中通过 import 引入之后 cssloader 并没有经过 postcss-loader 处理

通过在 css-loader 设置的使用

ImportLoaders 数量是指需要被处理的 loader

```js
{loader:"css-loader",options:{ importLoaders:1 }}
```

##### 3. 在 css 文件中使用@import url() 这种方式并不能引入模块依赖图中

使用 `@import ""` 的方式

或者在 main 文件引入 `import("")`
