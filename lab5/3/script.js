let land =  ["Andorra", "United", "Afghanistan", "Albania",
"Armenia", "Angola", "Antarctica", "Argentina", "Austria",
"Australia", "Azerbaijan", "Bosnia", "Bangladesh", "Belgium",
"Burkina", "Bulgaria", "Bahrain", "Burundi", "Benin", "Brunei",
"Bolivia", "Brazil", "Bhutan", "Botswana", "Belarus", "Belize",
"Canada", "Congo", "Central", "Congo", "Switzerland", "Cote",
"Chile", "Cameroon", "China", "Colombia", "Costa", "Cuba",
"Cape", "Cyprus", "Czech", "Germany", "Djibouti", "Denmark",
"Dominican", "Algeria", "Ecuador", "Estonia", "Egypt", "Western",
"Eritrea", "Spain", "Ethiopia", "Finland", "France", "Gabon",
"United", "Georgia", "French", "Ghana", "Greenland", "Gambia",
"Guinea", "Equatorial", "Greece", "Guatemala", "Guam", "Guinea-Bissau",
"Guyana", "Hong", "Honduras", "Croatia", "Haiti", "Hungary",
"Indonesia", "Ireland", "Israel", "India", "Iraq", "Iran",
"Iceland", "Italy", "Jamaica", "Jordan", "Japan", "Kenya",
"Kyrgyzstan", "Cambodia", "Korea", "Korea", "Kuwait",
"Kazakhstan", "Lao", "Lebanon", "Liechtenstein", "Sri",
"Liberia", "Lesotho", "Lithuania", "Luxembourg", "Latvia",
"Libyan", "Morocco", "Monaco", "Moldova", "Montenegro",
"Madagascar", "Macedonia", "Mali", "Myanmar", "Mongolia", "Macao",
"Mauritania", "Malta", "Mauritius", "Maldives", "Malawi", "Mexico",
"Malaysia", "Mozambique", "Namibia", "Niger", "Nigeria",
"Nicaragua", "Netherlands", "Norway", "Nepal", "New",
"Oman", "Panama", "Peru", "Papua", "Philippines",
"Pakistan", "Poland", "Puerto", "Palestine", "Portugal",
"Paraguay", "Reunion", "Romania", "Serbia", "Russian",
"Rwanda", "Saudi", "Seychelles", "Sudan", "Sweden", "Singapore",
"Saint", "Slovenia", "Slovakia", "Sierra", "San", "Senegal",
"Somalia", "Suriname", "Sao", "El", "Syrian", "Swaziland",
"Chad", "Togo", "Thailand", "Tajikistan", "Timor-Leste",
"Turkmenistan", "Tunisia", "Turkey", "Taiwan", "Tanzania",
"Ukraine", "Uganda", "United", "Uruguay", "Uzbekistan",
"Holy", "Venezuela", "Viet", "Yemen", "Mayotte",
"South", "Zambia", "Zimbabwe"];

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
    let edt = xmlDoc.getElementsByTagName("person");
    let xLen = edt.length;

    for (let i = 0; i < xLen; i++) {
        let newEle = xmlDoc.createElement("country");
        let newText = xmlDoc.createTextNode(land[Math.floor(Math.random() * land.length)]);
        newEle.appendChild(newText);
        edt[i].appendChild(newEle);
    }

    let txt = "";
    let person = xmlDoc.getElementsByTagName("person");
    let title = xmlDoc.getElementsByTagName("title");
    let fname = xmlDoc.getElementsByTagName("fname");
    let lname = xmlDoc.getElementsByTagName("lname");
    let job = xmlDoc.getElementsByTagName("job");
    let address = xmlDoc.getElementsByTagName("address");
    let coun = xmlDoc.getElementsByTagName("country");
    for (let i = 0; i < person.length; i++) {
        title1 = title[i].childNodes[0].nodeValue;
        fname1 = fname[i].childNodes[0].nodeValue;
        lname1 = lname[i].childNodes[0].nodeValue;
        job1 = job[i].childNodes[0].nodeValue;
        address1 = address[i].childNodes[0].nodeValue;
        coun1 = coun[i].childNodes[0].nodeValue;
        txt += (i+1)+". "+title1+" "+fname1+" "+lname1+" ( "+job1+" ), "+
        "<lable class='font-italic'>"+address1+"</lable>, "+coun1+"<br><br>";
    }
    document.getElementById("out").innerHTML = txt;
    // console.log(document.getElementById("out").innerHTML);
        // console.log(document.getElementById("out").innerHTML);
        // document.write(txt);

    }
