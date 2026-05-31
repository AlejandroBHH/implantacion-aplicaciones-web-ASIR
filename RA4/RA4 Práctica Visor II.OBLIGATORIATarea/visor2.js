document.addEventListener("DOMContentLoaded", function(){
    let imagenes = ["img/foto1.jpg",
        "img/foto2.jpg",
        "img/foto3.jpg",
        "img/foto4.jpg",
        "img/foto5.jpg",
        "img/foto6.jpg",
    ];

    let informacion = [
        "Maravilloso pueblo nevado",
        "Autobuses preparados para la nieve",
        "El lago totalmente congelado",
        "En verano rutas de moto increibles",
        "Las montañas más grandes que existen",
        "Nuestro equipo siempre preparado para darte soporte"
    ];
    
    let posicion = 0; //para calcular la posición de las fotos

    let flecha_izquierda = "img/flecha-correcta-izq.png";
    let flecha_derecha = "img/flecha-correcta-der.png";

    let punto_vacio = "img/dry-clean.png";
    let punto_relleno = "img/new-moon.png";
    let tamaño_puntos = 20;

    let contenedor_principal = document.createElement("div"); //contenedor para imagenes
    contenedor_principal.style.display = "flex";
    contenedor_principal.style.flexDirection = "row";
    contenedor_principal.style.justifyContent = "center";
    contenedor_principal.style.alignItems = "center";
    contenedor_principal.style.gap = "100px"
    contenedor_principal.style.marginTop = "100px"

    let contenedor_secundario = document.createElement("div"); //contenedor para puntos
    contenedor_secundario.style.display = "flex";
    contenedor_secundario.style.flexDirection = "row";
    contenedor_secundario.style.justifyContent = "center";
    contenedor_secundario.style.alignItems = "center";
    contenedor_secundario.style.gap = "50px"
    contenedor_secundario.style.marginTop = "20px"

    let contenedor_carrusel = document.createElement("div"); //contenedor carrusel con el banner text
    contenedor_carrusel.style.position = "relative";
    contenedor_carrusel.style.display = "flex";
    contenedor_carrusel.style.justifyContent = "center";
    contenedor_carrusel.style.alignItems = "center";
    contenedor_carrusel.style.width = "900px";
    contenedor_carrusel.style.height = "400px";

    let banner_texto = document.createElement("div");
    banner_texto.textContent = informacion[posicion];
    banner_texto.style.position = "absolute";
    banner_texto.style.bottom = "0px";
    banner_texto.style.backgroundColor = "rgba(253, 95, 95, 0.8)";
    banner_texto.style.color = "white";
    banner_texto.style.fontSize = "20px";
    banner_texto.style.boxSizing = "border-box";
    banner_texto.style.padding = "10px 20px";
    banner_texto.style.textAlign = "center";
    banner_texto.style.marginBottom = "30px";
    banner_texto.style.width = "100%";

    //estilos para los puntos
    let punto1 = document.createElement("img");
    punto1.width = tamaño_puntos;
    punto1.height = tamaño_puntos;
    punto1.src = punto_relleno;
    let punto2 = document.createElement("img");
    punto2.width = tamaño_puntos;
    punto2.height = tamaño_puntos;
    punto2.src = punto_vacio;
    let punto3 = document.createElement("img");
    punto3.width = tamaño_puntos;
    punto3.height = tamaño_puntos;
    punto3.src = punto_vacio;
    let punto4 = document.createElement("img");
    punto4.width = tamaño_puntos;
    punto4.height = tamaño_puntos;
    punto4.src = punto_vacio;
    let punto5 = document.createElement("img");
    punto5.width = tamaño_puntos;
    punto5.height = tamaño_puntos;
    punto5.src = punto_vacio;
    let punto6 = document.createElement("img");
    punto6.width = tamaño_puntos;
    punto6.height = tamaño_puntos;
    punto6.src = punto_vacio;

    // estilos para las imagenes
    let imagen_flecha_izquierda = document.createElement("img");
    imagen_flecha_izquierda.height = 50;
    imagen_flecha_izquierda.width = 50;
    let carrusel = document.createElement("img");
    carrusel.height = 400;
    carrusel.width = 900;
    let imagen_flecha_derecha = document.createElement("img");
    imagen_flecha_derecha.height = 50;
    imagen_flecha_derecha.width = 50;

    //asignación por defecto de las tags para las imagenes
    imagen_flecha_izquierda.src = flecha_izquierda;
    carrusel.src = imagenes[posicion];
    imagen_flecha_derecha.src = flecha_derecha;

    //asignamos los elementos del carrusel+texto_banner al contenedor carrusel
    contenedor_carrusel.appendChild(carrusel);
    contenedor_carrusel.appendChild(banner_texto);

    //asignar los elementos de las imagenes en el contenedor principal
    contenedor_principal.appendChild(imagen_flecha_izquierda);
    contenedor_principal.appendChild(contenedor_carrusel);
    contenedor_principal.appendChild(imagen_flecha_derecha);

    //asignar los elementos de los puntos al contenedor secundario
    contenedor_secundario.appendChild(punto1);
    contenedor_secundario.appendChild(punto2);
    contenedor_secundario.appendChild(punto3);
    contenedor_secundario.appendChild(punto4);
    contenedor_secundario.appendChild(punto5);
    contenedor_secundario.appendChild(punto6);

    //asignar los contenedores a la web
    document.body.appendChild(contenedor_principal);
    document.body.appendChild(contenedor_secundario);

    //comprobación de las imágenes con textos según interactuamos con las flechas
    imagen_flecha_izquierda.addEventListener("click", function(){
        posicion = posicion -1;
        carrusel.src = imagenes[posicion];
        punto1.src = punto_vacio;
        punto2.src = punto_vacio;
        punto3.src = punto_vacio;
        punto4.src = punto_vacio;
        punto5.src = punto_vacio;
        punto6.src = punto_vacio;

        if (posicion < 0){
            posicion = 5;
            carrusel.src = imagenes[posicion];
            banner_texto.textContent = informacion[posicion];
        }
        if (posicion === 0){
            punto1.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        } else if (posicion === 1){
            punto2.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        } else if (posicion === 2){
            punto3.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        } else if (posicion === 3){
            punto4.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        } else if (posicion === 4){
            punto5.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        } else if (posicion === 5){
            punto6.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        }
    });
    imagen_flecha_derecha.addEventListener("click", function(){
        posicion = posicion +1;
        carrusel.src = imagenes[posicion];
        punto1.src = punto_vacio;
        punto2.src = punto_vacio;
        punto3.src = punto_vacio;
        punto4.src = punto_vacio;
        punto5.src = punto_vacio;
        punto6.src = punto_vacio;

        if (posicion > 5){
            posicion = 0;
            carrusel.src = imagenes[posicion];
            banner_texto.textContent = informacion[posicion];
        }

        if (posicion === 0){
            punto1.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        } else if (posicion === 1){
            punto2.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        } else if (posicion === 2){
            punto3.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        } else if (posicion === 3){
            punto4.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        } else if (posicion === 4){
            punto5.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        } else if (posicion === 5){
            punto6.src = punto_relleno;
            banner_texto.textContent = informacion[posicion];
        }  
    });

    //comprobación para interactuar con los puntos y cambiar las imagenes con textos
    punto1.addEventListener("click", function(){
        punto1.src = punto_vacio;
        punto2.src = punto_vacio;
        punto3.src = punto_vacio;
        punto4.src = punto_vacio;
        punto5.src = punto_vacio;
        punto6.src = punto_vacio;

        punto1.src = punto_relleno;
        carrusel.src = imagenes[0];
        posicion = 0;
        banner_texto.textContent = informacion[posicion];
    });
    punto2.addEventListener("click", function(){
        punto1.src = punto_vacio;
        punto2.src = punto_vacio;
        punto3.src = punto_vacio;
        punto4.src = punto_vacio;
        punto5.src = punto_vacio;
        punto6.src = punto_vacio;

        punto2.src = punto_relleno;
        carrusel.src = imagenes[1];
        posicion = 1;
        banner_texto.textContent = informacion[posicion];
    });
    punto3.addEventListener("click", function(){
        punto1.src = punto_vacio;
        punto2.src = punto_vacio;
        punto3.src = punto_vacio;
        punto4.src = punto_vacio;
        punto5.src = punto_vacio;
        punto6.src = punto_vacio;

        punto3.src = punto_relleno;
        carrusel.src = imagenes[2];
        posicion = 2;
        banner_texto.textContent = informacion[posicion];
    });
    punto4.addEventListener("click", function(){
        punto1.src = punto_vacio;
        punto2.src = punto_vacio;
        punto3.src = punto_vacio;
        punto4.src = punto_vacio;
        punto5.src = punto_vacio;
        punto6.src = punto_vacio;

        punto4.src = punto_relleno;
        carrusel.src = imagenes[3];
        posicion = 3;
        banner_texto.textContent = informacion[posicion];
    });
    punto5.addEventListener("click", function(){
        punto1.src = punto_vacio;
        punto2.src = punto_vacio;
        punto3.src = punto_vacio;
        punto4.src = punto_vacio;
        punto5.src = punto_vacio;
        punto6.src = punto_vacio;

        punto5.src = punto_relleno;
        carrusel.src = imagenes[4];
        posicion = 4;
        banner_texto.textContent = informacion[posicion];
    });
    punto6.addEventListener("click", function(){
        punto1.src = punto_vacio;
        punto2.src = punto_vacio;
        punto3.src = punto_vacio;
        punto4.src = punto_vacio;
        punto5.src = punto_vacio;
        punto6.src = punto_vacio;

        punto6.src = punto_relleno;
        carrusel.src = imagenes[5];
        posicion = 5;
        banner_texto.textContent = informacion[posicion];
    });

});