# pandas 库初识

## 安装导入

pip安装

```bash
pip install pandas
```

导入

```python
import pandas as pd
```

## Series

就是普通的一维数组或者普通字典来创建

```py
data = ['你好','他好','晚上好']
index = [1,2,3]

dict = {1:'你好', 2:'他好', 3:'晚上好'}

myvar = pd.Series(data, index)
myvar = pd.Series(dict)
```

结果都是

```py
1     你好
2     他好
3    晚上好
dtype: object
```

如果传入的是字典，还可以有取出操作（使用key取出而）

## DataFrame

现在是个二维的数组作为参数了  
和上面的区别  

```py
// Series
1     你好
2     他好
3    晚上好

// DataFrame
1     你好     你好      你好
2     他好     他好      他好
3    晚上好   晚上好     晚上好
```

创建是三种方式  

```py
// 分别写行和列
data = [['xiaoming', 16], ['xiaohong', 18], ['xhaibai', 12]]
columns = ['name', 'Age']

// 一列一列写（大括号）
dict_1 = {
    'name': ['xiaoming', 'xiaohong', 'xiaobai'],
    'age': [16, 19, 12]
}
// 一行一行写 （方括号）
dict_2 = [
    {'name': 'xiaoming', 'age': 16},
    {'name': 'xiaohong', 'age': 19},
    {'name': 'xiaobai', 'age': 12},
]

myvar = pd.DataFrame(data, columns=columns)
myvar = pd.DataFrame(dict_1)
myvar = pd.DataFrame(dict_2)
```

