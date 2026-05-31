// Programa en JavaScript

// -------------------- PARTE 1 --------------------
// Pedir por pantalla el nombre y el número que se desea imprimir
let nombre = prompt('Introduce tu nombre:');
let numeroDeseado = parseInt(prompt('Introduce el número que deseas imprimir:'));

console.log('Hola ' + nombre + ', el número que deseas imprimir es: ' + numeroDeseado);

// -------------------- PARTE 2 --------------------
// Imprimir los números del 1 al 100 en intervalos de 10 en 10
console.log('Números del 1 al 100 en intervalos de 10 en 10:');
for (let i = 1; i <= 100; i += 10) {
    console.log(i);
}

// -------------------- PARTE 3 --------------------
// Pedir por pantalla el número de celdas y filas para crear una tabla
let filas = parseInt(prompt('Introduce el número de filas para la tabla:'));
let celdas = parseInt(prompt('Introduce el número de celdas por fila:'));

// Crear la tabla dinámicamente en el documento HTML
let tabla = '<table border="1" style="border-collapse: collapse;">';
for (let i = 0; i < filas; i++) {
    tabla += '<tr>';
    for (let j = 0; j < celdas; j++) {
        tabla += '<td>Celda</td>';
    }
    tabla += '</tr>';
}
tabla += '</table>';

document.write('<h3>Tabla generada:</h3>' + tabla);
