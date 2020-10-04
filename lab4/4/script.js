window.onload = function(){
    for (let i = 1; i <= 8; i += 1) {

        var div_group = document.createElement("DIV");
        div_group.classList.add("card-group");

        for (let j = 1; j <= 8; j += 1) {
            var bg = "warning";

            if ((j+i)%2 != 0)
                var bg = "info";

            var div_card = document.createElement("DIV");
            div_card.classList.add("bg-"+bg);

            var div_card_body = document.createElement("DIV");
            div_card_body.classList.add("card-body");

            div_card.appendChild(div_card_body);
            div_group.appendChild(div_card);
        }
        console.log(div_group);
        document.getElementById("box").appendChild(div_group);
    }
}

var r1=255,g1=0,b1=0;
var r2=255,g2=0,b2=0;

function Range1 (c) {

    var bar = "Range1";
    var bg = "bg-info";
    if (c == 2){
        bar = "Range2";
        bg = "bg-warning";
    }
    var class_name = document.getElementsByClassName(bg);
    var x = document.getElementById(bar);

    if (c == 1) {
        b1 = Number(x.value);
        r1 = 255 - Number(x.value - 255);
        g1 = Number(x.value - 510);
        for (let i = 0; i < class_name.length; i += 1)
            document.getElementsByClassName(bg)[i].style.cssText = 'background-color: rgb('+r1+','+g1+','+b1+') !important';
        console.log(1,x.value,r1,g1,b1);
    }
    if (c == 2) {
        b2 = Number(x.value);
        r2 = 255 - Number(x.value - 255);
        g2 = Number(x.value - 510);
        for (let i = 0; i < class_name.length; i += 1)
            document.getElementsByClassName(bg)[i].style.cssText = 'background-color: rgb('+r2+','+g2+','+b2+') !important';
        console.log(2,x.value,r2,g2,b2);
    }
}