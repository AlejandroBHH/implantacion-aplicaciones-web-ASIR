document.addEventListener("DOMContentLoaded", function(){
        let imagenes = [
        "media/default.gif",
        "media/coliseo-romano3.jpg",
        "media/articulos-808572.jpg",
        "media/francia-torre-eiffel-paris.jpg",
        "media/portugal.jpg",
        "media/sevilla.jpg"
    ];

    let seleccion = document.querySelector("select");
    let espacio_imagen = document.getElementById("imagen_destino");
    let respuesta = document.getElementById("respuesta");
    
    respuesta.innerText="Elija su destino";
    espacio_imagen.setAttribute("src", imagenes[0]);
    
    seleccion.addEventListener("change", function(){
        let index = seleccion.selectedIndex;

        espacio_imagen.setAttribute("src", imagenes[index]);

        if (index === 0){
            respuesta.innerText ="Elija su destino";
        } else {
            respuesta.innerText = "Su destino es: " + seleccion.options[index].text;
        }
    });
});