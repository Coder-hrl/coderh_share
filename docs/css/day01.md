---
title: 书籍推荐
---

### 学习书籍

1. **《JavaScript 高级程序语言》** ESlint 作者

2. **《你不知道的 JavaScript》**

> **一个技术的出现都是用来解决问题的**,他是来解决问题的
>
> **_学知识的目的是为了解决问题_**

分为常用的知识,和不常用的知识

1. 常用的知识要熟记,烂熟于心,

2. 不常用的要知道他在什么地方,要知道在哪里

##### 最近还是非常活跃的,新技术和人才还是层出不穷的

**学习才是最好的进步**

从初级到中级再到高级,最后再到系统架构

##### 学习 Vue 和小程序

**认真努力专注**

i 标签大部分用来做图标了   

刻意练习,熟能生巧,驾轻就熟,熟能生巧

要不停的进行练习,不停的使用才会变的熟练

### 服务器是什么东西呢

服务器是一台主机,24 小时不关机，稳定运行,链接外网,是不需要显示器的,安装的系统是大多是 linux(centos) 系统，部分则使用的是 win 系统(微软)

### 为什么 spa 不利好 seo 优化   SSR  首屏渲染

因为页面所有内容都是通过 axios 库使用原生的 XHR 方法,请求到接口数据动态的在一个页面上展示

### background 中 linear-gradient 中设置特定值时

如果后一个值的坐标,要小于前一个值的坐标时,后一个会变成前一个的最大值

他会和其他的数值坐标共同合成 100%

### box-shadow 的五个值

- 水平阴影
- 垂直阴影
- 模糊半径
- 扩散距离
- 阴影颜色

### flex 为 1，代表了什么？

flex-grow :1;   等比例扩展
flex-shrink:1;   等比例缩小
flex-basis 0% 

**当希望元素充分利用剩余空间，同时不会侵占其他元素应有的宽度的时候**，适合使用 flex:1，这样的场景在 Flex 布局中非常的多。

### position 跟 display、overflow、float 这些特性相互叠加后会怎么样？

display 属性规定元素应该生成的框的类型；position 属性规定元素的定位类型；float 属性是一种布局方式，定义元素在哪个方向浮动。
类似于优先级机制：position：absolute/fixed 优先级最高，有他们在时，float 不起作用，display 值需要调整。float 或者 absolute 定位的元素，只能是块元素或表格。

### 在设置完浮动后，该元素的 display 会自动设置为 block

### CSS Sprites

将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 的 background-image，background- repeat，background-position 的组合进行背景定位。

**利用 CSS Sprites 能很好地减少网页的 http 请求，从而大大的提高页面的性能**

CSS Sprites 能减少图片的字节。

### offsetTop 和 offsetLeft

**offsetTop 和 offsetRight**都是以最近的定位元素为 offsetParent 元素

其次对于 position 不为 relative 的元素，他的父级元素可能是最近的 tr 元素

我们可以手动设置为 position 为 relative 让其与最近的定位元素对比
