/* Ejercicio 7 — [Terminal]
Una empresa de ventas quiere analizar su desempeño semanal. Crea un arreglo de objetos con las ventas
de 7 días, cada objeto con dia (string) y totalVendido (número). Implementa tres funciones separadas:
calcularTotal(ventas) que use reduce y retorne la suma total de la semana; encontrarMejorDia(ventas) que
use reduce y retorne el objeto del día con mayor venta; filtrarDiasDestacados(ventas, minimo) que use
filter y retorne los días donde totalVendido supera el mínimo recibido como parámetro. Llama las tres
funciones al final e imprime sus resultados. Usa toLocaleString("es-CO") para los valores. */
const ventas = [
    { dia: "Lunes", totalVendido: 1000 },
    { dia: "Martes", totalVendido: 1500 },
    { dia: "Miércoles", totalVendido: 1200 },
    { dia: "Jueves", totalVendido: 1800 },
    { dia: "Viernes", totalVendido: 2000 },
    { dia: "Sábado", totalVendido: 2500 },
    { dia: "Domingo", totalVendido: 3000 }
];

// Función para calcular el total vendido en la semana
function calcularTotal(ventas) {
    return ventas.reduce((acumulador, venta) => acumulador + venta.totalVendido, 0);
}

// Función para encontrar el día con mayor venta
function encontrarMejorDia(ventas) {
    return ventas.reduce((mayor, venta) => {
        if (venta.totalVendido > mayor.totalVendido) {
            return venta;
        } else {
            return mayor;
        }
    });
}
// Función para filtrar los días con ventas superiores al mínimo
function filtrarDiasDestacados(ventas, minimo) {
    return ventas.filter(venta => venta.totalVendido > minimo);
}

// Llamar las funciones
const totalSemana = calcularTotal(ventas);
const mejorDia = encontrarMejorDia(ventas);
const diasDestacados = filtrarDiasDestacados(ventas, 600000);

// Mostrar resultados
console.log("=== TOTAL VENDIDO EN LA SEMANA ===");
console.log("$" + totalSemana.toLocaleString("es-CO"));

console.log("\n=== MEJOR DÍA DE VENTAS ===");
console.log("Día: " + mejorDia.dia);
console.log("Venta: $" + mejorDia.totalVendido.toLocaleString("es-CO"));

console.log("\n=== DÍAS DESTACADOS ===");
for (const venta of diasDestacados) {
    console.log(
        venta.dia + ": $" + venta.totalVendido.toLocaleString("es-CO")
    );
}


