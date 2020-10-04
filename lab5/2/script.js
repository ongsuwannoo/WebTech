
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        xmlShow(this);
    }
};
xhttp.open("GET", "../1/employee.xml", true);
xhttp.send();

function xmlShow(xml) {
    let xmlDoc = xml.responseXML;
    let txt = "";
    let person = xmlDoc.getElementsByTagName("person");
    let title = xmlDoc.getElementsByTagName("title");
    let fname = xmlDoc.getElementsByTagName("fname");
    let lname = xmlDoc.getElementsByTagName("lname");
    let job = xmlDoc.getElementsByTagName("job");
    let address = xmlDoc.getElementsByTagName("address");
    for (let i = 0; i < person.length; i++) {
        title1 = title[i].childNodes[0].nodeValue;
        fname1 = fname[i].childNodes[0].nodeValue;
        lname1 = lname[i].childNodes[0].nodeValue;
        job1 = job[i].childNodes[0].nodeValue;
        address1 = address[i].childNodes[0].nodeValue;
        txt += (i+1)+". "+title1+" "+fname1+" "+lname1+" ( "+job1+" ), "+
        "<lable class='font-italic'>"+address1+"</lable><br><br>";
    }
    document.getElementById("out").innerHTML = txt;
    console.log(document.getElementById("out").innerHTML);
        // console.log(document.getElementById("out").innerHTML);
        // document.write(txt);

    }
