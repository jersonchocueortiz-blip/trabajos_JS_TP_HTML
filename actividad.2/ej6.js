/* Ejercicio 6 — [Terminal]
Una librería mantiene su carrito de compras como un arreglo de objetos con titulo, autor y precio. Inicia
el arreglo con 3 libros definidos en el código. Luego usa push para agregar 2 libros más al final. Usa pop
para eliminar el último libro agregado e imprime cuál fue eliminado. Usa map para crear un arreglo solo
con los títulos de los libros restantes e imprímelo. Finalmente usa reduce para calcular el total a pagar y
muéstralo con toLocaleString("es-CO"). Muestra el estado del carrito después de cada operación.*/
const carrito = [
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", precio: 45000 },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", precio: 30000 },
    { titulo: "1984", autor: "George Orwell", precio: 40000 }
];
console.log("Carrito inicial:", carrito);

// Agregar 2 libros más al final
carrito.push(
    { titulo: "Harry Potter", autor: "J.K. Rowling", precio: 50000 },
    { titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkein", precio: 60000 }
);
console.log("Carrito después de agregar libros:", carrito);

// Eliminar el último libro agregado
let libroEliminado = carrito.pop();
console.log("Libro eliminado:", libroEliminado);

// Crear un arreglo solo con los títulos de los libros restantes
let titulos = carrito.map(l => l.titulo);
console.log("Títulos de los libros restantes:", titulos);

// Calcular el total a pagar
let total = carrito.reduce((suma, l) => suma + l.precio, 0);
console.log("Total a pagar: $" + total.toLocaleString("es-CO"));