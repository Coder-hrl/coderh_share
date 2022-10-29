### 前期知识描述

#### 1. margin属性外边距

> 浏览器会默认给body设置一个margin的
>
> 元素的外边距,常用于元素与元素之间的距离

- 分为四个方向,top,left,right,bottom

##### 1.1 margin对于上下是会有折叠重合的

**左右方向的margin是不会被折叠**的,使用display:inline-block也是一个很好的方案

在进行父子盒子下,可以给**子盒子设置margin属性,也可以给父盒子设置padding**

- 子元素的margin会引起父元素的margin位置变化
- 父元素如果使用**padding-top的话会引起父元素变形**
- 要使用**更合适的方案来实现相同的结果**,在父套子更推荐**padding**

##### 1.2 margin之间的传递

在父套子的盒子中,**margin的值左右是不会传递**margin值的

但是在**上下margin中则出现了margin的传递**中解决办法

- 最好用padding padding-top等方案
- 可以使用一个border  border 1px soild transparent
- 使用over-flow为auto  触发父级盒子的`bfc块级格式化上下文`

##### 1.3 上下margin的折叠

> **只在上下的margin上面进行折叠**,左右他一定会相加,只有上下才会折叠

上下如果margin不同,则选用较大的一方

行内元素,属于**行内非替换元素,行内替换元素,还有inline-block**

刚开始是margin-right是占1000px,

###### margin:auto就会居中展示,

- 所使用的的**是margin原理**
- 所指的是**margin-left:auto和margin-right:auto**

最好的居中布局就是**flex布局**,使用text-align:center,和margin:auto

vertical-align来进行布局使用

###### 在垂直方向,margin是无法进行居中的

因为块级元素独占一行的特点,还有display:flex才是真正做布局方法

行级元素不要嵌套块级元素

#### 2. outline 外轮廓

- 与border对比,是不占据空间的,border是要占据1px像素大小的

- **是不多余占据空间的,所用的语法跟borde基本差不多**

- **在点击a标签的时候,触发outline外轮廓**

#### 3. box-shadow  盒子阴影

`HTML-CSS-js/css/boxshadow 在线调阴影的网站`

分为X轴和Y轴,**box-shadow:offsetX(X方向偏移) offsetY(Y反向偏移) blur(模糊范围)  额外扩散的px  color(颜色) 阴影方向(inset往里进行)**

- 阴影不能太清楚,需要模糊程度,模糊度可以不写,额外的扩散也可以不写
- blur 额外扩散 都是使用的px值
- color默认颜色为黑色
- 可以添加多个数值,如5px 5px 10px green, 10px 10px 10px blue

##### 3.1 值位置

- 第一个是X方向偏移量
- 第二个是y方向偏移量
- 第三个是模糊范围
- 第四个是额外扩散的范围
- 第五个是颜色范围
- 第六个阴影方向

#### 4. text-shadow  文字阴影

为text-shadow设置阴影,设置**3D特效的时候**

不过他是没有spread 扩散的属性,我们可以在进行**立体化的时候可以使用**

#### `!!!重要`5. 行内非替换元素

指的是`span a strong等元素为行内非替换元素`

在使用行内 非替换元素padding,border的时候

**会放大整个盒子,但是上下不占用空间**,使用margin的时候,盒子上下空间是不生效的

背景色会设置到边框的下的颜色

##### 5.1 Svg和Canvas都是可以进行画图的

- 盒子模型上下margin和padding都会出现错误
- 布局还没有讲,布局目前用的最好的还是flex布局

##### 5.2 box-sizing 设置

- content-box width和height设置的内容的宽度
- border-box  width和height则**设置的是content,padding加border的宽度**
- IE8以下默认就是border-box,所以也被称之为**IE怪异盒子模型**

##### 5.3 居中方案

前提,父元素是块级元素

- 子元素如果是行内元素和行内块级元素都可以使用
  - text-aligh:center
- 子元素如果是块级元素
  - margin:0 auto

##### 5.4 可以使用text-decoration来去除下划线

##### 5.5 编写CSS 的顺序

- **先整体后局部**的原则来进行编写

- 如果**相同部分不太多的情况**下,有必要去抽取公共代码吗?

- **如果共同抽取部分超过百分之40左右,就要进行抽取CSS共同样式**

##### 灰色的网站设置的都是颜色#f5f5f5

##### 5.6 一行胜率号

```css
white-space: npwarp;
overflow:hidden;
text-overflow:ellipsis;
```

##### 5.7 行内块级元素可以放任何元素

标准并不是死的

###### 5.7.1 img防盗链

设置一个属性`referrerpolicy="no-referrer"`,

`width设置为100%,他是会自动调正img高度`

可以在内部的元素上面添加一个::after元素

###### 5.7.2 设置多行截取

```css
display:-webket-box;
-webket-line-clamp:3;
-webket-box-orient:vertical;
overflow:hidden;
text-overflow:ellipsps;
```

要在父级元素上面填写,overflow:hidden

### 2. backgroud属性

#### 2.1 backgroud-image 背景图片

会盖`(不是覆盖)`在backgroud-color上面的,背景图片

backgroud-image:url(),url().

#### 2.2 backgroud-repeat 背景图片重复

> 必须先设置backgroud-image,image是前提

如果**背景图片与width**大小不一致的话,他会进行`repeat重复展开`

`repeat`  平铺,    `no-repeat`   不平铺

#### 2.3 backgroud-size 大小

> 必须先设置backgroud-image,image是前提

- auto           自适应,该多大就多大
- contain      将一边拉伸,同时保持宽高比,相当于width:100%
- cover          将image覆盖到页面上
- 百分比大小  相对于背景区域
- length         设置px

#### 2.4 backgroud-postion 背景位置大小

> 必须先设置backgroud-image,image是前提
>
> 在全铺的情况下,在拉伸的情况下,图片始终在center
>
> 还可以特意**展示精灵图的特定位置**,

**背景图片所占的位置**

- length     X,Y px为单位
- left,right
- top,bottom
- center center

#### 2.5 backgroud-attachment 是否拉伸

设定一个滚动条,`overflow:scroll`,有一个属性为scroll,背景会随着文字一起滚动

设定一个背景,然后设定一个滚动条,很帅的好吧

fixed,设定一个固定位置,相对于浏览器属性

#### backgroud简写属性

color==>image==>position==>size==>repeat==>attachment

![image-20220416164614979](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220416164614979.png)

backroud-image和img

CSS属性==>不占位置==>不支持查看地址下载==>可以精灵图==>不会被搜索

HTML==>占位置==> 支持查看 ==>不可以精灵图==>会被搜索

如果是网页的重要组成部分,是要被他人观看的,使用img

如果只是进行美观.无论存不存在都不影响的话就是用backgroud-image

