<?php

function gett () {
    $url = "http://10.0.15.12/lab9/restapis/nobleprize100";
    $response = file_get_contents($url);
    $result = json_decode($response);
    return $result;
}

function nobleprize () {
    $nobleprize = gett();
    if (sizeof($_POST) > 0) {
        $data = $_POST;
        for ($i=0; $i < count($nobleprize); $i++) {
            if (strcmp($nobleprize[$i]->year, $data['year']) == 0){
                echo "<tr>";
                for ($j=0; $j < count($nobleprize[$i]->laureates); $j++) {
                    echo "<td>".$nobleprize[$i]->year."</td>";
                    echo "<td>".$nobleprize[$i]->category."</td>";
                    echo "<td>".$nobleprize[$i]->laureates[$j]->id."</td>";
                    echo "<td>".$nobleprize[$i]->laureates[$j]->firstname." ".$nobleprize[$i]->laureates[$j]->surname."</td>";
                    echo "<td>".$nobleprize[$i]->laureates[$j]->motivation."</td>";
                    echo "</tr>";
                }
                echo "</tr>";
            }
        }
    }
}

function select () {
    $nobleprize = gett();
    $arr = array();
    for ($i=0; $i < count($nobleprize); $i++) {
        if (!in_array($nobleprize[$i]->year, $arr)){
            echo "<option value=".$nobleprize[$i]->year.">".$nobleprize[$i]->year."</option>";
            array_push($arr, $nobleprize[$i]->year);
        }
    }
}

?>