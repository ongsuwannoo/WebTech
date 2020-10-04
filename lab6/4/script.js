let requestURL = 'superheroes.json';
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
    var data = Object.keys(myObj);
    for (let i = 0; i < data.length; i++) {
        console.log(data[i], typeof myObj[data[i]]);

        if (typeof myObj[data[i]] == "object") {
            var lis = myObj[data[i]];

            for (let j = 0; j < lis.length; j++) {
                txt += "<div id='out' class='h4'> Name : "+
                lis[j].name+"<br> Age : "+lis[j].age+" years<br>"+"Secret Identity : "+lis[j].secretIdentity+"<br>Powers : <br>";
                for (let k = 0; k < lis[j].powers.length; k++) {
                    txt += " - "+lis[j].powers[k]+"<br>";
                }
                txt += "</div>";
            }
        }

        else
            txt += data[i]+" : "+myObj[data[i]]+"<br><br>";
    }
    document.getElementById("out").innerHTML = txt;
}