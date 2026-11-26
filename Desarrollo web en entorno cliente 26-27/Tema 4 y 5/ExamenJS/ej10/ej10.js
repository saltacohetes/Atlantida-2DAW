const form = document.getElementById("alta");
const clave = document.getElementById("clave");
const repetir = document.getElementById("repetir");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (clave.value.length < 8) {
    resultado.textContent = "Clave demasiado corta";
  } else if (clave.value !== repetir.value) {
    resultado.textContent = "Las claves no coinciden";
  } else {
    resultado.textContent = "Cuenta validada";
  }
});