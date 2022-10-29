## 从浮动到flex布局

###### 兼容性:float布局 > flex布局 > grid布局

##### 在进行浮动的时候,块级元素会依次排列,不够的话会往下排

可以使用**margin-right:-10px**来防止溢出现象,向左浮动,挨个排

你同时也可以往后面排,他会**依次排位置**

##### 一个思路,border全部为1px,然后border-right为none

或者使用box-sizing为border-box,

当设置box-sizing的时候,内容宽度会进行auto自适应设置

##### margin设置负值的问题

当使用margin-left设置负值的时候内容会进行`重叠`

使用margin-left:-1px;正好可以覆盖border值,然后让看起来只有一个border属性

然后将第一个元素的宽度大小降低1px像素

##### 当使用浮动,进行一比一进行还原

当多一个像素的时候可以让**首个元素width减少一个像素**

##### 细节需要扣的很仔细,尤其是border和margin等东西,边框重叠等

### 浮动出现的问题,高度`塌陷`

因为float脱标,导致父级元素没有高度职称导致,塌陷

##### clear clear

指定一个元素放到**所有浮动元素**的小面

left  移动到向左浮动元素的下面

right 移动到向右浮动元素的下面

both 移动到所有浮动元素的下面

##### 布局方案整理

**absolute 是层叠布局, **

**normal flow 是垂直布局 **

**float flex 水平布局**

### Flex布局

> 目前兼容性较好的非常好用的布局方法

##### 认识flex布局   grid布局更加的强大(`兼容性较弱`)

**flexbox弹性盒子**可以膨胀以填充额外的空间,收缩来适应更小的空间

弹性盒子是按行或者按列一维布局方案,分为水平方向和垂直方向布局

PC端也很常用,现在目前只有很少的网站不兼容flex布局

##### flex布局最主要的是理解其中的概念

flex布局的元素称之为flex-container,里面所包含的**元素**称之为flex-item

flex-item的**元素特征**:

1. flex-item布局的摆放将受到flex-container布局的控制的

2. **不再区分行级元素和块级元素**,但是外层设置flex的还是会区分的
3. 默认情况下**会包裹内容**的,同时**也可以设置width和height**

##### display可以设置为flex,inline-flex  (主要针对的是设置display为flex的元素)

1. 设置为flex的意思是是**主元素为block-leavel**元素排列
2. 设置为inline-flex的意思是**主元素为inline-leavel元素**

##### flex布局的坐标轴 会分为主轴x轴和纵横轴y轴来进行排列

1. 默认元素的排列都是按照**主轴(X轴)的方向来进行排列**的.默认改变的是主轴方向
   - 如果不设置flex-wrap为wrap,主轴内的元素会被压缩展示的
2. 还会存在一个交叉轴,压缩轴是在flex-wrap为wrap的时候在交叉轴的排列属性
3. space-betwwen是两边对齐,中间排列,space-around是对齐排列

##### flex元素属性

概念:在flex布局中width和**最终表示出现的宽度是不一致**的,flex-shrink和flex-grow

1. flex-direction 

   - flex的`主轴方向控制`为row,column
   - 同时也会存在row-reserve和column-reserve,翻转row和column
   - 主轴翻转意味着`元素排列顺序的改变`

2. flex-wrap 决定的是flex-container是否要进行换行

   - wrap 换行
   - nowrap 不换行   (**默认值**,不换行)
   - wrap-reverse  和之前的排列元素进行翻转

3. flex-flow 可以设置flex-direction , flex-wrap

   - 设置主轴方向和是否换行

4. 设置底部元素排列

   - flex-flow row-reverse wrap-reverse

5. justify-content 

   > 可以和justify-content配合margin和padding使用

   - center  居中展示
   - flex-start 从头开始排列
   - flex-end  从flex-end开始排列
   - space-betwwen **两边对齐** 中间均匀排列
     - flex-start和flex-end对齐
   - space-around 各个元素距离都相同
     - **两边有空隙**,空隙距离为元素之间的距离大小
   - space-evenly **两边有空隙**,同时中间均匀排列

6. align-items

   - baseline **文本基线对齐** 跟height有关系   `文本基线对齐`
   - normal  和`stretch效果是完全一样的`   **初始值**
   - flex-start  
   - flex-end
   - center  居中
   - stretch  拉伸对齐 指的是将元素值为auto高度,然后进行拉长

7. align-content 

   - 跟space-content里面的属性基本相同,跟**height有关系**

##### flex-item的元素属性

1. order 

   - Order的值越小,越往前排.
   - 0 为最大 , 进行排列

2. flex-grow  成长 长大的意思

   > 指的是把剩余空间进行等分,然后按照比例大小进行分配,`默认为0`

   - 在flex-wrap为nowrap的时候存在,在进行收缩的时候按比例收缩
   - 在进行**放大的时候按比例变大,只有在剩余空间的时候存在**
   - flex:1 为flex-grow和flex-shrink,会进行`拉伸伸直`

3. flex-shrink  指的是收缩比例,如何进行收缩

   - 默认值为1,进行一比一进行收缩,进行收缩
   - shrink为0的时候,表示不压缩,
   - 只有在所有itemwidth宽度大于width才会生效
   - ![image-20220424211816392](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220424211816392.png)
   - 设置缩小的值 最小不能低于min-width和min-height

4. align-self **覆盖flex-container中的align-items**

   - center,flex-start ,父的flex-container是center,然后子元素可以自己设置

   #### flex-basic

在页面展示宽度的优先级对比,最高

1. max-width和min-width

2. flex-basic
3. width和height
4. 内容包裹

##### flex缩写属性

flex:1 设置为1的时候,意味着flex-basic,flex-shrink,flex-grow

在修改el-form里面属性的时候不能使用scope

flex:1 1 auto; **flex-grow , flex-shrink ,flex-basic值顺序**

如果只是设置为1 的话只会设置为flex-grow,

##### 如何解决   `!!!实战重要`

可以不设置justify-content属性,通过**计算来算出属性**

只有align才有self属性来覆盖之前的align-items

在后面**添加一个span元素**,因为flex里面**不存在行内元素和块级元素,**所以设置一个空span元素,设置一个**width为之前的元素相同的宽度**,**不设置高度**

**空span元素**的数量是`列数 - 1`,此方法为**目前的最优解**

### 总结

1. 浮动案例,边框案例
2. 清浮动   ::after: content:`‘’`,display:block,clear:both  兼容性 height:0

