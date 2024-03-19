title: Git Rebase

## git rebase

如果发生了，分支创建，并进行了分支合并的情况下，git log则出现的提交则不是线性的了

```shell
git checkout feature
git rebase master
```

将当前的分支，重新将base更改为master所在的分支情况

Rebase 操作，首先找到最近最新的祖先，来基于变基

rebase的作用是为了将不线性的提交记录，变更为线性的提交记录，使提交记录更加的简洁

### rebase黄金原则

永远不要在master分支中使用rebase，这个是**非常危险的**；

如果在main上面使用rebase，因为会将主分支的所有内容，进行了变基，变基到子分支的，会造成大量的提交历史在远程main分支不同；

### 设置上游分支（跟踪分支）

```shell
git branch --set-upstream-to=origin/master
```

### 合并没有相同的base分支

```shell
git merge --allow-unrelated-histories
```

### git 原理

git add . 之后

会以二进制的方式，存在.git/objects/00 40中的内容,其中保存了修改的内容

如果历史记录变的非常错综复杂的情况下使用rebase，让提交记录变的线性起来，以便容易观察