<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table>
        <?php
        for ($i = 1; $i <= 10; $i++) {
            echo "<table>";
            echo "<thead><tr><th colspan='2'>Tabla del $i</th></tr></thead>";
            echo "<tbody>";

            for ($j = 1; $j <= 10; $j++) {
                $resultado = $i * $j;
                echo "<tr>";
                echo "<td>$i × $j</td>";
                echo "<td>$resultado</td>";
                echo "</tr>";
            }

            echo "</tbody>";
            echo "</table>";
        }
        ?>
    </table>

</body>

</html>