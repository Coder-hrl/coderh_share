## Webpack

> loader 是用来处理依赖图中的模块解析的,转换特定的模块类型,加载特定的模块
>
> plugin 是用来进行打包优化,资源管理,环境变量的注入,功能扩展
>
> loader 是用来解决模块解析加载问题,plugin 是用来解决解析之后的优化的

所以我们会有 babel 用来对自己所写的代码进行降级,同时对多种浏览器添加前缀

市场占有率大于百分之一的浏览器,并且还在维护的

auto prefix

postcss

24 个月没有官方支持和进行维护的版本,not dead ,市场占有率通过 iuse 来使用

browerlist 用逗号是|| 不用逗号是&&

这种东西,可以放到 package.json 也可以放到单独的文件中

## Postcss

通过 javascript 来转换样式的工具,可以帮助我们进行一些简单的样式转换,

可以进行自动添加浏览器前缀,或者重置所有的样式

webpack 里面的 postcss-loader,选择可以添加的属性

postcss-cli 让我们可以在命令行可以使用

npx postcss -o 目的 css, 需要被转换的 css

autoprefixer 加上浏览器前缀

在项目里面使用 postcss-loader 来对模块进行动态添加各种功能

Postcss-preset-env 是包含 autoprefixer

数组和对象的区别就是对象需要有键,但是数组则不需要添加键

@import 是属于 css 语法,只会被 css-loader 处理

#### 图片加载

是完全可以通过 js 代码来创建一个元素,同时给元素添加样式和类名的

require()要取得 default 属性,才可以取到值

url-loader 和 file-loader 较小的文件转换为 base64 编码 url,来进行查看

小的图片转换成 base64 ,因为可以用来减少网络请求,大的图片还是要通过引用进行

一般以 100kb 来进行比较,可以通过 limit 来进行比较,如果超过就是用 base64 来进行编辑

#### webapck5 之前和之后

之前会使用**file-loader url-loader**

之后使用 **asset module type**

**resource 是指 fileloader inline 是指 urlloader**

asset 进行动态改变自动为 inline 或者是 resource

需要重新设置

### 目前没有打包后的 html

目前所有的 html 都是自己手动创建的,并没有自动打包出的 html 文件

plugin 插件,自己创建出一个打包出来的 indexhtml 文件

#### cleanWebpackPlugin 是用来帮助我们来解决每次打包的问题

他会在这次打包的时候默认删去上一个 dist 文件夹

Plugin 基本都是用 new 来进行构建的,导出的都是一个类

#### definePlugin

允许在编译的时候,可以使用全局变量

### mode 模式(开发模式)

有**production 和 development**

会将 `DefinePlugin` 中 `process.env.NODE_ENV` 的值设置为 `development`. 为模块和 chunk 启用有效的名。

当设置后会默认设置很多配置化

#### webpack 模块化的原理

Esmodule commonjs

##### Commonjs 模块化原理,ESmodule 原理

commonjs 可以加载 ESmodule ESmodule 也可以加载 commonjs

```js
const map = require('map');
import map from 'map';
```

`devtool:"eval",'source - map'`

`eval打包后的文件里面存在eval()`

`会先加入缓存当中`

webpack 里**面也是有缓存的**,缓存里面存在则从缓存中取,如果不存在则重新执行

`sourceMap`是一项将编译、打包、压缩后的代码映射回源代码的技术

以路径为值,以引入的对象为函数,调用函数

webpack 是支持 Commonjs 引入 Esmodule,ESmodule 引入 Commonjs

### source map

> 帮助我们在开发和测试阶段快速定位错误代码,但是在生产阶段则不能使用 sourcemap
>
> 一是可能会暴露源代码
>
> 二是打包和构建速度都会变慢

我们运行的代码是 es5 的代码,是压缩丑化之后的代码

但是我们调试打包后的代码是非常困难的

source map 是用来帮助我们阅读打包后的代码,是一一映射源文件的

根据源文件生成 source-map 文件,转换后的代码添加一个注释

`mode为development`生成后的代码是没有进行压缩丑化的

**eval 的速度是高于 sourcemap 的 指低于 none 打包模式,**所以遇到问题先去官网看一看

基本有 sourcemap 和 eval 两种方式

推荐使用`cheap-module-source-map`，有的值设置之后无法显示对源文件的映射文件

开发和测试都需要使用 source-map 这样才可以尽快的定位错误

### babel

下载@babel/core babel-loader

可以转换 ES6 以上版本的 js 转换为 ES5 以下的 js 版本

> 工具链,用于转化成兼容性高的 js 语言,语法转换,ployfill 实现目标转换缓解缺少的功能
>
> 是一种可以将 ES6 以上的 js 代码转换为 ES5 兼容性强的解析器

会被转换为抽象语法树,然后转换成一个字节码.然后交给 v8 引擎进行执行

编译器,JavaScript 是一个解释性语言,先编译再链接再执行

![image-20220225134253549](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220225134253549.png)

会先进行`词法分析`,然后转换为`tokens数组`,tokens 数组包括 关键词,标识符,运算符,会进行一个个分析生成一个 AST 抽象语法树.

进行抽象为成一个抽象语法树,对所有的树节点进行遍历操作,在访问的过程中应用插件,最终生成一个 AST 抽象语法树,**babel 在对每个节点进行访问的过程中应用插件生成 AST 抽象语法树**.

使用 packages 进行分包操作

解析阶段--> 转换阶段 --> 生成阶段

目前用的比较多的是 browerlist

stage-X 的设置,会分阶段的去假如不同的语言特性,分为四个阶段从

0 没有正式提交的草案 -->1 已经正式的被提出来了,还需要观察和其他提案的影响 -->2 开始考虑一旦实现是否合理 -->3 候补阶段,已经正式建议为候选提案了 4-->正式

### polyfil

> 填充材料,垫片补丁,可以帮助我们更好的使用 javascript。
>
> 当有一些时候,浏览器不认识新的特性,必然会报错,我们可以使用 polyfill 来打一个补丁.
>
> 就可以使用这个补丁了.
>
> 依赖 regenerator runtime 和 corejs

给一些不知道如何转换的高级 APi 打上补丁可以在浏览器上来执行

编写的工具库,需要使用 polyfil

#### 那我们在开发中是使用 ts-loader 还是使用 babel-loader

> babel-loader 是依赖@babel/preset-typescript
>
> 缺点不会对代码进行一个**类型的校验**

ts-loader 本质上是依赖`TypeScript`的,所以也会对 typescript 进行下载安装

因为存在依赖关系,**但是 ts-loader 会缺少 profill 来对 js 进行优化打补丁.**

会进行一个类型检测,如果**类型检测不通过的话会无法完成打包**

babel 可以直接对 ts 代码进行编译,同时会使用 profill 对生成的 js 进行优化打补丁

我们更加的推荐预设,有`@babel/preset-env @babel/preset-typescript @babel/preset-react`

ts 编译的最佳实践 **使用 babel 进行转换,使用 tsc 进行类型检测.**

TypeScript 是在编译时期进行类型检测的,我们可以在编写代码发现错误,是因为编辑器给我们的提示. 编辑器加 typescriptcheck: “tsc --noEmit”

如果输出和输入内容没多大区别,并没有像那些 promise 或其他高级语法的话使用 ts-node

##### Eslint

帮助我们进行**静态代码分析检测工具**可以和 prettierc 一起进行格式化代码

rules 里面里可以有`‘error’,’off‘,’warn’`

##### HMR 模块热更新

> 因为每次修改代码都需要重新搭建,非常繁琐,所以需要使用模块热更新
>
> 搭建本地服务器,开启本地服务端口号
>
> 需要在 dev-serve 里面添加 hot 属性
>
> 会提供两个服务,一个是静态资源的服务,提供可以被浏览器解析和分析的服务
>
> 另外一个就是 net.socket 服务

解决方法:

1. 可以使用**webpack --watch**来进行动态打包,也可以设置**wacth 为 true**,但是编译完成会生成新的文件.
2. 可以通过**live-server**插件来提供本地服务,自动刷新页面,liveserver 会刷新整个页面.
3. 使用`webpack-dev-server`他只会提供一个本地服务器 后续还要添加 HMR 本地热更新服务,他不会生成一个`build文件` `实现了 hot module replace 模块热更新`
4. `webpack-dev-server`的使用中有一个 proxy 代理,可以通过代理来进行跨域运行,使用了 express 框架开启了一个本地服务.

*模块热替换是指在应用运行的过程中,*可以替换,添加删除一个模块而**无需刷新整个页面**

有的时候我们需要保留原来的状态,不需要进行改变.同时增加了开发效率.

`@babel/preset-env`基础的预设

Vue-loader 是自带 HMR 热模块更新的,同时也会对 vue 模块进行解析,转换.

在 devServer 中的 publicPath 为 abc 的时候,标识我们需要**在浏览器的什么位置来访问**如 http://localhost:8080/abc 来进行访问

**注意 devServer 需要跟 output 里面的 publicPath 一致相同** 要么都设置,要么一个也不设置.

##### devServer 中 contentbase

**用于打包后的资源又依赖其他资源的时候使用**

hotonly 当编译失败后,是否重新刷新整个页面

**当 host 设置为 0.0.0.0 代表其他所有地址都可以访问**

**port 可以从哪个端口可访问**

**open 编译完后可以自动打开浏览器**

**compress 意味着可以进行代码压缩处理** _content-encoding 为 gizp_ 0.5 的压缩比例

**proxy 设置一个代理,可以通过设置来解决跨域访问问题**

```js
proxy:{
  //只能在开发环境下解决的跨域问题
  '/api':{
    target:'',
    // 改变来源,因为有的服务器会对数据来源进行校验,防止爬虫
 		changeOrigin:true,
    //https在没有证书的情况下可以接收到数据
    secure:false,
 		pathRewrite:{
       '':''
    }
  }
}
```

##### **historyApifallback**

> 默认为 flase,如果为 true,会对映射到 404 的页面映射到 index.html

为了解决在单页面应用中当路由匹配不到,返回 404 的问题,配置后可以返回到一个配置后的页面.

里面还可以配置多个对象,可以使用正则表达式来匹配需要映射到的位置

##### resolve 模块解析

可以配置模块如何被解析,

1. 绝对路径,可以用来解析绝对路径
2. 相对路径,上下文的基础之上来查找其他文件
3. 模块路径,会默认去 node_modules 里面查找模块

如下图

```js
import react from 'react';
import Commponent from './common';
import next from 'huangruilin/code/vue/learnvue.vue';
```

也可以在 resolve.extensions 里面进行配置和 alias 别名设置

还可以在 resolve.

当项目目录的层级比较深的时候,我就需要自己来设置一个别名可以更快的查找文件

```js
resolve:{
  extensions:['wams','js','json','jsx'],
  alias:{
    "@":path.resolve(__dirname,"./src")
    "router":path.resolve(__dirname,'./router')
  }
}
```

在服务器中也可以在 nignx 里面使用一个代理

#### 提取代码,环境分离

> 两种方法:
>
> 第一种是使用不同的 webpack 配置文件,在 package.json 配置文件中对脚本依次配置
>
> 第二种使用一个公用的,然后给公用的设为一个函数再传入参数,根据不同的参数进行配置

将配置的 webpack 代码,将公共配置和个性私人化配置分别配置.

可以在执行配置的时候,分别使用--config 使用不同的配置

**使用 cwd 获取当前目录**

可以先定义一个空数组,然后根据条件来分别 push 到数组中.配置文件里面有`process.env.NODE_ENV`

有一个函数 merge 来自于 webpack-merge

##### 代码分离

> 需要对打包后的代码进行分离,因为主包过大会导致首屏渲染过慢

我们可以将主包分成很多其他包,按需加载,提供代码优先级

1. *（不推荐）*使用 entry 配置手动分离代码,**多入口会造成重复代码打包,比如都引入了相同的库**

   ```js
        entry: {   使用多入口的方式来进行手动代码分离
          main: './src/main',
          main:{
            import:'./src/main',dependOn:[]
          }
          index: './src/index'
        }
   ```

2. 使用插件 SplitChunksPlugin 分包插件

   使用 import 异步函数来加载这个函数,可以在 webpack.config.js 里面配置优化选项

3. 使用分包 只要使用异步导入,都会进行代码分离操作

   使用魔法注释 `/* webpackChunkName:'名称'*/`

   在路由注册组件的时候使用动态加载()=>import(`/*webpackChunkName:'/foo'*/`'./foo')

懒加载意味着只有在使用的时候才会去下载文件,这样会降低首屏渲染速度

`import是动态导入`,当点击元素的时候才会去做一个`import()`懒加载处理

懒加载,显示下载 js 文件,然后再去解析

##### 代码压缩

具体可以在 webpack 官网进行查看

##### 预加载,预解析

`prefetch预获取`==>也是使用魔法注释 `webpackChunkName:""`.

预下载,`webpackPrefetch:true`,`webpackPreload:true`

preload 会在父 chunk 下载的时候**并行进行加载会立即加载**的

prefetch 会**在浏览器进行闲置的时候进行加载**的

所以目前 prefecth 会更好一点,因为 preload 仍会在开始加载的时候并行加载

##### runtimeChunk

可选值有 `simple|multiple,true` 还可以设置为一个函数.

是否将分包的的 chunk 合并成一个 chunk 包

##### 布置 CDN 内容分发网络(收费)

> 设置多个 CDN 节点,将静态内容布置在 CDN 上,当用户访问网站的时候,会返回距离用户最近的 CDN 节点资源
>
> 如果本地没有用户想要的资源,节点就会去根节点进行查找,如果根节点也没有的话则会去源站去

需要修改打包时候的 publicPath,改为

相互连接的网络系统,当用户访问的时候会返回距离用户最近的服务器资源

提供高效率,可扩展性低成本的网站内容给客户

两种方式,一种是将**打包后所有的静态内容**都放到 CDN 服务器上面

​ 第二种就是把一些第三方资源放到 CDN 上面.

第三方库都是放到免费的 CDN 服务器的.如`bootCDN服务器`

---

`externals:{}`里面的属性是不需要被打包的模块,我们需要在 webpack 中导入,我们可以在 bootCDN 中使用第三方包进行使用,可以使用

```js
<% if(process.env.NODE_ENV=="production"){ %>
  可以在html模板中使用
<% } %>
```

##### shiimming 垫片不推荐使用

##### minicssExtractPlugin

##### Hash_chunkHash_contentHash

Hash 值的生成是与项目有关的.一方改变另外一方也会进行改变

chunkHash 只会修改对面的文件改变 **被引入的模块**打包的名称也会发生改变

**(推荐使用)**contentHash 只修改改变的模块.

**通过 rollup 打包的方式也很多**

##### Dll 动态链接库

> 打包一个 Dll 库,在项目中引入 Dll 库

是软件在 windows**共享函数库**的一种方式,我们可以将一些不经常发生改变的代码抽分到一个共享库中

如果使用这个库只要进行引用就可以. 已经在使用 webpack 里面的 dll 库

需要使用 webpackDll 插件

使用 webpack.DllReferencePlugin 插件来引入 webpackDll 插件

##### Terser 代码压缩工具

> **减少代码量,分割代码**
>
> 是一个绞肉机类型,将一个大的代码逐步分解成一个个小的类型
>
> terser 是 js 的解释器,对代码进行分割,分别打包,压缩

treeShaking 将一些不用或不再使用的代码进行删减,不再放到打包后的代码当中

webpack 中 Terser 的使用,可以做一个独立的工具

默认的压缩是去除空格,没有做太多的转换

###### arrows 将普通函数转换成箭头函数

**arguments**在不知道函数需要传递多少参数的时候使用.

**Dead_code**无用的代码将会被删掉

**mangle**丑化处理

**在设置为 production 模式下,会使用一大堆的插件来帮助我们进行优化处置,所以一个 production 模式代表非常多的东西**

##### 对 css 进行压缩

去除无用的空格或空行

##### 作用域提升 scoped hoisting

> 减少打包后的大小,使用作用域提升

ESmodule 会进行静态模块分析,尽可能使用**ESModule**来进行开发。

也会在为 production 模式下启动,

##### tree ShaKing

> 俗称树的摇晃,摇树的方式,把不用的,或者**用不到的代码给摇掉,消除未调用的代码**
>
> JavaScript 的 treeshaking 来自于 rollup 打包工具

tree ShaKing 来自于 ES Module 静态语法分析

1. useExports 标记函数是否使用,对使用的函数进行 Terser 优化,需要和 Terser 一起使用

```js
// 在production中是默认使用tree shaking
// 需要在optimizations 将	`useExports`设置为true
// 标记出那些函数是没有被使用的,被Terser进行删除操作
```

1. sideEffects 跳过整个模块和文件

```js
// 另外一种sideEffects,
// 对于引用但是不使用的模块也会进行跳过
// 可以在一些需要被打包不需要被移除的,rules模块里面的sideEffects:true
```

编写一些没有副作用的代码,删除文件是否会有副作用的发生

###### css-treeShaking

对 css 进行`treeshaking` 对页面中没有类名的 css 属性给删除掉,使用 purge 插件来进行

> 主要使用`purgecss-webpack-plugin`插件

#### http 压缩

是一种内置服务器和客户端的过程,是一种改善传输速率和网络带宽的行为

可以在客户端设置 http 压缩,accept-encoding:gzip,br

浏览器会自动帮助我们进行解压 content-encoding:gzip

使用 webpack 实现 gzip 压缩,

```js
compression - webpack - plugin;
```
