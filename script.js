// ==========================================================
// EXPLORADORES DE LA LECTURA NICA
// SCRIPT.JS
// MISIÓN 1 + MISIÓN 2
// ==========================================================


// ==========================================================
// 1. PANTALLAS
// ==========================================================

const pantallas = document.querySelectorAll(".pantalla");


// ==========================================================
// 2. MOSTRAR PANTALLA
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
// 3. CONECTAR BOTONES DE FORMA SEGURA
// ==========================================================

function conectarBoton(id, funcion) {

    const boton = document.getElementById(id);

    if (boton) {
        boton.addEventListener("click", funcion);
    }
}


// ==========================================================
// 4. NOMBRE DEL JUGADOR
// ==========================================================

const nombreJugador =
    document.getElementById("nombreJugador");

const saludoJugador =
    document.getElementById("saludoJugador");


// ==========================================================
// 5. COMENZAR
// ==========================================================

conectarBoton("btnComenzar", function() {

    mostrarPantalla("registro");

});


// ==========================================================
// 6. ENTRAR
// ==========================================================

conectarBoton("btnEntrar", function() {

    const nombre = nombreJugador
        ? nombreJugador.value.trim()
        : "";

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

conectarBoton("btnMapa", function() {

    mostrarPantalla("mapa");

});


// ==========================================================
// 8. VOLVER AL MENÚ
// ==========================================================

conectarBoton("volverMenu", function() {

    mostrarPantalla("menu");

});


// ==========================================================
// 9. PROGRESO
// ==========================================================

let mision1Completada =
    localStorage.getItem("mision1Completada") === "true";

let mision2Completada =
    localStorage.getItem("mision2Completada") === "true";


// ==========================================================
// 10. ACTUALIZAR MAPA
// ==========================================================

function actualizarMapa() {

    const btnLeon =
        document.getElementById("btnLeon");

    if (btnLeon) {

        if (mision1Completada) {

            btnLeon.disabled = false;
            btnLeon.textContent = "🌺 León";

        } else {

            btnLeon.disabled = true;
            btnLeon.textContent = "🔒 León";

        }

    }

}


// ==========================================================
// 11. ACTUALIZAR AL CARGAR
// ==========================================================

actualizarMapa();


// ==========================================================
// ==========================================================
// MISIÓN 1 — RIVAS
// ==========================================================
// ==========================================================


// ==========================================================
// 12. ENTRAR A RIVAS
// ==========================================================

conectarBoton("btnRivas", function() {

    mostrarPantalla("tarjetaMision1");

});


// ==========================================================
// 13. COMENZAR LECTURA 1
// ==========================================================

conectarBoton("btnComenzarLectura", function() {

    mostrarPantalla("lectura1");

});


// ==========================================================
// 14. TERMINAR LECTURA 1
// ==========================================================

conectarBoton("btnTerminarLectura", function() {

    mostrarPantalla("reto1");

});


//// ==========================================================
// 15. RETO 1 MISIÓN 1
// ==========================================================

// ==========================================================
// 15. RETO 1 MISIÓN 1 — SELECCIÓN MÚLTIPLE
// ==========================================================

conectarBoton("btnComprobarReto1", function() {

    const respuestasCorrectas = {
        m1p1: "B",
        m1p2: "B",
        m1p3: "B",
        m1p4: "A",
        m1p5: "A"
    };

    let puntos = 0;

    for (const pregunta in respuestasCorrectas) {

        const respuesta = document.querySelector(
            'input[name="' + pregunta + '"]:checked'
        );

        if (
            respuesta &&
            respuesta.value === respuestasCorrectas[pregunta]
        ) {
            puntos++;
        }
    }

    const resultado =
        document.getElementById("resultadoReto1");

    if (puntos === 5) {

        resultado.textContent =
            "🎉 ¡Excelente! Respondiste correctamente las 5 preguntas.";

        resultado.style.color = "green";

        // PASAR AL RETO 2
        setTimeout(function() {
            mostrarPantalla("reto2");
        }, 500);

    } else {

        resultado.textContent =
            "❌ Obtuviste " +
            puntos +
            " de 5. Revisa la leyenda e inténtalo nuevamente.";

        resultado.style.color = "red";
    }

});

// ==========================================================
// 16. RETO 2 — CHAT
// ==========================================================

conectarBoton("btnChat", function() {

    mostrarPantalla("chat");

});


// ==========================================================
// 17. RETO 2 — MEME
// ==========================================================

conectarBoton("btnMeme", function() {

    mostrarPantalla("meme");

});


// ==========================================================
// 18. ENTREGAR CHAT
// ==========================================================

conectarBoton("btnEntregarChat", function() {

    const campos = [
        "chat1",
        "chat2",
        "chat3",
        "chat4",
        "chatFinal"
    ];

    let completos = true;

    campos.forEach(function(id) {

        const campo =
            document.getElementById(id);

        if (
            !campo ||
            campo.value.trim() === ""
        ) {

            completos = false;

        }

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
// 19. CREAR MEME
// ==========================================================

conectarBoton("btnCrearMeme", function() {

    const superior =
        document.getElementById("memeSuperior");

    const inferior =
        document.getElementById("memeInferior");

    if (!superior || !inferior) {

        return;
    }

    if (
        superior.value.trim() === "" ||
        inferior.value.trim() === ""
    ) {

        alert(
            "Escribe el texto superior y el texto inferior."
        );

        return;
    }

    alert(
        "😂 ¡Tu meme está listo!"
    );

    mostrarPantalla("reto3");

});


// ==========================================================
// 20. RETO 3 MISIÓN 1
// ==========================================================

conectarBoton("btnComprobarReto3", function() {

    alert(
        "🧩 ¡Reto 3 completado!\n\n" +
        "Has organizado correctamente la historia."
    );

    mision1Completada = true;

    localStorage.setItem(
        "mision1Completada",
        "true"
    );

    actualizarMapa();

    mostrarPantalla("felicitacion");

});


// ==========================================================
// 21. VOLVER AL MAPA
// ==========================================================

conectarBoton("btnVolverMapa", function() {

    actualizarMapa();

    mostrarPantalla("mapa");

});


// ==========================================================
// ==========================================================
// MISIÓN 2 — LEÓN
// ==========================================================
// ==========================================================


// ==========================================================
// 22. ENTRAR A LEÓN
// ==========================================================

conectarBoton("btnLeon", function() {

    if (!mision1Completada) {

        alert(
            "🔒 Debes completar la Misión 1 para desbloquear León."
        );

        return;
    }

    mostrarPantalla("tarjetaMision2");

});


// ==========================================================
// 23. COMENZAR MISIÓN 2
// ==========================================================

conectarBoton("btnComenzarMision2", function() {

    mostrarPantalla("lectura2");

});


// ==========================================================
// 24. TERMINAR LECTURA 2
// ==========================================================

conectarBoton("btnTerminarLectura2", function() {

    mostrarPantalla("reto1Mision2");

});


// ==========================================================
// 25. RETO 1 MISIÓN 2
// ==========================================================

const respuestasMision2 = {

    p1: "B",
    p2: "C",
    p3: "B",
    p4: "C",
    p5: "B"

};


conectarBoton(
    "btnComprobarReto1Mision2",
    function() {

        let puntos = 0;

        for (
            let i = 1;
            i <= 5;
            i++
        ) {

            const respuesta =
                document.querySelector(
                    'input[name="p' +
                    i +
                    '"]:checked'
                );

            if (
                respuesta &&
                respuesta.value ===
                respuestasMision2["p" + i]
            ) {

                puntos++;

            }

        }

        if (puntos < 5) {

            alert(
                "Obtuviste " +
                puntos +
                " de 5.\n\n" +
                "Lee nuevamente el cuento y vuelve a intentarlo."
            );

            return;
        }

        alert(
            "🎉 ¡Reto 1 completado!\n\n" +
            "5 de 5 respuestas correctas."
        );

        mostrarPantalla("reto2Mision2");

    }
);


// ==========================================================
// 26. RETO 2 — DIARIO DE LA ROSA
// ==========================================================

conectarBoton(
    "btnGuardarDiario",
    function() {

        const diario =
            document.getElementById("diarioRosa");

        if (
            !diario ||
            diario.value.trim() === ""
        ) {

            alert(
                "🌹 Escribe primero el diario de la rosa."
            );

            return;
        }

        alert(
            "✒️ ¡Diario guardado!\n\n" +
            "Has expresado lo que pudo sentir la rosa."
        );

        mostrarPantalla("reto3Mision2");

    }
);


// ==========================================================
// 27. RETO 2 — CÓMIC
// ==========================================================

conectarBoton(
    "btnGuardarComic",
    function() {

        const escenas = [
            "comic1",
            "comic2",
            "comic3"
        ];

        let completos = true;

        escenas.forEach(function(id) {

            const campo =
                document.getElementById(id);

            if (
                !campo ||
                campo.value.trim() === ""
            ) {

                completos = false;

            }

        });

        if (!completos) {

            alert(
                "🎨 Completa las tres escenas del cómic."
            );

            return;
        }

        alert(
            "🎨 ¡Cómic guardado!\n\n" +
            "Has creado tus propios diálogos."
        );

        mostrarPantalla("reto3Mision2");

    }
);


// ==========================================================
// 28. ROMPECABEZAS
// ==========================================================

let secuenciaMision2 = [];

const piezas =
    document.querySelectorAll(".pieza");


piezas.forEach(function(pieza) {

    pieza.addEventListener(
        "click",
        function() {

            const posicion =
                Number(
                    pieza.getAttribute(
                        "data-posicion"
                    )
                );

            if (
                secuenciaMision2.includes(
                    posicion
                )
            ) {

                return;
            }

            secuenciaMision2.push(
                posicion
            );

            pieza.style.opacity = "0.6";

            const pantalla =
                document.getElementById(
                    "secuenciaSeleccionada"
                );

            if (pantalla) {

                pantalla.textContent =
                    "Orden seleccionado: " +
                    secuenciaMision2.join(
                        " → "
                    );

            }

        }
    );

});


// ==========================================================
// 29. COMPROBAR ROMPECABEZAS
// ==========================================================

conectarBoton(
    "btnComprobarRompecabezas",
    function() {

        const correcta = [
            1,
            2,
            3,
            4,
            5,
            6
        ];

        const coincide =
            secuenciaMision2.length === 6 &&
            secuenciaMision2.every(
                function(valor, indice) {

                    return valor ===
                        correcta[indice];

                }
            );

        if (!coincide) {

            alert(
                "🧩 El orden no es correcto.\n\n" +
                "Piensa en cómo sucedieron los acontecimientos."
            );

            return;
        }


        const respuestaMoraleja =
            prompt(
                "🎉 ¡Rompecabezas completado!\n\n" +

                "¿Cuál es una enseñanza que podemos obtener " +
                "de la historia de la rosa?\n\n" +

                "A) Debemos tomar decisiones sin pensar.\n" +

                "B) La apariencia es lo único importante.\n" +

                "C) Antes de decidir debemos reflexionar sobre " +
                "lo que deseamos y sus consecuencias.\n" +

                "D) Siempre debemos hacer lo que otros aconsejan.\n\n" +

                "Escribe A, B, C o D:"
            );


        if (
            respuestaMoraleja &&
            respuestaMoraleja
                .trim()
                .toUpperCase() === "C"
        ) {

            alert(
                "🌟 ¡Excelente!\n\n" +
                "Comprendiste la enseñanza del cuento."
            );

            completarMision2();

        } else {

            alert(
                "La respuesta no es correcta.\n\n" +
                "Piensa en la decisión que tomó la rosa."
            );

        }

    }
);


// ==========================================================
// 30. COMPLETAR MISIÓN 2
// ==========================================================

function completarMision2() {

    mision2Completada = true;

    localStorage.setItem(
        "mision2Completada",
        "true"
    );

    actualizarMapa();

    mostrarPantalla(
        "finalMision2"
    );

}


// ==========================================================
// 31. VOLVER AL MAPA MISIÓN 2
// ==========================================================

conectarBoton(
    "btnVolverMapaMision2",
    function() {

        actualizarMapa();

        mostrarPantalla("mapa");

    }
);


// ==========================================================
// 32. RECUPERAR NOMBRE
// ==========================================================

const nombreGuardado =
    localStorage.getItem(
        "nombreJugador"
    );

if (
    nombreGuardado &&
    saludoJugador
) {

    saludoJugador.textContent =
        "¡Hola, " +
        nombreGuardado +
        "! Prepárate para explorar Nicaragua.";

}


// ==========================================================
// FIN DEL SCRIPT
// ==========================================================