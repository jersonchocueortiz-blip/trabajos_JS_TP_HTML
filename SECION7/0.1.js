
// CADENA DE PROMESAS – StoreApp
// Uso: Node.js

// Simula buscar un cliente en BD (800ms)

// Simula buscar un cliente en BD (800ms)
function buscarCliente(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const clientes = {
        "C001": { id: "C001", nombre: "Ana García",  membresia: "gold",   activo: true  },
        "C002": { id: "C002", nombre: "Luis Torres", membresia: "normal", activo: false },
        "C003": { id: "C003", nombre: "María López", membresia: "gold",   activo: true  },
      };
      const cliente = clientes[id];
 
      if (!cliente) {
        reject(new Error(`Cliente "${id}" no encontrado en el sistema.`));
      } else if (!cliente.activo) {
        reject(new Error(`Cliente "${cliente.nombre}" está inactivo.`));
      } else {
        resolve(cliente);
      }
    }, 800);
  });
}
 
// Simula calcular el descuento de una venta según membresía (500ms)
function calcularDescuento(cliente, monto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const porcentajes = {
        "gold": 0.15,
        "normal": 0.05,
      };
      const LIMITE_TRANSACCION = 20000000;
 
      if (monto <= 0) {
        reject(new Error(`El monto "${monto}" no es válido.`));
      } else if (monto > LIMITE_TRANSACCION) {
        reject(new Error(`El monto $${monto} supera el límite de transacción de $${LIMITE_TRANSACCION}.`));
      } else {
        const porcentaje = porcentajes[cliente.membresia] || 0;
        const descuento = monto * porcentaje;
        const montoFinal = monto - descuento;
 
        resolve({ cliente, montoOriginal: monto, descuento, montoFinal });
      }
    }, 500);
  });
}
 
// Simula procesar el pago de una venta (700ms)
function procesarPago(venta) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const PAGO_MINIMO = 1000;
 
      if (venta.montoFinal < PAGO_MINIMO) {
        reject(new Error(`El monto final $${venta.montoFinal} es menor al pago mínimo permitido.`));
      } else {
        resolve({
          ...venta,
          estado: "pago aprobado",
          idTransaccion: `TX-${Date.now()}`,
        });
      }
    }, 700);
  });
}
 
// Prueba: Cambia el ID a "C999" (no existe) y verifica el error.
// Prueba: Cambia el monto a 25000000 para activar el límite de transacción.
const ID_CLIENTE = "C001";
const MONTO = 500000;
 
buscarCliente(ID_CLIENTE)
  .then((cliente) => {
    console.log("Cliente encontrado:", cliente.nombre);
    return calcularDescuento(cliente, MONTO);
  })
  .then((venta) => {
    console.log("Descuento calculado:", venta.descuento);
    return procesarPago(venta);
  })
  .then((resultado) => {
    console.log("Pago procesado con éxito:");
    console.log(resultado);
  })
  .catch((error) => {
    console.error("Error en el proceso de venta:", error.message);
  });
 