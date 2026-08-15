// ==========================================================
// EXPLORADORES DE LA LECTURA NICA
// SCRIPT.JS - MISIÓN 1
// ==========================================================


// ==========================================================
// 1. PANTALLAS
// ==========================================================

const pantallas = document.querySelectorAll(".pantalla");


// ==========================================================
// 2. MOSTRAR UNA PANTALLA
// ==========================================================

function mostrarPantalla(id) {

    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    const pantalla = document.getElementById(id);

    if (pantalla) {
        pantalla.classList.add("activa");
    }
}


// ==========================================================
// 3. ELEMENTOS PRINCIPALES
// ==========================================================

const btnComenzar = document.getElementById("btnComenzar");
const btnEntrar = document.getElementById("btnEntrar");
const btnMapa = document.getElementById("btnMapa");
const btnRivas = document.getElementById("btnRivas");
const volverMenu = document.getElementById("volverMenu");

const btnComenzarLectura =
    document.getElementById("btnComenzarLectura");

const btnTerminarLectura =
    document.getElementById("btnTerminarLectura");

const btnComprobarReto1 =
    document.getElementById("btnComprobarReto1");

const btnContinuarReto2 =
    document.getElementById("btnContinuarReto2");

const btnChat =
    document.getElementById("btnChat");

const btnMeme =
    document.getElementById("btnMeme");

const btnEntregarChat =
    document.getElementById("btnEntregarChat");

const btnCrearMeme =
    document.getElementById("btnCrearMeme");

const btnComprobarReto3 =
    document.getElementById("btnComprobarReto3");

const btnVolverMapa =
    document.getElementById("btnVolverMapa");

const btnLeon =
    document.getElementById("btnLeon");


// ==========================================================
// 4. REGISTRO DEL JUGADOR
// ==========================================================

const nombreJugador =
    document.getElementById("nombreJugador");

const saludoJugador =
    document.getElementById("saludoJugador");


// ==========================================================
// 5. COMENZAR
// ==========================================================

btnComenzar.addEventListener("click", function() {

    mostrarPantalla("registro");

});


// ==========================================================
// 6. ENTRAR
// ==========================================================

btnEntrar.addEventListener("click", function() {

    const nombre =
        nombreJugador.value.trim();

    if (nombre === "") {

        alert("Por favor, escribe tu nombre.");

        return;
    }

    localStorage.setItem(
        "nombreJugador",
        nombre
    );

    if (saludoJugador) {

        saludoJugador.textContent =
            "¡Hola, " +
            nombre +
            "! Prepárate para explorar Nicaragua.";

    }

    mostrarPantalla("menu");

});


// ==========================================================
// 7. IR AL MAPA
// ==========================================================

btnMapa.addEventListener("click", function() {

    mostrarPantalla("mapa");

});


// ==========================================================
// 8. ENTRAR A RIVAS
// ==========================================================

btnRivas.addEventListener("click", function() {

    mostrarPantalla("mision1");

});


// ==========================================================
// 9. VOLVER AL MENÚ
// ==========================================================

volverMenu.addEventListener("click", function() {

    mostrarPantalla("menu");

});


// ==========================================================
// 10. COMENZAR LECTURA
// ==========================================================

btnComenzarLectura.addEventListener("click", function() {

    mostrarPantalla("lectura1");

});


// ==========================================================
// 11. TERMINAR LECTURA
// ==========================================================

btnTerminarLectura.addEventListener("click", function() {

    mostrarPantalla("reto1");

});


// ==========================================================
// 12. RETO 1 — SELECCIÓN MÚLTIPLE
// ==========================================================

btnComprobarReto1.addEventListener("click", function() {

    const respuestasCorrectas = {

        pregunta1: "b",
        pregunta2: "b",
        pregunta3: "b",
        pregunta4: "a",
        pregunta5: "a"

    };


    let puntos = 0;


    for (const pregunta in respuestasCorrectas) {

        const seleccion =
            document.querySelector(
                'input[name="' +
                pregunta +
                '"]:checked'
            );


        if (
            seleccion &&
            seleccion.value ===
            respuestasCorrectas[pregunta]
        ) {

            puntos++;

        }

    }


    const resultado =
        document.getElementById(
            "resultadoReto1"
        );


    if (puntos === 5) {

        resultado.textContent =
            "🎉 ¡Excelente! Respondiste correctamente las 5 preguntas.";

        resultado.style.color = "green";


        btnContinuarReto2.style.display =
            "inline-block";

    } else {

        resultado.textContent =
            "❌ Obtuviste " +
            puntos +
            " de 5. Revisa la lectura e inténtalo nuevamente.";

        resultado.style.color = "red";

    }

});


// ==========================================================
// 13. PASAR AL RETO 2
// ==========================================================

btnContinuarReto2.addEventListener("click", function() {

    mostrarPantalla("reto2");

});


// ==========================================================
// 14. RETO 2 — CHAT
// ==========================================================

btnChat.addEventListener("click", function() {

    mostrarPantalla("chat");

});


// ==========================================================
// 15. RETO 2 — MEME
// ==========================================================

btnMeme.addEventListener("click", function() {

    mostrarPantalla("meme");

});


// ==========================================================
// 16. ENTREGAR CHAT
// ==========================================================

btnEntregarChat.addEventListener("click", function() {

    const campos = [

        document.getElementById("chat1"),
        document.getElementById("chat2"),
        document.getElementById("chat3"),
        document.getElementById("chat4"),
        document.getElementById("chatFinal")

    ];


    const completos =
        campos.every(function(campo) {

            return campo.value.trim() !== "";

        });


    if (!completos) {

        alert(
            "Completa todos los mensajes antes de entregar tu chat."
        );

        return;

    }


    alert(
        "🎉 ¡Reto 2 completado!"
    );


    mostrarPantalla("reto3");

});


// ==========================================================
// 17. SELECCIÓN DE IMAGEN DEL MEME
// ==========================================================

const botonesImagenMeme =
    document.querySelectorAll(".imagenMeme");


botonesImagenMeme.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const imagen =
            boton.getAttribute(
                "data-imagen"
            );


        document.getElementById(
            "imagenSeleccionada"
        ).textContent = imagen;

    });

});


// ==========================================================
// 18. VISTA PREVIA DEL MEME
// ==========================================================

const memeSuperior =
    document.getElementById(
        "memeSuperior"
    );

const memeInferior =
    document.getElementById(
        "memeInferior"
    );


if (memeSuperior) {

    memeSuperior.addEventListener(
        "input",
        function() {

            document.getElementById(
                "textoMemeSuperior"
            ).textContent =
                memeSuperior.value ||
                "TU TEXTO AQUÍ";

        }
    );

}


if (memeInferior) {

    memeInferior.addEventListener(
        "input",
        function() {

            document.getElementById(
                "textoMemeInferior"
            ).textContent =
                memeInferior.value ||
                "TU TEXTO AQUÍ";

        }
    );

}


// ==========================================================
// 19. CREAR MEME
// ==========================================================

btnCrearMeme.addEventListener("click", function() {

    const imagen =
        document.getElementById(
            "imagenSeleccionada"
        ).textContent;

    const superior =
        memeSuperior.value.trim();

    const inferior =
        memeInferior.value.trim();


    if (
        imagen === "Ninguna" ||
        superior === "" ||
        inferior === ""
    ) {

        alert(
            "Selecciona una imagen y escribe los dos textos."
        );

        return;

    }


    alert(
        "😂 ¡Tu meme está listo! ¡Reto 2 completado!"
    );


    mostrarPantalla("reto3");

});


// ==========================================================
// 20. RETO 3 — ORDENAR LA HISTORIA
// ==========================================================

const eventos =
    document.querySelectorAll(".evento");

const ordenSeleccionado =
    document.getElementById(
        "ordenSeleccionado"
    );


let orden = [];


eventos.forEach(function(evento) {

    evento.addEventListener(
        "click",
        function() {

            const numero =
                evento.getAttribute(
                    "data-orden"
                );


            if (orden.includes(numero)) {

                return;

            }


            orden.push(numero);


            evento.disabled = true;


            const posicion =
                orden.length;


            const elemento =
                document.createElement(
                    "span"
                );


            elemento.textContent =
                posicion +
                ". " +
                evento.textContent;


            ordenSeleccionado.appendChild(
                elemento
            );

        }
    );

});


// ==========================================================
// 21. COMPROBAR RETO 3
// ==========================================================

btnComprobarReto3.addEventListener(
    "click",
    function() {

        const resultado =
            document.getElementById(
                "resultadoReto3"
            );


        if (orden.length !== 5) {

            resultado.textContent =
                "⚠️ Debes ordenar los 5 acontecimientos.";

            resultado.style.color =
                "red";

            return;

        }


        const ordenCorrecto = [
            "1",
            "2",
            "3",
            "4",
            "5"
        ];


        const correcto =
            orden.every(
                function(valor, indice) {

                    return valor ===
                        ordenCorrecto[indice];

                }
            );


        if (correcto) {

            resultado.textContent =
                "🎉 ¡Excelente! Ordenaste correctamente la historia.";

            resultado.style.color =
                "green";


            setTimeout(
                function() {

                    mostrarPantalla(
                        "felicitacion"
                    );

                },
                1000
            );


        } else {

            resultado.textContent =
                "❌ El orden no es correcto. Lee nuevamente la leyenda e inténtalo.";

            resultado.style.color =
                "red";

        }

    }
);


// ==========================================================
// 22. VOLVER AL MAPA
// ==========================================================

btnVolverMapa.addEventListener(
    "click",
    function() {

        localStorage.setItem(
            "mision1Completada",
            "true"
        );


        if (btnLeon) {

            btnLeon.disabled = false;

            btnLeon.textContent =
                "🔓 León";

        }


        const estadoMapa =
            document.getElementById(
                "estadoMapa"
            );


        if (estadoMapa) {

            estadoMapa.textContent =
                "🎉 ¡Rivas completado! León está desbloqueado.";

        }


        mostrarPantalla("mapa");

    }
);


// ==========================================================
// 23. RECUPERAR PROGRESO
// ==========================================================

const misionCompletada =
    localStorage.getItem(
        "mision1Completada"
    );


if (
    misionCompletada === "true"
) {

    if (btnLeon) {

        btnLeon.disabled = false;

        btnLeon.textContent =
            "🔓 León";

    }

}


// ==========================================================
// FIN DEL SCRIPT
// ==========================================================