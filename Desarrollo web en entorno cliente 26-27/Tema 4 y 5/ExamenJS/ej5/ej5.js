const lista = document.getElementById("lista");

lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("borrar")) {
    e.target.closest("li").remove();
  }
});