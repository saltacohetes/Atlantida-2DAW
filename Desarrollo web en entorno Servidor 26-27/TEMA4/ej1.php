<?php
$ciudades = [
    "Granada" => 150000,
    "Madrid" => 3000000,
    "Barcelona" => 2879200,
    "Málaga" => 240000,
    "Sevilla" => 500000,
    "Valencia" => 1584600,
    "Tarragona" => 485210
];

echo "<h3>Tabla Original</h3>";
echo "<table border='1'>";
echo "<tr><th>Ciudad (nombre_posición)</th><th>Población (contenido)</th></tr>";
foreach ($ciudades as $ciudad => $poblacion) {
    echo "<tr><td>$ciudad</td><td>$poblacion</td></tr>";
}
echo "</table>";

ksort($ciudades);
echo "<h3>a.i. Ordenado alfabéticamente por ciudad</h3>";
echo "<ul>";
foreach ($ciudades as $ciudad => $poblacion) {
    echo "<li>$ciudad: $poblacion</li>";
}
echo "</ul>";

asort($ciudades);
echo "<h3>a.ii. Ordenado por cantidad de población</h3>";
echo "<ul>";
foreach ($ciudades as $ciudad => $poblacion) {
    echo "<li>$ciudad: $poblacion</li>";
}
echo "</ul>";

$ciudades_keys = array_keys($ciudades);
$ciudades_values = array_values($ciudades);
$min_ciudad = $ciudades_keys[0];
$min_poblacion = $ciudades_values[0];
$max_ciudad = end($ciudades_keys);
$max_poblacion = end($ciudades_values);

echo "<h3>b. Extremos de población</h3>";
echo "<p>Ciudad con más población: <strong>$max_ciudad</strong> ($max_poblacion)</p>";
echo "<p>Ciudad con menos población: <strong>$min_ciudad</strong> ($min_poblacion)</p>";
?>