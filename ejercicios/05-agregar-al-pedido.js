// ============================================================
// Ejercicio 05 · Agregar al pedido
// ============================================================
// El mesero dicta el número de un plato de la carta del día y
// el sistema lo agrega al pedido de la mesa. Aquí no se usa
// prompt-sync: el número llega como parámetro.
//
// Crea la función agregarAlPedido(pedido, carta, numero) que:
//   - Busque el plato en carta[numero].
//   - Si existe: lo agregue al FINAL de pedido con push y retorne
//     "Agregado: " + el nombre del plato.
//   - Si no existe: NO agregue nada y retorne exactamente
//     "Ese número no está en la carta".
//
// Ejemplos (carta = [Bandeja paisa, Limonada de coco, Jugo de lulo, Postre de natas]):
//   agregarAlPedido([], carta, 2) → "Agregado: Jugo de lulo"   (el pedido queda con 1 plato)
//   agregarAlPedido([], carta, 9) → "Ese número no está en la carta"  (el pedido sigue vacío)
//
// Pista: valida ANTES de hacer push.
// ============================================================

const menu = [
  { nombre: "Bandeja paisa", precio: 32000, categoria: "fuerte", disponible: true },
  { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false },
  { nombre: "Limonada de coco", precio: 9000, categoria: "bebida", disponible: true },
  { nombre: "Jugo de lulo", precio: 7000, categoria: "bebida", disponible: true },
  { nombre: "Postre de natas", precio: 11000, categoria: "postre", disponible: true },
];

function agregarAlPedido(pedido, carta, numero) {

  let plato = carta[numero];

  if(plato === undefined){
    return `Ese número no está en la carta`;
  }

  pedido.push(plato);
  return `Agregado: ${plato.nombre}`
}


console.log(agregarAlPedido([], menu, 2));
console.log(agregarAlPedido([], menu, 9));



// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { agregarAlPedido };
