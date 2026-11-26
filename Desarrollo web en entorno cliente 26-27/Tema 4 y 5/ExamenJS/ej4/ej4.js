const titulos = ["Blue Train", "Kind of Blue", "Abbey Road"];
const listaDiscos = document.getElementById("discos");

for (const titulo of titulos) {
  const li = document.createElement("li");
  li.textContent = titulo;
  listaDiscos.appendChild(li);
}