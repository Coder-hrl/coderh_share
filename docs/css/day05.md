> space-aroud是均匀分布,space-between是两边对齐
>
> 一个盒子模型是width加padding加border加margin
>
> text-align:center只是针对行内级元素,z-index只对定位元素才生效.
>
> 一点点优化就会变成很大的优化

## CSS文本字体和选择器

### 1. CSS文本

#### 1.1 CSS属性

- text-decoration 下划线
  - 文字下方装饰线, `a`元素标签下方**自带下划线**
  - 最常用的是下划线`underline`,`linethrough`中间穿过,overline是上面那条线

- text-transform  首字母控制
  - Uppercase首字母大写

- text-align 文本的对齐方式`(重要)`

  - 如何向对他的父元素块进行对齐,left,right,justify,center
  - justify两边对齐,在内容预留空间里面也是可以使用的
  - center 让里面内容进行居中 条件width不能是auto,独占一行
  - 必须要是**行内级元素**,行内块级元素也是行内元素.

  对于一个**块级元素,可以使用margin:0 auto属性**

- text-indent   缩进大小位置

  - 一般值为px,大小属性.
  - em是相对自己的字体进行加载的,如何设置2em将会是两个字符缩进

- Word-spacing  两个文本之间的距离

  - letter-spacing和word-spacing
  - **使用的是px作为值**

### 2. CSS字体

#### 2.2 font属性

- font-size  字体大小

  - 默认是16px大小属性.
  - em指的是相对自己的font-size大小设置
  - **默认来自于浏览器设置的`em`,还有font-size继承**
  - 使用百分比,来进行设置font大小

- font-family 采用什么字体

  - 十分重要,只需要设置一次

  - 可以设置一个或者多个字体,需要使用多个字体
  - 如果操作系统有字体会优先使用操作系统的
  - 或者使用@font-face来直接下载字体

- font-weight 字体宽度

  - 有100 200 300 400 500 
  - normal 是400
  - bold是700

- line-height 行高  文本居中

  > 单纯使用**行高设置文本的居中**,其实也就是基线居中

  - 使用的是两个文本之间的基线,存在**顶线,中线,底线**
  - 文本占用的是顶线到底线之间的距离,至于其他距离则是其他距离

  - 设置行高,设置文本的行高的
  - 简单理解为**一行文本所占据的高度**
  - 为什么文本需要行高,增强阅读体验

- font  缩写

  - 提供了缩写属性,font的缩写属性
  - ![image-20220415091953534](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220415091953534.png)
  - font-size和font-family是不能换位置的

- font-style

  - italic斜体 设置的斜体,然后展示出来

### 3. CSS选择器

#### 3.1 选择器(selector)

在同一个HTML文档中,id要唯一不能重复.

有的时候我们需要找到特定的元素添加样式,后期会进行层叠

尽量不要使用驼峰使用,最好使用_的方式,使用连接符

##### 通用选择器

- 使用*来进行匹配所有的HTML 元素,通配选择器是比较浪费性能的

- 推荐使用body,button,a,p,div等具体来进行设置

##### 类选择器

- 添加类名来进行选定元素

##### id选择器

##### 元素选择器,组合选择器

##### 属性选择器

- [title=div]{}
- ^开头   $结尾   ~包含某个属性

##### 后代元素选择  用空格

##### 兄弟元素选择器 + 

##### 直接子代选择器 >

##### 普遍兄弟选择器 ~

#### 3.2 选择器组

##### 交集选择器

使用div.box{}  **中间没有空格** 这样的交集选择器

##### 并集选择器

使用`,`进行分割,这被称之为并集选择器

会做很多项目来练习,HTML和CSS 进行练习

#### 3.3 伪类选择器

##### 如动态伪类

`:hover和:click不仅可以用于a元素,也可以用于其他元素`

- **:hover的伪类,:click,:focus**

- 伪类之后添加样式

##### 语言伪类

lang()

##### 目标伪类

:target

##### 元素状态伪类

:disable,:checked

##### 还有较多的伪类选择器

