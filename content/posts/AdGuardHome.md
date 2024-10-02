---
title: "AdGuard Home"
date: 2023-07-14T18:52:56+08:00
draft: flase
author: "stevessr"
keywords: ["", ""]
cover: ""
summary: ""
type: "yaml"
tags: [replit,白嫖,AdGuard]
categories: [计算机,白嫖]
summary: "部署AgGuard"
markup.goldmark.renderer.unsafe: true
---

# 在Replit上部署AdGuard Home

1:直接fork（分叉）

[点我进入fork地址](https://replit.com/@alis-st/adguard-oneclick)

<div class="box">
        <iframe 
            width="200%" 
            height="2500%" 
            scrolling="yes"
            src="https://replit.com/@alis-st/adguard-oneclick" 
            frameborder="0"
            >
        </iframe>
    </div><style>.box {position: relative;overflow: hidden;width: 600px;height: 420px;margin: 0 auto;border: 1px solid black;}iframe {position: absolute;transform: scale(0.4);left: -480px;top: -310px;}</style>



![image-20230714185958264](https://img1.imgtp.com/2023/07/14/TWeh7JcW.jpg)

端口映射如图

用之前清除name 和 password

输入这一串命令，计算账户密码

```
htpasswd -B -n -b <USERNAME> <PASSWORD>
```

- ![2023-7-14-2.jpg](https://img1.imgtp.com/2023/07/14/Gi5tGBRg.jpg)

填入AdGuardHome.yaml对应的name和password中，然后点击run开始使用

