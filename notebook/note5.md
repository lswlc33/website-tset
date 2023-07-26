# html笔记——23-07-25

入门了三件套很激动，连夜模仿了一个UI出来，下面是一些笔记  
> 模仿的是 [ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)  

## 随机数 `radomint`

js 只有 `radom` 函数生成`0`到`1`的随机数，所以 `radomint` 要自己写  

```js
// 前闭后开
function randomint(a, b) {
    num = Math.floor(Math.random() * (b - a)) + a;
    return num;
}
// 前闭后闭（看看就好了）
function randomint(a, b) {
    num = Math.floor(Math.random() * (b - a + 1)) + a;
    return num;
}
```

## 移动端适配

必写的好吧

先是显示大小

```html
<meta name="viewport" content="initial-scale=0.75,user-scalable=no">
```

再是布局调整，看看你是不是手机

```js
function isMobileDevice() {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
```

看完了，是手机，那就开刀，该显示显示，该隐藏隐藏

```js
window.onload = function () {
    if (isMobileDevice()) {
        // 当前浏览器是手机浏览器
    } else {
        // 当前浏览器不是手机浏览器
    }
}
```

## 垂直布局和水平布局

外层写

```css
display: flex;
flex-direction: column; // 垂直布局
flex-direction: row;    // 水平布局

// 扩展内容
flex-wrap: nowrap;  // （默认）：不换行
flex-wrap: wrap;    //  换行

justify-content: center; // 对齐方式
align-items: center;    // 也是，但不一样，具体看文档
```

内层写

```css
flex: 1;
flex: 0;
```

`flex` 属性是 `flex-grow` , `flex-shrink` 和 `flex-basis`的简写，默认值为`0` `1` `auto`。后两个属性可选。  
（写第一个就行了,因为 `flex` 比 `flex-grow` 短）

## `body` 的默认 `margin`

body` 默认居然是有 `margin` 的，看他不爽一定要删掉  

```css
body {
    margin: 0px;
}
```

## 全局样式

`*` 是可以匹配所有元素的，可以一键设置初始字体样式或者是其他样式

```css
* {
    text-align: center;
}
```

## 颜色的表示

```css
// 第一种 写英文
white
// 第二种 #开头的16进制表示
#ooff66 
// 第三种 rgb颜色表示
rgb(246, 246, 246)
// 第四种 在上面的基础上加上 a 
rgba(0, 0, 0, 0.1)
```

## `box-shadow` 阴影

`box-shadow` 属性用于在元素的框架上添加阴影效果。你可以在同一个元素上设置多个阴影效果，并用逗号将他们分隔开。该属性可设置的值包括`阴影的 X 轴偏移量`、`Y 轴偏移量`、`模糊半径`、`扩散半径`和`颜色`。  
如果元素同时设置了 `border-radius` 属性，那么阴影也会有圆角效果  
> 在线阴影生成器，太好用啦 [看看](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator)

几个参数看看

- inset

    阴影在里面还是外面
- position x
- position y

    这是相对主元素的位置
- blur

    模糊程度
- spread

    扩散度（大小）

例子

```css
box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
```

**这个属性文字也有，是专门的 `text-transform`**

## 单位的意思和使用

在CSS的计量单位体系中，可以分为`相对长度单位`和`绝对长度单位`：

- 相对长度单位包括：em、ex、ch、rem、vw、vh、vmin、vmax、%
- 绝对长度单位包括：cm、mm、in、px、pt、pt、pc

1. px：就是像素

2. vh、vw

    > 在移动端体验极差啊哈，不要使用啊哈

    view height 窗口高度

    这里的窗口分成几种情况：

    - 在桌面端指的是浏览器的可视区域
    - 在移动端指的就是布局视口

3. 百分比

    相对于父元素的百分比

4. 不同单位的计算
    > 介绍
    > calc() 此 CSS 函数允许在声明 CSS 属性值时执行一些计算。它可以用在如下场合：\<length\>、\<frequency\>, \<angle\>、\<time\>、\<percentage\>、\<number>、或 \<integer\>。

    例子：

    ```css
    width: calc(100% - 80px);
    ```

## 动画效果

```css
transition: 样式名称 持续时间 曲率;
```

写到这差不多了
