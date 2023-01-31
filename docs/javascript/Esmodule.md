##### 通过webpack模块化开发的方式

webpack解析生成依赖图,通过loader转换各个模块生成CSS和js文件,然后最后生成打包之后的依赖文件,还可以进行分包,拆包等进行性能优化

##### export import 各种导出导入的方式

可以使用export {}, export default ,直接使用export name

##### import() 同步导入函数

##### 在导入时,给标识符起别名

import { name as fileName }

##### Esmodule 之前JavaScript是没有模块化开发的

采用了编译器的静态分析,同时加入了动态引用的方式

在解析Esmodule中,我们需要使用`type="module"`告诉浏览器这是一个模块

`<script type="module"></script>`

##### 他是可以通过webpack的extension来添加后缀名

可以在导出和导入的时候,都可以起别名的方式

##### 还有一种思想是在index文件里面,导入所有的导入,然后进行统一导出

我们还可以设置别名的方式去区分这种方法

我们还可以使用更好的方式,

优化一    比如直接使用export { formatCount,formatDate } from ‘./’

优化二    比如直接使用 export  *  from “”

##### export default 没有名字的默认导出方式

export default name

直接使用import 随便 from

##### 一个模块只能有一个默认导出

##### ()=>import()

##### import操作应该放到文件的最前面,这是因为他在执行代码前会进行静态解析

import 操作会进行异步加载,最终会返回一个promise对象

##### import 函数是异步动态加载,可以放到逻辑代码中

```js
if(flag){import()}
const name =  import("")
name.then(()==>)
```

每个模块都是属于一个module对象

##### import.meta 是加载foo所存在的url

##### ESModule是如何被加载的

一,构建,根据地址查询js文件,并且下载,将其解析成**模块记录**(Module Record)

二,实例化,对模块记录进行实例化,分配内存空间,解析模块的导入和导出语句,模块指向对应的内存地址

三,运行,运行代码,计算值,填充到内存地址中

##### `模块记录`    每个模块都存在   解析中其中的import和export关键字

在运行执行之后,就可以将所需的值放到内存变量上了

##### 先进行下载文件,然后进行解析文件生成环境记录,再查看是否会引用其他文件

在下载的时候,会先去查看Module map是否有自己所需要的Module模块

Module map里面不存在,没有的话才会去下载

##### environment record

##### 包管理工具解析

1. npm包管理
2. package配置文件
3. npm install原理
4. yarn cnpm npx
5. 发布自己的包
6. pnpm使用和原理 ==> 软连接和硬链接

##### 代码共享方案

通过上传包的方式,将自己的包上传到npm上

npm register  npm仓库下载

可以使用npm install Vue@2.6.7  进行手动指定安装

##### 使用npm网站来管理我们的代码,我们可以通过模块化的方式封装自己的代码,并封装成一个函数

##### Node Package Manage 包管理工具

存在,项目名称,项目版本号,项目开发时依赖,项目生产时依赖

```json
{
	name:"",
  version:"",
  main:"index.js",
  scripts:{},
  dependencies:{},
  devDependencies:{}
}
```

scripts 保存脚本命令,以键值对的形式存在

##### 确定生产环境是否需要这些包,比如babel和webpack,这些都是帮助我们开发的

比如webpack和babel等

##### 来判断开发阶段是否使用和生产阶段是否使用

在工具包同时依赖了很多其他的生产包

##### peerDependence 对等依赖包,如果依赖关系不正确就会导致错误情况发生

比如Element-plus需要对等依赖Vue3   antDesign库对等依赖React

##### X.Y.Z    依赖的版本管理  X(major)主版本号 

##### Y(minor)此版本号  新功能增加,兼容之前的版本,新版本增加 

##### Z(patch)修订号  修复了之前的版本bug

~  Z小版本可变

^ Y,Z版本不可变

如果没有^或者~表示直接写死这个版本号

##### npm  install  -g 代表全局安装

全局安装 大部分是yarn  webpack等等

##### 会在仓库缓存里面查找包

会根据package-lock.json进行构建,同时我们也可以在lock包中找到真正的版本号和协议号

##### 是需要检测依赖一致性的 一致的话会去查找缓存的,没有缓存的话会去下载依赖包

比DNS多了一道去和package.json检测依赖一致性

##### yarn 工具

为了弥补早前npm的一些缺陷 比如安装依赖速度慢,版本依赖混乱等等

npm经过升级后,已经和yarn工具差不多了

##### 使用npm cache clean   清除npm包缓存

##### cnpm的本质上就是使用的仓库是taobao仓库,速度更快

npm config set register `“https://taobao.registry”`

##### 都是因为npm不好用才去使用其扩展的东西,比如仓库速度和版本混乱,速度慢等

##### 我们需要下载webpack和webpack-cli一起进行下载

##### 在局部的文件夹中敲webpack --version 走的是全局安装的webpack

##### `npx 则是帮助我们使用最近的包,而不是全局的包`,指的是使用当前node_modules的文件夹

如果没有本地的话,他会去远程的包寻找一个然后执行

##### webpack再构建后,会对代码进行压缩和丑化的过程

###### 编写自己的工具/库/框架

 JSON.parse和JSON.stringify

###### 每个依赖包里面都包含众多的依赖包,会导致包过多

而pnpm则是帮助我们减少依赖包的数量大小,通过软连接和硬连接的方式 减少下载的包大小

###### Pnpm 高速,快速的软件包管理工具

Node_modules中的文件链接内容寻址存储库, pnpm创建了非平铺的Node_modules,因此代码无法访问任意包

##### 硬链接   电脑文件中多个文件,平等的共享同一个文件存储单元,类似js对象的引用操作

会直接去操作原数据,硬链接删除的方法类似JavaScript的引用清除

##### 软链接(符号链接) 包含了一条以绝对路径或者相对路径的形式,`指向其他的文件或者目录的引用`(比如快捷符号)  保存的是一个类似`F:/video/code/mp4`这样的路径

##### 操作系统本身就是一个程序,一个软件的分层结构

##### 拷贝,在硬盘中复制出一个新的文件数据   硬链接,则代表着两者公用一个文件存储单元

##### Pnpm到底做了什么

如果有100个项目,我们就需要保存100份相同依赖包的副本

但是如果使用pnpm 则会被统一放到一个位置

1. 如果同一依赖包需要使用不同的版本,则仅有**版本之间不同的文件**会被存储起来
2. 所有的文件都保存在硬盘上的统一位置,然后不同的项目方便地共享**相同版本的依赖包**
3. 通过硬链接和软连接的方式来最大程度的减少相同包导致磁盘空间不够,同时构建速度更快

##### 创建非扁平的node_modules目录

先把所有的包依赖的包列出来,平铺,所有的软件包都被提升到node_modules的根目录下

扁平化,源码可以访问不是自己下载的依赖包,比如antdesign的moment

pnpm 则是非扁平的node_modules,可以直接查看依赖包的

pnpm所生成的目录更加的清晰,查找更加的方便

##### pnpm存储store

pnpm 会创建一个集体的硬链接的仓库,然后去仓库进行硬链接

放到.pnpm-store里面

可以通过拿到store的路径

```shell
pnpm store path 
```

我们可以使用命令来进行修剪,删除store中未被引用的包来减少硬盘体积

```shell
pnpm store prune
```

> 在引用包时回去.pnpm-store寻找采用硬软连接的方式,第二非扁平node-modules
>
> 构建速度快速

