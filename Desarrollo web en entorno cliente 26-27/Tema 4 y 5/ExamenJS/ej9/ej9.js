function codigoValido(texto) {
  return /^DIS-[0-9]{4}/.test(texto);
}

console.log(codigoValido("DIS-1234"));
console.log(codigoValido("dis-1234"));
console.log(codigoValido("DIS-1234 "));
console.log(codigoValido("DIS-123"));