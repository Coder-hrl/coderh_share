---
title: javaScript其他知识补充
---

#### 为什么 0.1 + 0.2 不等于 0.3

因为编程底层是使用浮点数进行计算的,使用的是 IEE754 标准，我们可以使用第三方库来修正这个错误，如`Math.js`
