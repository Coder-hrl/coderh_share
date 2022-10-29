#### 数组Array

> 数组其实也可以看做成一个对象,因为他是存在索引的,类似`arguments伪数组`

分页操作就是通过length来进行实现的,是可写的

如果强制的修改length属性,会进行扩容操作,会转为empty内容

或者对数组进行一个截取操作

清空数组的方法使用 .length = 0

##### 进行数组的遍历

可以使用for of 循环 for in 循环  for 循环  forEach循环

数组内的slice方法(数组截取的方法),concat方法(拼接在一起的方法),join方法(用的比较多,数组转字符串和splite使用)

flat 数组降维

indexof和lastIndexOf 数组中查找元素 ,有includes,

find函数,在传入的函数,里面传入的是item项

==> 	会将数组内的每个项,都进行调用自己所编写的函数

找到数组内的那个对象, **findIndex方法** 和**indexOf方法**类似找到索引号 , **includes** 数组中是否包含,返回为boolean值



**高阶函数**,内部会自动调用传入的函数

```js
const names = ["","",""]
function HYForEach(fn){
  for(var i =0 ;i<names.length;i++){
    fn(names[i],i,names)
  }
}
```

使用Array.prototype添加原型方法,回调函数也称之为高阶函数

在函数内调用其他函数

三个参数,一个是item,一个是index,另外一个是arr数组

可以在Array原型上直接封装函数,然后可以在Array上可以直接使用

findIndex方法,includes方法,find方法

###### 数组的排序和反转

reverse反转数组   sort排序数组

filter筛选条件为true的情况下,才会加入到新的数组中

###### reduce累加操作

```js
reduce((pre,item) => {
	return pre+item*item.id}
  ,0)
// pre 值,初始化的默认值为0
```

数组所使用的方法是可以链式调用的.

### 时间内置类型方法

const date = new Date()

时间表示的基本方法,后来使用dayjs或者使用moment方法

后来使用原子钟的标准时间为UTC,最标准的时间,后根据时区进行对比

```js
const data =new Date()
// 可以传入字符串
// 同时也可以传入时分秒的形式
// 年月日时分秒毫秒
// 也可以传入unix时间戳
```

他是一个整数值 , 1s等于1000ms

1T ==> 1024G ==> 1024*1024

ISO 8601的标准

getDate方法和setDate方法,每个getMonth的方法都是适配携带set方法

`Date.now()`  `Date.valueof`

`Date.parse()`   

## Dom和Bom操作

Document Object Model  文本对象模型    `将页面上可以展示的页面`

需要提供Dom和Bom相关api来进行操作

浏览器和文档对象提供课操作的接口(API)让我们来 进行使用

在微信小程序中,js代码上原生使用的比较多

当我们去操作dom模型中的数据的时候,DomAPi就是给我们提供了这个接口

Dom中获取的数据都是类数组对象,可以拿到整个数据

##### 除了Dom之后的操作对象就是Bom操作

Dom操作本质上就是,如何通过JavaScript对文档进行操作

渲染Dom树,通过渲染CSS样式树,绘制Dom树

存在父节点,子节点,兄弟节点等概念

获取nextElementSibling 兄弟节点

### Dom中Api的学习

1. 抽分成对象,我们去对抽分的对象进行处理
2. 全部继承自事件对象

继承的本质是减少复用代码,操作更加简单

##### 继承的好处   封装,继承,多态

1. 减少代码量,提高代码的可复用性,高内聚,低耦合

2. 继承是多态的前提

##### 组件化思想

找到共同点,抽离组件,根据不同组件设计插槽.