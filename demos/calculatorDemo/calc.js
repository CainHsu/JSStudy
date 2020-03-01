

var theme_flag = 0;

var init = function () {
    var num = document.getElementById("num");
    num.value = '0';
    num.disabled = 'disabled';
    var oButton = document.getElementsByTagName("input");  // 获取所有input组成的对象数组

    var btn_num1; // 第一个操作数
    var btn_num2; // 第二个操作数，供连减与连除使用
    var flag;
    var operated = 0; // 是否已经进行过一次运算（按过等号），进行过输入数字时直接输入新数字

    for(var i = 0; i < oButton.length; ++i){
        oButton[i].onclick = function () { // 单击按键触发匿名函数，即在函数加载的时候就给所有的按键提供了事件
            if(isNumber(this.value)){  // this指的是obj.onclick这个事件
                // num.value =  (num.value + this.value)*1; // 使用数字数据类型的特性来去掉最前面的0
                if(operated === 1) { // 进行过运算则直接输入新数字
                    num.value = '0';
                    operated = 0;
                }
                if(isNull(num.value))
                    num.value = this.value;
                else
                    num.value += this.value;
            }
            else {
                var btn_value = this.value;

                switch (btn_value) {
                    case '+':
                        btn_num1 = num.value*1; // 转化为数字类型
                        num.value = 0;
                        flag = '+';
                        break;
                    case '-':
                        btn_num1 = num.value*1; // 转化为数字类型
                        num.value = 0;
                        flag = '-';
                        break;
                    case '*':
                        btn_num1 = num.value*1; // 转化为数字类型
                        num.value = 0;
                        flag = '*';
                        break;
                    case '/':
                        btn_num1 = num.value*1; // 转化为数字类型
                        num.value = 0;
                        flag = '/';
                        break;
                    case '.':
                        dec(num);
                        break;
                    case '<-':
                        num.value = backspace(num.value);
                        break;
                    case 'C':
                        num.value = 0;
                        break;
                    case '+/-':
                        num.value = num.value*(-1);
                        break;
                    case '=':
                        switch (flag) {
                            case'+':
                                if(operated === 1) {
                                    num.value = num.value*1 + btn_num2;
                                }
                                else{
                                    btn_num2 = num.value*1;
                                    num.value = btn_num1 + btn_num2;
                                    operated = 1;
                                }
                                //flag = undefined; // 注释掉可以实现多次进行同一种运算
                                break;
                            case'-':
                                if(operated === 1) {
                                    num.value = num.value*1 - btn_num2;
                                }
                                else{
                                    btn_num2 = num.value*1;
                                    num.value = btn_num1 - btn_num2;
                                    operated = 1;
                                }
                                //flag = undefined;
                                break;
                            case'*':
                                if(operated === 1) {
                                    num.value = num.value*1 * btn_num2;
                                }
                                else{
                                    btn_num2 = num.value*1;
                                    num.value = btn_num1 * btn_num2;
                                    operated = 1;
                                }
                                // flag = undefined;
                                break;
                            case'/':
                                if(operated === 1) {
                                    num.value = num.value*1 / btn_num2;
                                }
                                else{
                                    if(num.value*1 === 0){
                                        alert("除数不能为零！");
                                    }
                                    btn_num2 = num.value*1;
                                    num.value = btn_num1 / btn_num2;
                                    operated = 1;
                                }


                                // flag = undefined;
                                break;
                            default:
                                break;
                        }
                        operated = 1;
                        break;
                }
            }
        }
    }
};

// 退位键
var backspace = function (n) {
    // if(!isNull(n) && n.length != 1)
    //     n = n.substr(0, n.length-1);
    // else
    //     n = 0;
    // return n;
    n = n.substr(0, n.length-1);
    if(isNull(n)) // 若在消去数字后剩下的字符串为空
        n = 0;
    return n;
};


// 判断是否有小数点且添加
var dec = function (obj) {
    if(obj.value.indexOf('.') == -1)
        obj.value += '.';
};


// 判断输入是否为数字
var isNumber = function (n) {
    // if(isNaN(n) == false){
    //     return true; // n是数字
    // }
    // else
    //     return false; // n不是数字
    return !isNaN(n);
};

// 判断输入是否为0或空
var isNull = function (n) {
    if(n == '0' || n.length == 0)
        return true;
    else
        return false;
};









