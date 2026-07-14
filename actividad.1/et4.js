const ventas = [
    { dia: "Lunes", vendedor: "Ana", unidades: 8, totalVendido: 200000 },
    { dia: "Martes", vendedor: "Luis", unidades: 12, totalVendido: 350000 },
    { dia: "Miércoles", vendedor: "Pedro", unidades: 15, totalVendido: 500000 },
    { dia: "Jueves", vendedor: "Sara", unidades: 7, totalVendido: 180000 },
    { dia: "Viernes", vendedor: "Juan", unidades: 11, totalVendido: 420000 }
];

function calcularTotalSemana(datos) {
    return datos.reduce(
        (acum, venta) => acum + venta.totalVendido,
        0
    );
}

function encontrarMayorVenta(datos) {
    return datos.reduce(
        (mayor, actual) =>
            actual.totalVendido > mayor.totalVendido
                ? actual
                : mayor
    );
}

function filtrarDiasDestacados(datos) {
    return datos.filter(
        venta => venta.unidades > 10
    );
}

function imprimirReporte() {

    const totalSemana = calcularTotalSemana(ventas);
    const mejorDia = encontrarMayorVenta(ventas);
    const destacados = filtrarDiasDestacados(ventas);

    console.log("Total semana:");
    console.log("$" + totalSemana.toLocaleString("es-CO"));

    console.log("\nMejor día:");
    console.log(mejorDia);

    console.log("\nDías destacados:");
    console.log(destacados);
}
imprimirReporte();

let inventario=[
    {nombre:"equipo pc",precio:3200000,atock:7}
];
// 1. filter - solo productos con el stock
let disponible = inventario.filter(p=>p.stock>0);
console.log(disponible)
//2. map comber tir cada  objeto en texto objeto es 
let etiquetas = disponibles.map(p=> $(p.nombre)- $$(p.precio.tolocalestring("es-co")
));
console.log(etiquetas);
