
var change_theme = function () {
    var theme = document.getElementById("div1");
    theme.onclick = function () {
        if(theme_flag === 0){
            theme_flag = 1;

            this.style.backgroundColor = black;
        }
        else {
            theme_flag = 0;
        }
    }

}