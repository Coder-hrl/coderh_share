## Git详解

### Git全局配置

分为三种，一种是系统整体，只针对用户和针对当前仓库

1. /etc/gitconfig 包含了系统上每一个用户和仓库的通用配置
2. ~[user].gitconfig 用户单独的配置
3. /config/gitconfig  只针对当前项目

### Git命令

**用户配置当前的用户name**

```shell
git config --global user.name = "coderh"
```

**用户配置当前的用户email**

```shell
git config --global user.email = "coderh@qq.com"
```

上述`--global命令`主要针对当前用户的的全局属性

**使用以下命令获取当前global下的name**

```shell
git config user.name
```

**使用自定义的git命令**   使用co简便命令改为checkout

```shell
git config --global alias.co checkout 
```

**git仓库初始化**

```shell
git init 
```

**查看git提交记录**

```shell
git log
```

**仓库的克隆操作**  同时自动添加好`git remote add origin `操作

```shell
git clone https://github.com/coder_hrl
```



