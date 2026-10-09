const numeros = [-4, -2, -8, -1, -3, -6];

function analizar(lista) {
  let producto = 1;
  let mayor = lista[0];
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    producto *= lista[i];
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    suma += lista[i];
  }
  const media = suma / lista.length;
  console.log("Producto: " + producto);
  console.log("Mayor: " + mayor);
  console.log("Media: " + media);
}

analizar(numeros);
analizar([2, 4, 6, 8, 10, 12]);
