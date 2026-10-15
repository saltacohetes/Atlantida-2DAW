<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    function precioFinal($precio, $descuento = 10)
    {
        $resultado = $precio - ($precio * ($descuento / 100));
        return $resultado;
    }
    echo precioFinal(100) . "<br>";
    echo precioFinal(80, 25) . "<br>";
    ?>

</body>

</html>