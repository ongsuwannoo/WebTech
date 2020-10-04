<?php
include 'nobleprize100.php';
?>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Web Technology Lab.9/4</title>
  <!-- <script src="script.js"></script> -->
  <link href='https://fonts.googleapis.com/css?family=Kanit:400,300&subset=thai,latin' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="style.css" rel="stylesheet">
  <style>
    .table td, .table th{
     vertical-align: middle;
     border: 2px solid #dddddd;
   }
   .table{
    border: 1px solid black;
  }
</style>
</head>

<body class="" style="background: #333;color: white;">
</body>
<div class="m-5 bg-dark p-5 text-center">
  <label class="h1 text-center">ผู้ได้รับรางวัล Nobel Prize</label>
  <form method="POST">
    <select name="year">
      <?php
      select();
      ?>
    </select>
    <div class="mt-1"></div>
    <br>
    <input type="submit" name="form" value="Show" onclick="<? ?>" class="btn btn-secondary">
    <div class="container mt-5">
      <table class="table table-bordered table-striped table-hover text-center table-dark">
        <tr>
          <th rowspan="2">Year</th>
          <th rowspan="2">Category</th>
          <th rowspan="1" colspan="3">Laureates</th>
        </tr>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Motivation</th>
        </tr>
        <?php nobleprize(); ?>
      </table>
    </div>
  </form>
</div>
</body>
</html>

