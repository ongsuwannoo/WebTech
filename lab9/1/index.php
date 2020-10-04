<?php
include 'cal.php';
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Web Technology Lab.9/1</title>
    <!-- <script src="script.js"></script> -->
    <link href='https://fonts.googleapis.com/css?family=Kanit:400,300&subset=thai,latin' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
</head>
<body class="" style="background: #333;color: white;">
<div class="m-5 bg-dark p-5">
    <form method="POST">
        <div class="form-group row">
            <label class="col-sm-4 col-form-label">From : </label>
            <div class="col-md-10">
                <select name="from">
                    <?php
                    select();
                    ?>
                </select>
                <input type="text" name="num1" class="col-sm-2 col-form-label" required placeholder="เฉพาะตัวเลข">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-4 col-form-label">To : </label>
            <div class="col-sm-10">
                <select name="to">
                    <?php
                    select()
                    ?>
                </select>
                <?php
                cal();
                ?>
            </div>
        </div>
        <br>
        <input type="submit" name="form" value="Cal" class="btn btn-secondary">
    </form>
</div>
</body>
</html>
