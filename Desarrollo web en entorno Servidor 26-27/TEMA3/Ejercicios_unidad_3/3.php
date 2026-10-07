<!-- Crear un documento PHP que cree un array asociativo con al menos 7
posiciones. El array contendrá claves con nombres de alumnos y valores
entre 0 y 10. Mostrar después una tabla con las notas reales obtenidas por
los alumnos: 0 – 4 = Suspenso, 5 = Aprobado, 6 = Bien, 7 – 8 = Notable, 9 =
Sobresaliente, 10 = Matrícula de honor -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php

    $alumnos = array(
        "Adrián" => 8,
        "Carlos" => 5,
        "Laura" => 9,
        "Marta" => 3,
        "Javier" => 7,
        "Lucía" => 10,
        "Pablo" => 4
    );

    echo "<table border='1'>";

    echo "<tr>";
    echo "<th>Alumno</th>";
    echo "<th>Nota</th>";
    echo "<th>Calificación</th>";
    echo "</tr>";

    foreach ($alumnos as $nombre => $nota) {

        if ($nota <= 4) {
            $calificacion = "Suspenso";
        } elseif ($nota <= 6) {
            $calificacion = "Aprobado";
        } elseif ($nota <= 8) {
            $calificacion = "Bien";
        } elseif ($nota == 9) {
            $calificacion = "Notable";
        } else {
            $calificacion = "Matrícula de honor";
        }

        echo "<tr>";
        echo "<td>$nombre</td>";
        echo "<td>$nota</td>";
        echo "<td>$calificacion</td>";
        echo "</tr>";
    }

    echo "</table>";

    ?>
</body>

</html>