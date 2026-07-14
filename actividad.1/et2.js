const nombre = "carlos";
const edad = 17;
const plan = 2;

let valorPlan;

switch (plan) {
    case 1:
        valorPlan = 80000;
        break;
    case 2:
        valorPlan = 130000;
        break;
    case 3:
        valorPlan = 200000;
        break;
    default:
        console.log("Opción no válida");
}

if (valorPlan) {

    let descuento = 0;

    if (edad < 18) {
        descuento = valorPlan * 0.20;
    } else if (edad >= 60 && edad <= 99) {
        descuento = valorPlan * 0.30;
    }

    const total = valorPlan - descuento;

    console.log("Nombre:", nombre);
    console.log("Plan:", plan);
    console.log("Descuento: $" + descuento.toLocaleString("es-CO"));
    console.log("Total: $" + total.toLocaleString("es-CO"));
}