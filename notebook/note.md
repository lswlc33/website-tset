# HTML 笔记 —— 其一

## 1.1 基本结构

```html
<!DOCTYPE html>
<html>

    <head>
        <title>title</title>
    </head>

    <body></body>
</html>
```

## 1.2 基本标签

```html
<p>hello</p>     
# 段落标记
<h1>hello<h1/>   
# 标题字
<br>        
# 换行
<hr color="red">
# 水平线
<pre>
    for i in range(10):
        print(i)
</pre>
# 预留格式

<b>hello</b>
# 粗体字

<i>hello</i>
# 斜体字

<ins>hello</ins>
# 插入字（下划线）

<del>hello</del>
# 删除字（删除线）

<sup>hello</sup> 
# 右上角加字（上标）

<sub>hello</sub>
# 右下角加字（下标）

<font size="10" color="blue">hello</font>
# font标签
```

## 2. 实体符号

```html
&nbsp;
# 空格符

< &lt;  > &gt;
# 大于号、小于号
```

## 3. 表格

### 3.1 基本表格

```html
<table width="200px" height="100px" border="2px">
    # 长宽、居中
    <tr align="center">
        <td>111</td>
        <td>444</td>
    </tr>
    <tr>
        <td align="center">222</td>
        <td>555</td>
    </tr>
    <tr>
        <td>333</td>
        <td>666</td>
    </tr>
</table>
```

### 3.2 表格合并

上下合并 `<rowspan="2">`

```html
<table width="200px" height="100px" border="2px">
    <tr align="center">
        <td>111</td>
        <td rowspan="2">444</td>
    </tr>
    <tr align="center">
        <td>222</td>
    </tr>
</table>
```

左右并列 `<colspan="2">`

```html
<table width="200px" height="100px" border="2px">
    <tr align="center">
        <td colspan="2">111</td>
    </tr>
    <tr align="center">
        <td>222</td>
        <td>333</td>
    </tr>
</table>
```

### 3.3 `<th>` 标签

居中并加粗 `<th>`

```html
    <table width="200px" height="100px" border="2px">
        <tr align="center">
            <th>222</th>
            <th>333</th>
        </tr>
        <tr align="center">
            <td>222</td>
            <td>333</td>
        </tr>
    </table>
```

### 3.4 表格三部分

表头 `<thead>`、表体 `<tbody>`、表脚 `<tfoot>`  
不显示在网页  

```html
 <table width="200px" height="100px" border="2px">
        <thead>
            <tr>
                <th>222</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
            <tr>
                <td>222</td>
            </tr>
        <tfoot>
            <tr>
                <td>222</td>
            </tr>
        </tfoot>
    </table>
```

## 4. 背景颜色和背景图片

背景颜色

```html
<body bgcolor="red">
<!--code-->
</body>
```

背景图片

```html
<body background="pic.jpg">
<!--code-->
</body>
```

## 5. 图片

浮动于浏览器窗口的图片元素  
`width=""` 设置宽度,同时高度会等比例缩放  
`title=""` 鼠标悬停文字  
`alt=""` 图片不存在信息  

```html
<img src="pic.jpg" 
     width="100px" 
     title="is a pic"
     alt="no pic found">
```

## 6. 超链接

### 6.1 `href=""` 设置打开什么

```html
<!--绝对路径-->
<a href="https://www.baidu.com">baidu</a>
<!--相对路径-->
<a href="more">baidu</a>
```

### 6.2 `target=""` 设置在哪打开

默认值是 `_self`

- `_blank` 新窗口显示
- `_self` 当前窗口
- `_parent` 父窗口
- `_top` 顶级窗口（最外层）

> 内嵌窗口  
> `<iframe src=""></iframe>`

## 7. 列表

### 7.1 有序列表

`type=""` 序号样式

- `1`   默认，数字编号
- `A`   大写字母
- `a`   小写字母
- `I`   大写罗马编号
- `i`   小写罗马编号

```html
<ol>
    <li>chiana</li>
    <ol>
        <li>11:20</li>
    </ol>
    <li>USA</li>
</ol>
```

### 7.1 无序列表

`type=""` 序号样式

- `circle`   圆圈
- `square`   方块
- `disc`     实心圆

```HTML
<ul>
    <li>china</li>
    <li>USA</li>
</ul>
```

无序嵌套无序列表

```html
<ul>
    <li>china</li>
    <ul>
        <li>shanghai</li>
        <li>beijing</li>
    </ul>
    <li>USA</li>
</ul>
```

## 8. 表单

### 8.1 什么是表单，有什么用 ?

`表单`可以用来收集用户的数据，提交表单时，可以向服务器发送请求，并且还可以携带用户填写的数据

### 8.2 基本表单

```html
<form action="" method=""></form>
```

`action` 属性用来指定请求路径，也就是说数据提交的时候，提交给谁  
`action` 属性和超链接的 `href` 属性相同，都是提供“**请求路径**”的

`method` 属性用来指定表单提交的方式/方法，常见的包括两种:

- get方式提交 (默认)
- post方式提交

### 8.2 提交按钮

```html
<input type="submit">
```

是个按钮，发送请求并提交数据

- `value` 设置按钮文本

### 8.3 `input` 标签

1. `type` 属性可选项:
   - `text` 文本框
   - `password` 密码框
   - `radio` 单选框
   - `checkbox` 多选框
2. `name` 属性
    - 没有 `name` 属性，数据不会提交  
    - 会在提交时添加 `name` 和 `返回值` 到提交地址
3. `value` 属性
    - `text` 和 `password` 等由用户输入`value`的不用写
    - 其他需要指定各个选项的`value`

### 8.4 其他标签

单选框

```html
<input type="radio" name="same" value="0" checked>
<input type="radio" name="same" value="1">
<!-- 如果选项是一起的 `name` 属性要相同 -->
<!-- `checked` 是默认选项 -->
```

下拉列表

```html
<select name="" id="">
    <option value="0"></option>
    <option value="1"></option>
</select>
<!-- `selected` 是默认选项 -->
```

多选框  

```html
<input type="checkbox" name="same" value="0">
<input type="checkbox" name="same" value="1">
<!-- 如果选项是一起的 `name` 属性要相同 -->
<!-- `checked` 是默认选项 -->
```

文本域 （多行文本框）

```html
<textarea name="" cols="30" rows="10"></textarea>
```

重置按钮  
使表单回到初始状态

```html
<input type="reset" value="reset">
```
