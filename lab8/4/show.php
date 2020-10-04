<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Web Technology Lab.8/3</title>
  <!-- <script src="script.js"></script> -->
  <link href='https://fonts.googleapis.com/css?family=Kanit:400,300&subset=thai,latin' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="style.css" rel="stylesheet">
</head>
<body style="background: #333;">
    <?php
    if (sizeof($_POST) > 0) {
        $data = $_POST;
        $check = array('text-danger', 'text-danger', 'text-danger', 'text-danger', 'text-danger', 'text-danger', 'text-danger', 'text-danger');
        if (strlen($data['id']) >= 13){
            $check[0] = 'text-success';
        }
        if (strlen($data['fname']) >= 5){
            $check[1] = 'text-success';
        }
        if (strlen($data['lname']) >= 5){
            $check[2] = 'text-success';
        }
        if (strlen($data['address']) >= 5){
            $check[3] = 'text-success';
        }
        if (strlen($data['district']) >= 5){
            $check[4] = 'text-success';
        }
        if (strlen($data['province']) >= 5){
            $check[5] = 'text-success';
        }
        if (strlen($data['zip']) >= 5){
            $check[6] = 'text-success';
        }
        if (strlen($data['tel']) >= 10){
            $check[7] = 'text-success';
        }
        echo '  <div class="d-flex justify-content-center mt-5">
                    <div class="card" style="width: 30%;color:black;">
                        <div class="card-header text-center">
                        ข้อมูลผู้สมัคร
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">หมายเลขบัตรประชาชน : <label class="'.$check[0].'">'.$data['id'].'<label></li>
                            <li class="list-group-item">ชื่อ : <label class="'.$check[1].'"> '.$data['fname'].'<label></li>
                            <li class="list-group-item">นามสกุล : <label class="'.$check[2].'"> '.$data['lname'].'<label></li>
                            <li class="list-group-item">ที่อยู่ : <label class="'.$check[3].'"> '.$data['address'].'<label></li>
                            <li class="list-group-item">อำเภอ/เขต : <label class="'.$check[4].'"> '.$data['district'].'<label></li>
                            <li class="list-group-item">จังหวัด : <label class="'.$check[5].'"> '.$data['province'].'<label></li>
                            <li class="list-group-item">รหัสไปรษณีย์ : <label class="'.$check[6].'"> '.$data['zip'].'<label></li>
                            <li class="list-group-item">เบอร์โทรศัพท์ : <label class="'.$check[7].'"> '.$data['tel'].'<label></li>
                        </ul>
                    </div>
                </div>
                <center class="mt-3">
                    <input type="submit" name="form" value="Back" onclick="window.history.back();" class="btn btn-dark">
                    <input type="submit" name="form" value="Back" onclick="window.history.back();" class="btn btn-dark">
                </center>';
    }
    ?>
</body>