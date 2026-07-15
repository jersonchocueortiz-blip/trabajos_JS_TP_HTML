/* Ejercicio 5 — [Terminal]
Un restaurante registra los pedidos del día en un arreglo de objetos con mesa, plato y valor (mínimo 5
pedidos). Usa find para localizar el primer pedido cuyo valor supere $50.000 e imprímelo. Usa filter para
obtener todos los pedidos con valor menor o igual a $50.000. Usa reduce para calcular el total recaudado
en el día. Muestra en consola: el primer pedido costoso encontrado, la lista de pedidos económicos y el
total del día. Todos los valores monetarios con toLocaleString("es-CO"). */
const pedidos = [
    { mesa: 1, plato: "Bandeja Paisa", valor: 45000 },
    { mesa: 2, plato: "Ajiaco", valor: 35000 },
    { mesa: 3, plato: "Sancocho", valor: 55000 },
    { mesa: 4, plato: "Empanadillas", valor: 25000 },
    { mesa: 5, plato: "Lechona", valor: 60000 }
];
// 1. find - localizar el primer pedido costoso
let pedidoCostoso = pedidos.find(p => p.valor > 50000);
console.log("Primer pedido costoso:", pedidoCostoso);

// 2. filter - obtener todos los pedidos económicos
let pedidosEconomicos = pedidos.filter(p => p.valor <= 50000);
console.log("Pedidos económicos:", pedidosEconomicos);

// 3. reduce - calcular el total recaudado
let totalRecaudado = pedidos.reduce((suma, p) => suma + p.valor, 0);
console.log("Total recaudado: $" + totalRecaudado.toLocaleString("es-CO"));