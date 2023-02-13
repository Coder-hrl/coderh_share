---
title: Esmodule和commonjs
---

### 通过 webpack 模块化开发的方式

webpack 解析生成依赖图,通过 loader 转换各个模块生成 CSS 和 js 文件,然后最后生成打包之后的依赖文件,还可以进行分包,拆包等进行性能优化

### export import 各种导出导入的方式

可以使用 export {}, export default ,直接使用 export name

### import() 同步导入函数

### 在导入时,给标识符起别名

import { name as fileName }

### Esmodule 之前 JavaScript 是没有模块化开发的

采用了编译器的静态分析,同时加入了动态引用的方式

在解析 Esmodule 中,我们需要使用`type="module"`告诉浏览器这是一个模块

`<script type="module"></script>`

### 他是可以通过 webpack 的 extension 来添加后缀名

可以在导出和导入的时候,都可以起别名的方式

### 还有一种思想是在 index 文件里面,导入所有的导入,然后进行统一导出

我们还可以设置别名的方式去区分这种方法

我们还可以使用更好的方式,

优化一 比如直接使用 export { formatCount,formatDate } from ‘./’

优化二 比如直接使用 export \* from “”

### export default 没有名字的默认导出方式

export default name

直接使用 import 随便 from

### 一个模块只能有一个默认导出

### ()=>import()

### import 操作应该放到文件的最前面,这是因为他在执行代码前会进行静态解析

import 操作会进行异步加载,最终会返回一个 promise 对象

### import 函数是异步动态加载,可以放到逻辑代码中

```js
if(flag){import()}
const name =  import("")
name.then(()==>)
```

每个模块都是属于一个 module 对象

### import.meta 是加载 foo 所存在的 url

## ESModule 是如何被加载的

一,构建,根据地址查询 js 文件,并且下载,将其解析成**模块记录**(Module Record)

二,实例化,对模块记录进行实例化,分配内存空间,解析模块的导入和导出语句,模块指向对应的内存地址

三,运行,运行代码,计算值,填充到内存地址中

### `模块记录` 每个模块都存在 解析中其中的 import 和 export 关键字

在运行执行之后,就可以将所需的值放到内存变量上了

### 先进行下载文件,然后进行解析文件生成环境记录,再查看是否会引用其他文件

在下载的时候,会先去查看 Module map 是否有自己所需要的 Module 模块

Module map 里面不存在,没有的话才会去下载

### environment record

## 验证 esmodule 和 commonjs 导出是深拷贝吗？

> esmodule 和 commonjs 都是拷贝的地址，所以如果要修改的话，最好进行深拷贝

1. 首先声明一个 list，两分钟后执行 pop 方法
2. 引入这个 list，2001 毫秒后打印这个 list
3. 发现 list 发生改变
