## 分之语句

#### if else 

条件判断的时候,使用代码块,代码执行这个代码块里面的代码

`{}称之为代码块`,在React中代码块用的也非常多

运算符都是从右往左开始运算的,比较简单的条件判断可以**使用三元表达式**

#### if else if 语句

可以使用 if else if else

```js
if(){} else if(){} else{}
```

###### prompt() 函数一个可以输入内容的弹窗

我们可以使用变量,获得输入后的内容.

######  alert() 函数可以在页面上得到消息

#### 三元运算符      `条件运算符`

在JavaScript中用到较多的操作符,在开发中非常常用

```js
const result  = value ? "123" : "456"
```

#### 逻辑运算符 ?? ||  && ! 的用法

?? 非空判断 只判断undefined和null

!!   强制类型判断

?. 短路链运算

&& 与  || 或 但是也可以当操作符

&& 前面为正 返回后面, || 前面为正 返回前面

! 逻辑非 取反

#### 逻辑或 单独使用

```js
// 可以写这种代码
const result  = res.data || {}
```

最终是表达式,最终的运算结果

###### switch case 分支语句,是否等于分支的一个常量

只能做严格相等的判断,只可以做值的判断

switch case 至少含有一个case 和default的语句

###### switch(表达式/变量){case 值判断:}

if可以做范围判断,表达式判断

switch 一般做值判断,进行**全等判断,不进行隐式转换**

```js
switch(btnClick){
  case 1:
    console.log('122221')
    break;
  case 2:
    console.log('2122')
    //一定要存在一个default 作为默认
 default:
    console.log('12312')
}
```

默认情况下,会产生case穿透问题,一般使用break来进行操作

#### 循环语句的认识

对一个列表进行操作,可以称之为`遍历操作`或者是`迭代操作`

将一个代码块进行重复的执行,在里面所有的东西中,都是去**操作代码块**

`条件成立,执行代码块,条件不成立,跳出代码块`,如果一直进行为true,会陷入死循环

##### while循环语句

```js
let i = 10;
while(i!=0){
  console.log("111")
  i--
}
```

##### do while循环语句  `(不常用)`

do while非常不常用,在进行操作一次之后,才会进行判断,判断条件.

##### for循环语句   `用的非常多`

但是在对象里面存在 object.entries ,object.keys,object.values

在数组里面使用forEach(不能手动退出) 和map ,等数组操作

`for(begin,condition,step){}`

##### for 循环的嵌套

循环体,代码块;执行体,代码块;

###### document.write() 写入一个元素,也是js操作HTML的一种方式

`document.write("<div>")`

###### break 和continue

Break,结束本次循环,

Continue:跳出本次循环,进行下次循环

###### Math.random和Math.floor和Math.round 和Math.ceil
