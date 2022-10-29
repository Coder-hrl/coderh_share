#### 为什么使用webpack

> webpack是静态模块化打包工具为现代化JavaScript
>
> 静态:`静态资源`
>
> 模块化: `支持CommonJs和Esmodule和其他模块化方案`
>
> 打包:`将less,sass或者ES6以上代码打包成js,css等浏览器可以识别的文件`

浏览器是存在兼容性问题的,JavaScript和css进行兼容,一些浏览器并不支持很新的方案

我们需要使用css和JavaScript的高级特性快速的开发代码,同时需要实时刷新效果,同时我们还需要生产之后的代码,执行解析速度更快

**Vue和React的脚手架底层都是依赖使用的webpack**

而是存在css样式或js问题在低等级浏览器不可用

##### 因为部分浏览器并不支持模块化,更不支持commonJs

我们需要手动去配置,去配置loader和plugin等配置

##### 是成为前端架构师和高级前端工程师必不可缺的一点

##### Vite需要替代Webpack需要跟上生态,同时需要更加的稳定

1. 只是提高我们的开发速率

2. 最终需要打包的时候,仍然需要rollup

##### 我们学习任何东西,都是学习其核心思想,学习其中的设计模式

Babel各种语法以及polyfill和TypeScript

##### webpack配置文件和命令行操作

可以查阅 WebpackAPI  可以让我们做一些自定义的东西

##### webpack是依赖Node的,同时帮助我们安装了npm

webpack-cli不是一个必须品,我们可以自己去实现cli,比如Vue有vue-server-cli

#####  npx的作用

使用当前目录寻找最近的工具使用

如果未安装工具的话,会通过远程库进行拉取使用 