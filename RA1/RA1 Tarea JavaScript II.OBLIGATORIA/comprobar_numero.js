// Programa en JavaScript
// Pedir por pantalla un número entero
let numero = parseInt(prompt('Introduce un número entero:'));

// Comprobar que el número es positivo y distinto de cero
if (numero > 0) {
    let cifras = numero.toString().length;

    if (cifras === 2) {
        // Si es de dos cifras, comprobar si es par o impar
        if (numero % 2 === 0) {
            console.log('El número tiene dos cifras y es PAR');
        } else {
            console.log('El número tiene dos cifras y es IMPAR');
        }
    } else if (cifras === 3) {
        // Si es de tres cifras, mostrar el resto de dividir entre 2
        console.log('El número tiene tres cifras. Resto al dividir entre 2: ' + (numero % 2));
    } else {
        // Si no cumple las condiciones anteriores
        console.log('Error');
    }
} else {
    // Si el número no es positivo o es cero
    console.log('Error');
}
