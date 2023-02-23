---
title: 实现Promise
---

1. 首先,状态一旦发生改变,后续再也不会发生改变
2. 分为三个状态,pending,fulfiled,rejected
3. fulfiled 状态下由 resolve 获取,rejected 由 reject 获取
4. 会返回一个新的 promise
