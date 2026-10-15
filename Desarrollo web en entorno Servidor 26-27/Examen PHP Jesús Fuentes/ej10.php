<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $matriz = [
        [2, 4, 6],
        [1, 3, 5]
    ];

    function sumarFilas($matriz)
    {
        $sumas = [];

        for ($i = 0; $i < count($matriz); $i++) {
            $sumaFila = 0;
            for ($j = 0; $j < count($matriz[$i]); $j++) {
                $sumaFila += $matriz[$i][$j];
            }
            $sumas[] = $sumaFila;
        }

        return $sumas;
    }

    $resultados = sumarFilas($matriz);

    for ($i = 0; $i < count($resultados); $i++) {
        $numFila = $i + 1;
        echo "Fila " . $numFila . ": " . $resultados[$i] . "<br>";
    } ?>
</body>

</html>