const botonSumar = document.getElementById("sumar");
const totalSpan = document.getElementById("total");
let contador = 0;

botonSumar.addEventListener("click", () => {
  contador++;
  totalSpan.textContent = contador;
});