let peticion = new XMLHttpRequest();
peticion.onreadystatechange = continuar;
peticion.open("GET", "cartelera.xml");
peticion.send();

function continuar() {
    if (peticion.readyState == 4) {
        //document.getElementById("respuesta").innerHTML = "";
        if (peticion.status == 200) {
            //console.log("dentro del ajax...")
            let peliculas = peticion.responseXML;
            console.log(peliculas);
            let pelis = peliculas.querySelectorAll("pelicula");
            console.log(pelis.length);

            for (let i = 0; i < pelis.length; i++) {
                let cromo = document.createElement("div");
                cromo.classList.add("col-6");
                let foto_cartel = document.createElement("img");
                foto_cartel.src = "images/" + pelis[i].querySelector("cartel").textContent;
                let titulo_peli = document.createElement("h3");
                titulo_peli.innerText = pelis[i].querySelector("titulo").textContent;
                cromo.append(foto_cartel, titulo_peli);
                document.querySelector("#cartel").appendChild(cromo);

                cromo.addEventListener("click", function() {
                    document.querySelector("#titulo").innerHTML = pelis[i].querySelector("titulo").textContent;
                    document.querySelector("#direccion").innerHTML = "Direccion: " + pelis[i].querySelector("direccion").textContent;
                    document.querySelector("#duracion").innerHTML = "Duracion: " + pelis[i].querySelector("duracion").textContent;
                    document.querySelector("#nacionalidad").innerHTML = "Nacionalidad: " + pelis[i].querySelector("nacionalidad").textContent;
                    document.querySelector("#artistas").innerHTML = "Artistas: " + pelis[i].querySelector("artistas").textContent;
                    document.querySelector("#genero").innerHTML = "Género: " + pelis[i].querySelector("genero").textContent;
                    document.querySelector("#sinopsis").innerHTML = "Sinopsis: " + pelis[i].querySelector("sinopsis").textContent;
                    document.querySelector("#video").src = "https://www.youtube.com/embed/" + pelis[i].querySelector("video").textContent;
                })

            }

            //cargamos los detalles de la pelicula 1
            document.querySelector("#titulo").innerHTML = pelis[0].querySelector("titulo").textContent;
            document.querySelector("#direccion").innerHTML = "Direccion: " + pelis[0].querySelector("direccion").textContent;
            document.querySelector("#duracion").innerHTML = "Duracion: " + pelis[0].querySelector("duracion").textContent;
            document.querySelector("#nacionalidad").innerHTML = "Nacionalidad: " + pelis[0].querySelector("nacionalidad").textContent;
            document.querySelector("#artistas").innerHTML = "Artistas: " + pelis[0].querySelector("artistas").textContent;
            document.querySelector("#genero").innerHTML = "Género: " + pelis[0].querySelector("genero").textContent;
            document.querySelector("#sinopsis").innerHTML = "Sinopsis: " + pelis[0].querySelector("sinopsis").textContent;
            document.querySelector("#video").src = "https://www.youtube.com/embed/" + pelis[0].querySelector("video").textContent;
        }
    }
}