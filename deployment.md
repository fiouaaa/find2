# 部署说明

## 1.起步

### 1.1.注册小程序

首先，你需要前往[微信公众平台][1]注册小程序的账号。

### 1.2.下载微信小程序开发者工具

[官网下载][2]

### 1.3.克隆本项目

你需要克隆本项目到本地，然后通过微信开发者工具导入此项目

### 1.4.开通云开发环境

[官方文档][3]

### 1.5.更改配置文件

配置文件位于`\miniprogram\config.js`

#### 1.5.1.更改云开发ID

修改配置文件内 `ENV` 为你自己的云开发ID

## 2.云开发配置
### 2.1.创建集合

[云数据库文档][4]

你需要创建：

- users
- messages
- list

三个数据库集合即可。
（可选：导入database目录下的测试数据，由于云开发的原因图片可能无法显示）

## 3.开始使用

### 3.1.项目上线

### 3.2.推广项目


[1]: https://mp.weixin.qq.com/
[2]: https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

[3]: https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/quickstart.html#_1-%E6%96%B0%E5%BB%BA%E4%BA%91%E5%BC%80%E5%8F%91%E6%A8%A1%E6%9D%BF
[4]: https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database/getting-started.html

