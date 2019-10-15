---
title: 首页
date: 2019-10-11 11:47:52
tags:
---

# 欢迎访问 hexo-plugin-gitalk 官网 👋

[![npm:version](https://img.shields.io/npm/v/hexo-plugin-gitalk.svg)](https://www.npmjs.com/package/hexo-plugin-gitalk)
[![npm:download](https://img.shields.io/npm/dt/hexo-plugin-gitalk.svg)](https://www.npmjs.com/package/hexo-plugin-gitalk)
[![github:documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/snowdreams1006/hexo-plugin-gitalk#readme)
[![github:maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/snowdreams1006/hexo-plugin-gitalk/graphs/commit-activity)
[![npm:license](https://img.shields.io/npm/l/hexo-plugin-gitalk.svg)](https://github.com/snowdreams1006/hexo-plugin-gitalk/blob/master/LICENSE)
[![github:snodreams1006](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![微信公众号:雪之梦技术驿站-brightgreen.svg](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

> Hexo 整合 gitalk 插件实现评论功能

### 🏠 [主页](https://github.com/snowdreams1006/hexo-plugin-gitalk#readme)

## 效果

![gitalk-use-preview.png](gitalk-use-preview.png)

## 用法

### Step #1 - 更新 `_config.yml` 配置文件

在 `_config.yml` 配置文件中,配置 `gitalk` 插件相关信息,详情见 [gitalk](https://github.com/gitalk/gitalk).

```yml
plugins:
  gitalk:
    clientID: GitHub Application Client ID
    clientSecret: GitHub Application Client Secret
    repo: GitHub repo
    owner: GitHub repo owner
    admin: 
      - GitHub repo owner and collaborators, only these guys can initialize github issues
    distractionFreeMode: false
```

> 注意: 前往 [gitalk](https://github.com/gitalk/gitalk) 申请开通 `gitalk` 功能后,**一定要替换成自己的相关配置**!

其中,配置参数含义如下: 

- **clientID** `String` 

  **必须**. GitHub Application Client ID.

- **clientSecret** `String` 

  **必须**. GitHub Application Client Secret.

- **repo** `String` 

  **必须**. GitHub repository.

- **owner** `String` 

  **必须**. GitHub repository 所有者，可以是个人或者组织。

- **admin** `Array` 

  **必须**. GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。

- **id** `String` 
  
  Default: `location.href`.

  页面的唯一标识。长度必须小于50。
  
- **number** `Number` 
  
  Default: `-1`.

  页面的 issue ID 标识，若未定义`number`属性则会使用`id`进行定位。

- **labels** `Array` 
  
  Default: `['Gitalk']`.

  GitHub issue 的标签。

- **title** `String` 
  
  Default: `document.title`.

  GitHub issue 的标题。

- **body** `String` 
  
  Default: `location.href + header.meta[description]`.

  GitHub issue 的内容。

- **language** `String` 
  
  Default: `navigator.language || navigator.userLanguage`.

  设置语言，支持 [en, zh-CN, zh-TW]。

- **perPage** `Number` 
  
  Default: `10`.

  每次加载的数据大小，最多 100。

- **distractionFreeMode** `Boolean` 
  
  Default: false。

  类似Facebook评论框的全屏遮罩效果.

- **pagerDirection** `String`

  Default: 'last'

  评论排序方式， `last`为按评论创建时间倒叙，`first`为按创建时间正序。

- **createIssueManually** `Boolean` 
  
  Default: `false`.

  如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 `true`，则显示一个初始化页面，创建 issue 需要点击 `init` 按钮。

- **proxy** `String` 

  Default: `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token`.

   GitHub oauth 请求到反向代理，为了支持 CORS。 [为什么要这样?](https://github.com/isaacs/github/issues/330)

- **flipMoveOptions** `Object` 
  
  Default:
  ```js
    {
      staggerDelayBy: 150,
      appearAnimation: 'accordionVertical',
      enterAnimation: 'accordionVertical',
      leaveAnimation: 'accordionVertical',
    }
  ```

  评论列表的动画。 [参考](https://github.com/joshwcomeau/react-flip-move/blob/master/documentation/enter_leave_animations.md)

- **enableHotKey** `Boolean` 
  
  Default: `true`.

  启用快捷键(cmd|ctrl + enter) 提交评论.

### Step #2 - 运行 hexo 相关命令

- 运行 `npm install` 命令安装到本地项目

```bash
$ npm install hexo-plugin-gitalk --save
```

- 运行 `hexo generate` 命令构建本地项目或者 `hexo server` 启动本地服务.

```bash
$ hexo generate
```

或者

```bash
$ hexo server
```

## 示例

不仅 [hexo-plugin-gitalk](https://github.com/snowdreams1006/hexo-plugin-gitalk) **官方文档**已整合 `gitalk` 版权保护插件,此外还提供了示例项目,详情参考 `example` 目录.

- [官方文档](https://github.com/snowdreams1006/hexo-plugin-gitalk/tree/master/docs)
- [官方示例](https://github.com/snowdreams1006/hexo-plugin-gitalk/tree/master/example)

## 作者

👤 **snowdreams1006**

- Github: [@snowdreams1006](https://github.com/snowdreams1006)
- Email: [snowdreams1006@163.com](mailto:snowdreams1006@163.com)

## 🤝 贡献

如果你想贡献自己的一份力量,欢迎提交 [`Issues`](https://github.com/snowdreams1006/hexo-plugin-gitalk/issues) 或者 `Pull Request` 请求!

## 支持

如果本项目对你有所帮助,欢迎 ⭐️ [hexo-plugin-gitalk](https://github.com/snowdreams1006/hexo-plugin-gitalk) 项目,感谢你的支持与认可!

## 📝 版权

Copyright © 2019 [snowdreams1006](https://github.com/snowdreams1006).

This project is [MIT](https://github.com/snowdreams1006/hexo-plugin-gitalk/blob/master/LICENSE) licensed.