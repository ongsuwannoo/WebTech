<?php
$url = "http://10.0.15.12/lab9/restapis/movies90";
$response = file_get_contents($url);
$result = json_decode($response);
for ($i=0; $i < count($result); $i++) {
    $name = $result[$i]->title;
    $year = $result[$i]->year;
    echo "<div style='transform: translateX(-120%)' class='H'><b>".($i+1).".) ".$name."</b> (".$year.")"."<br><b>Cast : </b>";
    for ($j=0; $j < count($result[$i]->cast); $j++) {
        echo "- ".$result[$i]->cast[$j]."<br>";
    }
    echo "<b>Genres : </b>";
    for ($j=0; $j < count($result[$i]->genres); $j++) {
        echo "- ".$result[$i]->genres[$j]."<br>";
    }
    echo "</div>";
}
?>