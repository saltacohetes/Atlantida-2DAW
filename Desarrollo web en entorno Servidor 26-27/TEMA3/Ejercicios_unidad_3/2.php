<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $numeros = [3, 8, 7, -6];
    ?>
    <table BORDER="1 solid black">
        <tr>
            <th>Numero</th>
            <th>Cuadrado</th>
            <th>Cubo</th>
        </tr>

        <?php foreach ($numeros as $numero) { ?>
            <tr>
                <td><?= $numero ?></td>
                <td><?= $numero ** 2 ?></td>
                <td><?= $numero ** 3 ?></td>
            </tr>
            <?php
        } ?>
    </table>

</body>

</html>