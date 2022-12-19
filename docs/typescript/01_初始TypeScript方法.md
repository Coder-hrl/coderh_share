---
title: TypeScript语法
---

#### JavaScript 类型缺失

> JavaScript 是一个非常灵活的语言,而 TypeScript 则带来类型校验,使我们在编写代码的时候 逻辑更加的清楚,后期不易出错,但是带来的学习成本和编写成本也是很高的
>
> typescript 是具有类型的 JavaScript,是 JavaScript 的超集
>
> 拥有最先进的 JavaScript 的特性

任何新技术的出现都是为了解决上个技术的痛点

但是每次版本的更迭,都会让这门语言更加现代,更加安全,更加方便

虽然目前 JavaScript 的类型检测还是没有进展的

`帮助前端开发工程师培养类型思维`

知识的不断更新,代表着在不断的喷薄发展

#### 为什么需要 TypeScript?

因为在编程开发中有一个共识,错误出现的越早越好

能在写代码发现的错误,就不要在代码编译时再发现这个错误

能够帮助我们在代码编译阶段发现错误,外加 Vscode 对 TypeScript 的适配

让这个功能变的更加强大,帮助我们使用 Vscode 的代码提示更好

在现网开发中,使用 TypeScript 可以很大程度的`防止程序意外崩掉`

#### 编写程序的思想

在编写一个功能函数时,要考虑 undefined 的情况,ajax 失败的情况,null 的情况等其他情况,如时间需要转 moment 等其他方法,要三思后而后行

编写一个可健壮,后期维护程度较低的程序,要保证里面所有的代码 都是自己所熟悉的,注释一定要有.

#### 类型思维的缺失

JavaScript 因为从设计之初就没有考虑约束问题,所以造成了前端关于类型思维的缺失

通常不关心变量或者参数是什么类型,总是担心自己的代码不够安全,健壮性不强

同时项目越大,TypeScript 带来的好处,也会越来越大,健壮性也会越来越强

#### TypeScript 可以理解为加强版的 JavaScript

最终编译成 JavaScript,同时还做了一些语法的扩展,比如枚举和元组类型

在编译时,也可以不借助 babel 这样的工具

让 JavaScript 变的更安全,`始于JavaScript终于JavaScript`

#### 哪些项目使用了 TypeScript

1. antd
2. vscode
3. Vue3 源码
4. Angular
5. 小程序也支持 TypeScript

这些都表明了,TypeScript 是一个非常好用的工具

#### 大前端的发展趋势

1. flutter React-native App 开发
2. Vue React web 端开发
3. tero uni-app 小程序开发
4. Vite webpack rollup 客户端打包
5. node Koa express 服务端开发

#### 依赖环境

需要下载 TypeScript 来进行使用

```shell
npm install typescript
```

运行环境 node 运行 或者 运行在浏览器端运行

```shell
npm install ts-node  或者使用 npm install webpack
```

#### TypeScript 类

string 是 TypeScript 设置的类型

String 则是 JavaScript 中字符串的包装类

编译出来的 JavaScript,最上层仍然是 use stickt 严格模式

#### 类型注解

> 声明的类型可以被称之为类型注解

Const 标志符: 数据类型 = 赋值

```ts
const name: string = 'sajd';
```

#### 隐式推导 类型推导

> 在一个变量第一次赋值时,如果我们省略数据类型,添加一个标识符,如果直接进行赋值的话,他会根据类型的值来进行推导

由内到外 js=>Es6=>ts TypeScript 中添加了很多的新特性
