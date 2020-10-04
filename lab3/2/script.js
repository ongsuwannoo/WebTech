var stack = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]; // ID Prefix Fname Lname add1 add2 subdis dis pro zip tel
var stack_value = ["", "", "", "", "", "", "", "", "กรุงเทพมหานคร", "", ""];
var stack_error_msg = ["เลขบัตรประชาชนไม่ถูกต้อง", "คำนำหน้าไม่ถูกต้อง", "ชื่อไม่ถูกต้อง",
                        "นามสกุลไม่ถูกต้อง", "ที่อยู่ 1 ไม่ถูกต้อง", "ที่อยู่ 2 ไม่ถูกต้อง",
                        "ตำบลไม่ถูกต้อง", "อำเภอไม่ถูกต้อง", "จังหวัดไม่ถูกต้อง",
                        "รหัสไปรษณีย์ไม่ถูกต้อง", "เบอร์โทรศัพท์ไม่ถูกต้อง"];
var stack_fill = ["1926513470929", "นาย", "จักรพรรดิ์", "สุวรรณโณ", "65/3 ถ.ไมไมไม", "ไฟหกไฟ", "สิงหนคร", "สทิงพระ", "สงขลา", "10250", "0824200568"];
function validateForm () {
    var sum = stack.reduce((a, b) => a + b, 0);
    var string = "";
    if (sum == 11) {
        // alert("PASS!!");
        // window.location.href="profile.html";
        profile_output();
    } else {
        for (var i = 0; i < stack_value.length; i++) {
            if (stack[i] == 0){
                string += stack_error_msg[i]+"\n";
            }
        }
        alert(string);
    }
}
function validateFormNumber (i) {
    if (i == 'I') {
        var message = "เลขบัตรประชาชนต้องไม่เกิน 13 หลัก";
        var varlidate = "validateID";
        var num_max = 13;
        var num_max2 = 13;
        var num = 0;
        var form = "id";
    }
    if (i == 'Z') {
        var message = "รหัสไปรษณีย์ต้องไม่เกิน 5 หลัก";
        var varlidate = "validateZip";
        var num_max = 5;
        var num_max2 = 5;
        var num = 9;
        var form = "zip";
    }
    if (i == 'T') {
        var message = "เบอร์โทรศัพท์ต้องไม่เกิน 10 หลัก";
        var varlidate = "validateTel";
        var num_max = 10;
        var num_max2 = 9;
        var num = 10;
        var form = "tel";
    }
    var x = document.forms["myForm"][form];
    var n = x.value.length;
    // console.log(n, "ID");
    stack[num] = 0;
    stack_value[num] = "";
    if (n > num_max) {
        document.getElementById(varlidate).innerHTML = message;
        document.getElementById(varlidate).style.color = "red";
    } else {
        document.getElementById(varlidate).innerHTML = "ไม่ถูกต้อง";
        document.getElementById(varlidate).style.color = "red";
    } if (n == num_max || n == num_max2) {
        document.getElementById(varlidate).innerHTML = "ถูกต้อง";
        document.getElementById(varlidate).style.color = "lightgreen";
        stack[num] = 1;
        stack_value[num] = x.value;
        console.log(stack);
    }
}
function validateFormPrefix () {
    var x = document.forms["myForm"]["prefix"];
    // console.log(x.value);
    stack[1] = 0;
    stack_value[1] = "";
    document.getElementById("validatePrefix").innerHTML = "คำนำหน้าต้องเป็น นาย นาง นางสาว เด็กหญิง เด็กชาย เท่านั้น";
    document.getElementById("validatePrefix").style.color = "red";
    if (["นาย", "นาง", "นางสาว", "เด็กชาย", "เด็กหญิง"].includes(x.value)) {
        document.getElementById("validatePrefix").innerHTML = "ถูกต้อง";
        document.getElementById("validatePrefix").style.color = "lightgreen";
        stack[1] = 1;
        stack_value[1] = x.value;
        console.log(stack);
    }
}
function validateFormName (name) {
    if (name == 'F') {
        var name = "fname";
        var varlidate = "validateFname";
        var num = 2;
        var error_string_upper = "ชื่อต้องมากกว่า 2 ตัวอักษร";
        var error_string_lower = "ชื่อต้องไม่เกินต้องไม่เกิน 20 ตัวอักษร";
        var num_max = 20;
    }
    if (name == 'L') {
        var name = "lname";
        var varlidate = "validateLname";
        var num = 3;
        var error_string_upper = "สกุลต้องมากกว่า 2 ตัวอักษร";
        var error_string_lower = "สกุลต้องไม่เกินต้องไม่เกิน 30 ตัวอักษร";
        var num_max = 30
    }
    var x = document.forms["myForm"][name];
    var n = x.value.length;
    // console.log(n, "Fname");
    stack[num] = 1;
    stack_value[num] = x.value;
    console.log(stack);
    document.getElementById(varlidate).innerHTML = "ถูกต้อง";
    document.getElementById(varlidate).style.color = "lightgreen";
    if (n < 2) {
        document.getElementById(varlidate).innerHTML = error_string_upper;
        document.getElementById(varlidate).style.color = "red";
        stack[num] = 0;
        stack_value[num] = "";
    }
    if (n > num_max) {
        document.getElementById(varlidate).innerHTML = error_string_lower;
        document.getElementById(varlidate).style.color = "red";
        stack[num] = 0;
        stack_value[num] = "";
    }
}
function validateFormAddress (f){
    if (f == 1) {
        var form = "address1";
        var varlidate = "validateAddress1";
        var num = 4;
    }
    if (f == 2) {
        var form = "address2";
        var varlidate = "validateAddress2";
        var num = 5;
    }
    var x = document.forms["myForm"][form];
    var n = x.value.length;
    // console.log(n, "add1");
    stack[num] = 0;
    stack_value[num] = "";
    document.getElementById(varlidate).innerHTML = "ต้องไม่น้อยกว่า 5 ตัวอักษร";
    document.getElementById(varlidate).style.color = "red";
    if (n >= 5) {
        document.getElementById(varlidate).innerHTML = "ถูกต้อง";
        document.getElementById(varlidate).style.color = "lightgreen";
        stack[num] = 1;
        stack_value[num] = x.value;
        console.log(stack);
    }
}
function validateFormSubdistrict (){
    var x = document.forms["myForm"]["subdistrict"];
    var n = x.value.length;
    // console.log(n, "add2");
    stack[6] = 0;
    stack_value[6] = "";
    document.getElementById("validateSubdistrict").innerHTML = "ต้องไม่น้อยกว่า 2 ตัวอักษร";
    document.getElementById("validateSubdistrict").style.color = "red";
    if (n >= 2) {
        document.getElementById("validateSubdistrict").innerHTML = "ถูกต้อง";
        document.getElementById("validateSubdistrict").style.color = "lightgreen";
        stack[6] = 1;
        stack_value[6] = x.value;
        console.log(stack);
    }
}
function validateFormDistrict (){
    var x = document.forms["myForm"]["district"];
    var n = x.value.length;
    // console.log(n, "add2");
    stack[7] = 0;
    stack_value[7] = "";
    document.getElementById("validateDistrict").innerHTML = "ต้องไม่น้อยกว่า 1 ตัวอักษร";
    document.getElementById("validateDistrict").style.color = "red";
    if (n > 0) {
        document.getElementById("validateDistrict").innerHTML = "ถูกต้อง";
        document.getElementById("validateDistrict").style.color = "lightgreen";
        stack[7] = 1;
        stack_value[7] = x.value;
        console.log(stack);
    }
}
function validateFormProvince () {
    var x = document.forms["myForm"]["province"];
    stack[8] = 1;
    stack_value[8] = x.value;
    console.log(stack);
}
function profile_output () {
    var string = "PASS ALL !\n"+"เลขบัตรประชาชน : "+stack_value[0]+"\n"+
            "ชื่อ : "+stack_value[1]+" "+stack_value[2]+" "+stack_value[3]+"\n"+
            "ที่อยู่ : "+stack_value[4]+" "+stack_value[5]+" "+stack_value[6]+" "+"\n"+
                    stack_value[7]+" "+stack_value[8]+" "+stack_value[9]+"\n"+
            "เบอร์โทรศัพท์ : "+stack_value[10];
    alert(string);
    // document.getElementById("id").innerHTML = stack_value[0];
    // document.getElementById("name").innerHTML = stack_value[1]+" "+stack_value[2]+" "+stack_value[3];
    // document.getElementById("address").innerHTML = stack_value[4]+" "+stack_value[5]+" "+stack_value[6]+" "+
    //                                                 stack_value[7]+" "+stack_value[8]+" "+stack_value[9];
    // document.getElementById("tel").innerHTML = stack_value[10];
}
function click_fill () {
    stack = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    document.getElementsByName("id")[0].value = stack_fill[0];
    document.getElementsByName("prefix")[0].value = stack_fill[1];
    document.getElementsByName("fname")[0].value = stack_fill[2];
    document.getElementsByName("lname")[0].value = stack_fill[3];
    document.getElementsByName("address1")[0].value = stack_fill[4];
    document.getElementsByName("address2")[0].value = stack_fill[5];
    document.getElementsByName("subdistrict")[0].value = stack_fill[6];
    document.getElementsByName("district")[0].value = stack_fill[7];
    document.getElementsByName("province")[0].value = stack_fill[8];
    document.getElementsByName("zip")[0].value = stack_fill[9];
    document.getElementsByName("tel")[0].value = stack_fill[10];
    validateFormNumber('I');
    validateFormNumber('Z');
    validateFormNumber('T');
    validateFormPrefix();
    validateFormName('F');
    validateFormName('L');
    validateFormAddress(1);
    validateFormAddress(2);
    validateFormSubdistrict();
    validateFormDistrict();
    validateFormProvince();
}