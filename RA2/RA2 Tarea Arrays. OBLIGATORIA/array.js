// 1
// Se pide por pantalla el número de celdas del array
let numCeldas = parseInt(window.prompt("Introduce el numero de celdas del array:"));

// Creamos el array
let tabla = new Array(numCeldas);

// Si hay 10 celdas, cada una guarda el número correspondiente a su posición
if (numCeldas == 10) {
    for (let i = 0; i < tabla.length; i++) {
        tabla[i] = i;
    }

    // Imprimir el array con un bucle for
    document.write("<h3>Impresion del array con bucle for</h3>");
    for (let i = 0; i < tabla.length; i++) {
        document.write(tabla[i] + " ");
    }

    // Imprimir el array con un bucle while
    document.write("<h3>Impresion del array con bucle while</h3>");
    let j = 0;
    while (j < tabla.length) {
        document.write(tabla[j] + " ");
        j++;
    }

} else {
    document.write("No has introducido 10 celdas. El programa termina.");
}


// 2
// Diseñar un array con 5 imagenes
let imagenes = new Array("imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg");

window.alert("El array tiene " + imagenes.length + " imagenes disponibles.");
window.alert("Las imagenes disponibles son: " + imagenes.join(", "));

// preguntamos al usuario qué imagen desea imprimir
let seleccion = window.prompt("Escribe el nombre de la imagen que deseas ver:");
let encontrada = false;
for (let contador = 0; contador < imagenes.length; contador++) {
    
// comprobamos si la imagen escrita coincide con alguna del array
    if (seleccion == imagenes[contador]) {
        document.write("<h3>Mostrando la imagen seleccionada:</h3>");
        document.write("<img src='" + imagenes[contador] + "' width='300'>");
        encontrada = true;   
    }
}
if (encontrada == false) {
    document.write("<p>No se ha encontrado la imagen con ese nombre.</p>");
}
