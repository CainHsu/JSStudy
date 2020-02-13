# null, undefined 和布尔值

## null 和 undefined
### 概述
两者语法效果几乎没有区别
```javascript
if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true
```
null转换为数字时变为0, undefined转换为数字时转化为NaN
```javascript
Number(null) // 0
5 + null // 5

Number(undefined) // NaN
5 + undefined // NaN
```

### 用法和含义
null表示空值，即该处的值现在为空。调用函数时，某个参数未设置任何值，这时就可以传入null，表示该参数为空。比如，某个函数接受引擎抛出的错误作为参数，如果运行过程中未出错，那么这个参数就会传入null，表示未发生错误。

undefined表示“未定义”，下面是返回undefined的典型场景。

```javascript
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```

## 布尔值
这六个是false：
- undefined
- null
- false
- 0
- NaN
- ""或''（空字符串）

注意，空数组`[]`和空对象`{}`的值都是true


