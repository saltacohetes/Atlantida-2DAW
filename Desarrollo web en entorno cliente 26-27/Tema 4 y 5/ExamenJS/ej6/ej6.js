const formReserva = document.getElementById("reserva");
const inputNombre = document.getElementById("nombre");
const aviso = document.getElementById("aviso");

formReserva.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombreLimpio = inputNombre.value.trim();

  if (nombreLimpio.length < 3) {
    aviso.textContent = "Nombre demasiado corto";
  } else {
    aviso.textContent = `Reserva de ${nombreLimpio}`;
  }
});