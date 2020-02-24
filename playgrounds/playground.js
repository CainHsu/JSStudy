console.log(4)

var a;
console.log(a)
if (a == undefined){
    console.log('a')
}

for(var _a = 0; _a < 10; ++_a){
    console.log(_a)
}

console.log(typeof (typeof 12))

console.log(Number(undefined))

console.log(3 == 2+1)

var str = '\8'
console.log(str)

var obj = {
    'f' : 'a',
    'c' : 'b',
    1:3,
    p:function (x) {
        return x**2
    }
}
console.log( Object.keys(obj)[2])

var pr = function x() {
    console.log("pr")
    pr(), x()
}

var add = new Function(
    'x',
    'y',
    'return x + y'
);

console.log(add.length)


logNum = 233333
console.log(logNum)
var logNum


(function () {
    console.log("立即执行函数")
}())
var evalPara = eval('console.log("eval试验")');
console.log( typeof console.log(typeof eval(123)))





