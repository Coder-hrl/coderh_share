## 为什么使用数据库

将数据可以存在掉电可使用的

长存储  多类型  

数据的持久化管理，数据库 对数据进行持久化的管理

#### 数据库（database）

一个文件系统，里面存储了一系列有组织的数据

#### 数据管理系统（database managment system）

一般会在数据库中创建多个表，以保存程序中实体用户的数据

#### SQl 结构化查询语言 (structured query language)

专门用来与数据库通信的语言

### 常见的dbms的数据库管理系统排名

oracle mysql  sql server DB2  **只是一个dbms工具**

**Oracle和Mysql的份额都是极其相似的**

Relational Database managment system 关系型数据管理系统

### Mysql是一个开放源代码的关系型数据管理系统

将数据保存在不同的表中，而不是放到一个大仓库中，可以更方便的进行管理数据

Oracle更适合大型跨国企业的使用，对费用不敏感，但是对性能要求和安全性有很高的要求

Mysql因为体积小，速度快，拥有成本低，可处理千万条数据的大型数据库，开放源码，使很多互联网公司和企业选择mysql作为网站数据库

### relational database managment system和非关系型数据库

#### 关系型数据库

是把复杂的数据结构，归档为简单的二元关系方式，如表格的方式，行式数据库

- 关系型数据库以行和列作为标准，来安排处理数据，类似与表格的形式，一组表组成了一个库（database）
- 标语表之间的数据是有关系的，使用关系模型来表示

便于复杂查询和事务支持

可以使用sql语句，将多个表的数据进行非常复杂的数据查询

#### 非关系型数据库

传统数据库的阉割版本，获取更高的性能，减少不常用的功能

##### 键值型的数据库

通过key-value的方式来存储数据，其中key和value都是简单的对象，也可以复杂的对象，key是唯一的标识符，查找速度很快  ridis

##### 文档型数据库

##### 搜索引擎数据库

##### 列式数据库

行式会将所有的数据全部拿出来，然后再根据情况再去筛选

但是列式数据库会直接根据情况去筛选整个列

性能更高  安全性更高 成本更低 

### 关系型数据库设计规则

关系型数据库的典型数据结构是数据表，都是结构化的

将数据放入表中 表放入库中

#### 表 记录 字段

`实体集`  `属性`  `联系集`

类相当于属性，实例相当于一个记录 实体集，实例中的属性相当于一个字段

#### 表与表之间的关联关系

表与表之间是有关系的，分为 1对1  1对多  多对1  多对多 四种关系

##### 一对一关联

学生表  学号 姓名 手机号 班级 系别

分为基础表（常用信息）和档案表（不常用信息）

这些表里面的数据是一个与一个进行关联的，就是将一个表的数据，拆分成两个表的数据

两种建表原则

- 外键唯一
- 外键是逐渐

#### 一对多关系

客户表和订单表，分类表和商品表，部门表和员工表

会有一个主表和副表

#### 多对多关系

- 学生信息表 学生个人信息

- 课程信息表  课程信息  课程信息为主表，副标为选课

- 选课信息表  包含了 课程的主要和详情信息