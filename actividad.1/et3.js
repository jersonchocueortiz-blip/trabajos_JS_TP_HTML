const estudiantes = [
    { nombre: "Ana", nota: 4.5 },
    { nombre: "Luis", nota: 3.2 },
    { nombre: "Pedro", nota: 4.8 },
    { nombre: "María", nota: 2.9 },
    { nombre: "Sara", nota: 3.7 },
    { nombre: "Juan", nota: 4.0 }
];

let suma = 0;
let aprobados = 0;

for (const estudiante of estudiantes) {

    const estado =
        estudiante.nota >= 3.5 ? "APROBADO" : "REPROBADO";

    console.log(
        estudiante.nombre,
        estudiante.nota,
        estado
    );

    suma += estudiante.nota;

    if (estudiante.nota >= 3.5) {
        aprobados++;
    }
}

const promedio = suma / estudiantes.length;

const notas = estudiantes.map(e => e.nota);

const notaAlta = Math.max(...notas);
const notaBaja = Math.min(...notas);

console.log("Promedio:", promedio.toFixed(2));
console.log("Nota más alta:", notaAlta);
console.log("Nota más baja:", notaBaja);
console.log("Aprobados:", aprobados);