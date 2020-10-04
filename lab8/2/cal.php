<?php
    $num = 28;
    $day_mis = 5;
    $day_over = 2;

    $day = array("Su", "Mo", "Tu", "We", "Th", "Fr", "Sa");

    echo '<tr>';
    foreach ($day as $i) {
        echo '<td class="'.$i.'"><div class="text-center H">'.$i.'</div></td>';
    }

    echo '</tr><tr>';

    for ($i=-$day_mis+1; $i < $num+1+$day_over; $i++) {

      if (($i+$day_mis-1)%7 == 0)
        echo '</tr><tr>';

      if (($i < 1) || ($i > $num))
        echo '<td><div class="text-center"> </div></td>';

      else if ($i > 0)
        echo '<td><div class="text-center">'.$i.'</div></td>';
    }
    echo '</tr>';
?>