/*Ejercicio 3 — [Terminal]
Una cooperativa registra los pagos mensuales de 5 asociados. Crea un arreglo de objetos con nombre,
cuota mensual y si está al día (booleano al_dia). Usando un switch sobre el mes actual (decláralo como
variable numérica del 1 al 12), muestra un saludo de bienvenida diferente por trimestre: "Bienvenido al
primer trimestre", "Bienvenido al segundo trimestre", etc. Luego recorre el arreglo e imprime el nombre
de cada asociado y su estado: "Al día" o "En mora". Cuenta e imprime cuántos están en mora. Usa const
para el arreglo y let para el mes.*/
// variable para el mes actual (1-12)
const asociados = [
    { nombre: "Juan", cuota: 100, al_dia: true },
    { nombre: "María", cuota: 100, al_dia: false },
    { nombre: "Pedro", cuota: 100, al_dia: true },
    { nombre: "Ana", cuota: 100, al_dia: false },
    { nombre: "Luis", cuota: 100, al_dia: true }
];

let totalMoraAnual = 0;

for (let mes = 1; mes <= 12; mes++) {

    console.log("\nMes: " + mes);

    switch (mes) {
        case 1:
        case 2:
        case 3:
            console.log("Bienvenido al primer trimestre");
            break;

        case 4:
        case 5:
        case 6:
            console.log("Bienvenido al segundo trimestre");
            break;

        case 7:
        case 8:
        case 9:
            console.log("Bienvenido al tercer trimestre");
            break;

        case 10:
        case 11:
        case 12:
            console.log("Bienvenido al cuarto trimestre");
            break;
    }

    let enMora = 0;

    for (const asociado of asociados) {

        if (asociado.al_dia) {
            console.log(asociado.nombre + " - Al día");
        } else {
            console.log(asociado.nombre + " - En mora");
            enMora++;
        }

    }

    console.log("Asociados en mora este mes: " + enMora);

    totalMoraAnual += enMora;
}
console.log("REPORTE ANUAL");
console.log("Total de registros en mora durante el año: " + totalMoraAnual);