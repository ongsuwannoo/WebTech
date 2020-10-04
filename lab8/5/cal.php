<?php
    echo '<tr>';
    echo '<td><div class="text-center X">X</div></td>';
    for ($i=1; $i < 12+1; $i++) {
        echo '<td><div class="text-center A">'.$i.'</div></td>';
    }
    echo '</tr><tr>';
    for ($i=1; $i < 12+1; $i++) {
        echo '<td><div class="text-center B">'.$i.'</div></td>';
        for ($j=1; $j < 12+1; $j++) {
            echo '<td><div class="text-center">'.$i*$j.'</div></td>';
        }
        echo '</tr><tr>';
    }
    echo '</tr>';
?>