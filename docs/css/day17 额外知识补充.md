## 额外知识补充

#### 新增元素

##### HTML5新增元素

1. 因为滥用div,span等元素 ,所以出现的标签语义化
2. 使用HTML5的标签语义化,从而更好的SEO优化,搜索引擎优化
3. 这些东西都是有自己的作用的,有header头部元素,nav 导航元素,main主题元素
4. article元素 文章元素, selection 一个个块级领域

HTML元素的最重要的一句话就是,用**正确的元素做正确的事**,语义化元素

###### video和audio元素

嵌入音频和视频的元素组件,因为视频逐渐变成了主要的了解信息的方式

**在HTML5之前用的是flash来进行浏览视频,音频等信息的.**

使用audio和video元素来进行控制视频

video元素是用来做视频呢,audio是用来做音频的,使用**src来传入播放的地址的**

还有一个controls属性,用来标注控制器,使用JavaScript来控制视频的播放在谷歌里面会默认禁止**autoplay自动播放**.

只有在静音的情况下,才会默认是自动播放,指的是autoplay加muted

获取视频的元数据,指的是meta-data元数据 preload 预加载

poster封面的图片,值为url类型的地址,video支持的视频格式(**并不支持所有的视频格式**)

**可以添加source元素,用来额外解析的元素**,添加source用来做兼容性写法

同时使用p作为最后的兼容性写法,就如同`<noscript></noscript>`

**audio**,controls控制器,用作音频的控制器,用法和video基本一致

同样具有controls,autoplay,muted,preload预加载的属性

支持的比较复杂,可以使用后缀为MP3和MP4的格式

```html
<video src="" controls autoplay muted>
  <source src="">
  <p>
    你的浏览器不支持这个,请更换
  </p>
</video>
```



###### input属性和全局属性,自定义全局属性有`data-,title`

新添加的属性 placeholder 占位字符和multiple 多个值

autofocus 最多输入的值

```html
<input type="" palceholder="">
```

可以使用input 各种各种type

```html
<input type="range" min="0" max="1000">
```

###### 新增全局属性data-,用于自定义属性用于HTML和JavaScript之间的操作

可以通过`dataset`获取,**自定义全局属性**,全局属性指的是每个人都拥有的属性

`在微信小程序中最为常用`,小程序中必用的东西.

###### CSS常见的函数扩展

CSS中是存在很多函数的,比如rgb(),rgba()

var 当做变量的标识符  `calc()` 用来计算height计算后的结果,比如

```css
calc(100%-45px)
```

`gradient()` 颜色渐变函数

 `blur()`模糊毛玻璃的效果  

###### var 自定义变量的操作

以--开头的,在scss中使用的$,在less中使用的@当做变量

只有后代元素才可以进行使用,其余的元素不能使用

`定义了一个变量`,原生也是可以定义变量的

```css
html{
  --color : #fafafa
}
h2{
  /*通过var这个函数来进行使用*/
  color:var(--color)
}
```

###### calc 函数的使用,计算的属性,可以来计算尺寸和位置

calc()比如之前所做的,可以使用calc计算函数来使用

```css
width:calc(100% - 100px);
```

空格也会占用行内级元素的位置

###### blur 高斯模糊  px  `会进行继承操作`

与filter 做高斯模糊过滤操作  和backdrop为元素后面做添加模糊

与img做filter操作

```css
img{
  filter:blur(10px) /* 比如这种写法 */
}
```

或者与backdrop-filter使用blur()

输出到图片和元素上面

模糊的半径,`偏差值越大  越模糊`

###### gradient 是image的子类型 两种或者多种元素的过滤

一般用来设置渐变,linear-gradient 渐变颜色

`backgroud-image:linear-gradient(to right left ,red,blue)`

同时也可以自己来设置角度,比如 45deg,300deg

或者可以直接使用线性渐变,那时候再重新了解

###### 理解浏览器前缀

因为浏览器兼容问题而出现的`浏览器前缀` -webkit -ms

供应商特定扩展,以便更好地支持CSS,

如果出现一个新的属性功能的时候,各个浏览器商会慢慢的适配这一个功能

浏览器对没有正式成为标签的属性,给了各个浏览器商一个过渡的方案,浏览器**为了暂时实现功能所取的名字**

打包工具,browserslist notdead 去can i use 去查

###### 深入了解BFC是什么东西

块级格式化作用域上下文

1. FC的概念是什么东西,formating-context
2. 每个盒子在标准流中都属于一个fc

块级元素归于BFC的布局中的,

什么元素会创建BFC

> 一个大的BFC会包裹很多小的BFC,块级格式化,会挨个排布,互不干扰
>
> BFC帮助我们`折叠上下margin`,为什么块级盒子那样排列,这就是因为BFC的原因
>
> 1. BFC另外一个概念,BFC之间互不干扰,可以触发BFC解决margin上下折叠
> 2. BFC会一个挨着一个垂直排列,一般是通过margin进行上下隔开的
> 3. 在同一个BFC会出现margin上下折叠
> 4. 左边缘紧紧包含左边元素
>
> 解决margin上下折叠,要让两个块级元素`不在同一个BFC`
>
> ```css
> <div>
> <div class="box"></div>
> </div>
> <div class="box2"></div>
> ```
>
> 在上面中 box和box2并不在一个排列中

1. HTML元素会创建bfc  `这也代表所有元素都在bfc中`
2. 浮动元素
3. overflow不为visible的元素 ,一般使用overflow:auto

BFC解决高度塌陷的问题,脱离标准流,**拒绝向父元素汇报元素高度**

或者给父元素添加overflow:auto,强制触发块级作用域

**如果高度为auto的情况下,子元素为inline-box的时候会计算,行高**

**如果是块级,则会包裹所有的块级元素**,绝对定位元素是会被忽略的

只能解决浮动元素的高度塌陷

###### over-flow和white-sapce等CSS属性

**clip剪切**和**ellipsis省略号**,ellipsis.

###### white-space 对`空白符`的处理和`换行符`的处理规则

white-space:no-wrap,wrap,换行,不换行

为什么空白符会换行,对空白符进行处理,对空白符进行换行播放

1. 默认为normal,    no-warp:不换行,超过之后也不换行
2. 阻止合并 pre-line
3. pre 不换行 不合并
4. pre-line 换行 不合并

###### text-overflow 指的是文字超过文本后的操作

clip 裁剪 还有省略号 ellipsis

###### overflow    超出文本的部分

1. visible 正常
2. hidden 隐藏
3. scroll  滑动滚动操作

###### BFC移动端适配的媒体查询

是一种提供给开发者针对不同设备的进行定制化开发的接口

可以查询设配类型,比如打印机,或者手机等东西

媒体查询和@import一起结合进行使用

@import 可以和url一起使用的

```css
@import url()  (width:100px)
@media (max-width:800px) {}
```

或者使用media 来进行媒体查询  使用media(max-width:1000px)

![image-20220514092052616](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220514092052616.png)

比较常用的是@media的方式来进行做媒体查询

**媒体类型和设备类型**

不写就是all,如果不写的话 默认是所有媒体查询的 print 打印机 srceen 屏幕

@media screen(max-width:600px)

**媒体特性**进行操作,每条必须要用括号括起来,同时也可以监听横屏和竖屏和分辨率等东西

###### 一般用于媒体类型中的逻辑表达式

可以设置min-width和max-width设置逻辑

@media screen and (max-width:500px) and (min-width:200px)

必须要满足所有条件,才会最终展示

###### iphone为例

通过媒体查询,通过改变rem,改变html里面font-size,然后改变整个程序的font-size

通过修改rem,然后改变font-size:18px

```css
@media screen and (min-width:400px) and (max-width:500px){
  html{
    font-size:20px;
  }
}
```

因为CSS的层叠性,我们可以使用依次往下使用

```css
@media (min-width:400px){}
@media (min-width:500px) and (max-width:700px){}
```

### 内容回顾

1. 语义化元素
   - header footer 
   - nav article **display:block**
2. audio和video元素
   - controls 和 poster 和 muted 和 autoplay 和preload
   - 同时还有适配的写法,比如`<resouce></resoucre>`
3. 全局属性,在小程序中最为常用的data- 自定义属性

white-space, text-overflow

**自定义CSS属性 使用var进行匹配**

以--开头的自定义属性

使用`linear-gradient` 设置线性渐变属性 , 指定方向,设置多个颜色属性

使用`浏览器前缀,保证这个东西,可以属性使用`

使用块级作用域上下文,清楚块级元素的布局方式

同时`两个BFC都有独特的渲染规则,互不干扰`,**默认的bfc是由HTML元素开启的**

overflow:auto可以开启BFC

`BFC清除浮动`,同时忽略绝对定位元素

使用@media 媒体查询 @media screen and (max-width:100px)



CSS一些东西,说的并不太重要,因为`不会影响自己在项目中的开发`
