>  默认情况下,**生成器**是一行代码都不会执行的
>
> 扩展知识,在promise 中, async和await也是使用的生成器的
>
> 里面的await 也是使用的yiled,
>
> 因为每次拿到上一个结果的时候都会触发一个resolve函数
>
> 重复使用 async 和await 会阻塞输出,同时一个有一个接口崩掉,后续接口也会崩掉
>
> 因为axios会返回一个promise,所以一旦返回数据就会调用
>
> ```js
> const res = await getPageList()
> ```
>
>  

```js
// 生成器概念 使用生成器
// 生成器函数的定义 使用yield来进行返回数据
function* foo() {
  console.log('11111')
  yield 'hello'
  console.log('2222')
  yield 'new world'
  yield 'iT行业'
}

const result = foo()

console.log(result)

// 调用next返回结果
console.log(result.next())
// value拿到值,done就为next  每调用一次next 就会消耗一次结果
// 一旦done为true,这个时候value就位undefined了
// result 是一个迭代器对象,要使用Generator 生成器函数
```

