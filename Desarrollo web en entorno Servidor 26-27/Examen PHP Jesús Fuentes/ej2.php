<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $importe = 120;

    if ($importe >= 100) {
        $importeFinal = $importe - ($importe * 0.10);
    } else {
        $importeFinal = $importe;
    }

    echo "El importe final es: " . $importeFinal . " euros";
    ?>
</body>

</html>