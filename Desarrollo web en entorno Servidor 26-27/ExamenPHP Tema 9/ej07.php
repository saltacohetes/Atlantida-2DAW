<?php
require __DIR__ . '../conexion.php';

$dni = '22222222B';
$codigo = 1;
$anio = 2025;

$stmt = $db->prepare("DELETE FROM matriculas WHERE dni = ? AND codigo = ? AND anio = ?");
$stmt->bind_param("sii", $dni, $codigo, $anio);
$stmt->execute();

if ($stmt->affected_rows === 1) {
    echo "Matrícula eliminada";
} else {
    echo "No encontrada";
}
?>