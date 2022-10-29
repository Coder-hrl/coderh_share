##### 需要使用 清浮动

```js
dispaly:bloack
height:0;
visibile:hidden
```

##### 浮动,直接会浮动到最左或者最右的一边,顶部对齐

正确的元素做正确的事,div,可以做更多的事,需要统一进行重置.

使用父元素包裹另外一个父元素,然后margin-right写入负号来更大的范围

这是因为margin减少,width会进行添加

**box-shadow有左阴影,下阴影,模糊范围 ragb**

blur:**模糊范围**

##### 自身上移2px,可以使用relative来进行上移操作

position:relative;top:-2px;可以使用上移操作

##### top需要给一个初始值为0 具体代码实现为

position:relative; top:0;  在进行hover的时候,进行top为-2px的操作

##### 在根据设计图画页面的时候,首先需要在脑海中过一遍逻辑

##### 进行多行占在一行显示  

float:left;float:right; display:inline-block;display:flex;display:inline-flex;

##### 默认width指的是内容的宽度

可以使用width:400px;指的为content的宽度,如果使用border-box;指的是border+width+padding加一起为400px;

##### 使用上移提高一个px;来进行覆盖margin-top

##### 使用HTML+CSS就能搭建大部分的页面

### 组件化开发

- 可以省去大部分重复代码,将业务逻辑抽分成一个个组件.
- 将HTML和CSS进行逻辑抽分,可以将常用的类,放到全局CSS中

如果使用align-item:center;  会自动让元素横向包裹元素;

hight为auto;align-item为stretch的,但是如果使用包裹的话直接会高度固定死

如果使用align-item为center的话会将高度直接限定死

一般用h1作为标签,是因为有利于seo优化

#### line-height 对行内非替换元素有啥作用   `没用`

line-height **行高的意思,就是一行的高度**

**并没有把span高度撑起来**