## Dom操作

文档节点分为注释节点,文本节点,都继承自于Node节点类

Node类又继承自事件类,我们通过DomAPi可以对页面上的元素做任何事情

可以将元素中单独的特性封装到属于自己的类中,比如HTMLImageElement

HTMLElement又继承自于Element元素类,还具有文本类和attr其他属性

所有的Element和Document 都是继承自于 EventTarget,来自于各种继承和封装

类似 生物  ==> 哺乳类 ==> 等类概念

#### document对象

载入网站的实例对象,抽分成对象模型.,整个网页都是document对象

包括注释和文本,childNodes所有的子节点,text类型,comment类型

ul节点和li节点,firstChild节点

Document对象是全局对象,可以拿到所有Dom对象

调取document对象方法

使用getElementById getElementByClassName   getElementByTagName

**实时的**

这些结果都会最终形成一个类似集合

`querySelector` 找到的只是第一个元素,我们要查询所有要使用all 

**但不是实时的**

使用的all,结果是可迭代的类对象.是NodeList数组对象

类数组也是有length的,但本质上继承的还是object类

=============以上是获取Dom元素的方式========================

###### 节点类型

注释和普通文本都可以称之为一个节点 

通过firstChild 导航模式去获取元素

也可以通过getElementById和getElementByTagName

###### 节点特性  Node

通过导航去拿childNodes,然后使用索引去拿节点属性

迭代查询 ==>一次次的去调用

递归查询 ==>迭代去查询,然后再迭代返回  

拿到innerHTML

元素上具有hidden特性,为display为none

完成需求后再去优化自己的代码

attribute 元素特性,每个元素都有attribute

分为标准的attribute 和非标准的attribute



**元素对象里面的称之为property** 

**在元素里面的属性称之为attribute** 

**对于元素中标准的attribute在实例对象中都有相对应的property**

属性里面主要是使用value来进行

```js
boxEl.value = "coderwhy"
boxEl.setAttribute("value","coderwhy")
```

###### 在JavaScript中动态修改样式

标准的attribute都可以通过元素对象的property中找到

**原生动态添加class**

**box.classname** 进行动态修改

###### 为什么不能使用class 而要使用classname呢?

因为在ES6之前,class被称之为关键字的,所以使用classname用来代替class

同时也有class列表,称之为classlist列表

使用classlist.add 添加  .remove 删除  .troggle等方法属性