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

### Git的文件状态的划分

我们可以区分成两个不同的状态

- **未跟踪** 尚未被Git仓库进行管理，我们需要通过add命令来操作，可以使用**git add . 或者单独一个个的去添加**
- **已跟踪** 被Git仓库已经进行跟踪，已经进行了各种管理

已跟踪文件的细分状态划分

- **staged** 称之为暂存（暂缓）状态的情况 ， **通过git add .  来达到这个效果**  已经进行了存储
- **Modify** 如果文件被提交之后，再次被修改的状态，被称之为修改区状态
- **UnModify** 提交状态，通过git commit -m 状态来达到这个效果

新增的文件，都是未跟踪的状态，如果一个被提交的文件在被修改之后，才会慢慢变成了被修改状态

我们可以使用以下命令，来获取提交记录**（使用空格来进行向下查看）**

```shell
git log 
```

**可以看见简洁的状态存在**

```shell
git status -s
```

**可以将文件从未跟踪，强制变为Unmodify的状态**  相当于  git add . 和 git commit -m

```shell
git commit -a -m ""
```

### git来进行忽略文件

使用 以`.gitignore`文件来表现那些文件不需要进行跟踪，不希望git进行跟踪和管理文件

被忽略掉的，一般都是**一些自动生成的文件，比如日志、编辑器自动生成的文件、nodeMoudle，build之后的文件**

在实际开发中，这个文件通常不需要进行自己编写，在**Github**上存在很多忽略文件。

