# JS基本语法
> 参考来源：[阮一峰的JavaScript教程](https://wangdoc.com/javascript/)
## 语句
空语句：
```javascript
;;;
```

## 变量
### 概念
```javascript
var a;
```
此时a的值为undefined

### 变量提升
JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。

这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）。
```javascript
var a = 1
console.log(a)
```
等同于:
```javascript
console.log(a)
var a = 1
```

## 标识符

标识符命名规则如下：
- 第一个字符，可以是任意 Unicode 字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线（_）。但是不能是数字。
- 第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字0-9。
- 中文是合法字符

## 注释
与C++写法相同

同时兼容HTML语法，因此：
```javascript
x = 1; <!-- x = 2;
--> x = 3;
```
此时只有`x = 3`被执行了

## 区块
对于var命令来说，JavaScript 的区块不构成单独的作用域（scope）
```javascript
{
    var a = 1
}

console.log(a)
```
此时a依然有效

## 条件语句
JavaScript 提供if结构和switch结构，完成条件判断，即只有满足预设的条件，才会执行相应的语句。
### if
与C++相同，不赘述
### if else
与C++相同，不赘述
### switch
与C++相同，不赘述
### 三元运算符
```javascript
(条件) ? 表达式1 : 表达式2
```

## 循环语句
### while
与C++相同，不赘述
### for
与C++相同，不赘述
### do while
与C++相同，不赘述
### break/continue
与C++相同，不赘述
### 标签
JavaScript 语言允许，语句的前面有标签（label），相当于定位符，用于跳转到程序的任意位置，标签的格式如下。
```javascript
label:
  语句
```
标签通常与break语句和continue语句配合使用，跳出特定的循环。
```javascript
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
```
标签也可以用于跳出代码块。
```javascript
foo: {
  console.log(1);
  break foo;
  console.log('本行不会输出');
}
console.log(2);
// 1
// 2
```
continue语句也可以与标签配合使用。
```javascript
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) continue top;
      console.log('i=' + i + ', j=' + j);
    }
  }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2
```



