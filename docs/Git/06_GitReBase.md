## git rebase

如果发生了，分支创建，并进行了分支合并的情况下，git log则出现的提交则不是线性的了

```shell
git checkout feature
git rebase master
```

将当前的分支，重新将base更改为master所在的分支情况

Rebase 操作，首先找到最近最新的祖先，