var flag = true;

// 鼠标放在（onmouseover）id为menu1处div时执行display操作
function show_menu() {
    var menu1 = document.getElementById("menu1");
    if(flag){
        menu1.style.display = "block";
        flag = false;
    }
    else{
        menu1.style.display = "none";
        flag = true;
    }
}


// 鼠标移开时的回收效果
function show_menu1() {
    var menu1 = document.getElementById("menu1");
    menu1.style.display = "none";
    flag = true;
}