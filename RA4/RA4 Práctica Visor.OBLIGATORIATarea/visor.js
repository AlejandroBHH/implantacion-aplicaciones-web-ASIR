document.addEventListener("DOMContentLoaded", function(){
    let imagenes = ["img/foto1.jpg",
        "img/foto2.jpg",
        "img/foto3.jpg",
        "img/foto4.jpg",
        "img/foto5.jpg",
        "img/foto6.jpg",
    ];

    let foto_real = [];

    let altura = 100;
    let anchura = 200;

    let contenedor_principal = document.createElement("div"); //contenedor para imagenes
    contenedor_principal.style.display = "flex";
    contenedor_principal.style.flexDirection = "column";
    contenedor_principal.style.justifyContent = "center";
    contenedor_principal.style.alignItems = "center";
    contenedor_principal.style.gap = "10px"
    contenedor_principal.style.marginTop = "100px"

    // estilos para las imagenes principales
    let imagen_principal = document.createElement("img");
    imagen_principal.height = 500;
    imagen_principal.width = 1000;
    imagen_principal.src = imagenes[0];
    imagen_principal.style.maxWidth = "90vw";
    imagen_principal.style.objectFit = "cover";

    let contenedor_secundario = document.createElement("div"); //contenedor para puntos
    contenedor_secundario.style.display = "flex";
    contenedor_secundario.style.justifyContent = "center";
    contenedor_secundario.style.alignItems = "center";
    contenedor_secundario.style.gap = "25px"
    contenedor_secundario.style.maxWidth = "900px";
    contenedor_secundario.style.width = "90vw";

    //estilos para las imagenes secundarias
    imagenes.forEach((fuente, index) =>{
        let foto = document.createElement("img");
        foto.src = fuente;
        foto.width = anchura * 0.7;
        foto.height = altura * 0.7;
        contenedor_secundario.appendChild(foto);
        foto_real.push(foto);
        if (index === 0) {
            foto.style.border = "3px solid red";  // mark first thumbnail as selected
        } else {
            foto.style.border = "3px solid transparent"; // others unselected
        }

        foto.addEventListener("click", function(){
            imagen_principal.src = fuente;
            foto_real.forEach((mi_foto_real =>{
                mi_foto_real.style.border = "3px solid transparent";
            }));
            foto.style.border = "3px solid red";
        });
    });

    //asignar los elementos de las imagenes en el contenedor principal
    contenedor_principal.appendChild(imagen_principal);
    contenedor_principal.appendChild(contenedor_secundario);

    //asignar los contenedores a la web
    document.body.appendChild(contenedor_principal);
});