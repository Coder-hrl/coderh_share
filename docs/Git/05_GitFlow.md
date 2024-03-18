## Git 工作流

是实际开发中，会存在很多开放的分支的

一般是以master 作为主分支，然后以develop分支，作为主开发分支

如果有**发布稳定版本**的情况下，**会被合并到master分支中**

如果有单独功能开发的话，会**单独创建一个分支来作为功能分支**

### 比较常见的git flow

分为主分支，开发分支和功能分支

一旦功能需要进行测试的话，需要从**develop分支里面创建一个新的release分支**，当release分支**测试结束**之后，就将**release分支合并到master和develop中**

### Git的远程分支

远程分支也是一种分支接口；

是以<remote>/<branch> 的形式命名的

如果一旦使用git merge，后面没有加任何内容的话，会自动去合并上游分支

```shell
git merge --allow-unrelated-histories
```

### 本地为mater，远程为main的情况下

```shell
git checkout --track origin/main
```

在上述没有-b 指定**branch.name**的情况下，会**自动生成一个跟上游分支的相同的分支**

### git  fetch

将远程分支拉取到本地分支

### git commit -a -m “”

这种写法必须要在文件处于修改的情况下才可以使用

对于从来没有跟踪过的文件，是不会被推送的

```shell
git push --set-upstream origin develop
```

对于本地分支追踪远程分支

```shell
 git checkout --track origin/develop
```

相同于上述操作，因为**本地分支如果找不到develop的分支的话**，而上游分支存在的话，会自动**创建一个跟踪远程develop分支的本地分支**

```shell
git checkout develop 
```

