title: Git分支

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

相信查看二进制的文件内容，必须要在objects文件才可以使用这个命令

```shell
git cat-file -p 00d2
```

通过git add 之后将文件暂存到暂存区

通过git commit 之后将暂存区的文件

每个提交对象中，**包含一个tree**，这个tree的地址**中包含了所有需要进行提交的对象**

其中还包含了**指向它父对象的指针**，有多个分支合并产生的提交对象有多个父对象

### HEAD

git 是通过HEAD指针来判断当前在哪一个分支里面，我们可以通过以下命令来切换分支

```shell
git checkout master 
```

通过修改HEAD指针所在的位置来实现的

### 为什么我们需要使用分支和Tag

- 开发某个项目，在默认master分支进行开发
- 不断地进行模块开发和bug完善
- 到了某一个可以发布的版本，使用tag打一个标签

使用以下命令来在当前标签创建一个新的分支

```shell
git switch -c  
git checkout -b 
git branch  
```

合并之后的代码是会存在多个Partent的，包括当前的分支（parent）和被合并的分支的parent

### 查看分支和删除分支

查看当前所有的分支

```shell
git branch 
```

同时查看每个分支的最后一次提交

```shell
git branch -v
```

查看所有合并到当前分支的分支

```shell
git branch --merged
```

查看所有没用合并到当前分支的分支

```shell
git branch --no-merged
```

移除分支

```shell
git branch -d <branc.name>
```

**分支本质上只是一个指针**

分支存在的提交记录并不会被移除

### 如果错误删除一个分支，如何恢复分支呢

通过git reflog命令获取到之前删除分支的校验码

```shell
git reflog 
git checkout -b <new.branch> <校验码>
```

