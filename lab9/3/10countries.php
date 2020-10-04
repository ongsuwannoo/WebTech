<?php

function gett () {
    $url = "http://10.0.15.12/lab9/restapis/10countries";
    $response = file_get_contents($url);
    $result = json_decode($response);
    return $result;
}

function countries () {
    $allCount = gett();
    for ($i=0; $i < count($allCount); $i++) {
        echo "<tr><td>";
        echo "Name : ".$allCount[$i]->name."<br>";
        echo "Capital : ".$allCount[$i]->capital."<br>";
        echo "Population : ".$allCount[$i]->population."<br>";
        echo "Region : ".$allCount[$i]->region."<br>";
        echo "Location : ".$allCount[$i]->latlng[0]." ".$allCount[$i]->latlng[1]."<br>";
        echo "Borders : ";
        for ($j=0; $j < count($allCount[$i]->borders); $j++) {
            echo $allCount[$i]->borders[$j]." ";
        }
        echo "</td><td>";
        echo "<br><img src='".$allCount[$i]->flag."'style='width:300px'><td>";
    }
}
?>