/* Ejercicio 8 — [Terminal]
Un gimnasio tiene registrados sus clientes en un arreglo de objetos con nombre, edad, plan (1, 2 o 3) y
activo (booleano). Usa filter para obtener solo los clientes activos. Sobre ese resultado usa map para
calcular el precio de cada cliente según su plan (1 = $80.000, 2 = $130.000, 3 = $200.000) aplicando el
descuento correspondiente con if/else if: menores de 18 años 20% de descuento, entre 60 y 99 años 30%
de descuento, los demás sin descuento. El map debe retornar un objeto con nombre, plan y valorFinal.
Usa forEach para imprimir cada resultado y reduce para calcular el ingreso total del mes. Muestra todos
los valores con toLocaleString("es-CO"). */

// Arreglo de objetos con los clientes del gimnasio
const clientes = [
    { nombre: "Juan", edad: 16, plan: 1, activo: true },
    { nombre: "María", edad: 25, plan: 2, activo: true },
    { nombre: "Pedro", edad: 65, plan: 3, activo: true },
    { nombre: "Ana", edad: 40, plan: 1, activo: false },
    { nombre: "Luis", edad: 70, plan: 2, activo: true }
];

// Obtener solo los clientes activos
const clientesActivos = clientes.filter(cliente => cliente.activo);

// Calcular el valor final según el plan y los descuentos
const resultados = clientesActivos.map(cliente => {

    let precio;

    // Precio según el plan
    switch (cliente.plan) {
        case 1:
            precio = 80000;
            break;
        case 2:
            precio = 130000;
            break;
        case 3:
            precio = 200000;
            break;
    }

    // Aplicar descuentos
    if (cliente.edad < 18) {
        precio = precio * 0.80;
    } else if (cliente.edad >= 60 && cliente.edad <= 99) {
        precio = precio * 0.70;
    }

    return {
        nombre: cliente.nombre,
        plan: cliente.plan,
        valorFinal: precio
    };

});

// Imprimir los resultados
console.log("=== CLIENTES ACTIVOS ===");

resultados.forEach(cliente => {
    console.log(
        "Nombre: " + cliente.nombre +
        " | Plan: " + cliente.plan +
        " | Valor Final: $" + cliente.valorFinal.toLocaleString("es-CO")
    );
});

// Calcular el ingreso total del mes
const ingresoTotal = resultados.reduce((total, cliente) => {
    return total + cliente.valorFinal;
}, 0);

// Mostrar el ingreso total
console.log("\n=== INGRESO TOTAL DEL MES ===");
console.log("$" + ingresoTotal.toLocaleString("es-CO"));