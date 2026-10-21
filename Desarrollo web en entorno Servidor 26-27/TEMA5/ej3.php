<?php
function generarTablaClasesCSS($clase1, $clase2, $clase3) {
    $clases = [$clase1, $clase2, $clase3];
    $html = '<table border="1" cellpadding="10" cellspacing="0" style="width: 100%; text-align: center;">';
    
    foreach ($clases as $indice => $clase) {
        $numFila = $indice + 1;
        $html .= '<tr class="' . htmlspecialchars($clase) . '">';
        $html .= '<td>Fila ' . $numFila . '</td>';
        $html .= '</tr>';
    }
    
    $html .= '</table>';
    return $html;
}
?>
<style>
    .fondo-rojo { background-color: #f8d7da; }
    .fondo-verde { background-color: #d4edda; }
    .fondo-azul { background-color: #cce5ff; }
</style>
<?php
echo generarTablaClasesCSS('fondo-rojo', 'fondo-verde', 'fondo-azul');
?>