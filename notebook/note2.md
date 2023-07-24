# HTML 笔记 —— 其二

## 8. 表单

### 8.4 下拉框显示多个条目，多选

- `size=""`显示条目数量
- `multiple`多选

```html
<select name="pro" multiple size="7">
    <option value="1">11111</option>
    <option value="2">22222</option>
    <option value="3">33333</option>
</select>
```

### 8.5 `file` 标签

用于上传文件

```html
<input type="file" name="">
```

### 8.6 `hidden` 控件

网页不会显示，但是提交时会附加

```html
<input type="hidden" name="" value="">
```

### 8.7 其他属性

- `readonly` 可见不可改 **可** 提交
- `disabled` 可见不可改 **不可** 提交
- `maxlength=""` 输入内容 的最大长度

## 9. `ID` 属性

每一个节点都有id属性

id是这个节点对象的唯一标识，或者说id是这个节点的身份证编号。

在同一个HTML文档当中id具有唯一性，不可重复

## 10. `div` 和 `span` 控件

### 10.1什么`div`

图层、盒子  
专门用来做网页布局，比`table`布局更方便、灵活  

### 10.2 `div` 和 `span` 的区别

`div` 会占用一行，`span` 不会
