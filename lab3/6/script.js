var num = 0;
function chart () {
    setTimeout(function(){
        document.getElementById("math").style.width = (10+(num*20))+"%";
        document.getElementById("thai").style.width = (10+(num*25))+"%";
        document.getElementById("english").style.width = (10+(num*10))+"%";
        document.getElementById("scinece").style.width = (10+(num*40))+"%";
        document.getElementById("social").style.width = (10+(num*30))+"%";
    }, 300);
    document.getElementById("math").style.width = "80%";
    document.getElementById("thai").style.width = "70%";
    document.getElementById("english").style.width = "60%";
    document.getElementById("scinece").style.width = "90%";
    document.getElementById("social").style.width = "50%";
    num = num == 1 ? 0 : 1;
}