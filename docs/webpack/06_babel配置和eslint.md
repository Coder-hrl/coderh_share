## babel 配置

通过 babel-loader 的预设来进行设置 preset 预设

stage-3 提案

##### polyfill (打上补丁)

> 如果浏览器本身是不支持 ES6 的语法的话,而我们确实需要用这个语法进行快速开发项目,我们就可以使用 polyfill 来打上补丁,让浏览器支持这个语法

打垫片,让我们可以使用最新的 JavaScript,帮助我们更好的使用 JavaScript

如果浏览器不支持 ES6 新特性的话,我们可以通过打垫片的方式,让 polyfill 来填充或者打上一个补丁,让浏览器可以按期执行

##### 使用 polyfill 在项目中,应该是生产时依赖

> 因为在打包之后到服务器中也需要 polyfill

之前下载使用@babel/polyfill

现在也要使用 core-js 和 regenerator-runtime 来打 polyfill

npm install @babel/plugin-transform-runtime

##### 在 babel 里面对 jsx 库进行转换

我们可以使用安装预设的方式来进行转换

`@babel/preset-react`

##### ts-loader 和 babel-loader 的选择

可以使用 ts-loader 或者使用 babel-loader

ts-loader 和@babel/preset-typescript 都是内置了 TypeScript,我们无需去安装 TypeScript 就可以进行转换

##### 我们希望在编译的时候今早的将 typescript 类型错误展现出来

一般 vscode 是可以帮助我们将错误检测出来

##### 我们应该在打包之后对 ts 代码进行验证,对于类型错误的代码不应该通过打包

babel 加预设 和 tsc 加 ts-loader 的选择

如果输出的内容,和输入的内容比较相似的话,使用 tsc

我们需要进行对代码转换进行输出的话,我们应该使用 babel 进行转换,同时使用 tsc 进行类型检测

##### Eslint

Eslint 是一个静态代码分析工具,(在没有任何程序执行的情况下,对代码进行分析)

##### 如何配置 Eslint

三种模式

1. 检测类型
2. 检测类型,并发现问题
3. 检测类型,发现问题并修改代码

在 vscode 中安装 eslint

安装配置 eslint-loader ,在打包之前先进行 eslint 检验

#####
