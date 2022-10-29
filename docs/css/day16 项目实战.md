#### 项目的代码规范和CSS编写顺序问题

1. 实现自己的CSS代码的编写顺序

组件化的开发思想,这是一种开发思想,将一个个常用的功能封装成组件

规范自己的代码,规范代码的编写,会使思路变的越来越清晰.

2. 凹凸实验室的代码规范

代码规范的实验,统一写入UTF-8的规范

还可以使用i标签来保证space-around:between等

3. className的编写,父代选择器加后台选择器

#### CSS编写顺序

1. display 和position和float 确定元素布局方式
   - 确定元素的特性和可见性
   - 盒子的特性和可见性处理

2. width和height,box-sizing+padding+ margin+border,
   - 盒子模型处理,从width到height再从里到外处理
3. font文本等属性
   - font-size ,font-style,font-family
4. 其他元素属性

#### 组件化开发的思路

实际上从web端到小程序端都是使用的组件化的方式进行开发

App.Vue,Root再分模块,然后一个个的区分模块,最终实现效果

会根组件,一层层小组件逐渐的组成一个大的项目

##### 起类名的区分

以下划线的为公共CSS属性,以中线的则为私自属性

只有**行内级元素才会存在基线等内容**





![image-20220511152402104](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220511152402104.png)

##### 为什么会出现滚动条

这是因为当内容达到了无法进行缩小的程度的时候,就会出现滚动条.

##### 设置一个最小宽度min-width

一般设置为min-width最小宽度,设置min-width来解决滚动条背景缺失的问题

##### 