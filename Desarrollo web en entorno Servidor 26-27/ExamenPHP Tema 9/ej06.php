<?php
require __DIR__ . '../conexion.php';

$nuevaNota = 7.75;
$dni = '55555555Z';
$codigo = 2;
$anio = 2026;

$stmt = $db->prepare("UPDATE matriculas SET nota = ? WHERE dni = ? AND codigo = ? AND anio = ?");
$stmt->bind_param("dsii", $nuevaNota, $dni, $codigo, $anio);
$stmt->execute();

if ($stmt->affected_rows === 1) {
    echo "Nota actualizada";
} else {
    echo "Sin cambios";
}
?>