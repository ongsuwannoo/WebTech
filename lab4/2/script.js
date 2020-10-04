var num_count = 0;
function Calculate () {
    var n1 = document.getElementsByName("num1")[0];
    var n2 = document.getElementsByName("num2")[0];
    var result = Number(n1.value)+Number(n2.value);
    // console.log(n1.value);

    if (n1.value != "" && n2.value != "") {
        document.getElementById("result").innerHTML = result;
        num_count++;
        let x = document.createElement("P");
        let t = document.createTextNode(num_count+"). "+Number(n1.value)+" + "+Number(n2.value)+" = "+result);
        x.appendChild(t);
        document.getElementById("2").appendChild(x);
    }
}
function Reset () {
    document.getElementsByName("num1")[0].value = "";
    document.getElementsByName("num2")[0].value = "";
    document.getElementById("result").innerHTML = "X";
}