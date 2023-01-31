### Dom操作

###### 创建元素 方法 document.createElement()

document.write用的比较少的( **!不推荐** )

可以直接写`document.write("<div></div>")`

innerHtml是直接解析HTML标签的,而textContent则是写入内容存在的

插入的方法

append() 向后追加一个元素 创建完添加玩属性,然后再直接添加

appendChild()两种方法  before向前插入,after向后插入

replaceWith()这种方式

###### querySelector也可以在元素上面进行使用

##### 移除一个元素

直接调用,当前元素的remove方法就可以解决

boxEl.remove() 可以在v-if里面的使用

##### 克隆一个元素

boxEl.cloneNode(true)  如果加入true的话就意味着是深克隆

这是可以克隆一个元素的方法

##### 一个进程中包含众多的线程,每打开一个tab页就是一个新的进程

JavaScript是在一个单独的线程内执行的

##### 比较耗时的操作浏览器会单独分出一个线程来进行执行,而不是主线程去执行

##### 每次在执行宏任务的时候,都会去微任务队列查看是否有其他的任务需要被执行

事件队列和事件循环microTask

##### ajax setTimeOut setInterval Dom监听 UIrendering



##### 因为js是单线程,遇到错误导致后续代码全部无法执行

所以在java中大幅度的使用try catch语法来进行编写代码

我们可以通过手动抛异常的方式去操作这些事情

如果发生错误,就可以快速定位到错误

同时也可以抛出一个对象

errorMessage和errorCode两种方式

throw new Error

##### 使用try catch finally无论如何都会执行的代码

如果try 和 finally都有处理的话,会执行finally