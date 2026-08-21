
// Simula cargar productos desde BD (600ms)
function cargarProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
 
      if (!exito) {
        reject(new Error("No se pudo cargar el catálogo de productos."));
      } else {
        const productos = ["Laptop", "Mouse", "Teclado"];
        resolve(productos);
      }
    }, 600);
  });
}
 
// Simula cargar clientes desde BD (400ms)
function cargarClientes() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = false;
 
      if (!exito) {
        reject(new Error("No se pudo conectar con la base de clientes."));
      } else {
        const clientes = ["Ana García", "Luis Torres", "María López"];
        resolve(clientes);
      }
    }, 400);
  });
}
 
// Simula cargar configuración del sistema (300ms)
function cargarConfiguracion() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true;
 
      if (!exito) {
        reject(new Error("No se pudo leer el archivo de configuración."));
      } else {
        const configuracion = { moneda: "COP", limiteTransaccion: 20000000 };
        resolve(configuracion);
      }
    }, 300);
  });
}
 
// Inicializa StoreApp cargando todo en paralelo; continúa aunque algo falle
async function iniciarStoreApp() {
  console.log("Iniciando StoreApp...");
 
  const resultados = await Promise.allSettled([
    cargarProductos(),
    cargarClientes(),
    cargarConfiguracion(),
  ]);
 
  const nombres = ["productos", "clientes", "configuración"];
  const estado = {};
 
  for (let i = 0; i < resultados.length; i++) {
    const nombre = nombres[i];
    const resultado = resultados[i];
 
    if (resultado.status === "fulfilled") {
      console.log(` Carga de ${nombre} exitosa.`);
      estado[nombre] = { ok: true, datos: resultado.value };
    } else {
      console.warn(` Falló la carga de ${nombre}: ${resultado.reason.message}`);
      estado[nombre] = { ok: false, error: resultado.reason.message };
    }
  }
 
  console.log("\nStoreApp inició (con o sin errores). Estado final:");
  console.log(estado);
 
  return estado;
}
 
iniciarStoreApp();
 