const inputCantidad = document.getElementById("cantidad");
const botonComprobar = document.getElementById("comprobar");
const error = document.getElementById("error");

botonComprobar.addEventListener("click", () => {
  const valor = inputCantidad.valueAsNumber;

  if (Number.isInteger(valor) && valor >= 1 && valor <= 6) {
    error.textContent = "Cantidad valida";
  } else {
    error.textContent = "Cantidad no válida";
  }
});