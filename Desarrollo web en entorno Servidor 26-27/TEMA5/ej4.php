<?php
function generarBoletinOficial($datosAlumno) {
    $notaMedia = ($datosAlumno['nota1'] + $datosAlumno['nota2'] + $datosAlumno['nota3']) / 3;
    $notaMediaFormateada = number_format($notaMedia, 2);
    
    $html = '
    <div style="border: 2px solid #333; padding: 20px; max-width: 400px; font-family: Arial, sans-serif;">
        <h2 style="text-align: center; margin-top: 0;">BOLETÍN OFICIAL DE NOTAS</h2>
        <hr>
        <p><strong>Alumno:</strong> ' . htmlspecialchars($datosAlumno['apellidos']) . ', ' . htmlspecialchars($datosAlumno['nombre']) . '</p>
        <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; margin-top: 15px; text-align: center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>Evaluación</th>
                    <th>Nota</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nota 1</td>
                    <td>' . htmlspecialchars($datosAlumno['nota1']) . '</td>
                </tr>
                <tr>
                    <td>Nota 2</td>
                    <td>' . htmlspecialchars($datosAlumno['nota2']) . '</td>
                </tr>
                <tr>
                    <td>Nota 3</td>
                    <td>' . htmlspecialchars($datosAlumno['nota3']) . '</td>
                </tr>
                <tr style="font-weight: bold; background-color: #e6f7ff;">
                    <td>NOTA FINAL (MEDIA)</td>
                    <td>' . $notaMediaFormateada . '</td>
                </tr>
            </tbody>
        </table>
    </div>';
    
    return $html;
}

$alumno = [
    'nombre'    => 'María',
    'apellidos' => 'Gómez Pérez',
    'nota1'     => 8.5,
    'nota2'     => 7.0,
    'nota3'     => 9.25
];

echo generarBoletinOficial($alumno);
?>