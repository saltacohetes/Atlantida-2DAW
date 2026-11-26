const botonTema = document.getElementById("tema");
const panel = document.getElementById("panel");

botonTema.textContent = "Activar modo oscuro";

botonTema.addEventListener("click", () => {
  const esOscuro = panel.classList.toggle("oscuro");
  botonTema.textContent = esOscuro ? "Activar modo claro" : "Activar modo oscuro";
});