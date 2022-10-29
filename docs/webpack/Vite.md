> 下一代前端开发和构建工具,号称0配置,急速工具
>
> 不需要去配置loader等配置加rules规则

因为我们需要对代码进行转换,构建操作,编译操作,加载速度随着js的大小越来越慢

HMR也需要很长时间来进行动态更新

###### 可以显著提高开发服务器效率

基于ESModule的开发,不需要做很多的编译,让浏览器去处理,HMR更快

使用rollup来进行打包处理,他自身还是没有打包工具的,可以输出优化后的静态环境

`Vite社区插件也很不完善`

因为使用了js,ES6中的esm默认的导入导出,不用去重新编译

不需要使用CSS-loader和style-loader等loader配置,我们只需导入css

```js
import './css/bacis.css'
```

不需要去单独的配置loader,只需要去下载sass就可以

```scss
$width:100px；
$height:100px;
.title{
  height:$height
    .title1 & {
      // 这个会被编译成 .title .title1
      width:$width
      }
}
// 在进行嵌套的时候,需要使用新的方式来进行操作
.tittle,.tittle1 {
  a{
    width:$width
  }
}
// 在这个里面他会生成一种 .tittle a , .tittle1 a 的样式表
```

会使用connect 对数据进行转发处理

###### 如果来自于dependence的时候就会进行一个提前的打包

转换为JavaScript代码,然后在浏览器中进行执行

会进行触发一个HMR模块热替换

使用了ESbuild构建工具,使其构建的速度会非常快的,快到不需要缓存

![image-20220321092841328](/Users/huangruilin/Library/Application Support/typora-user-images/image-20220321092841328.png)

ESbuild的打包速度会非常快的,使用go语言进行编译,同时转换为机器代码,不会转换为字节码,没有中间商赚差价,卖家多卖钱,买家少花钱

使用rollup进行打包处理,依赖rollup进行打包