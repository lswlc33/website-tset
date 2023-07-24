# CSS j

## 1.什么是CSS？

CSS（层叠样式表）是一种样式表语言，专门用来修饰HTML的

## 2. HTML 中嵌入 CSS 的方式

### 2.1 内联定义

格式:

`<标签 style="样式名: 样式; 样式名: 样式;">hello</标签>`

```html
<div style="color: blueviolet;">hello</div>
```

### 2.2 样式块定义

1. 常见的选择元素的方式:

    - ID选择器

    ```css
    #mydiv{
        width: 100px;
        height: 100px;
    }
    ```

    - 标签选择器

    ```css
    input {
        /* 作用域当前页面中所有的XXX元素 */
        width: 100px;
        height: 100px;
    }
    ```

    - 类选择器

    ```html
    <style>
        .student {
            width: 100px;
            height: 100px;
        }
    </style>
    <div class="student">hello</div>
    ```

2. 优先级

    ID选择器 > 类选择器 > 标签选择器

## 2.3 外联定义

```html
<link rel="stylesheet" href="css/my.css">
```

## 3. 常见的CSS样式

> 以下内容不如看书  
> [这是书📖](http://css.doyoe.com/)

### 3.1 `display`

元素显示方式

- `inline-block`  元素之后**不添加**换行符
- `block` 元素之后**添加**换行符
- `none`  隐藏

### 3.2 `text-decoration`

文本修饰

- `underline` 下划线
- `none` 无

### 3.3 `list-style-type`

列表前缀风格

- `none` 无
- `square`
- `disc`
- `circle`

### 3.4 `:hover`

鼠标悬停

```css
a:hover{
    color: burlywood;
}
```

### 3.5 内补丁、外补丁

1. 外补丁 `margin`

    元素外部边距

    - margin-top
    - margin-bottom
    - margin-left
    - margin-right

1. 内补丁 `padding`

    元素内部边距

    - padding-top
    - padding-bottom
    - padding-right
    - padding-left

### 3.6 定位

`float`  
当前元素在父元素中的浮动效果

`position`  

- `static`
- `relative` 相对定位
- `absolute` 绝对定位
- `fixed`
- `sticky`
