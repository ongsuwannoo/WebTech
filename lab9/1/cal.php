<?php
// echo "$rates->CAD";

function gett () {
    $url = "http://10.0.15.12/lab9/restapis/latest";
    $response = file_get_contents($url);
    $result = json_decode($response);
    return $result;
}

function select () {
    $rates = gett()->rates;
    foreach ($rates as $key => $value) {
        echo "<option value='$key'>$key</option>";
    }
}

function cal () {
    $result = gett();
    $rates = gett()->rates;
    if (sizeof($_POST) > 0) {
        $data = $_POST;
        // echo $data['num1']."<br>";
        // echo $data['num2']."<br>";
        // echo $data['from']."<br>";
        // echo $data['to']."<br>";
        $num = ($data['num1']/$rates->{$data['from']})*($rates->{$data['to']});
        // echo $num;
        echo '<input type="text" name="num2" class="col-sm-2 col-form-label from-control" readonly value="'.$num.'">';
        echo "<br>".$data['num1']." ".$data['from']." -> ".$data['to']." = ".$num;
    }
    else {
        echo '<input type="text" name="num2" class="col-sm-2 col-form-label from-control" readonly value="0">';
    }
}
?>