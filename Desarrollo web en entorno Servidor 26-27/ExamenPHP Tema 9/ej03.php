<?php
require __DIR__ . '../conexion.php';

$edadMinima = 21;
$stmt = $db->prepare("SELECT nombre, edad FROM alumnos WHERE edad >= ? ORDER BY edad, nombre");
$stmt->bind_param("i", $edadMinima);
$stmt->execute();
$resultado = $stmt->get_result();
$alumnos = $resultado->fetch_all(MYSQLI_ASSOC);

if ($alumnos) {
    foreach ($alumnos as $alumno) {
        echo $alumno['nombre'] . " - " . $alumno['edad'] . "<br>";
    }
} else {
    echo "Sin coincidencias";
}
?>