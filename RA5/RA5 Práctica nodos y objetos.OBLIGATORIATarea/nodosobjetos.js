document.addEventListener("DOMContentLoaded", function(){
    let alumnos = [
        {
        nombre: "Cristina",
        apellido: "López",
        edad: 24,
        curso: "2º DAM",
        foto: "/Práctica_Objetos_2/img/alumna1.jpg",
        mostrar_info:function(){
            const imagen = document.createElement("img");
            imagen.style.height = "200px";
            imagen.style.width = "200px";
            imagen.src = this.foto;
            const parrafo = document.createElement("p");
            parrafo.innerHTML = "<strong>Nombre:</strong><font color='red'> "+this.nombre+"<br></font color='red'>"+
            "<strong>Apellido:</strong><font color='red'> "+this.apellido+"<br></font color='red'>"+
            "<strong>Edad:</strong><font color='red'> "+this.edad+"<br></font color='red'>"+
            "<strong>Curso:</strong><font color='red'> "+this.curso+"</font color='red'>";
            const contenedor = document.createElement("div");
            contenedor.appendChild(imagen);
            contenedor.appendChild(parrafo);
            const contenedor_1 = document.getElementById("Contenedor_1");
            contenedor_1.appendChild(contenedor);
            }
        },
        {
            nombre: "Manuel",
            apellido: "Guzmán",
            edad: 18,
            curso: "1º DAM",
            foto: "/Práctica_Objetos_2/img/alumno2.png",
            mostrar_info:function(){
                const imagen = document.createElement("img");
                imagen.style.height = "200px";
                imagen.style.width = "200px";
                imagen.src = this.foto;
                const parrafo = document.createElement("p");
                parrafo.innerHTML = "<strong>Nombre:</strong><font color='red'> "+this.nombre+"<br></font color='red'>"+
                "<strong>Apellido:</strong><font color='red'> "+this.apellido+"<br></font color='red'>"+
                "<strong>Edad:</strong><font color='red'> "+this.edad+"<br></font color='red'>"+
                "<strong>Curso:</strong><font color='red'> "+this.curso+"</font color='red'>";
                const contenedor = document.createElement("div");
                contenedor.appendChild(imagen);
                contenedor.appendChild(parrafo);
                const contenedor_1 = document.getElementById("Contenedor_1");
                contenedor_1.appendChild(contenedor);
            },
        },
        {
            nombre: "Mónica",
            apellido: "Ariza",
            edad: 26,
            curso: "2º DAM",
            foto: "/Práctica_Objetos_2/img/alumna3.jpg",
            mostrar_info:function(){
                const imagen = document.createElement("img");
                imagen.style.height = "200px";
                imagen.style.width = "200px";
                imagen.src = this.foto;
                const parrafo = document.createElement("p");
                parrafo.innerHTML = "<strong>Nombre:</strong><font color='red'> "+this.nombre+"<br></font color='red'>"+
                "<strong>Apellido:</strong><font color='red'> "+this.apellido+"<br></font color='red'>"+
                "<strong>Edad:</strong><font color='red'> "+this.edad+"<br></font color='red'>"+
                "<strong>Curso:</strong><font color='red'> "+this.curso+"</font color='red'>";
                const contenedor = document.createElement("div");
                contenedor.appendChild(imagen);
                contenedor.appendChild(parrafo);
                const contenedor_1 = document.getElementById("Contenedor_1");
                contenedor_1.appendChild(contenedor);
            },
        },
        {
        nombre: "Cristina",
        apellido: "López",
        edad: 24,
        curso: "2º DAM",
        foto: "/Práctica_Objetos_2/img/alumna1.jpg",
        mostrar_info:function(){
            const imagen = document.createElement("img");
            imagen.style.height = "200px";
            imagen.style.width = "200px";
            imagen.src = this.foto;
            const parrafo = document.createElement("p");
            parrafo.innerHTML = "<strong>Nombre:</strong><font color='red'> "+this.nombre+"<br></font color='red'>"+
            "<strong>Apellido:</strong><font color='red'> "+this.apellido+"<br></font color='red'>"+
            "<strong>Edad:</strong><font color='red'> "+this.edad+"<br></font color='red'>"+
            "<strong>Curso:</strong><font color='red'> "+this.curso+"</font color='red'>";
            const contenedor = document.createElement("div");
            contenedor.appendChild(imagen);
            contenedor.appendChild(parrafo);
            const contenedor_1 = document.getElementById("Contenedor_2");
            contenedor_1.appendChild(contenedor);
            }
        },
        {
            nombre: "Manuel",
            apellido: "Guzmán",
            edad: 18,
            curso: "1º DAM",
            foto: "/Práctica_Objetos_2/img/alumno2.png",
            mostrar_info:function(){
                const imagen = document.createElement("img");
                imagen.style.height = "200px";
                imagen.style.width = "200px";
                imagen.src = this.foto;
                const parrafo = document.createElement("p");
                parrafo.innerHTML = "<strong>Nombre:</strong> <font color='red'>"+this.nombre+"<br></font color='red'>"+
                "<strong>Apellido:</strong><font color='red'> "+this.apellido+"<br></font color='red'>"+
                "<strong>Edad:</strong><font color='red'> "+this.edad+"<br></font color='red'>"+
                "<strong>Curso:</strong><font color='red'> "+this.curso+"</font color='red'>";
                const contenedor = document.createElement("div");
                contenedor.appendChild(imagen);
                contenedor.appendChild(parrafo);
                const contenedor_1 = document.getElementById("Contenedor_2");
                contenedor_1.appendChild(contenedor);
            },
        },
        {
            nombre: "Mónica",
            apellido: "Ariza",
            edad: 26,
            curso: "2º DAM",
            foto: "/Práctica_Objetos_2/img/alumna3.jpg",
            mostrar_info:function(){
                const imagen = document.createElement("img");
                imagen.style.height = "200px";
                imagen.style.width = "200px";
                imagen.src = this.foto;
                const parrafo = document.createElement("p");
                parrafo.innerHTML = "<strong>Nombre:</strong><font color='red'> "+this.nombre+"<br></font color='red'>"+
                "<strong>Apellido:</strong><font color='red'> "+this.apellido+"<br></font color='red'>"+
                "<strong>Edad:</strong><font color='red'> "+this.edad+"<br></font color='red'>"+
                "<strong>Curso:</strong><font color='red'> "+this.curso+"</font color='red'>";
                const contenedor = document.createElement("div");
                contenedor.appendChild(imagen);
                contenedor.appendChild(parrafo);
                const contenedor_1 = document.getElementById("Contenedor_2");
                contenedor_1.appendChild(contenedor);
            },
        },
    ];
    alumnos.forEach(estudiante => {
        estudiante.mostrar_info();
    });
});