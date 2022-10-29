## 高级元素的使用和常用emmet语法

> **你作为一个开发者,到底使用redux管理,还是使用在页面内管理,由自己决定**,你的程序你来做主
>
> 在编写样式的时候,**不要空荡荡**的放在一个地方,**最好都有一个标签来进行包裹**
>
> **margin的上下折叠问题**.
>
> 只有在**父为块,子为块的时候**,才不使用text-align:center
>
> 继承的**优先级是非常低**的,将**重复代码进行分装**,根据返回的**数据动态添加样式**
>
> **1. 先整体后局部,重置样式,先架构后填细节.**
>
> **2. 编写从上往下,从外往里进行编写CSS样式**
>
> **3. 去除重复的代码,放到一个单独的class当中,不同的放在不同的class中**
>
> **!!!!(重要)继承的权重是最低的**,永远**使用的是自己的颜色**,不管继承的权重有多高.

### 居中设置

#### 1. 给行内级或者块级设置居中

##### 1.1 父元素给行内级元素设置居中

父元素设置**text-align:center**,只对**行内级元素有效**

##### 1.2 父元素给块级元素设置居中 

给子元素设置margin: 0 auto

### 2. 高级元素

#### 2.1 列表元素

列表在开发中非常非常的常见

- 使用div来进行设置列表
- 使用ul li的方式来设置列表 对**语义化会有好处**
  - 但是ul 里面只能放入li,相反不拘一格的div更受到大家的喜欢

Vue需要按照模板来进行开发,所以开发出的代码没有多少区别

而React则不同,更加的自由,能更好的表现自己的技术.

##### 2.1.1 ul li 无序列表    unordered List

##### 2.1.2 ol li 有序列表    ordered List

- 在ol里面只能放入li标签,li指的是列表中的某一项
- 列表有1,2,3,4等前缀

先进行重置,**list-style改为none**,**decimal为数值排列**,padding和margin改为0

然后再进行重新赋值

##### 2.1.3 dl dt dd 定义列表  define List

dt 项目名,dl,dd 

**user agent 属于是浏览器结构**,浏览器多加了一部分东西

`i元素是一个行内非替换元素`

**自身调整使用relative,如果相对父元素进行调整用absolute**

代码进行抽分,多使用`>的方式,来进行编写css`

#### 2.2 表格元素

##### 2.3.1 认识表格元素

table,th,tr,td

tr	单元行,		td	单元格

###### thead 头部   tbody 主体部分  tfoot  脚部部分

**tr都是一行**,th放在表头,td放在tbody里面,td放在tfoot里面

用th用来在thead里面做表头			用td用来tbody里面的内容

也用td用来作为tfoot里面的元素内容

##### 2.3.2 跨多行进行展示,跨多列进行展示

跨行合并 rowspan  跨列合并 colsoan

只需要跨的元素上面添加 colspan或者rowspan

1. 先确定谁跨,确定是跨行还是跨列
2. 跨几行还是跨几列

#### 2.3 表单元素

> 他在使用submit来进行提交的时候,他会直接放到url地址上,不易于保存
>
> method属性有get,post和delete,target:_blank   

##### 2.3.1 用于用户交互的方式,form表单元素

使用表单进行设置

###### 常见的表单元素,input  属于`行内替换元素`

内部属性有`texteare`,`select`,`time选择时间`,`data选择日期`

`button`,`checkbox`,`color`,`file`,`email`,`submit`

readonly属性,autofocus,**写上属性名就代表使用**

###### input严格来说是不是行内替换元素

###### 在value里面写入名称

```js
<input type="button" value=""> //reset和submit都是以按钮的形式存在
  //但是内部点击的事件完全不同
```

reset重置按钮,submit用来提交数据

##### label 元素一般和input元素一起使用

一般`label作为input元素的标题属性`

```html
<label for="inin">姓名:</label> <!--这个for使用的是id-->
<input id="inin" type="">
```

##### type为radio,只有`name`为相同的,才会变成`单选`那样  value为提交的值

```js
<label for="maile" ><input id="maile" ,type="radio" value=""
></label>
```

##### checkbox多选框  指的是type为checkbox的input元素

##### select  选择项  options

`<options value="">`

### 3 伪类选择器

##### 3.1 :nth-child(n)   `需重点记忆`

- **-n+2 前两个**,**只不选择后两个使用n-2**

- 可以是0和任意整数,**n代表的是所有的都匹配**

##### 3.2 同时也可以使用属性选择器`重点记忆`

- table tr td[colspan]**属性选择器**,甚至可以`colspan="2"`
- text-area  cols   rows  可以设置resize改为both

### 4 请求方式对比

##### 4.1 get请求

##### 4.2 post请求

可以使用()可以使用^进行上一个层级 或者使用$$$

name和value之间的区别,**value是用来发送消息的**,

**name是在radio和相同,**

**checkbox用来匹配的**