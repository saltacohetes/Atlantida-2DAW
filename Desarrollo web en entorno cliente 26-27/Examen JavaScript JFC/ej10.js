{
    const productos = [
    { nombre: "Teclado", precio: 25, disponible: true },
    { nombre: "Raton", precio: 15, disponible: false },
    { nombre: "Cable", precio: 8, disponible: true },
    { nombre: "Monitor", precio: 140, disponible: true }
  ];

  function nombresDisponibles(productos, precioMaximo) {
    return productos
      .filter(producto => producto.disponible && producto.precio <= precioMaximo)
      .map(producto => producto.nombre);
  }

  console.log(nombresDisponibles(productos, 25));
}