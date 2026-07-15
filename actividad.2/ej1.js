/*Ejercicio 1 — [Terminal]
Una empresa de domicilios necesita calcular el costo de entrega de varios pedidos. Crea un arreglo con los
nombres y pesos (en kg) de 5 pedidos definidos directamente en el código. Recorre el arreglo con for...of
y para cada pedido determina el costo: menos de 1 kg cuesta $4.000, entre 1 y 3 kg cuesta $8.000, y más
de 3 kg cuesta $14.000. Muestra en consola el nombre del pedido, su peso y su costo. Al finalizar, muestra
el total acumulado de todos los costos. Usa const para el arreglo y toLocaleString("es-CO") para los valores
monetarios.*/
// arreglo de pedidos con nombre y peso
const pedidos = [
    { nombre: "Pizza", peso: 0.8 },
    { nombre: "Hamburguesa", peso: 2.5 },
    { nombre: "Mercado", peso: 4 },
    { nombre: "Medicamentos", peso: 0.5 },
    { nombre: "Tecnología", peso: 3.8 }
];
// variable para acumular el costo total
let totalCosto = 0;
// recorrer el arreglo de pedidos y calcular el costo según el peso
for (const pedido of pedidos) {
    let costo;
    if (pedido.peso < 1) {
        costo = 4000;
    } else if (pedido.peso <= 3) {
        costo = 8000;
    } else {
        costo = 14000;
    }
    // mostrar en consola el nombre del pedido, su peso y su costo
    console.log(`${pedido.nombre} - Peso: ${pedido.peso} kg - Costo: $${costo.toLocaleString("es-CO")}`);
    totalCosto += costo;
}
// mostrar el total acumulado de todos los costos
console.log(`Total acumulado: $${totalCosto.toLocaleString("es-CO")}`);
