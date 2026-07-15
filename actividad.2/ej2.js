/* Ejercicio 2 — [Terminal]
Un colegio necesita clasificar a sus estudiantes según su promedio. Crea un arreglo de objetos con 6
estudiantes, cada uno con nombre y promedio (definidos en el código). Recorre el arreglo con for...of y
muestra para cada estudiante su nombre, promedio y categoría: "EXCELENTE" si el promedio es mayor o
igual a 4.5, "BUENO" si está entre 3.5 y 4.4, "BÁSICO" si está entre 3.0 y 3.4, y "BAJO" si es menor a 3.0. Al
finalizar cuenta cuántos estudiantes hay en cada categoría y muéstralo en consola. Usa const para el
arreglo. */

// arreglo de estudiantes con nombre y promedio
const estudiantes = [
    { nombre: "Juan", promedio: 4.8 },
    { nombre: "María", promedio: 3.9 },
    { nombre: "Pedro", promedio: 2.5 },
    { nombre: "Ana", promedio: 1.8 },
    { nombre: "Luis", promedio: 3.1 },
    { nombre: "Sofía", promedio: 4.5 }
];
// variable para contar la cantidad de estudiantes en cada categoría
let categoria ={
    excelente: 0,
    bueno: 0,
    basico: 0,
    bajo: 0
}
// recorrer el arreglo de estudiantes y mostrar su nombre, promedio y categoría
for (const estudiante of estudiantes) {
    let categoriaestudiante;
    if (estudiante.promedio >= 4.5){
        categoriaestudiante = "EXCELENTE";
    }else if (estudiante.promedio >= 3.5 && estudiante.promedio <= 4.4){
        categoriaestudiante = "BUENO";
    }else if (estudiante.promedio >= 3.0 && estudiante.promedio <= 3.4){
        categoriaestudiante = "BÁSICO";
    }else {
        categoriaestudiante = "BAJO";
    }
    // llamo a consola los resultados de los estudiantes y su categoría
    console.log(`${estudiante.nombre} - Promedio: ${estudiante.promedio} - Categoría: ${categoriaestudiante}`);
 }
