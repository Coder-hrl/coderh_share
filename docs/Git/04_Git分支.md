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