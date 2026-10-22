{
  const valores = [2, 5, 3];

  function sumar(...numeros) {
    let total = 0;
    for (const n of numeros) {
      total += n;
    }
    return total;
  }


  console.log(sumar(...valores));
  console.log(sumar());
}