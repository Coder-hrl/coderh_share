### box-sizing的使用场景

什么时候使用box-sizing,什么情况下要加box-sizing,

块级元素,独占一行,默认的width为auto,width:300px;

#### 盒子默认是内容width+border+padding

#### 添加border和padding,出现的是width的大小

改变了盒子模型的width包括范围,但是必须要明确的设定width和height

##### box-sizing的无作用的场景环境

1. 当width为auto的时候,box-sizing是无所谓的,因为height为auto

2. 一个垂直居中的做法
   - Position:absolute,left:0,right:0,top:0,bottom:0,margin:auto
3. flex为1 是不会有默认的高度和宽度的,
4. 在flex布局下,不设置为height,会拉伸为auto

##### white-sapce 超出后的文本 

nowrap,wrap

##### text-overflow:ellipsis;display:-webkit-box;-webkit-box-origent:vertical;-webkit-line-clamp:3;

##### 不固定宽度,出现省略号

flex:1和white-space:nowrap,overflow:hidden

##### 规范问题

**在行内非替换元素不要去嵌套`块内元素`**,浏览器会不知如何去解析,重点是`行内非替换这个属性`

##### 实现类似,文段前面有文字的效果,可以使用这样的想法

```js
<p>
  <span v-if=""></span>
  </p>
```

##### 如果要实现:hover的情况下,里面的元素进行发生属性变化的话可以使用

```scss
.class{
  item{
    display:block
  }
}
.class:hover{
  item{
    display:none
  }
}
```

Padding-right,padding-left,padding-top,padding-bottom