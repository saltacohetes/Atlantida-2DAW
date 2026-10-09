const colores = ["rojo", "azul", "verde", "amarillo"];

function comprobarColor(color) {
  const busqueda = color.trim().toLowerCase();
  if (colores.includes(busqueda)) {
    console.log("encontrado");
  } else {
    console.log("no encontrado");
  }
}

comprobarColor(" AZUL ");
comprobarColor("violeta");
