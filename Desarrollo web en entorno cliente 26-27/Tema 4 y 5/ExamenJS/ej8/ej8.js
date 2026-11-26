const checkRegalo = document.getElementById("regalo");
const precio = document.getElementById("precio");

function actualizarPrecio() {
  const total = checkRegalo.checked ? 22 : 20;
  precio.textContent = `Total: ${total.toFixed(2)} €`;
}


actualizarPrecio();
checkRegalo.addEventListener("change", actualizarPrecio);