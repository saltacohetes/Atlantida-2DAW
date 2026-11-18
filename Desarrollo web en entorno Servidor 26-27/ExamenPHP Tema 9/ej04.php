<?php
require __DIR__ . '../conexion.php';

$texto = 'a';
$patron = "%" . $texto . "%";
$stmt = $db->prepare("SELECT dni, nombre FROM alumnos WHERE nombre LIKE ?");
$stmt->bind_param("s", $patron);
$stmt->execute();
$resultado = $stmt->get_result();
$alumnos = $resultado->fetch_all(MYSQLI_ASSOC);

if ($alumnos) {
    foreach ($alumnos as $alumno) {
        echo $alumno['dni'] . " - " . $alumno['nombre'] . "<br>";
    }
} else {
    echo "Sin coincidencias";
}
?>