## Express

> 使用的 Express 库:multer,multer 解析库 可以做文件上传功能
>
> ```js
> const upload = multer({
> 	dest: '放到哪里', // ./uploads/
> });
> app.use(upload.any());
> ```
>
> Multer.diskStorage() 放在硬盘里面
>
> `multer.memoryStorage()` 放在内存里面

params 是`http://localhost:8000/loader/:id/:name` 可以使用`req.params`

Query 指的是`?username=libai&age=22` 可以使用`req.query`
