<?php
require __DIR__ . '../conexion.php';

$dni = '88888888B';
$nombre = 'Lucía Vega';
$edad = 22;

$stmt = $db->prepare("INSERT INTO alumnos (dni, nombre, edad) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $dni, $nombre, $edad);
$stmt->execute();

if ($stmt->affected_rows === 1) {
    echo "Alumno insertado";
}
?>