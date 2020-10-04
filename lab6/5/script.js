let requestURL = 'movies.json';
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
    for (var i = 0; i < myObj.length; i++) {
        var data = myObj[i];
        txt += "<div style='transform: translateX(-120%)' class='H'><b>"+(i+1)+".) "+data.title+"</b> ("+data.year+")"+"<br><b>Cast : </b>";
        for (var j = 0; j < data.cast.length; j++) {
            txt += "- "+data.cast[j]+"<br>";
        }
        txt += "<b>Genres : </b>";
        for (var j = 0; j < data.genres.length; j++) {
            txt += "- "+data.genres[j]+"<br>";
        }
        txt += "</div>";
    }
    document.getElementById("out").innerHTML = txt;
}