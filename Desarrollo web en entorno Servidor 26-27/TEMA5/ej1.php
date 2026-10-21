<?php
function generarBoletinNotas($nombreCompleto, $calificaciones) {
    $html = '<table border="1" cellpadding="8" cellspacing="0">';
    $html .= '<tr>';
    $html .= '<th>Alumno</th>';
    $html .= '<td>' . htmlspecialchars($nombreCompleto) . '</td>';
    $html .= '</tr>';
    
    foreach ($calificaciones as $asignatura => $nota) {
        $html .= '<tr>';
        $html .= '<th>' . htmlspecialchars($asignatura) . '</th>';
        $html .= '<td>' . htmlspecialchars($nota) . '</td>';
        $html .= '</tr>';
    }
    
    $html .= '</table>';
    return $html;
}

$nombre = "Juan Ramírez";
$notas = [
    "Matemáticas" => "Sobresaliente",
    "Lengua"      => "Notable",
    "Historia"    => "Notable",
    "Dibujo"      => "Insuficiente"
];

echo generarBoletinNotas($nombre, $notas);
?>