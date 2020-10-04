function Calculate () {
    var n1 = document.getElementsByName("num1")[0];
    var n2 = document.getElementsByName("num2")[0];
    var result = Number(n1.value)+Number(n2.value);
    console.log(result);
    if (result >= 0 || result < 0) // case NaN
        document.getElementById("result").innerHTML = result;
}
function Reset () {
    document.getElementsByName("num1")[0].value = "";
    document.getElementsByName("num2")[0].value = "";
    document.getElementById("result").innerHTML = "X";
}