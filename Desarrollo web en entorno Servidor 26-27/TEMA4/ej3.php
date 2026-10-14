<?php
$mascotas = [
    [
        "nombre" => "Pepe",
        "peso" => 4.5,
        "color" => "Marrón",
        "edad" => 12
    ],
    [
        "nombre" => "Sparky",
        "peso" => 3,
        "color" => "Blanco",
        "edad" => 2
    ],
    [
        "nombre" => "Tobby",
        "peso" => 7.2,
        "color" => "Beige",
        "edad" => 8
    ],
    [
        "nombre" => "Bigotes",
        "peso" => 4,
        "color" => "Negro",
        "edad" => 9
    ],
    [
        "nombre" => "Ricky",
        "peso" => 0.1,
        "color" => "Verde",
        "edad" => 2
    ]
];

echo "<h3>c.i. Todas las mascotas</h3>";
echo "<table border='1'>";
echo "<tr><th>Fila</th><th>Nombre</th><th>Peso</th><th>Color</th><th>Edad</th></tr>";
foreach ($mascotas as $i => $mascota) {
    echo "<tr>";
    echo "<td>$i</td>";
    echo "<td>{$mascota['nombre']}</td>";
    echo "<td>{$mascota['peso']}</td>";
    echo "<td>{$mascota['color']}</td>";
    echo "<td>{$mascota['edad']}</td>";
    echo "</tr>";
}
echo "</table>";

echo "<h3>c.ii. Peso de la mascota con código 3</h3>";
echo "<p>El peso de la mascota 3 ({$mascotas[3]['nombre']}) es: {$mascotas[3]['peso']} kg</p>";

echo "<h3>c.iii. Color de la mascota Sparky</h3>";
$color_sparky = "";
foreach ($mascotas as $mascota) {
    if ($mascota['nombre'] === "Sparky") {
        $color_sparky = $mascota['color'];
        break;
    }
}
echo "<p>El color de Sparky es: $color_sparky</p>";

echo "<h3>c.iv. Datos de la mascota más mayor</h3>";
$mas_mayor = $mascotas[0];
foreach ($mascotas as $mascota) {
    if ($mascota['edad'] > $mas_mayor['edad']) {
        $mas_mayor = $mascota;
    }
}
echo "<p>Nombre: {$mas_mayor['nombre']}, Peso: {$mas_mayor['peso']}, Color: {$mas_mayor['color']}, Edad: {$mas_mayor['edad']}</p>";

echo "<h3>c.v. Nombre de la mascota que pesa menos</h3>";
$mas_liviana = $mascotas[0];
foreach ($mascotas as $mascota) {
    if ($mascota['peso'] < $mas_liviana['peso']) {
        $mas_liviana = $mascota;
    }
}
echo "<p>La mascota que pesa menos es: <strong>{$mas_liviana['nombre']}</strong> (con {$mas_liviana['peso']} kg)</p>";
?>