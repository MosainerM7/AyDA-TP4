function ordenarDiscos(discos) {
    let movimientos = 0;  // contador de movimientos
    let n = discos.length / 2;

    // La idea es que todos los rojos estén en las primeras `n` posiciones,
    // y todos los azules en las últimas `n` posiciones.
    for (let i = 0; i < discos.length - 1; i++) {
        for (let j = 0; j < discos.length - 1; j++) {
            // Si encontramos un azul a la izquierda de un rojo, los intercambiamos
            if (discos[j] === "🔵" && discos[j + 1] === "🔴") {
                // Intercambio de discos vecinos
                [discos[j], discos[j + 1]] = [discos[j + 1], discos[j]];
                movimientos++;
            }
        }
    }

    return {
        discos: discos.join(""),  // Estado final de los discos
        movimientos: movimientos   // Número total de movimientos
    };
}

// Ejemplo de uso
let discosIniciales = ["🔴", "🔵", "🔴", "🔵", "🔴", "🔵", "🔴", "🔵"];
let resultado = ordenarDiscos(discosIniciales);

console.log("Discos ordenados:", resultado.discos);
console.log("Número de movimientos:", resultado.movimientos);
