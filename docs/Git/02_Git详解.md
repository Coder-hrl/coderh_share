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

### 校验和

在每次进行提交完之后，会自动生成一个**commit的校验和（commit id）**，这个校验和是通过**特殊算法生成的唯一值**

使用的**SHA-1的散列算法**来进行**动态生成的40位的十六进制字符串**

同时进行**git 回退的时候**也是使用的**commit id** 来进行查询到回退到那个版本

### git log

可以使用git log来查看所有的提交记录

我们可以使用这个命令来更清晰的查看提交记录

```shell
git log --pretty=oneline
```

通过添加修饰符 --graph 来更清楚的看到提交记录（尤其是在多分支开发的情况下）

### 版本回退  git reset

如果我们要进行版本回退的，我们需要先知道目前在哪一个分支，使用HEAD来区分目前在哪一个地方

```shell
git reset --hard HEAD^     回滚到上一个版本
git reset --hard HEAD~X    回滚到前面几个版本
git reset --hard commit Id 回滚到指定版本
```

```shell
git reflog 来查看所有的操作信息，包括git reset内容
```

### Remote Repository

远程仓库通常是搭建在某一个服务器上，一般常用的服务器有 github、gitee和gitlab

### Git 仓库验证手段主要为两种

方式一：基于HTTP来进行连接，使用**credential Storage凭证存储**

因为Http协议是无状态的连接，所以每一次连接都是需要账号密码

Git拥有一个凭证系统来处理这个事情，具有多种的凭证管理方法，window中使用的是`manager-core`,mac中使用的是`osxkeychain`

```shell
git config credential.helper
```

方式二：**基于ssh的密钥来进行访问**

secure Shell 是一种加密的网络传输协议，可在不安全的网络中为网络服务提供安全的传输环境

SSH是以非对称加密实现身份验证

人工进行生成一对**公钥和私钥**，**通过生成的密钥进行认证**，**公钥放在git远程仓库**，**私钥需要用户自行保管**

```shell
ssh-keygen -t ed25519 -C "your email"
```

### 远程仓库

默认git remote的名称为origin

```shell
git remote 
git remote -v
```

添加远程地址，我们也可以继续添加远程服务器

```shell
git remote add "your want name or default origin" "your remote reportory"
```

获取到origin的地址详细的命令

```shell
git remote show origin
```

在使用remote 添加完仓库之后，需要添加以下后缀才可以进行远程合并

```shell
--allow-unrelated-histories
```

### git pull

git pull 命令是以下命令的合集 git fetch + git merge 