window.onload = function() {
    var word_list = ['กระเพราไก่', 'กระเพราหมู', 'กระเพราถาด', 'กระเพรากุ้ง', 'กระเพราทะเล', 'กระเพราเผ็ดๆ', 'กระเพราหมึก'];
    txt = "";
    for (let i = 0; i < word_list.length; i++) {
        txt += '<option class="dropdown-item" value="'+word_list[i]+'">';
    }
    document.getElementById("brow").innerHTML = txt;
}
function Register() {
    var sid = document.getElementsByName("SID")[0].value;
    var fname = document.getElementsByName("firstName")[0].value;
    var lname = document.getElementsByName("lastName")[0].value;
    var table = document.getElementById("table0");
    var count = table.tBodies[0].childElementCount;

    var nRow = table.tBodies[0].insertRow(count);
    var lis = [count+1, sid, fname, lname];
    for (i in lis) {
        console.log(i, lis[i]);
        nRow.insertCell(i).innerText = lis[i];
    }
}