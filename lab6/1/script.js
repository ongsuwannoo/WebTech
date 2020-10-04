let requestURL = 'person.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        var myJSON = JSON.parse(request.responseText);
        myFunction(myJSON);
    }
};
request.open("GET", requestURL, true);
request.send();
var txt="";
function myFunction(myObj) {

    for (let i = 0; i < myObj.person.length; i++) {

        txt += myObj.person[i].id+".) "+"<b>"+myObj.person[i].firstname+" "+myObj.person[i].lastname+"</b>"+
            " (<lable class='font-italic'>"+myObj.person[i].gender+"</lable>) is a "+myObj.person[i].position+
            ", "+myObj.person[i].address+"<br>";

    }document.getElementById("out").innerHTML = txt;
}