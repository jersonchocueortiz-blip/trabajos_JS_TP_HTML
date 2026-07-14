function procesarRetiro(nombre, saldo, retiro) {

    if (retiro <= 0) {
        return {
            mensaje: "El monto debe ser mayor a cero"
        };
    }

    if (saldo >= retiro) {

        return {
            nombre,
            saldoAnterior: saldo,
            retiro,
            nuevoSaldo: saldo - retiro
        };

    } else {

        return {
            mensaje:
                "Fondos insuficientes",
            faltante: retiro - saldo
        };
    }
}

const resultado =
    procesarRetiro("luiza", 100000, 30000);

console.log(resultado);