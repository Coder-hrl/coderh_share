title: Git高级用法

## Git高级用法

### Remote

修改远程地址的名称

```shell
git remote rename origin glab
```

移除远程仓库的地址

```shell
git remote remove origin 
```

如果使用git remote  add origin 添加仓库之后，进行git pull情况下，**远程仓库并不知道与远程仓库哪一个分支进行连接。**

```shell
git pull <origin> <branchname>
```

 或者通过**git给本地当前分支设置上游分支，用于跟踪分支**

```shell
git branch --set-upstream-to=origin/<branchname>    git pull
```

通过以上命令来设置上游分支，因为**git pull是通过上游分支的情况下进行pull拉取操作**

```shell
git branch --track master  origin/master
```

### git merge  

在进行远程合并的时候，拒绝合并不相关的历史

也就是**拒绝没有任何相同之处的分支进行合并**，因为branch大部分来自于主分支，在进行合并的时候是有相同的分支的。

```shell
git merge --allow-unrelated-histories
```

我们可以使用上面命令**来强制合并没有任何相同的分支进行合并**

如果你想创建一个新的分支，并且想要推送到远程仓库的分支的话，可以使用以下命令 

```shell
git push --set-upstream origin develop
```

或者使用以下命令来进行强制推送

```shell
git push -u origin develop
git push origin develop
```

- `git push -u`：这个选项用于**首次推送远程仓库**，并且它会在本地创建一个新的远程跟踪分支（如果远程仓库没有的话），并将本地分支与远程分支进行关联。这通常用于将本地代码首次推送到远程仓库，以便远程仓库与本地代码保持同步。
- `git push -f`：这个选项用于强制推送，它会在没有远程分支的情况下创建一个新的远程分支，并将本地分支的内容强制推送到远程仓库，即使远程仓库的内容与本地分支不同。这个选项通常用于覆盖远程仓库的内容，尤其是在远程仓库只有初始化的文件时。