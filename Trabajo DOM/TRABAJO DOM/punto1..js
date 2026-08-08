 console.log("=== EXPLORANDO EL DOM ===");
 
const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector(".descripcion");
const catalogo = document.getElementById("catalogo");
const productos = document.querySelectorAll(".producto");
// mostrar titulo 
console.log(titulo.textContent);
// mostrar numero de productos

console.log("Cantidad de productos: " + productos.length);

// rrecorrer los productos
productos.forEach((producto, index) => {
  const nombre = producto.querySelector("h2").textContent;
  console.log(`Producto ${index + 1}: ${nombre}`);
});

const primerProducto = productos[0];
 
// llamo el primer hijo 
const nombreProducto = primerProducto.firstElementChild;
console.log("Nombre:", nombreProducto.textContent);
 
//llamo el hermano siguiente del nombre
const precioProducto = nombreProducto.nextElementSibling;
console.log("Precio:", precioProducto.textContent);
 
// el hermano siguiente del precio
const botonProducto = precioProducto.nextElementSibling;
console.log("Botón:", botonProducto.textContent);
 
//  Elemento padre del <section id="catalogo">
const padreProducto = primerProducto.parentElement;
console.log("Padre:", padreProducto.id);
 
//  Los hijos de (h2, p, button)
const hijosProducto = primerProducto.children;
console.log("Hijos del primer producto:", hijosProducto);
 
//  Cambiar el nombre del segundo producto
const segundoProducto = productos[1];
segundoProducto.firstElementChild.textContent = "Monitor LG UltraWide";
 
 
// Leer el data-id de cada producto
productos.forEach((producto) => {
  console.log(producto.dataset.id);
});
 
// Agregar dinámicamente data-stock a cada producto
productos.forEach((producto, index) => {
  producto.dataset.stock = (index + 1) * 10; 
});
 
function destacarProducto(producto) {
  producto.classList.add("destacado");
  producto.style.backgroundColor = "#ffffff";
  producto.style.border = "2px solid #f0ad4e";
};
 
// La usamos sobre diferentes productos
destacarProducto(primerProducto);
destacarProducto(productos[2]); // también destacamos el tercero
 
 