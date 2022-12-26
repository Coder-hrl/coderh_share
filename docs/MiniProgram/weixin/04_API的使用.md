---
title: 小程序API的使用
---

### 页面直接调用组件的方法

可以使用this.selectComponent来拿到子组件里面的实例

```js
const tabControl = this.selectComponent(".")
```

### 插槽的使用方式

#### 匿名插槽的使用

> 与Vue十分相似,都是使用**slot**来放入插槽
>
> **小程序插槽是不支持默认值的**

我们可以使用伪类选择器来手动实现这个效果

```css
.default{
  display:none;
}
.content:empty + .default {
  display:block
}
```

当框架**没有实现功能**的方法时,我们可以**手动去实现**这个东西

#### 具名插槽的使用

> 在小程序中使用的是slot 通过添加**name的方式来具名**的,与**Vue**一致

1. 在子组件中添加多个slot,通过**name的方式来区分**
2. 在父组件中通过使用`slot=""`的方式来进行区分`(Vue中使用#或者v-slot)`
3. 必须要在js文件中**options**使用**multipleSlots**设置为true

#### behaviors  (混入)

> behaviors使用与组件间代码的共享,类似于Vue中的mixin,将重复的代码抽取到behaviors里面

#### 组件的生命周期

lifetimes 生命周期对象

pagelifetimes 页面生命周期

created 创建时候的生命周期

attached 组件被添加到组件数中

ready  在组件图层布局后完成执行

datached 组件从组件树中被移除

#### 微信提供了专属的API接口,可用于网络请求

`wx:request()`是一个ajax请求

| 属性    | 类型   | 默认值 | 必填 | 说明             |
| ------- | ------ | ------ | ---- | ---------------- |
| url     | string |        | 是   | 服务器地址       |
| data    |        |        | 否   | 请求参数         |
| method  | string | GET    | 否   | http请求方式     |
| header  | object |        | 否   | 配置的header属性 |
| timeout | number |        | 否   | 默认为60000      |

success 成功的回调

fail 失败的回调

**在onload里面请求发送数据**,然后使用setData得到数据,最后放到页面上面

#### 小程序只可以跟指定的域名进行网络通信

对域名进行验证,有没有备案,是否是合法的

如果只需要数据修改,而**不需要页面刷新**的话,是不需要使用setData的

然后可以使用async和await来进行使用

### wx API调用

#### showToast

> 提示语句的弹窗

使用wx.showToast来进行调用

#### showLoading

使用wx.showLoading来进行调用

#### showModal

> 可供交互的弹窗

一个凭空可供确定和取消的弹窗

#### showActionSheet

>可供从下弹出的弹窗

使用itemList传递值

从上往下弹出一个弹窗

#### 分享功能

> 会自动回调onShareAppMessage

需要处理函数需要return一个Object,用于自定义转发图片

```js
return {
  title
  path
  imageUrl
}
```

#### 获取到当前位置

> 注意需要用户授权,才可以获取到地址

wx.getLocation()

#### Storage

> 用于本地的存储

提供了两种方法,一种是同步执行,另外一种是异步执行

也就是指是否阻塞后面的执行,所有的sync都是同步属性,也就是同步执行

setStorage里面有一个属性是用来加密的  encrypt

#### 界面跳转的方式

- wx.switchTab 跳转到tabbar页面,并关闭其他所有非tabBar页面

- wx.reLaunch 关闭所有页面,打开应用中某个页面

- wx.redirectTo 关闭当前页面,跳转到应用的某个页面

- wx.navigateTo 保留单签页面,跳转到应用的某个页面
  - 跳转到某一个页面,但是不能跳转到tabbar页面

- wx.navigateBack 关闭当前页面,返回上一页面或多级页面

#### 带着参数去跳转

1. 在跳转的时候,使用**字符串拼接的方式来去跳转**
2. 在跳转的那个页面使用**onLoad(options)**从options中获取

#### 页面返回

> 其实在微信小程序中左上角有一个按钮,可以用来返回上一页

我们可以使用**navigateBack的方式去返回跳转**

- delta 是用来设置跳转返回的层数,默认为1层

##### 给上个页面传递数据

我们可以通过**getCurrentPages可以拿到跳转的所有实例**

**拿到想要的实例之后,可以调用他的setData方法**

##### 第二种方式

const event = this.getOpenerventChannel

Event.emit(“回调的函数”,回调的数据)

#### 元素返回的url

> navigator 属性,需要传入url属性,open-type中可以选择类型

### 认识一个小程序用户身份

增加**用户的粘性**和**产品的停留时间**

使用微信授权,达到快速登录的方法

- 认识小程序登录流程

- **openid**和**unionid**

- 获取到**code**

- 换取**auth Token**