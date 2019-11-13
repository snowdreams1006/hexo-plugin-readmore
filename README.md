# 欢迎访问 hexo-plugin-readmore 官网 👋

[![npm:version](https://img.shields.io/npm/v/hexo-plugin-readmore.svg)](https://www.npmjs.com/package/hexo-plugin-readmore)
[![npm:download](https://img.shields.io/npm/dt/hexo-plugin-readmore.svg)](https://www.npmjs.com/package/hexo-plugin-readmore)
[![github:documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/snowdreams1006/hexo-plugin-readmore#readme)
[![github:maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/snowdreams1006/hexo-plugin-readmore/graphs/commit-activity)
[![npm:license](https://img.shields.io/npm/l/hexo-plugin-readmore.svg)](https://github.com/snowdreams1006/hexo-plugin-readmore/blob/master/LICENSE)
[![github:snodreams1006](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![微信公众号:雪之梦技术驿站-brightgreen.svg](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

> Hexo 整合 OpenWrite 平台的 readmore 插件,实现博客的每一篇文章自动增加阅读更多效果,关注公众号后方可解锁全站文章,从而实现博客流量导流到微信公众号粉丝目的.

### 🏠 [主页](https://github.com/snowdreams1006/hexo-plugin-readmore#readme)

- Github : [https://snowdreams1006.github.io/hexo-plugin-readmore/](https://snowdreams1006.github.io/hexo-plugin-readmore/)
- Gitee : [https://snowdreams1006.gitee.io/hexo-plugin-readmore/](https://snowdreams1006.gitee.io/hexo-plugin-readmore/)
- Gitlab : [https://snowdreams1006.gitlab.io/hexo-plugin-readmore/](https://snowdreams1006.gitlab.io/hexo-plugin-readmore/)

## 效果

![readmore-use-preview.png](readmore-use-preview.png)

## 用法

### Step #1 - 更新 `_config.yml` 配置文件

在 `_config.yml` 配置文件中,配置 `readmore` 插件相关信息,详情见 [OpenWrite 微信公众号增长神器 "ReadMore" 简介](https://openwrite.cn/openwrite/openwrite-readmore/).

```yml
plugins:
  readmore:
    blogId: 15702-1569305559839-744
    name: 雪之梦技术驿站
    qrcode: https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg
    keyword: vip
```

> 注意: 前往 [OpenWrite](https://openwrite.cn/) 后台申请开通 `readmore` 功能后,**一定要替换成自己的相关配置**!

其中,配置参数含义如下: 

- `blogId` : [必选]OpenWrite 后台申请的博客唯一标识,例如:15702-1569305559839-744
- `name` : [必选]OpenWrite 后台申请的博客名称,例如:雪之梦技术驿站
- `qrcode` : [必选]OpenWrite 后台申请的微信公众号二维码,例如:https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg
- `keyword` : [必选]OpenWrite 后台申请的微信公众号后台回复关键字,例如:vip

### Step #2 - 运行 hexo 相关命令

- 运行 `npm install` 命令安装到本地项目

```bash
$ npm install hexo-plugin-readmore --save
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

不仅 [hexo-plugin-readmore](https://github.com/snowdreams1006/hexo-plugin-readmore) **官方文档**已整合 `readmore` 版权保护插件,此外还提供了示例项目,详情参考 `example` 目录.

- [官方文档](https://github.com/snowdreams1006/hexo-plugin-readmore/tree/master/docs)
- [官方示例](https://github.com/snowdreams1006/hexo-plugin-readmore/tree/master/example)

## 作者

👤 **snowdreams1006**

- Github: [@snowdreams1006](https://github.com/snowdreams1006)
- Email: [snowdreams1006@163.com](mailto:snowdreams1006@163.com)

## 🤝 贡献

如果你想贡献自己的一份力量,欢迎提交 [`Issues`](https://github.com/snowdreams1006/hexo-plugin-readmore/issues) 或者 `Pull Request` 请求!

## 支持

如果本项目对你有所帮助,欢迎 ⭐️ [hexo-plugin-readmore](https://github.com/snowdreams1006/hexo-plugin-readmore) 项目,感谢你的支持与认可!

## 📝 版权

Copyright © 2019 [snowdreams1006](https://github.com/snowdreams1006).

This project is [MIT](https://github.com/snowdreams1006/hexo-plugin-readmore/blob/master/LICENSE) licensed.