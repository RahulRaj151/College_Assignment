<?php
echo "<table border='1' style='border-collapse: collapse'>";

// Header row
echo "<tr><th>&nbsp;</th>";
for ($i = 1; $i <= 10; $i++) {
    echo "<th>$i</th>";
}
echo "</tr>";

// Multiplication table
for ($i = 1; $i <= 10; $i++) {
    echo "<tr>";
    echo "<th>$i</th>";
    for ($j = 1; $j <= 10; $j++) {
        echo "<td>" . ($i * $j) . "</td>";
    }
    echo "</tr>";
}

echo "</table>";
?>