## 1. CSS 学习

1. 字符实体
2. URL 和 URI 的区别

> link 中 rel 学习,爬虫优化,
>
> CSS 里面`url()`导入函数
>
> 加载不会被阻塞式异步的,但是在渲染页面的时候,还是会被阻塞的

### 1. CSS 学习

#### 1.1 元素语义化

- 元素的语义化指的是正确的元素做正确的事情
- 使用语义化,使用正确的元素做正确的事情
- 1. 方便代码维护
  2. 减少沟通成本
  3. 在进行无障碍沟通页面时,能让语音合成工具,更加的智能
  4. 有利于 SEO 优化

#### 1.2 元素之间的区别

- 我们可以通过 CSS 来让一个元素转换成另外一个元素.
- 一个元素和另一个元素其实只是 CSS 上的区别,当然有的不是如 img,video.

#### 1.3 元素之间的模拟

- 我们可以给 div 添加样式,来去模拟其他元素的效果
- em 指的是相对父元素的 font-size 计算,rem 相对于 HTML 根元素的 font-size
- 最终的值,会计算到 computed 属性里面.

### 2. 认识 SEO

##### 2.1 什么是 SEO

了解搜索引擎的运作规则来调节网站,从而提高网站在搜索之后的排名位置

更好的 SEO 可以让你的网站更靠前,让商品点击率和成交量都提高

##### 2.2 SEO 查询的过程(爬虫的原理)

> 总结出了提高 SEO 优化的方案,让自己的网站在搜索中更加靠前

1. 搜索引擎会使用爬虫引擎进行查询
2. 使用多种爬虫技术,去`网页`进行爬取数据,不会去爬取`APP`
3. 会建立一个索引,并建立一个临时库,将符合条件的放到临时库中
4. 将不符合条件的网站扔掉,并在索引库里面进行归档排列,然后展示给用户

##### 2.3 有利于 SEO 的做法

1. 使用元素语义化,如使用 h1-h5 作为标题有利于优化
2. 在 meta 里面的 keywords 和 description

### 3. 认识字符编码

##### 3.1 计算机原理

- 它**只认识 0,1 两个二进制数字**
- 因为他的底层硬件是使用**电路的开和关**进行实现的
- **只**可以**处理存储和处理**二进制数字

##### 3.2 十进制和二进制

- 人类使用十进制,跟人只有 10 根手指是有很大的关系的
- 计算机处理二进制是非常非常快的

##### 3.3 照片和影音的转换

- 我们需要制定一个标准来将照片,文字,影音这些东西转换为二进制的转换规则
- `charset="utf-8"`告诉我们使用 utf-8 的方式来进行编码和解码
- 使用 utf-8 来将这些东西转换为二进制数字,然后我们再将二进制通过 utf-8 规则进行解码
- ASCII 编码只对英文进行编码,后来制定了一个**最广泛的 utf-8 的准则**
- 后来又出现了**GBK 编码**,在 window 中常用,后来又出现了 uft-8 编码

##### 3.4 **字符实体要进行掌握**

指的是以&开头,以;结尾的字符

### 4. 认识 CSS

#### 4.1 CSS 学习

- CSS 名称为层叠样式表,为网页添加样式的代码
- 他是一个**计算机语言**但是不会**一个编程语言**.
- 我们可以为 HTML 添加样式,使得整个页面都变的很好看,更性感

#### 4.2 CSS 由来

- 早期都是通过 HTML 元素来进行编写的,为了更好的控制整个页面.

- 后来才出现了 CSS 加 HTML 代替了之前的 HTML 元素编写.

- CSS 后来才变得越来越复杂,CSS3 中出现了伪类选择器和伪类元素

- 添加各种各样的样式,对 HTML 进行布局

#### 4.3 CSS 编写的方式

!important`(9999)` > 内联样式`999` > id`100` > 类`10` > 标签选择器`1`

##### 4.3.1 内联样式表

- 在元素内部添加 style 属性中,`<div style="width:100%"></div>`

- 在 CSS 学习中使用;来进行分割样式,如`<div style="width:100%;height:800px"></div>`

##### 4.3.2 style 样式表

- 在`head`里面增加一个 style 标签样式,`head`里面存放 style 样式等内容

- 使用选择器来进行编写,如 class 属性,id 标签属性,元素选择

##### 4.3.3 使用链接外部样式表

在多个页面复用一个页面样式表的时候使用

- 在 head 里面使用`<link href="" rel="stylesheet">`

- 使用 import 进行引入 CSS,或者在 CSS 里面使用@import 引入 CSS.

  ```css
  @import url(style.css)
  	/**叫做css里面的函数,函数是同步方式*/
  	@import '../bar.css';
  ```

###### 4.3.3.1 要统一使用`@import url()`,原因就是他是同步方式,`url()`是一个函数

#### 4.4 CSS 的注释编写

##### 4.4.1 注释的编写方式

- `/**/这是CSS的注释`
- 如果不熟悉这个样式,就重复编写这个样式的注释
- CSS 的注释也是占有 kb 的,不用担心注释过多导致浏览器解析过慢
- 在使用打包工具 webpack 的时候会把注释完全的去掉

##### 4.4.2 CSS 学习过程

可以再 MDN 和 w3c 里面查找 css 知识

**color 是设置文本内容的前景色的**

##### 4.4.3 行内元素是不能设置 width 的

```css
vertical-align: top;
display: inline-block;
/* 行内块级属性,代表的是有块级元素的宽和高,但仍横向排列*/
/* float:left;指的是左侧浮动排列*/
```

##### 4.4.4 使用浮动进行管理

### 5. 额外知识补充

#### 5.1 浏览器渲染流程

1. 浏览器会对域名通过 DNS 解析的方式通过 UDP 的方式去迭代查询 ip 地址

##### 5.1.1 link 元素的使用

> 目前 rel 的属性值有 `stylesheet,icon,dns-prefetch`

- **link 是外部资源链接元素**,规范了**文档和外部资源**的关系
- 引入站点图标,rel 指的是链接对象的类型,可以传入 icon 来当做链接的类型
- link 还可以配置,`rel="dns-prefetch"` **dns 预解析和准备握手**,pre-load 预加载

#### 5.2 进制

##### 5.2.1 进位制

**如果达到某个数将会进一位**,比如到从 1-9,到 10 的时候,进位加一 10,个位进位变 0

##### 5.2.2 为什么计算机用二进制

整除取余的方法来进行的,在 log 中取到的是 10 进制的数字

- 因为计算机是由电路来控制的,指的是 0 和 1

- 八进制是以 0o 开头的

- 16 进制是以 0X 的形式开头的,**在表示颜色的时候使用的是 16 进制**

- 高级编程语言就是使用的是人类通俗的语言

#### 5.3 颜色关键词

我们有的时候需要使用颜色,可以使用**rgb 的形式来取到颜色,混合取色**

`黑色是最纯洁的颜色`,`所有颜色都为最高的时候为白色`

```css
backgroud-color: rgb() /*红色,绿色,蓝色*/
	rgba(); /*最后一个a,是指的是透明度*/
```

同时也**可以使用 16 进制**来进行表示颜色

##### 5.3.1 rgb 和 16 进制颜色是一一对应的

##### 5.3.2 开发工具检查

通过 f12 进行打开工具,使用 ctrl+ 可以进行变大

开始使用 i 标签作为图标

##### 渲染过程

由 HTML 骨架和 CSS 样式的 html 文件首先先去加载 html

加载 HTML==>从上到下解析 HTML==>解析===>创建 DOM 树==>同步进行页面布局

​ ===> 异步下载 CSS ==>解析 CSS ==>

在 HTML 解析完,CSS 没有解析完是会被阻塞的.

**加载不会被阻塞,但是渲染解析会被阻塞**