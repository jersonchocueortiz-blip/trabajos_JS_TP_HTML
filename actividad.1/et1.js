const nombre = "cata";
const peso = 4;
const ciudad = "Bogotá";

let tarifaBase;

if (peso < 2) {
    tarifaBase = 8000;
} else if (peso <= 5) {
    tarifaBase = 15000;
} else {
    tarifaBase = 25000;
}

const recargo = ciudad.toLowerCase() === "bogotá" ? 5000 : 0;
const total = tarifaBase + recargo;

console.log("Cliente:", nombre);
console.log("Ciudad:", ciudad);
console.log("Peso:", peso, "kg");
console.log("Tarifa base: $" + tarifaBase.toLocaleString("es-CO"));
console.log("Recargo: $" + recargo.toLocaleString("es-CO"));
console.log("Total a pagar: $" + total.toLocaleString("es-CO"));