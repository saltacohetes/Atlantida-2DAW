<?php
require __DIR__ . '../conexion.php';

$resultado = $db->query("SELECT nombre, edad FROM alumnos ORDER BY edad DESC, nombre");

echo "<table border='1'>";
echo "<tr><th>Nombre</th><th>Edad</th></tr>";
while ($fila = $resultado->fetch_assoc()) {
    echo "<tr><td>" . $fila['nombre'] . "</td><td>" . $fila['edad'] . "</td></tr>";
}
echo "</table>";

echo "<p>Total de alumnos: " . $resultado->num_rows . "</p>";

$resultado->free();
$db->close();
?>