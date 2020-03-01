var getName = function () {
    var name = document.getElementById("username").innerText
    alert(name)
}

var changeImg = function () {
    var img = document.getElementById("imgShow")
    img.src = '../WebSiteDemo/image/wumingnvlang.jpg'
}

var changeSize = function () {
    var img = document.getElementById("imgShow")

    img.style.width = new String(img.style.width+=10)+'px'
    img.style.height = new String(img.style.height+=10)+'px'
}