var lis = [1, 2, 4, 3];
var j = 1;
function change () {
    lis.unshift(lis[3]);
    lis.length = 4;
    console.log(lis);
    for (var i = 0; i < 4; i++) {
        document.getElementById(i).src = "http://10.0.15.12/lab3/"+lis[i]+".png";
        // document.getElementById(i).style.transform = "rotate("+-90*j+"deg)";
    }
    j++;
    if (j > 360)
        j = 0;
}