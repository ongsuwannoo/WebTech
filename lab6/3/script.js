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

    for (let i = 0; i < myObj.length; i++) {
        var data = myObj[i];

        txt += data.firstName+" "+data.lastName+", "+"<lable class='font-italic'><b>"+data.gender.type+"</b></lable> "+
        data.age+" years old.<br> "+data.address.streetAddress+" "+data.address.city+" "+data.address.state+"<br>"+data.address.postalCode;

        for (let j = 0; j < data.phoneNumber.length; j++) {
            txt += "<br>"+data.phoneNumber[j].type+" : "+data.phoneNumber[j].number;
        }
    }
    document.getElementById("out").innerHTML = txt;
}