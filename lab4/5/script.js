var font_size = 10;
var num_count = 0;
var lis_color = ["#000000", "#e6194B", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#42d4f4", "#f032e6", "#bfef45", "#fabebe", "#469990", "#e6beff", "#9A6324", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000075", "#a9a9a9"]
function changeText(t) {
    var p = document.getElementById("pid");
    if (t == 'F+' && font_size < 150){
        font_size += 4;
        p.style.fontSize = font_size+"pt";
        // console.log(font_size);
    }
    if (t == 'F-' && font_size > 14){
        font_size -= 4;
        p.style.fontSize = font_size+"pt";
        // console.log(font_size);
    }

    if (t == 'C+' && lis_color.length - 1 > num_count)
        num_count++;

    else if (t == 'C-' && num_count > 0)
        num_count--;

    else if (t == 'C+' && num_count == lis_color.length - 1)
        num_count = 0;

    else if (t == 'C-' && num_count == 0)
        num_count = lis_color.length - 1;

    p.style.color = lis_color[num_count];
    // console.log(num_count, lis_color[num_count]);
    // p.style.fontFamily = "Comic Sans MS";
}

document.addEventListener("keypress", function(event) {
    var key = event.keyCode;
    if (key == 43 || key == 61)
        changeText("F+");
    if (key == 45)
        changeText("F-");
    if (key == 44)
        changeText("C-");
    if (key == 46)
        changeText("C+");
});

document.addEventListener("keydown", function(event) {
    var key = event.keyCode;
    if (key == 38)
        changeText("F+");
    if (key == 40)
        changeText("F-");
    if (key == 37)
        changeText("C-");
    if (key == 39)
        changeText("C+");
});