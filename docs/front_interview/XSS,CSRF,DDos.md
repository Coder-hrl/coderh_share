---
title: 详解什么是XSS攻击,CSRF攻击,DDos
---

[DDos原文地址](https://juejin.cn/post/6844903657792602120)

## 什么是XSS攻击?

> 全称为Cross-Site Scripting (**跨站脚本攻击**) 简称XSS,是一种**代码注入攻击**,攻击者通过在目标网站上**注入恶意的脚本,使之在用户浏览器上运行**,利用这些恶意脚本,攻击者**可获取用户的敏感信息如Cookie,SessionID**等,进而危害数据安全

如以下**常见注入方法**

- 在HTML中内嵌的文本,恶意内容以script标签形式注入,比如Vue中v-HTML
- 在标签的href,src等属性中,包含`javascript:`伪协议代码

### 存储型XSS

攻击步骤为:

1. 攻击者将恶意代码提交到目标网站的数据库中
2. 用户打开目标网站,网站服务器将恶意代码从数据库取出
3. 用户浏览器接收到响应开始解析执行,混在其中的恶意代码也被执行
4. 恶意代码窃取用户数据,并发送到攻击者的网站,或冒充用户的行为,调用目标接口执行攻击者指定的操作

可被**恶意执行,论坛发帖,商品评论,私信**等操作

他是**最危险的跨站脚本**,相比反射性XSS和DOM型具有更高到的隐蔽性,危害更大,不需要用户手动触发,**任何允许用户存储数据的web程序,都可能会存在存储型XSS漏洞,当攻击者提交一段XSS代码后,被服务器端接收并存储,**当所有浏览器访问这个页面时都会被XSS攻击

### 反射型 XSS

攻击步骤

1. 攻击者构造出特殊的url,其中包含恶意代码.
2. 用户打开具有恶意代码的URL,网站服务器将恶意代码从URL中取出,拼接在HTML中返回给浏览器
3. 用户浏览器接收到响应后解析执行,混在其中的恶意代码也会被执行
4. 恶意代码窃取用户数据并发送到攻击者的网站,或者冒充用户的行为,调用目标接口执行攻击者指定的操作

存储型XSS的**恶意代码存储在数据库中**,反射型XSS中**恶意代码存在URL中**

常见于通过URL传递参数的功能,如**网站搜索,跳转**等

需要**用户主动打开恶意的URL才会生效**,攻击者会诱导用户点击

Post内容也可以触发反射型XSS,其触发条件会比较苛刻(构造表单提交页面,引导用户点击)

### DOM型XSS

DOM型XSS攻击中,取出和执行恶意代码由浏览器端完成,属于前端JavaScript自身的安全漏洞

| 类型   | 存储区域   | 插入点         |
| ------ | ---------- | -------------- |
| 存储型 | 后端数据库 | HTML           |
| 反射型 | URL        | HTML           |
| DOM    | 后端数     | 前端JavaScript |

### 防范XSS

- httpOnly 设置HttpOnly之后,js脚本将无法读取到cookie信息
- 输入过滤,前端后端将用户输入的内容进行过滤处理,对script标签进行转义
- 转义HTML 在渲染页面时,进行转义操作,在Vue和React中都做了操作

## CSRF

> **跨站请求伪造（英语：Cross-site request forgery）**，也被称为 one-click attack 或者 session riding，通常缩写为 CSRF 或者 XSRF， 是一种挟制用户在当前已登录的 Web 应用程序上执行非本意的操作的攻击方法。如:攻**击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的**
>
> 网站二指向的是网站1,且携带了攻击操作**(修改密码和转账等操作)**
>
> 是以**自己的身份去访问攻击网站**,并执行恶意操作

### CSRF的特点

- 攻击一般发起在第三方网站，而不是被攻击的网站。被攻击的网站无法防止攻击发生。
- 攻击**利用受害者在被攻击网站的登录凭证，冒充受害者提交操作**；而不是直接窃取数据。
- 整个过程攻击者并不能获取到受害者的登录凭证，仅仅是“冒用”。
- 跨站请求可以用各种方式：图片URL、超链接、CORS、Form提交等等。部分请求方式可以直接嵌入在第三方论坛、文章中，难以进行追踪。

CSRF通常是跨域的，因为外域通常更容易被攻击者掌控。但是如果本域下有容易被利用的功能，比如**可以发图和链接的论坛和评论区，攻击可以直接在本域下进行，而且这种攻击更加危险。**

### 防御

- 验证码；强制用户必须与应用进行交互，才能完成最终请求。此种方式能很好的遏制 csrf，但是用户体验比较差。
- Referer check；请求来源限制，此种方法成本最低，但是并不能保证 100% 有效，因为服务器并不是什么时候都能取到 Referer，而且低版本的浏览器存在伪造 Referer 的风险。
- token；**token 验证的 CSRF 防御机制是公认最合适的方案。**(具体可以查看本系列前端鉴权中对token有详细描述)**若网站同时存在 XSS 漏洞的时候，这个方法也是空谈。**

## DDos

> 分布式拒绝服务(DDoS:Distributed Denial of Service)攻击指借助于客户/服务器技术，将多个计算机联合起来作为攻击平台，对一个或多个目标发动DDoS攻击，从而成倍地提高拒绝服务攻击的威力。通常，攻击者使用一个偷窃帐号将DDoS主控程序安装在一个计算机上，在一个设定的时间主控程序将与大量代理程序通讯，代理程序已经被安装在网络上的许多计算机上。代理程序收到指令时就发动攻击。利用客户/服务器技术，主控程序能在几秒钟内激活成百上千次代理程序的运行。

 DdoS的攻击方式有很多种，最基本的DoS攻击就是利用**合理的服务请求来占用过多的服务资源，从而使合法用户无法得到服务的响应。**单一的DoS攻击一般是采用一对一方式的，**当攻击目标CPU速度低、内存小或者网络带宽小等等各项指标不高的性能，它的效果是明显的。**随着计算机与网络技术的发展，计算机的处理能力迅速增长，内存大大增加，同时也出现了千兆级别的网络，这使得DoS攻击的困难程度加大了-目标对恶意攻击包的"消化能力"加强了不少。这时候分布式的**拒绝服务攻击手段（DDoS）**就应运而生了。DDoS就是利用更多的傀儡机（肉鸡）来发起进攻，以比从前更大的规模来进攻受害者。

**攻击特点**

​    分布式拒绝服务攻击采取的攻击手段就是分布式的，在攻击的模式改变了传统的点对点的攻击模式，使攻击方式出现了没有规律的情况，而且在进行攻击的时候，**通常使用的也是常见的协议和服务，这样只是从协议和服务的类型上是很难对攻击进行区分的。**在进行攻击的时候，攻击数据包都是经过伪装的，**在源IP 地址上也是进行伪造的，这样就很难对攻击进行地址的确定，在查找方面也是很难的。这样就导致了分布式拒绝服务攻击在检验方法上是很难做到的。**

**攻击特性**

​    对分布式攻击进行必要的分析，就可以得到这种攻击的特性。分布式拒绝服务在进行攻击的时候，要对攻击目标的流量地址进行集中，然后在攻击的时候不会出现拥塞控制。**在进行攻击的时候会选择使用随机的端口来进行攻击，会通过数千端口对攻击的目标发送大量的数据包，使用固定的端口进行攻击的时候，会向同一个端口发送大量的数据包。**