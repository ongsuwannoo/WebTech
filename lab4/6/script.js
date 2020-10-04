var count = 0;
function add (t) {
    var div_group = document.createElement("DIV");
    var img = document.createElement("img");
    var src;
    var pic_banana = "http://10.0.15.12/lab4/f1.png";
    var pic_orange = "http://10.0.15.12/lab4/f2.png";
    var pic_watermelon = "http://10.0.15.12/lab4/f3.png";
    var pic_grape = "http://10.0.15.12/lab4/f4.png";

    if (t == "B")
        src = pic_banana;
    if (t == "O")
        src = pic_orange;
    if (t == "W")
        src = pic_watermelon;
    if (t == "G")
        src = pic_grape;

    img.setAttribute("src", src);
    if (count == 5) {
        document.getElementById("box").appendChild(div_group);
        count = 0;
    }
    document.getElementById("box").appendChild(img);
    count++;
}
function Reset () {
    var div = document.getElementById("box");
    while (div.hasChildNodes()) {
      div.removeChild(div.firstChild);
    }
    count = 0;
}