---
title: React优化建议
---

[原文地址](https://juejin.cn/post/6908895801116721160)

### 一，优化 babel 配置，webpack 配置优化，让开发更加方便

#### 1.1 真实项目中开发难点

我们应让我们的项目更快的构建速度，打包后更小的项目体积，更清晰的项目结构。

随着依赖越来越多，结构越来越复杂，项目体积会越来越大，构建时间越来越长，我们要适当地`减负`

1.  使用 include 或 exclude 限制 loader 范围
2.  使用 thread-loader 进行多线程打包，`此loader不可滥用，因为thread-loader也是会浪费构建资源`
3.  开启 babel 缓存，cacheDirectory 为 true
4.  treeShaking 删除冗余代码 `webpack5中已默认打开`
5.  按需加载，按需引入，在 antd 和 react 开发中已经习惯了这种开发方式
6.  .babelrc 增加对 antd 样式按需引入。

```js
[
	'import',
	{
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	},
];
```

### 二，路由懒加载，路由监听器

使用 React 路由懒加载，在配置动态路由的时候，不要一次性的加载所有的路由，会延迟初始化时间，我们可以使用 lazy 来进行懒加载
