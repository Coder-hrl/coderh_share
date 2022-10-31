## plugin 配置

##### browserslist 使用 caniuse-lite 来连接 can i use 网站

##### rc runtimecompiler

##### user-select 用于设置或检索是否允许用户选中文本

##### PostCss 通过 JavaScript 来转换样式的工具

帮助我们进行 css 转换和适配

Postcss-loader 以及其中的配置

autoprefixer 的使用 自动添加浏览器前缀

##### 配置 postcss 文件

postcss-preset-env 里面包含了大多数所需要的特性

其中内置了 autoprefixer 包

包括把颜色进制转换为 rgba 的形式,等众多特性

什么时候配置 xx.config.js 和什么时候配置 rc,这是通过官网来进行配置的

##### image 资源引进资源

我们需要使用 file-loader,这个 loader 属性来进行加载这些资源

file-loader 5.x 之后通过 default 属性拿到值

通过 file-loader 处理之后会生成 128 位的名称

##### url-loader 比 file-loader 多一个 limit 限制,是否转换为 base64 图片

这也是性能优化的一种

##### 在 webpack5 中新增了 4 中资源类型,来代替 loader

1. asset/resource 资源处理,按照配置生成图片资源 file-loader,加载图片需要加.default,而 type 则不需要
2. asset/inline 进行内置处理,只生成 base64 的 url 编码 url-loader
3. asset/source 进行配置表 raw-loader
4. asset 类似 url-loader 的 limit 配置,判断是生成资源还是 urlbase64

##### plugin 用于执行更加广泛的任务,比如打包优化,资源管理

cleanWebpackPlugin 清空打包之后的文件

htmlwebpackPlugin 每次打包之后都自动进行引用

通过 ejs 模板来生成这个 html 文件
