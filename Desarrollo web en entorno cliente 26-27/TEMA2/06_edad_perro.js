function convertirEdad(edadPerro) {
  return edadPerro * 7;
}

let edad;

while (true) {
  let entrada = prompt("Introduce la edad del perro:");
  if (entrada === null) {
    break;
  }
  entrada = entrada.trim();
  if (entrada === "") {
    alert("Error: texto vacío");
    continue;
  }
  const numero = Number(entrada);
  if (!Number.isFinite(numero) || numero <= 0 || numero >= 30) {
    alert("Error: edad no válida");
    continue;
  }
  edad = numero;
  break;
}

if (edad !== undefined) {
  alert("Edad humana: " + convertirEdad(edad));
}
