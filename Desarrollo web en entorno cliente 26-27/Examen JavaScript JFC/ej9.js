  const notas = [6, 8, 4, 10];

  function calcularMedia(notas) {
    if (notas.length == 0) {
      return null;
    }
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
  }

  console.log(calcularMedia(notas));
  console.log(calcularMedia([]));
