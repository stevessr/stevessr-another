---
title: "Uptime Kuma"
date: 2023-07-22T17:49:19+08:00
draft: false
author: "stevessr"
keywords: ["Uptime Kuma", "nodejs20"]
cover: ""
summary: "Uptime Kuma在node20上的一些问题的解决办法"
type: "yaml"
tags: ["Uptime Kuma","nodejs20"]
categories: ["Uptime Kuma","nodejs20"]
---

# 在Node.js 20 上uptime-kuma的一些问题的解决方案

# <font color=#FF0000>Waring</font>:仅在Nodejs 20.4.0上可行

仅在Windows端进行了测试，同时需要在server/server.js上删去版本检测相关代码

## 先发疯更新

```bash
pnpm install
pnpm update
pnpm build
```

## 然后报错

```bash
Error: Cannot find module 'knex'
```

```bash
Error: Cannot find module 'node-radius-utils'
```

## 少了两个库，直接外挂安装

```bash
npm install knex
```

```bash
npm install node-radius-utils
```

## 然后照着官方运行

node server/server.js

[![2023.7.22-1.jpg](https://img1.imgtp.com/2023/07/22/PZAdu3tW.jpg)](https://img1.imgtp.com/2023/07/22/PZAdu3tW.jpg)

完事
