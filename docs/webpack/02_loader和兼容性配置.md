## webpack 中的 loader

> loader 本质上是一个函数,plugin 本质上是一个自实现的类

##### pnpm 构建速度和所占内存比,非扁平化 node_modules 都是优于 yarn 和 npm 的

##### **webpack 在打包时会生成依赖关系图**,这个依赖关系图包含了所有的模块

根据图结构去打包一个个模块

##### 我们需要使用 loader 来加载转换模块化源代码

##### -D dev dependence 开发时依赖 -S dependence 生产时依赖

peer-dependence 相匹配的依赖

##### loader 配置方式

1. cli 配置
2. import 时 文件的配置
3. 通过 webpack.config.js 来进行配置(**非常推荐**)

##### 在解析 css 的时候,会把 css 通过 js 编写的方式实现

##### style-loader 的作用 将打包之后的 css 插入到 HTML 中 style 标签中

1. 行内样式
2. 外引入 css 文件
3. 插入到 style 标签中进行解析

##### 如何处理 less 和 scss stylus 的预处理器

在安装 less 解析的时候,我们同时需要安装 less 和 less-loader

##### less-loader 只是负责将 less 文件转换为 css 文件

##### css 的浏览器的兼容性问题

> 针对不同的浏览器所支持的特性,比如 css 特性,js 特性,之间的兼容性

autoprefixer 和 babel 所做的效果都是一样的

设置 postcss-preset-env

##### .browserlistrc 浏览器兼容性标准 以 **can I use 中查到为主**

`> 1%` 表示市场所需占有率要大于百分之 1

`last 2 version` 最后两个版本 `not dead` 指浏览器在 24 个月没有更新且官方支持

与 auto-prefixer,babel,postcss-preset-env 等都是会根据.browserslist 判断的浏览器兼容性标准来进行配置

会给到我们所要的信息 `npx browserlist ">1%, last 2 version, not dead"`

##### 前端工程化

万事不需要自己来进行配置,可以一键进行配置,比如浏览器兼容性配置
