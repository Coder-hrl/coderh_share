---
title: 栏目浅语
---

## Nginx

- **HTTP服务器**,Nginx是一个静态资源的服务器,当只有静态资源的时候,我们就可以使用Nginx来做服务器
- **FTP服务器**,会提供一个上传的功能,如果需要静态资源就可以从该静态服务器中获取
- **反向代理**,nginx作为代理服务器接受internet上的链接请求,将请求转发给内部网络上的服务器,并将从服务器上得到的结果返回给客户端
- **负载均衡**,将请求根据权重值转发给多台服务器进行处理,共同完成任务

### 优点

- 高并发支持 能够支持10W+的并发连接,一个master进程,两个worker进程
- 内存消耗低 nginx比apache占用的内存资源更少
- 高扩展性 低耦合,有丰富的第三方模块支持
- 高可靠性 经过10几年的各种复杂场景和各大公司的生产环境验证

nginx是市场占有率最高的Web服务器