## transform 平移,旋转,缩放,倾斜

### translate 平移,位移

指的是 CSS 移动元素在平面上进行移动,意思为**平移**,最主要的当前元素的平移

```css
transform: translate(30px, 30px); /* 平移可以是px值或者是百分比的形式 */
```

300px 或者是使用 30%的格式存在,x 轴和 y 轴,x 轴为向右移动,y 轴为向下移动

`不同地方的百分比的参照物是不一样`的,而 translate 是**相对自己的宽度和高度的**

<img src="/Users/huangruilin/Library/Application Support/typora-user-images/image-20220509165607699.png" alt="image-20220509165607699" style="zoom:25%;" />

或者使用,`translateX()`或者使用`translateY()`

### 垂直居中的总结方案

1. 行内级元素,父元素使用 text-align:center
2. 块级元素,使用 margin:0 auto
3. 绝对定位,left:0;right:0 margin:0;auto,也可以使用 left:50%,translate(-50%)
4. dispaly:flex,jusitify-content:center;
5. 父相子绝,弊端,**脱离标准流,但是必须给元素设置高度**
6. 使用 flex 布局,目前最好的一种方式,**不必必须设置高度**,弊端,内部所有的都会被垂直居中,flex 元素
7. 使用父相子绝,使用 transform:translate

父绝子相的原理是 top 相对`父元素的百分之50`,然后再相对`自己位移百分之50`

**top 百分比相对的是父元素的高度来比较的**

**margin-top 则是相对的是父元素的宽度来相对比较的**

position:relative top:50%,translate(-50%)

### remote 旋转`以deg作为单位`

旋转的值为旋转的角度为 60deg,单位为`deg`

指的是旋转的角度,大于 0 为顺时针旋转,小于 0 为逆时针旋转

同时可以在旋转的时候,可以加一个动画,来更好的体现效果

百分比,百分度,角度或者圈数 **(.25 圈,0.5 圈)**

### scale 缩放

缩放属性,scale,一个为 x 轴的缩放,一个是 x 轴,一个是 y 轴.

### skew 倾斜 `以deg作为单位`

倾斜,skew,指的是在二维平面的倾斜操作

skew(x,y)倾斜的角度

单位同样为 deg,倾斜的角度受 transform-orign 的影响

### transform 以 transform: translate() remote() scale() skew()

如果是以+为 是以空格 相隔,如果是# 是以,相隔

transform 是形变,**以形变为主**,translate 是平移函数类型的

### Transition 过渡,更多的是过渡的过程

如 color width 和 translate 和 romote,和其他形变过程

### 如果左固定,右动的话

可以使用绝对定位,**定位到左边**上,死死的定位住

### transition 只能定义`开始状态和结束状态`,不能定义中间状态

`不能重复的进行轮回动画`,同时需要在`特定的环境下才能触发动画`

### animation

1. 可以定义关键帧,根据不同的时期来进行定位
2. 可以自己进行执行,同时可以一直执行动画.

`如果需要更多的状态变化的话,使用CSS animation动画`

可以使用 keyframes,可以定义每一帧的动画

视频的本质是`一帧一帧的图片`构成的

小于 16 帧会明显感觉到视频的卡顿,一帧指的是一秒渲染出多少张图片来

### **人应该多看书,这也是我为什么多看视频的原因**

动画是有可以**执行的名称**,**持续时间**,**动画曲线**,**延迟**,**执行次数**,**方向**

### animation 动画

@keyframes,关键帧和关键位置

animation-file-mode 动画后结束的位置

animation-play-count 为 paused,可以停止动画的加载

### vertical-align 元素的对齐方式

中线对齐,默认为基线对齐

div 被内容撑起,撑起的是 line-height 行高对齐

### inline-block 的高度是行盒的高度 `行盒的作用是包裹所有的元素,最终高度为子元素中最高的元素`

把当前子元素的所有内容全部包裹起来,块级元素中行盒的理解,多种行内元素

不设置高度和宽度,会根据内容撑起来这个高度和宽度,如果只设置宽度或者高度的话,img 会自动计算宽高比

### 行盒是根据什么来进行对齐的呢? 如果存在内容是以`基线`对齐的

Vertical-align 作用为:**影响在行盒内,行内级元素的对齐方式**

同时会包裹成 margin-bottom

因为加上`内容之后就有基线`了,有了基线就符合 vertical-align 的对齐方式了

### 在行内级`没有内容`的情况下,他的`底部为基线`

如果出现了下方的空白点,是默认没有内容的基线底部

### vertical-align:top `默认基线对齐`,所以底部会出现像素

顶部对齐 middle 中线对齐,bottom 底部对齐

### 当一个 inline-block 里面存在内容的话

如果有内容有基线的话,就会根据文字内容基线对齐

如果是多行排列的话,以最后一行的文字的基线为准

### vertical-align 也有其他值 `是对行盒元素内行内级元素来进行设置的`

1. 基线对齐 或者以基线为准开始出现值类型,或者百分比类型的值
2. 顶部对齐
3. 底部对齐 中线对齐

### 行盒必须要包裹所有的元素,一定会包裹.

仍然要保持基线对齐的情况下

是可以`单独给元素设置的vertical-align的对齐方式`,其他的元素在未设置的情况下,仍然是基线对齐的方式.

### 解决行内级元素图片出现下边的原因

1. 改变他的对齐方式,改为**vertical-align:top**
2. 或者使用 display 为 block 的方式,来进行改变

### vertical-align 中文字和图片之间是

基线加上文本的高度一半

line-height 是一行文本的高度,当整体高度为 300px;一行文本也是 300px;是居中了

![image-20220510095306214](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220510095306214.png)

vertical-align:middle 严格来说不是居中对齐的.默认为**基线对齐的**

**记住 line-height 是一行文本的高度,不能随便用**

行高是会继承,会继承父元素的行高,行高和 height 的高度要一起使用,

ellipsis 省略号
