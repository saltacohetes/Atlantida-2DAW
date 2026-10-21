<?php
function generarTablaColoresInLine($color1, $color2, $color3) {
    $colores = [$color1, $color2, $color3];
    $html = '<table border="1" cellpadding="10" cellspacing="0" style="width: 100%; text-align: center;">';
    
    foreach ($colores as $indice => $color) {
        $numFila = $indice + 1;
        $html .= '<tr style="background-color: ' . htmlspecialchars($color) . ';">';
        $html .= '<td>Fila ' . $numFila . '</td>';
        $html .= '</tr>';
    }
    
    $html .= '</table>';
    return $html;
}

echo generarTablaColoresInLine('#FFCCCC', '#CCFFCC', '#CCCCFF');
?>