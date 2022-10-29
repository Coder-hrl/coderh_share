## 邂逅CSS

CSS编写的方式,行内级,style级编写,link方式进行链接

#### 文本属性

White-space;font-style,text-decoration;text-indent 负值 

text-shadow,**text-align 块级内对行内级元素的居中**

line-through中划线 ,   underline样式

目前就over-line上划线,underline下划线

#### 字体元素

font-family:

font-style:italic

font-weight:bold

#### CSS 常用选择器

类选择器,id选择器,后代选择器,兄弟选择器

伪类选择器,伪类元素选择器

同时伪类元素选择器是**元素内部的第一个或者最后一个**

#### CSS特性

1. 层叠属性,层叠样式表
   - 权重,
2. 继承性
   - 常见的记住,不常见的查文档

#### 元素的类型

块级元素

行内级 **行内非替换元素,行内替换元素 行内块级元素**

#### 元素的隐藏方式

overflow:hidden:visililty:hidden

#### 盒子模型

1. 内容 width和height
2. padding和border

盒子的**margin上下折叠问题**

#### backgroud

##### backgroud-image

背景图片的`url()`

##### backgroud-size

背景图片的大小

##### backgroud-position

背景图片的位置

##### backgroud-repeat

如果图片过小是否重复平铺

##### backgroud-attachment

拉伸属性

##### 子绝父相,子绝父绝,子相父相

absolute如果没有找到最近的relative元素,他会根据视口来进行定位

##### sticky粘性定位 absolute和fixed一起使用

#### 脱标元素

脱标元素 都是可以设置行高属性的,与其相同的还有 flex,flex-item元素属性

不再严格区分 **行级元素和块级元素,只是单纯的是脱标元素和flex-item元素**

#### flex-item 

flex-item里面可以使用order属性,order代表排列顺序

align-self  针对单个元素进行设置 单个元素的排列顺序

align-items 针对父元素设置

##### HTML加CSS加JS  要学好,多思考,多使用

CSS要学的比较精,耐用,less,scss一起使用,一种方案,rpx

或者在react里面的styled-component库方案,

