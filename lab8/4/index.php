<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Web Technology Lab.8/4</title>
  <!-- <script src="script.js"></script> -->
  <link href='https://fonts.googleapis.com/css?family=Kanit:400,300&subset=thai,latin' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="style.css" rel="stylesheet">
</head>

<body class="" style="background: #333;color: white;">
</body>
<div class="m-5 bg-dark p-5">
  <center>
    <div class="ml-3 mr-3">
      <form method="POST" action="show.php">

        <div class="row">

          <div class="id col"><b>*</b> หมายเลขบัตรประชาชน : <label id="validateID"></label> <input type="text" name="id" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" required placeholder="เฉพาะตัวเลข">
          </div>

          <div class="fname col ml-3"><b>*</b> ชื่อ : <label id="validateFname"></label> <input type="text" name="fname" oninput="this.value = this.value.replace(/[^ก-์a-zA-Z.]/g, '').replace(/(\..*)\./g, '$1');" required placeholder="เฉพาะตัวอักษร">
          </div>

          <div class="lname col ml-3"><b>*</b> นามสกุล : <label id="validateLname"></label> <input type="text" name="lname" oninput="this.value = this.value.replace(/[^ก-๎a-zA-Z.]/g, '').replace(/(\..*)\./g, '$1');" required placeholder="เฉพาะตัวอักษร">
          </div>
        </div>

        <div class="address"><b>*</b> ที่อยู่ : <label id="validateAddress1"></label> <input type="text" name="address" required placeholder="ที่อยู่" oninput="">
        </div>

        <div class="row">
          <div class="district col"><b>*</b> อำเภอ/เขต : <label id="validateDistrict"></label> <input type="text" name="district" oninput="this.value = this.value.replace(/[^ก-๎a-zA-Z.]/g, '').replace(/(\..*)\./g, '$1');" required placeholder="เฉพาะตัวอักษร">
          </div>

          <div class="col mr-3">
            <div><b>*</b> จังหวัด : </div>
            <select id="province" name="province">
              <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
              <option value="กระบี่">กระบี่ </option>
              <option value="กาญจนบุรี">กาญจนบุรี </option>
              <option value="กาฬสินธุ์">กาฬสินธุ์ </option>
              <option value="กำแพงเพชร">กำแพงเพชร </option>
              <option value="ขอนแก่น">ขอนแก่น</option>
              <option value="จันทบุรี">จันทบุรี</option>
              <option value="ฉะเชิงเทรา">ฉะเชิงเทรา </option>
              <option value="ชัยนาท">ชัยนาท </option>
              <option value="ชัยภูมิ">ชัยภูมิ </option>
              <option value="ชุมพร">ชุมพร </option>
              <option value="ชลบุรี">ชลบุรี </option>
              <option value="เชียงใหม่">เชียงใหม่ </option>
              <option value="เชียงราย">เชียงราย </option>
              <option value="ตรัง">ตรัง </option>
              <option value="ตราด">ตราด </option>
              <option value="ตาก">ตาก </option>
              <option value="นครนายก">นครนายก </option>
              <option value="นครปฐม">นครปฐม </option>
              <option value="นครพนม">นครพนม </option>
              <option value="นครราชสีมา">นครราชสีมา </option>
              <option value="นครศรีธรรมราช">นครศรีธรรมราช </option>
              <option value="นครสวรรค์">นครสวรรค์ </option>
              <option value="นราธิวาส">นราธิวาส </option>
              <option value="น่าน">น่าน </option>
              <option value="นนทบุรี">นนทบุรี </option>
              <option value="บึงกาฬ">บึงกาฬ</option>
              <option value="บุรีรัมย์">บุรีรัมย์</option>
              <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์ </option>
              <option value="ปทุมธานี">ปทุมธานี </option>
              <option value="ปราจีนบุรี">ปราจีนบุรี </option>
              <option value="ปัตตานี">ปัตตานี </option>
              <option value="พะเยา">พะเยา </option>
              <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา </option>
              <option value="พังงา">พังงา </option>
              <option value="พิจิตร">พิจิตร </option>
              <option value="พิษณุโลก">พิษณุโลก </option>
              <option value="เพชรบุรี">เพชรบุรี </option>
              <option value="เพชรบูรณ์">เพชรบูรณ์ </option>
              <option value="แพร่">แพร่ </option>
              <option value="พัทลุง">พัทลุง </option>
              <option value="ภูเก็ต">ภูเก็ต </option>
              <option value="มหาสารคาม">มหาสารคาม </option>
              <option value="มุกดาหาร">มุกดาหาร </option>
              <option value="แม่ฮ่องสอน">แม่ฮ่องสอน </option>
              <option value="ยโสธร">ยโสธร </option>
              <option value="ยะลา">ยะลา </option>
              <option value="ร้อยเอ็ด">ร้อยเอ็ด </option>
              <option value="ระนอง">ระนอง </option>
              <option value="ระยอง">ระยอง </option>
              <option value="ราชบุรี">ราชบุรี</option>
              <option value="ลพบุรี">ลพบุรี </option>
              <option value="ลำปาง">ลำปาง </option>
              <option value="ลำพูน">ลำพูน </option>
              <option value="เลย">เลย </option>
              <option value="ศรีสะเกษ">ศรีสะเกษ</option>
              <option value="สกลนคร">สกลนคร</option>
              <option value="สงขลา">สงขลา </option>
              <option value="สมุทรสาคร">สมุทรสาคร </option>
              <option value="สมุทรปราการ">สมุทรปราการ </option>
              <option value="สมุทรสงคราม">สมุทรสงคราม </option>
              <option value="สระแก้ว">สระแก้ว </option>
              <option value="สระบุรี">สระบุรี </option>
              <option value="สิงห์บุรี">สิงห์บุรี </option>
              <option value="สุโขทัย">สุโขทัย </option>
              <option value="สุพรรณบุรี">สุพรรณบุรี </option>
              <option value="สุราษฎร์ธานี">สุราษฎร์ธานี </option>
              <option value="สุรินทร์">สุรินทร์ </option>
              <option value="สตูล">สตูล </option>
              <option value="หนองคาย">หนองคาย </option>
              <option value="หนองบัวลำภู">หนองบัวลำภู </option>
              <option value="อำนาจเจริญ">อำนาจเจริญ </option>
              <option value="อุดรธานี">อุดรธานี </option>
              <option value="อุตรดิตถ์">อุตรดิตถ์ </option>
              <option value="อุทัยธานี">อุทัยธานี </option>
              <option value="อุบลราชธานี">อุบลราชธานี</option>
              <option value="อ่างทอง">อ่างทอง </option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="zip col"><b>*</b> รหัสไปรษณีย์ : <label id="validateZip"></label> <input type="text" name="zip" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" required placeholder="เฉพาะตัวเลข">
          </div>

          <div class="tel col mr-3"><b>*</b> เบอร์โทรศัพท์ : <label id="validateTel"></label> <input type="text" name="tel" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" required placeholder="เฉพาะตัวเลข">
          </div>
        </div>
      </div>
      <input type="submit" name="form" value="Register" class="btn btn-dark">
    </form>
  </center>
</div>
</body>
</html>
