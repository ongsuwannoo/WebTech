<?php
  if (sizeof($_POST) > 0) {
    $data = $_POST;
    $status_error = 0;
    echo '<h3>ตารางสูตรคูณแม่ '.$data['invalue'].'</h3><br><center><table class="">';
    for ($i = 1; $i <= 12; $i++) {
      echo '<tr><td>'.$data['invalue'].'</td>'.'<td>*</td><td>'.$i.'</td>
      <td>=</td><td>'.$data['invalue']*$i.'</td></tr>';
    }
    echo "<table><center>";
  }
  ?>