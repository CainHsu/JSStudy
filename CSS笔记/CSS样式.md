# CSS样式
## 内联式
### def
把css代码直接写在现有的HTML标签中

css样式代码要写在style=""双引号中，如果有多条css样式代码设置可以写在一起
### demo
```html
<p style="color:red; font-size: 12px">这里文字是红色。</p>
```

## 嵌入式
### def
将CSS代码写在style标签中

style标签位于head标签下
### demo
```html
<head>
    <style type="text/css">
        p{
            color: cyan;
            font-size: medium;        
}
</style>
</head>    
```

## 外部式
### def
(也可称为外联式)就是把css代码写一个单独的外部文件中，这个css样式文件以`.css`为扩展名，在`<head>`内（不是在`<style>`标签内）使用`<link>`标签将css样式文件链接到HTML文件内

rel="stylesheet" type="text/css" 是固定写法不可修改
### demo
```html
<head>
    <link href="base.css" rel="stylesheet" type="text/css" />
</head>    
```

## 三种方法的优先级
按照书写规则（link写在前）来：内联式 > 嵌入式 > 外部式

但是嵌入式>外部式有一个前提：嵌入式css样式的位置一定在外部式的后面。

其实总结来说，就是--就近原则（离被设置元素越近优先级别越高）。

