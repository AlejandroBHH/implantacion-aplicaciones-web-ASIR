document.addEventListener("DOMContentLoaded", function() {
    // --- Datos de imágenes y enlaces ---
    let animales = [
        "img/gato_negro.jpg",
        "img/pincher.jpg",
        "img/periquito.jpg"
    ];

    let enlaces = [
        "https://www.google.com/search?q=gato+negro+jpg",
        "https://www.google.com/search?q=pincher+jpg",
        "https://www.google.com/search?q=periquito+jpg"
    ];

    // Creo la tabla y su estilo
    let tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";
    tabla.style.margin = "20px auto";
    tabla.style.border = "1px solid black";

    //Creo la fila para la imagenes
    let filaImagenes = document.createElement("tr");

    // Creo la fila para los enlaces
    let filaEnlaces = document.createElement("tr");


    for (let i = 0; i < animales.length; i++) {
        // Creo el espacio para las imagenes y su estilo
        let celdaImg = document.createElement("td"); //la celda para img
        celdaImg.style.border = "1px solid black";
        celdaImg.style.textAlign = "center";
        celdaImg.style.padding = "10px";

        // creo el elemento img y le asigno la imagen
        let imagen = document.createElement("img");
        imagen.src = animales[i];
        imagen.width = 250;
        imagen.height = 250;


        celdaImg.appendChild(imagen); //Introduzo en la celda la imagen
        filaImagenes.appendChild(celdaImg);//Introduzo en la fila de imagenes la celda

        // creo el espacio para los enlaces
        let celdaLink = document.createElement("td");//la celda para href
        celdaLink.style.border = "1px solid black";
        celdaLink.style.textAlign = "center";
        celdaLink.style.padding = "10px";

        // creo el elemento hipervínculo y le asigno el link
        let enlace = document.createElement("a");
        enlace.href = enlaces[i];
        enlace.appendChild(document.createTextNode("ENLACE"));

        celdaLink.appendChild(enlace);//Introduzo en la celda del link el hypervínculo
        filaEnlaces.appendChild(celdaLink);// introduzco en la fila de links la celda de links
    }

    tabla.appendChild(filaImagenes);//Introduzco en la tabla la fila de imagenes
    tabla.appendChild(filaEnlaces);//Introduzco en la tabla la fila de enlaces

    document.body.appendChild(tabla);//Introduzo en la web la tabla
});
