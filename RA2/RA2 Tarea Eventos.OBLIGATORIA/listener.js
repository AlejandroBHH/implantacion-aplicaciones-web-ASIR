let Nombres = [];
let Apellido_1 = [];
let Apellido_2 = [];
let Asignatura_1 = [];
let Asignatura_2 = [];
let Asignatura_3 = [];
let Nota_1 = [];
let Nota_2 = [];
let Nota_3 = [];
let Media = [];

document.addEventListener("DOMContentLoaded", function(){
    let formulario = document.getElementById("formulario_estudiante");
    let resultado = document.getElementById("salida");
    let finalizar_formulario = document.getElementById("finalizar");

    formulario.addEventListener("submit", function(evento){
        evento.preventDefault();

        Nombres.push(document.getElementById("nombre").value.trim());
        Apellido_1.push(document.getElementById("apellido1").value.trim());
        Apellido_2.push(document.getElementById("apellido2").value.trim());
        Asignatura_1.push(document.getElementById("asignatura1").value.trim());
        Asignatura_2.push(document.getElementById("asignatura2").value.trim());
        Asignatura_3.push(document.getElementById("asignatura3").value.trim());
        Nota_1.push(document.getElementById("nota1").value.trim());
        Nota_2.push(document.getElementById("nota2").value.trim());
        Nota_3.push(document.getElementById("nota3").value.trim());

        formulario.reset();

        window.alert("Alumno añadido!");
    })

    finalizar_formulario.addEventListener("click", function(){
        if (Nombres.length === 0) {
            alert("No hay alumnos registrados");
            return;
        }
        document.write("<h2>Lista de alumnos y sus notas</h2><br>");
        for (let i = 0; i < Nombres.length; i++){
            let n1 = Number(Nota_1[i]);
            let n2 = Number(Nota_2[i]);
            let n3 = Number(Nota_3[i]);

            let media = (n1 + n2 + n3)/3;

            let calificacion = "";
            if (media <= 4.9){
                calificacion = "SUSPENSO";
            } else if (media >= 5 && media <= 6.9){
                calificacion = "APROBADO";
            } else if (media >= 7 && media <= 8.9){
                calificacion = "NOTABLE";
            } else if (media >= 9 && media <= 9.9){
                calificacion = "SOBRESALIENTE";
            } else if (media >= 10){
                calificacion = "MATRÍCULA DE HONOR";
            }

            document.write(
                `<p><strong>${Nombres[i]} ${Apellido_1[i]} ${Apellido_2[i]}</strong><br>` +
                `${Asignatura_1[i]}: ${n1}<br>` +
                `${Asignatura_2[i]}: ${n2}<br>` +
                `${Asignatura_3[i]}: ${n3}<br>` +
                `<b>Promedio: ${media} </b> | ` + `<b>Calificación: ${calificacion}</b></p><hr>`
            );
        }
    });
})
