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

    $total = 0;

    for ($i = 0; $i < count($matriz); $i++) {
        for ($j = 0; $j < count($matriz[$i]); $j++) {
            $total += $matriz[$i][$j];
        }
    }

    echo "Suma total: " . $total;
    ?>

</body>

</html>