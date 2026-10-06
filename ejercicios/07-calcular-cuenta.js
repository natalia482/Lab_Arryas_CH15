// ============================================================
// Ejercicio 07 · Calcular la cuenta con IVA
// ============================================================
// Hay que cobrarle a la mesa el total con IVA del 19 %.
//
// Crea la función calcularCuenta(pedido) que:
//   1. Sume el precio de todos los platos del pedido (subtotal).
//   2. Calcule el IVA = subtotal × 0.19, en una variable DENTRO
//      de la función (esa variable no existe afuera).
//   3. Retorne subtotal + IVA, redondeado con Math.round().
//
// Ejemplos:
//   calcularCuenta([bandeja, limonada]) → 48790   (41000 + 7790)
//   calcularCuenta([{ precio: 1250 }])  → 1488    (1487.5 redondeado)
//   calcularCuenta([])                  → 0
//
// Pista: acumulador que empieza en 0, como totalHoras de la clase.
// ============================================================

function calcularCuenta(pedido) {
  let subtotal = 0;
  for(i=0; i<pedido.length; i++){
    subtotal += pedido[i].precio
  }

  let iva = subtotal *0.19;

  return Math.round(subtotal+iva);
}

const miPedido = [
  { nombre: "Bandeja paisa", precio: 32000 },
  { nombre: "Limonada de coco", precio: 9000 }
];


const bandeja = { nombre: "Bandeja paisa", precio: 32000 };
const limonada = { nombre: "Limonada de coco", precio: 9000 };

console.log(calcularCuenta([bandeja, limonada])); // → 48790 (41000 + 7790)
console.log(calcularCuenta([{ precio: 1250 }]));  // → 1488  (1487.5 redondeado)
console.log(calcularCuenta([]));



// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { calcularCuenta };
