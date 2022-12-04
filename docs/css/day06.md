### 1. 预留知识

#### 1 伪类加伪元素

##### 1.1   `重要!!`伪元素区别

:first-line, ::first-line, :first-letter, ::first-letter,:before::before,

1. 伪元素听名字可见是一个元素,伪类则是一种类属性
2. ::first-line,选定首行的元素,进行设置
3. ::first-letter,对首字母进行设置

进行动态设置第一行,跟着width的改变而改变,能用css不用js

##### 1.1  ::before和::after

**相当于是一个元素,before是前面的元素,after是后面的元素**

1. 在前面插入一个元素,或者在后面插入一个元素

2. 使用CSS样式的方式来进行插入元素

3. ```css
   .box::after{
     content:'',
     display:block
   } /* 元素和元素之间会有空格,可以用来清除浮动 */
   ```

4. 使用CSS的方案,给共同样式的放在全局,然后使用重复添加样式

##### 1.2 `url()`函数是一个引入图片资源的方式

```css
content:url('./')
/*伪元素的位置不好看,对自身做一个相对定位,相对自己进行定位*/
position:relative
```

对一个元素的位置进行微调的时候,会进行相对定位

::after给前面加元素,::before给后面进行添加元素

##### 1.3 是使用伪元素的时候,不能随便将`content:''`进行省略

### 2  CSS属性特性

#### 2.1 CSS继承

##### 2.1.1 CSS某些属性具有继承性 inherited继承属性

> 继承的是计算好的**计算值**,而**不是设置值em**等东西

1. CSS有些属性是会继承给子元素的,有点类似于`事件委托`
2. 比如`color,font-size`,他们的属性是会被`后代元素继承`的
3. `Font-family,font-weight,line-height,text-align`等
4. 如果自己拥有,使用自己的,类似于原型链和作用域链

##### 2.1.2 可以强制让某些属性进行继承

- 比如元素的border也是可以进行强制继承的,border:inherit

#### 2.2 CSS层叠

**层叠概念,当选择器对一个元素的一个属性进行重复设置的话,**

**他会选择一个权重较高的进行显示**

如果权重一样,会从上到下进行执行

##### 2.2.1 CSS权重

!important 10000 ,内联 1000 ,id 100,类10 ,元素 1,通配符* 为0

权值是可以进行**累加的**,**伪类和类都是类选择器**

#### 2.3 CSS类型

##### 2.3.1 块级元素和行级元素

独占一行,行级元素在同一行展示

比如标题,也因为标题所以独占一行

h1-h7的元素,p元素和div元素都是块级元素,段落这种东西是需要独占一行的

有些元素是**不需要独占一行**的如img等元素,这些东西都是**可以在现实生活中找到的**

##### 2.4 每个页面要占据多大的空间

跟内容有关系,如果不设置的话,会height:auto

修改元素的属性,从而超过之前的权重,称之为重叠,覆盖

#### 2.4 display属性   行内替换元素和行内非替换元素

> `!!!重要` 行内级元素设置宽高不生效
>
> **img,video,input**是个`行内替换元素`
>
> **元素特点**:在同一行展示,可以像**块级元素一样设置宽高**
>
> **行内非替换元素**不可以设置宽度和高度

1. block   块级属性  可以设置width和height
2. none    不显示   **他会创建这个元素,不过它不显示**
3. inline   **行级元素 不能设置width和height**
4. inline-block 行级块元素 并行排列,可以设置宽高
5. flex      flex布局设置,内部的元素为bfc块级作用域设置
6. grid     网格布局设置,内部也为bfc布局

##### 2.4.1 行内块级的特点

对外来说是一个行内级元素,在内部来说是一个块级元素

- 可以与其他元素在同一行展示
- 也可以进行设置宽高

##### 2.4.2 display为none,visibility为hidden区别

或者你可以使用**rgba透明度来进行透明**,16进制颜色也可以表示透明度

在webpack中postCSS会对**16进制的颜色进行转换为rgba的形式**

- 相同点,元素都被创建了,不同点,所占位置不同
- Display     只不过**不显示,同时不占位置**
- visibility   **不显示,但是会占位置**

##### 2.4.3 backgroud-color的默认值

- backgroud-color的默认值为**transparent 透明**
- 或者使用rgba的方式进行使用,**只是针对本身的透明度**
- **opacity会携带他的子元素进行透明显示**

#### 3 编写HTML元素的注意事项

**!!!不要在p元素里面防止div元素,会出现一些奇奇怪怪的问题**

- 块级元素里面可以放置行内元素和块级元素
- 不要在行内级元素里面放置块级元素

#### 4 CSS样式不生效的技巧

要充分的**使用浏览器的检查元素,和调试工具**

- 选择器**优先级太低**了
- 选择器**没有选中元素**
- CSS属性不被支持,如**行内非替换元素不支持高度和宽度**
- **浏览器适配不支持** 如最近的line-clamp 并不支持
- **样式在后面被重叠** 样式被修改

### 二. CSS盒子模型

#### 1. 认识盒子模型

> HTML每个元素都可以看做为一个盒子

分为**标准盒子模型**和**怪异盒子模型**,通过**box-sizing**来进行设置

- 标准盒子模型,width指的是content内容部分,height指的是内容高度
  - 然后有padding,border,最后也有一个margin

- 怪异盒子模型,为border-box,width指的是内容加padding加border的部分

#### 2. 内容width,高度height

> 标准盒子模型的width和height是对content部分进行设置的
>
> width**百分百是错误的,他应该默认是auto的**,所以可以设置**max-width**

在进行**移动端适配的时候**,是可以设置min-width和max-height的

指的是**最小宽度和最大高度**,会出现一个滚动条,来设置最小宽度和最大宽度

#### 3. padding

##### 3.1 可以设置padding,来设置内边距

来设置边框和内边距的距离

##### 3.2 padding的属性 (上右下左,上左右下,上下,四周,)

 **类似一个圆来进行展示**

padding和margin都具有top,bottom,left,right四个属性,

都可以进行**独特化设置**,指的是margin

#### 4. margin

##### 4.1 margin-auto的本质

因为每个块级元素都是占据一行的,必须要设置宽高,才可以设置margin:auto;

#### 5. border 属性

##### 5.1 border具有样式,宽度,颜色

solid,dashed groove 这些东西去网站查找 也可以使用

##### 5.2 border-width

或者使用简写模式,使用border:10px soild red

可以给四边的**样式,颜色,大小**进行设置