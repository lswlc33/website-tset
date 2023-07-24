# Javascript

## 1. 什么是Javascript, 和Java有什么关系

1. `Javascript` 是一个脚本语言
2. 蹭热度的，没关系

## 2. JS 是干啥的

HTML是主体  
CSS是修饰  
JS是操作HTML和CSS达到网页动态效果  

## 3. JS 嵌入 HTML 的方式

`Javascript`是一个事件驱动型的编程语言，一般靠事件触发

### 3.1 在事件句柄中提供JS代码

事件句柄都是以标签形式存在  
事件不发生，代码不执行

```html
<input type="reset" onclick="window.alert('重置成功！')">
```

`window.`可以省略，`;` 不一定要写

### 3.2 使用脚本块

JS的注释和Java相同  
会在网页打开时自上而下运行  
脚本块可以多个，没有位置限制  

```html
<script>
    // 这是注释
    alert('广告:XXXXX')
</script>
```

### 3.3 加载来自外部的js文件

```html
<script src="js/s1.js">
```

## 4. JS 的变量

> 省流，Java杂合Python  
> 变量是 `var`  
> 常量是 `const`

js是一种弱类型语言  
和python一样变量类型不用定义  
可以随时更改数据类型  

```js
var age = 20
age = "变量变成string了"
// 变量没有赋值时默认为undefined
``` 56789


```js
// 类似println，输出到控制台
console.log(age)
```

## 5. JS 的函数

> 省流，和Python一样

定义：

```js
function myadd (a, b) {
    alert(a + b)
}
```

调用：

```js
add(1, 2)
```

## 6. JS 的事件

### 6.1 常用事件

1. 点击事件：

    `onclick` 单击事件  
    `ondblclick` 双击事件  

2. 焦点事件

    `onblur` 失去焦点  
    `onfocus` 元素获得焦点  

3. 加载事件：

    `onload` 一张页面或一幅图像完成加载  

4. 鼠标事件：

    `onmousedown` 鼠标按钮被按下  
    `onmouseup` 鼠标按键被松开  
    `onmousemove` 鼠标被移动  
    `onmouseover` 鼠标移到某元素之上  
    `onmouseout` 鼠标从某元素移开  

5. 键盘事件：

    `onkeydown` 某个键盘按键被按下  
    `onkeyup` 某个键盘按键被松开  
    `onkeypress` 某个键盘按键被按下并松开  

6. 选择和改变

    `onchange` 域的内容被改变  
    `onselect` 文本被选中  

7. 表单事件：

    `onsubmit` 确认按钮被点击  
    `onreset` 重置按钮被点击  

## 7. 获取页面中的节点

document.getElementsByClassName()  
返回文档中所有指定类名的元素集合，作为 NodeList 对象  
document.getElementById()  
返回对拥有指定 id 的第一个对象的引用  
document.getElementsByName()  
返回带有指定名称的对象集合  
document.getElementsByTagName()  
返回带有指定标签名的对象集合。

> 除了ID其他结果都是集合！
> 可以在控制台输入指令直观展示结果

## 8. 节点内容获取与修改

1. 使用 `innerHTML` 属性  
    **设置**或**返回**表格行的**开始和结束标签之间**的东西

    ```js
    function myadd() {
        a = document.getElementById('logo')
        a.innerHTML = 1111
        b = a.innerHTML
        alert(b)
    }
    ```

    > `innerText` 与 `innerHTML`  
    > `innerText` 是内容  
    > `innerHTML` 是纯文本  

2. 使用 `value` 属性  
    **设置**或**返回**表格行的**开始和结束标签之间**的东西

> 标签有什么属性，就能 `对象.属性`，可以获取也可以赋值  

## 9. 复选框的全选和取消

懒，不写了

思路：利用`checked`获取`checkbox`选中状态并设置状态  
知识点：判断和循环遍历  

```js
if(){
    // 和Java一样
}

for(var i = 0; i < a.length; i++){
    // 和Java一样
}
```

## 10. 表单验证

1. `trim()`去除前后空白
2. 判断空值
3. 判断长度
4. 正则判断

    ```js
    var regExp = /^[0-9a-z]$/
    regExp.test(text)
    ```
