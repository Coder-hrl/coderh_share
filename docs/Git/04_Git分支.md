## Git 分支

### 修改分支名称

```shell
git branch -m <nowName> <newName>
```

**创造一个跟踪远程main分支的当前分支**，基于远程分支 `develop` 创建一个分支

```shell
git checkout --track origin/develop
```

必须要**保证远程存在develop分支**，因为是基于origin/develop来创建此分支的

### 本地分支与远程分支不同的情况

```shell
git branch -m master main
git push origin master:main
```

**也可以通过修改config默认行为**，他会根据自己设置的upstream来进行推送,默认为simple

```shell
git config push.default upstream
```

需要配合一下命令来进行一起使用

```shell
git branch --set-upstream-to=origin/<branch.name>
```

**simple**

会去查询远程分支相同名称的分支，如找不到，则报错

**current**

会去查询远程分支相同的名称分支，如找不到，则新建一个相同名称的分支

**upstream**

会去查询当前分支，自己创建的上游分支，进行推送

### 创建一个新的分支

```shell
git checkout -b <branch.name>
```



### Git tag

> 一般是比较重要的版本再进行打Tag的操作

**通过以下命令来创建一个tag标签**

```shell
git tag v1.0.0
```

**通过添加-a标识符，可以添加-m 描述性文件**

```shell
git tag -a -m ""
```

**将指定的Tag `push`到远程仓库中**

```shell
git push origin v1.0.0
```

**将所有的Tags全部push到远程服务器中**

```shell
git push origin --tags
```

**删除本地的指定tag**

```shell
git tag -d v1.1
```

**删除远程的指定tag**

```shell
git push origin -d  v1.1
```

**检出Tag，切换到指定Tag版本**

```shell
git checkout v1.1
```

### Git提交对象 commit Object

> 通过git commit 来拿到提交对象