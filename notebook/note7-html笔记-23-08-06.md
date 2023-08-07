# html笔记——23-08-06

## 媒体查询

`@media` 常用于响应式布局，规定了在不同的条件下的样式

```css
// 格式
@media ('条件') {
'样式'
}
```

常见的格式:

- orientation: landscape
- min-width: 768px
- max-width: 768px

## 一些单位 (vh dvh svh em rem)

### vh dvh svh 
这个单位是相对于浏览器的可视显示大小

`vh` 是一般的但是在手机等移动端可能会有一些其他的浏览器控件（地址栏，快捷栏）妨碍显示，为了解决这个问题，一般使用 `dvh` 或 `svh` ,前者是动态获取大小（如手机地址栏滑动时会隐藏）和最小显示大小

### em rem
em和rem都是相对的，em相对于父元素字体大小，rem相对于根元素字体大小

## Overflow

这个属性用于决定当元素超出父元素显示范围时候的显示模式

几种常用属性:
- overflow: visible;

    直接超出去！

- overflow: hidden;

    被挡住看不到了！

- overflow: clip;

    切掉了不要了！

- overflow: scroll;

    横竖都能滚！

- overflow: auto;

    怎么滚？看着办！



## getElementByxx 和 querySelector

querySelector 相较于前者可以使用css的选择器来选择元素，可能更灵活？

下面是gpt写的:


>1. `getElementById`：根据元素的 `id` 属性获取单个元素。返回匹配的第一个元素，因为 `id` 在>文档中应该是唯一的。
>```javascript
>var element = document.getElementById("myElement");
>```
>
>1. `getElementsByClassName`：根据元素的类名获取一组元素。返回一个类数组对象>（HTMLCollection 或者 NodeList），包含所有具有指定类名的元素。
>```javascript
>var elements = document.getElementsByClassName("myClass");
>```
>
>1. `getElementsByTagName`：根据元素的标签名获取一组元素。返回一个类数组对象>（HTMLCollection 或者 NodeList），包含所有指定标签名的元素。
>```javascript
>var elements = document.getElementsByTagName("div");
>```
>
>1. `querySelector`：根据 CSS 选择器获取单个元素。返回匹配的第一个元素。
>```javascript
>var element = document.querySelector("#myElement");
>```
>
>1. `querySelectorAll`：根据 CSS 选择器获取一组元素。返回一个静态的 NodeList，包含所有匹>配选择器的元素。
>```javascript
>var elements = document.querySelectorAll(".myClass");
>```
>
>需要注意的是，`getElementByxx` 系列方法返回的是类数组对象，而 `querySelector` 和 >`querySelectorAll` 返回的是 NodeList。此外，`querySelector` 和 `querySelectorAll` >支持更复杂的 CSS 选择器，而 `getElementByxx` 系列方法只能使用 id、类名和标签名进行


## 常见transform 动画

写动画之前要加`transition: 0.3s;`，不然没动画

1. 平移 `translate()` ：`translateX()` `translateY()`


2. 缩放 `scale()` ：`scaleX()` `scaleY()`(单横竖缩放)


3. 旋转 `rotate()` ：


4. 倾斜 `skew()` ：`skewX()` `skewY()`


5. 3D转换（3D Transform）： `translate3d()`、`scale3d()`、`rotate3d()` 



## 常见伪类


状态类
- :hover 

    鼠标悬停
- :active 

    鼠标点击
- :focus 

    是焦点
- :checked 

    复选框选上了

逻辑类
- :is() 

    相当于小括号
- :not() 

    猜猜谁没有收到邀请？是- :not()


伪元素来凑个热闹
- ::after
- ::before
  
    在控件前后追加内容，同时分开样式

选择元素的:

1. `:first-child`：选择父元素中的第一个子元素。  
2. `:last-child`：选择父元素中的最后一个子元素。  
3. `:nth-child(n)`：选择父元素中的第n个子元素，其中n是一个数字。  
4. `:nth-last-child(n)`：选择父元素中的倒数第n个子元素，其中n是一个数字。  


## css 选择器进阶

**属性选择器**：基于元素的属性值进行选择。
   - **[attribute]**：选择具有指定属性的元素。
   - **[attribute=value]**：选择属性值与指定值匹配的元素。
   - **[attribute^=value]**：选择属性值以指定值开头的元素。

**符号 `>`**:

在 CSS 选择器中，符号 > 表示子元素选择器，用于选择直接位于指定元素内的子元素。它的语法是通过将两个选择器用 > 分隔开来。