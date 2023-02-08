---
title: Html编写规范
---

# Html 编写规范

### 在编写类名时，使用-作为连接符，同时应以父类名为前缀

推荐使用

```html
<div class="box">
	<div class="box-item"></div>
</div>
```

不推荐

```html
<div class="box">
	<div class="item"></div>
</div>
```

### 不可使用行级元素包含块级元素，应使用行级元素包含行级元素

推荐使用

```html
<span>
	<span></span>
</span>
```

不推荐使用

```html
<span>
	<div></div>
</span>
```
