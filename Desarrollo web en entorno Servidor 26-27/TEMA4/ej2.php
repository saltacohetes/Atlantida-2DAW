<?php
$alumnos = [
    "Antonio" => [
        "matematicas" => 5,
        "lengua" => 8.3,
        "ciencias" => 9,
        "geografia" => 7
    ],
    "Ana" => [
        "matematicas" => 8,
        "lengua" => 7,
        "ciencias" => 4.5,
        "geografia" => 9
    ],
    "Benito" => [
        "matematicas" => 9,
        "lengua" => 6.75,
        "ciencias" => 9,
        "geografia" => 3.1
    ]
];

echo "<h3>Tabla de Notas y Medias</h3>";
echo "<table border='1'>";
echo "<tr><th>Alumno</th><th>Matemáticas</th><th>Lengua</th><th>Ciencias Naturales</th><th>Geografia</th><th>Media</th></tr>";

foreach ($alumnos as $nombre => $materias) {
    $suma = array_sum($materias);
    $cuenta = count($materias);
    $media = $suma / $cuenta;
    
    echo "<tr>";
    echo "<td>$nombre</td>";
    echo "<td>" . $materias['matematicas'] . "</td>";
    echo "<td>" . $materias['lengua'] . "</td>";
    echo "<td>" . $materias['ciencias'] . "</td>";
    echo "<td>" . $materias['geografia'] . "</td>";
    echo "<td>" . number_format($media, 3, ',', '.') . "</td>";
    echo "</tr>";
}
echo "</table>";

$profesor_busca = "Ana"; 
echo "<h3>c. Notas del alumno buscado: $profesor_busca</h3>";

if (array_key_exists($profesor_busca, $alumnos)) {
    echo "<ul>";
    foreach ($alumnos[$profesor_busca] as $materia => $nota) {
        echo "<li>" . ucfirst($materia) . ": $nota</li>";
    }
    echo "</ul>";
} else {
    echo "<p>El alumno no existe en el sistema.</p>";
}
?>