{
  const numeros = [-8, -3, -12, -1, -6];
  let mayor = numeros[0];

  for (const n of numeros) {
    if (n > mayor) {
      mayor = n;
    }
  }

  console.log(mayor);
}