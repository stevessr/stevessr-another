---
title: "Hugo提升"
date: 2023-05-27T19:05:44+08:00
author: "stevessr"
keywords: ["", ""]
cover: ""
summary: "hugo技巧"
type: "yaml"
tags: ["hugo","windows","go"]
categories: ["hugo","go"]
---

```bash
hugo mod clean
```

清理残留

```bash
hugo server
```

创建”本地高性能服务器“



目前的BUG:放在post/ 内的markdown文件会渲染至主页，而不再posts/中

反之亦然
