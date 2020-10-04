let requestURL = 'subjects.json';
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

    for (let i = 0; i < myObj.length; i++) {

        txt += "<div class='H' style='transform: translateX(-120%)'><a href='"+myObj[i].url+"' title='Go to Web "+myObj[i].display+"'>"+myObj[i].display+"</a>"+
        "<br><br></div>";
    }
    document.getElementById("out").innerHTML = txt;
}