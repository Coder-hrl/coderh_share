## 移动端

### 移动端适配方案

设置的width为布局视口,根据**不同的屏幕**,来显示不同的大小比例

`<meta name =“viewport” content=“width=device-width”>`

比如padding,margin,font-size等数据也同时发生改变

1. 百分比,相对比参照物不一样,很难统一
   - 因为不同属性的百分比,所参照的参数并不同
2. rem单位方案,通过修改HTML元素font-size,**修改所有元素的距离值**
   - 转换font-size,设置不同的
   - 需要将需要换的尺寸,转化为rem单位
3. 使用vw视口进行布局
   - 一个vw代表着一个百分比
4. 使用flex弹性布局
   - 因为一个flex是弹性布局,他会自动占满其他的值
   - 父元素display:flex; 子元素 flex:1
   - 比如tabbar,就需要四个元素均衡分布,就可以使用flex布局

一般以375px的屏幕当做设计图,根据375px,来做设计图

或者使用750px来当做,使用媒体查询的方案

###### 编写rem项目

我们需要编写大量的媒体查询来进行屏幕适配,需要实时的大量计算rem值

解决办法

1. 通过js来动态计算,实现媒体查询

   - 我们需要拿到屏幕的宽度,然后根据屏幕的宽度,去修改font-size的大小

   - HTML 的宽度大小等于cliet-width的大小,也就是屏幕的大小

   - 同时有一个监听属性是resize监听事件

   - ```js
     const htmlEl =document.documentElement
     window.addEventListener('resize',()=>{
      const  htmlWidth = htmlEl.clientWidth
      const  fontSize = htmlWidth / 10
      htmlEl.style.fontSize =fontSzie
     })
     // 动态修改html的font-size,
     ```

   - 如何计算元素换算后rem的值

   - 使用`transtorm:scale()`来进行1px,缩小为0.5px大小

   - Page-show,缓存是否重新计算

2. rem单位 如何进行快速换算  **rem需要理解里面的用法**

   - 可以使用less或者scss,实现width和height进行混入操作
   - 使用postcss+pxtorem这一个插件
   - 插件方案,使用vscode插件的方案
   - 设置自动转换插件属性来进行动态计算

3. vw 根据视口的宽度就可以了

   - 因为视口高度,大多手机一致,直接使用vw来当做单位来进行计算
   - 目前viewport是适配性和操作性都高于rem移动端适配的
   - 一般使用vw进行布局,而不是用vh来进行布局.更具有语义化
   - vw永远是相对于视口来进行计算的,**视口过大之后不应该变化**,不能精细化操作
   - 万事有利有弊,包括font-size,唯一就是视口过大的问题

4. vw的换算过程

   - 将视口分为100份,然后再去计算宽度和高度的属性
   - calc计算属性,使用less或者scss计算
   - 可以使用webpack工具来自动完成转换,单位也进行换算

##### 认识grid布局,栅格布局   grid布局了解就可以

更加强大,更加复杂,基于一个二维的布局系统

grid-template-columns:100px 1fr  100px

grid-template-rows:repeat(2,100px)

以grid-line来进行区分线,构成网格结构的分割线

grid-trunk和grid-area  grid-gap,都是缩写属性
