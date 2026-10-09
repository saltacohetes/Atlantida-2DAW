const coche = {
  marca: "Toyota",
  modelo: "Yaris",
  anio: 2020,
  calcularAntiguedad: function () {
    const actual = new Date().getFullYear();
    if (!Number.isInteger(this.anio) || this.anio < 1886 || this.anio > actual) {
      return null;
    }
    return actual - this.anio;
  }
};

let resultado = coche.calcularAntiguedad();
if (resultado === null) {
  console.log("Año no válido");
} else {
  console.log("Antigüedad: " + resultado + " años");
}

coche.anio = new Date().getFullYear();
resultado = coche.calcularAntiguedad();
if (resultado === null) {
  console.log("Año no válido");
} else {
  console.log("Antigüedad: " + resultado + " años");
}

coche.anio = new Date().getFullYear() + 1;
resultado = coche.calcularAntiguedad();
if (resultado === null) {
  console.log("Año no válido");
} else {
  console.log("Antigüedad: " + resultado + " años");
}
