# 网址导航

## 目录文件说明

```
 |
 |--- css\     样式
 |--- data\     网站设置与数据
    |--- config.js         网站设置
    |--- website.json      导航数据
 |--- img\          图片
 |--- js\           js文件
 |--- index.html   首页
 |--- README.md    说明文档
```

## 原理说明

通过 `fetch` 读取 `config.js` 的 `nav_data_source` 值获取用户提供的导航数据来生成导航页面。  
`nav_data_source` 值可以是本地文件，也可以是网络文件。  
只需要修改 `nav_data_source` 值，或者修改 `website.json` 文件内容，刷新网页即可实现更新。

## 功能说明

-   导航数据支持用户自定义
-   部分网页自定义可以通过 `config.js` 来快速修改
-   支持首次公告（广告）展示
-   点击侧栏项目快速导航到目标位置
