console.log("ESTE ES EL SCRIPT QUE ESTOY EDITANDO");

// ==========================================================
// EXPLORADORES DE LA LECTURA NICA
// SCRIPT.JS
// ==========================================================
// MISIÓN 1 + MISIÓN 2 + MISIÓN 3 + DESAFÍO FINAL
// RETROCESO + PROGRESO + COMPETENCIA
// ==========================================================
// ==========================================================
// SUPABASE — CLASIFICACIÓN COMPARTIDA
// ==========================================================

const SUPABASE_URL =
    "https://ywrgglmxtwfyfdrdskoo.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_Ae9Sk4zc64O3aH1xvOgIZQ_z54pFd-4";

const supabaseCliente =
    window.supabase
        ? window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY
        )
        : null;

// ==========================================================
// 🔊 SISTEMA DE SONIDO - ON / OFF
// ==========================================================

let sonidoActivado =
    localStorage.getItem("sonidoActivado") !== "false";

const btnSonido =
    document.getElementById("btnSonido");

function actualizarBotonSonido() {

    if (!btnSonido) return;

    btnSonido.textContent =
        sonidoActivado ? "🔊" : "🔇";

    btnSonido.setAttribute(
        "aria-label",
        sonidoActivado
            ? "Desactivar sonido"
            : "Activar sonido"
    );
}

if (btnSonido) {

    btnSonido.addEventListener("click", function() {

        sonidoActivado = !sonidoActivado;

        localStorage.setItem(
            "sonidoActivado",
            sonidoActivado
        );

        actualizarBotonSonido();

    });

}

actualizarBotonSonido();

// ==========================================================
// 🎧 ARCHIVOS DE SONIDO
// ==========================================================

const sonidos = {

    campanita: new Audio("audio/CAMPANITA.wav"),

    error: new Audio("audio/ERROR.wav"),

    logro: new Audio("audio/LOGRO.wav"),

    insignia: new Audio("audio/INSIGNIA.wav")

};

// ==========================================================
// 🔊 REPRODUCIR SONIDO
// ==========================================================

function reproducirSonido(nombre) {

    if (!sonidoActivado) return;

    const sonido = sonidos[nombre];

    if (!sonido) return;

    sonido.currentTime = 0;

    sonido.play().catch(function() {

        // El navegador puede bloquear sonidos
        // hasta que exista una interacción del usuario.

    });

}

// ==========================================================
// 1. PANTALLAS
// ==========================================================

const pantallas = document.querySelectorAll(".pantalla");

function mostrarPantalla(id) {

    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    const pantalla = document.getElementById(id);

    if (pantalla) {
        pantalla.classList.add("activa");
        window.scrollTo(0, 0);
    }
}


// ==========================================================
// 2. CONECTAR BOTONES
// ==========================================================

function conectarBoton(id, funcion) {

    const boton = document.getElementById(id);

    if (boton) {
        boton.addEventListener("click", funcion);
    }
}


// ==========================================================
// 3. NOMBRE
// ==========================================================

const nombreJugador =
    document.getElementById("nombreJugador");

const saludoJugador =
    document.getElementById("saludoJugador");


// ==========================================================
// 4. INICIO
// ==========================================================

conectarBoton("btnComenzar", function() {

    mostrarPantalla("registro");

});


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


conectarBoton("btnMapa", function() {

    mostrarPantalla("mapa");

});


conectarBoton("volverMenu", function() {

    mostrarPantalla("menu");

});


// ==========================================================
// 5. PROGRESO GENERAL
// ==========================================================

let mision1Completada =
    localStorage.getItem("mision1Completada") === "true";

let mision2Completada =
    localStorage.getItem("mision2Completada") === "true";

let mision3Completada =
    localStorage.getItem("mision3Completada") === "true";


// ==========================================================
// 6. ACTUALIZAR MAPA
// ==========================================================

function actualizarMapa() {

    const btnLeon =
        document.getElementById("btnLeon");

    const btnChontales =
        document.getElementById("btnChontales");

    const btnDesafioFinal =
        document.getElementById("btnDesafioFinal");


    if (btnLeon) {

        btnLeon.disabled =
            !mision1Completada;

        btnLeon.textContent =
            mision1Completada
                ? "🌺 León"
                : "🔒 León";

    }


    if (btnChontales) {

        btnChontales.disabled =
            !mision2Completada;

        btnChontales.textContent =
            mision2Completada
                ? "🐦 Chontales"
                : "🔒 Chontales";

    }


    if (btnDesafioFinal) {

        btnDesafioFinal.disabled =
            !mision3Completada;

        btnDesafioFinal.textContent =
            mision3Completada
                ? "🏆 Desafío Final"
                : "🔒 Desafío Final";

    }

}


actualizarMapa();


// ==========================================================
// ==========================================================
// MISIÓN 1 — RIVAS
// ==========================================================
// ==========================================================

conectarBoton("btnRivas", function() {

    mostrarPantalla("tarjetaMision1");

});


conectarBoton("btnComenzarLectura", function() {

    mostrarPantalla("lectura1");

});


conectarBoton("btnTerminarLectura", function() {

    mostrarPantalla("reto1");

});


// ==========================================================
// RETO 1 MISIÓN 1
// ==========================================================

const respuestasMision1 = {

    m1p1: "B",
    m1p2: "B",
    m1p3: "B",
    m1p4: "A",
    m1p5: "A"

};


Object.keys(respuestasMision1).forEach(
    function(nombrePregunta) {

        const guardada =
            localStorage.getItem(
                "m1_" + nombrePregunta
            );

        if (guardada) {

            const opcion =
                document.querySelector(
                    'input[name="' +
                    nombrePregunta +
                    '"][value="' +
                    guardada +
                    '"]'
                );

            if (opcion) {
                opcion.checked = true;
            }

        }


        const opciones =
            document.querySelectorAll(
                'input[name="' +
                nombrePregunta +
                '"]'
            );


        opciones.forEach(
            function(opcion) {

                opcion.addEventListener(
                    "change",
                    function() {

                        localStorage.setItem(
                            "m1_" +
                            nombrePregunta,
                            opcion.value
                        );

                    }
                );

            }
        );

    }
);

conectarBoton(
    "btnComprobarReto1",
    function() {

        let puntos = 0;

        Object.keys(respuestasMision1)
            .forEach(
                function(pregunta) {

                    const respuesta =
                        document.querySelector(
                            'input[name="' +
                            pregunta +
                            '"]:checked'
                        );

                    if (
                        respuesta &&
                        respuesta.value ===
                        respuestasMision1[pregunta]
                    ) {

                        puntos++;

                        reproducirSonido("campanita");

                    }

                }
            );

        const resultado =
            document.getElementById(
                "resultadoReto1"
            );

        if (puntos === 5) {

            if (resultado) {

                resultado.textContent =
                    "🎉 ¡Excelente! Respondiste correctamente las 5 preguntas.";

                resultado.style.color =
                    "green";

            }

            setTimeout(
                function() {

                    mostrarPantalla("reto2");

                },
                500
            );

        } else {

            if (resultado) {

                resultado.textContent =
                    "❌ Obtuviste " +
                    puntos +
                    " de 5. Revisa la leyenda e inténtalo nuevamente.";

                resultado.style.color =
                    "red";

            }

        }

    }
);


// ==========================================================
// RETO 2 CHAT
// ==========================================================

const camposChatM1 = [
    "chat1",
    "chat2",
    "chat3",
    "chat4",
    "chatFinal"
];


camposChatM1.forEach(
    function(id) {

        const campo =
            document.getElementById(id);

        if (!campo) {
            return;
        }


        const guardado =
            localStorage.getItem(
                "m1_" + id
            );


        if (guardado !== null) {
            campo.value = guardado;
        }


        campo.addEventListener(
            "input",
            function() {

                localStorage.setItem(
                    "m1_" + id,
                    campo.value
                );

            }
        );

    }
);


conectarBoton("btnChat", function() {

    mostrarPantalla("chat");

});


conectarBoton("btnMeme", function() {

    mostrarPantalla("meme");

});


conectarBoton(
    "btnEntregarChat",
    function() {

        let completos = true;


        camposChatM1.forEach(
            function(id) {

                const campo =
                    document.getElementById(id);

                if (
                    !campo ||
                    campo.value.trim() === ""
                ) {

                    completos = false;

                }

            }
        );


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

    }
);


// ==========================================================
// MEME MISIÓN 1
// ==========================================================

const botonesImagenMeme =
    document.querySelectorAll(
        ".imagenMeme"
    );


botonesImagenMeme.forEach(
    function(boton) {

        boton.addEventListener(
            "click",
            function() {

                const imagen =
                    boton.getAttribute(
                        "data-imagen"
                    );


                localStorage.setItem(
                    "m1_imagenMeme",
                    imagen
                );


                const seleccionada =
                    document.getElementById(
                        "imagenSeleccionada"
                    );


                if (seleccionada) {

                    seleccionada.textContent =
                        imagen;

                }

            }
        );

    }
);


const imagenMemeGuardada =
    localStorage.getItem(
        "m1_imagenMeme"
    );


if (imagenMemeGuardada) {

    const seleccionada =
        document.getElementById(
            "imagenSeleccionada"
        );

    if (seleccionada) {

        seleccionada.textContent =
            imagenMemeGuardada;

    }

}


const memeSuperior =
    document.getElementById(
        "memeSuperior"
    );

const memeInferior =
    document.getElementById(
        "memeInferior"
    );


if (memeSuperior) {

    const guardado =
        localStorage.getItem(
            "m1_memeSuperior"
        );

    if (guardado !== null) {
        memeSuperior.value = guardado;
    }


    memeSuperior.addEventListener(
        "input",
        function() {

            localStorage.setItem(
                "m1_memeSuperior",
                memeSuperior.value
            );


            const vista =
                document.getElementById(
                    "textoMemeSuperior"
                );


            if (vista) {

                vista.textContent =
                    memeSuperior.value ||
                    "TU TEXTO AQUÍ";

            }

        }
    );

}


if (memeInferior) {

    const guardado =
        localStorage.getItem(
            "m1_memeInferior"
        );


    if (guardado !== null) {
        memeInferior.value = guardado;
    }


    memeInferior.addEventListener(
        "input",
        function() {

            localStorage.setItem(
                "m1_memeInferior",
                memeInferior.value
            );


            const vista =
                document.getElementById(
                    "textoMemeInferior"
                );


            if (vista) {

                vista.textContent =
                    memeInferior.value ||
                    "TU TEXTO AQUÍ";

            }

        }
    );

}


conectarBoton(
    "btnCrearMeme",
    function() {

        const imagen =
            localStorage.getItem(
                "m1_imagenMeme"
            );

        const superior =
            memeSuperior
                ? memeSuperior.value.trim()
                : "";

        const inferior =
            memeInferior
                ? memeInferior.value.trim()
                : "";


        if (
            !imagen ||
            !superior ||
            !inferior
        ) {

            alert(
                "Selecciona una imagen y completa los dos textos."
            );

            return;

        }


        alert(
            "😂 ¡Tu meme está listo!"
        );


        mostrarPantalla("reto3");

    }
);
// ==========================================================
// RETO 3 MISIÓN 1 — ORDENAR LA HISTORIA
// ==========================================================

let secuenciaMision1 = [];


// ==========================================================
// ACTUALIZAR SECUENCIA
// ==========================================================

function actualizarSecuenciaM1() {

    const contenedor = document.getElementById("ordenSeleccionado");

    if (!contenedor) {
        return;
    }

    if (secuenciaMision1.length === 0) {

        contenedor.textContent =
            "Selecciona los acontecimientos en el orden correcto.";

        return;
    }

    contenedor.textContent =
        "Orden seleccionado: " +
        secuenciaMision1.join(" → ");
}


// ==========================================================
// SELECCIONAR ACONTECIMIENTOS
// ==========================================================

document.addEventListener("click", function(event) {

    const pieza = event.target.closest("#secuencia .evento");

    if (!pieza) {
        return;
    }

    const orden = pieza.getAttribute("data-orden");

    if (secuenciaMision1.includes(orden)) {
        return;
    }

    secuenciaMision1.push(orden);

    pieza.disabled = true;

    actualizarSecuenciaM1();

});


// ==========================================================
// COMPROBAR RETO 3 MISIÓN 1
// ==========================================================

conectarBoton("btnComprobarReto3", function() {

    const correcta = ["1", "2", "3", "4", "5"];

    const correcto =
        secuenciaMision1.length === 5 &&
        secuenciaMision1.every(function(valor, indice) {

            return valor === correcta[indice];

        });


    if (!correcto) {

        alert(
            "🧩 El orden no es correcto. Inténtalo nuevamente."
        );

        secuenciaMision1 = [];

        document
            .querySelectorAll("#secuencia .evento")
            .forEach(function(pieza) {

                pieza.disabled = false;

            });

        actualizarSecuenciaM1();

        return;
    }


    // ======================================================
    // MISIÓN 1 COMPLETADA
    // ======================================================

    mision1Completada = true;

    localStorage.setItem(
        "mision1Completada",
        "true"
    );

    actualizarMapa();

    alert(
        "🎉 ¡Misión 1 completada!"
    );

    mostrarPantalla("felicitacion");

});


// ==========================================================
// RETROCEDER MISIÓN 1
// ==========================================================

conectarBoton("btnAtrasLectura1", function() {

    mostrarPantalla("tarjetaMision1");

});


conectarBoton("btnAtrasReto1", function() {

    mostrarPantalla("lectura1");

});


conectarBoton("btnAtrasReto2", function() {

    mostrarPantalla("reto1");

});


conectarBoton("btnAtrasChat", function() {

    mostrarPantalla("reto2");

});


conectarBoton("btnAtrasMeme", function() {

    mostrarPantalla("reto2");

});


conectarBoton("btnAtrasReto3", function() {

    secuenciaMision1 = [];

    document
        .querySelectorAll("#secuencia .evento")
        .forEach(function(evento) {

            evento.disabled = false;

        });

    actualizarSecuenciaM1();

    mostrarPantalla("reto2");

});


conectarBoton("btnVolverMapa", function() {

    actualizarMapa();

    mostrarPantalla("mapa");

});

// ==========================================================
// ==========================================================
// MISIÓN 2 — LEÓN
// ==========================================================
// ==========================================================

conectarBoton(
    "btnLeon",
    function() {

        if (!mision1Completada) {

            alert(
                "🔒 Debes completar la Misión 1 para desbloquear León."
            );

            return;

        }


        mostrarPantalla(
            "tarjetaMision2"
        );

    }
);


conectarBoton(
    "btnComenzarMision2",
    function() {

        mostrarPantalla(
            "lectura2"
        );

    }
);


conectarBoton(
    "btnTerminarLectura2",
    function() {

        mostrarPantalla(
            "reto1Mision2"
        );

    }
);


const respuestasMision2 = {

    p1: "B",
    p2: "C",
    p3: "B",
    p4: "C",
    p5: "B"

};


for (let i = 1; i <= 5; i++) {

    const guardada =
        localStorage.getItem(
            "m2_p" + i
        );


    if (guardada) {

        const opcion =
            document.querySelector(
                'input[name="p' +
                i +
                '"][value="' +
                guardada +
                '"]'
            );


        if (opcion) {
            opcion.checked = true;
        }

    }


    document
        .querySelectorAll(
            'input[name="p' +
            i +
            '"]'
        )
        .forEach(
            function(opcion) {

                opcion.addEventListener(
                    "change",
                    function() {

                        localStorage.setItem(
                            "m2_p" + i,
                            opcion.value
                        );

                    }
                );

            }
        );

}


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
                respuestasMision2[
                    "p" + i
                ]
            ) {

                puntos++;

            }

        }


        if (puntos < 5) {

            alert(
                "Obtuviste " +
                puntos +
                " de 5. Lee nuevamente el cuento y vuelve a intentarlo."
            );

            return;

        }


        alert(
            "🎉 ¡Reto 1 completado!"
        );


        mostrarPantalla(
            "reto2Mision2"
        );

    }
);


conectarBoton(
    "btnGuardarDiario",
    function() {

        const diario =
            document.getElementById(
                "diarioRosa"
            );


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
            "✒️ ¡Diario guardado!"
        );


        mostrarPantalla(
            "reto3Mision2"
        );

    }
);


conectarBoton(
    "btnGuardarComic",
    function() {

        const escenas = [
            "comic1",
            "comic2",
            "comic3"
        ];


        let completos = true;


        escenas.forEach(
            function(id) {

                const campo =
                    document.getElementById(id);


                if (
                    !campo ||
                    campo.value.trim() === ""
                ) {

                    completos = false;

                }

            }
        );


        if (!completos) {

            alert(
                "🎨 Completa las tres escenas del cómic."
            );

            return;

        }


        alert(
            "🎨 ¡Cómic guardado!"
        );


        mostrarPantalla(
            "reto3Mision2"
        );

    }
);


// Guardar Diario y Cómic

[
    "diarioRosa",
    "comic1",
    "comic2",
    "comic3"
].forEach(
    function(id) {

        const campo =
            document.getElementById(id);


        if (!campo) {
            return;
        }


        const guardado =
            localStorage.getItem(
                "m2_" + id
            );


        if (guardado !== null) {
            campo.value = guardado;
        }


        campo.addEventListener(
            "input",
            function() {

                localStorage.setItem(
                    "m2_" + id,
                    campo.value
                );

            }
        );

    }
);


conectarBoton(
    "btnAtrasLectura2",
    function() {

        mostrarPantalla(
            "tarjetaMision2"
        );

    }
);


conectarBoton(
    "btnAtrasReto1Mision2",
    function() {

        mostrarPantalla(
            "lectura2"
        );

    }
);

conectarBoton(
    "btnAtrasReto2Mision2",
    function() {

        mostrarPantalla(
            "reto1Mision2"
        );

    }
);


// ==========================================================
// RETO 3 MISIÓN 2 — ROMPECABEZAS
// ==========================================================

let secuenciaMision2 = [];


// ==========================================================
// SELECCIONAR PIEZAS
// ==========================================================

document.querySelectorAll(".piezaM2").forEach(function(pieza) {

    pieza.addEventListener("click", function() {

        const posicion =
            pieza.getAttribute("data-posicion");

        if (secuenciaMision2.includes(posicion)) {
            return;
        }

        secuenciaMision2.push(posicion);

        pieza.disabled = true;

        const contenedor =
            document.getElementById(
                "secuenciaSeleccionadaM2"
            );

        if (contenedor) {

            contenedor.textContent =
                "Orden seleccionado: " +
                secuenciaMision2.join(" → ");

        }

    });

});


// ==========================================================
// COMPROBAR ROMPECABEZAS MISIÓN 2
// ==========================================================

conectarBoton(
    "btnComprobarRompecabezasM2",
    function() {

        const correcta = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6"
        ];

        const correcto =
            secuenciaMision2.length === 6 &&
            secuenciaMision2.every(
                function(valor, indice) {

                    return valor === correcta[indice];

                }
            );

        const resultado =
            document.getElementById(
                "resultadoReto3Mision2"
            );

        if (!correcto) {

            if (resultado) {

                resultado.textContent =
                    "❌ El orden no es correcto. Inténtalo nuevamente.";

                resultado.style.color = "red";

            }

            secuenciaMision2 = [];

            document
                .querySelectorAll(".piezaM2")
                .forEach(function(pieza) {

                    pieza.disabled = false;

                });

            const secuencia =
                document.getElementById(
                    "secuenciaSeleccionadaM2"
                );

            if (secuencia) {

                secuencia.textContent =
                    "Selecciona las piezas en el orden correcto.";

            }

            return;
        }

        // ==================================================
        // MISIÓN 2 COMPLETADA
        // ==================================================

        mision2Completada = true;

        localStorage.setItem(
            "mision2Completada",
            "true"
        );

        actualizarMapa();

        if (resultado) {

            resultado.textContent =
                "🎉 ¡Excelente! Ordenaste correctamente las seis escenas.";

            resultado.style.color = "green";

        }

        alert(
            "🎉 ¡Misión 2 completada!"
        );

        mostrarPantalla(
            "finalMision2"
        );

    }
);


// ==========================================================
// RETROCEDER DESDE RETO 3 MISIÓN 2
// ==========================================================

conectarBoton(
    "btnAtrasReto3Mision2",
    function() {

        secuenciaMision2 = [];

        document
            .querySelectorAll(".piezaM2")
            .forEach(function(pieza) {

                pieza.disabled = false;

            });

        const secuencia =
            document.getElementById(
                "secuenciaSeleccionadaM2"
            );

        if (secuencia) {

            secuencia.textContent =
                "Selecciona las piezas en el orden correcto.";

        }

        mostrarPantalla(
            "reto2Mision2"
        );

    }
);

// ==========================================================
// VOLVER AL MAPA DESDE EL FINAL DE MISIÓN 2
// ==========================================================

conectarBoton(
    "btnVolverMapaMision2",
    function() {

        actualizarMapa();

        mostrarPantalla(
            "mapa"
        );

    }
);




// ==========================================================
// ==========================================================
// MISIÓN 3 — CHONTALES
// ==========================================================
// ==========================================================

conectarBoton(
    "btnChontales",
    function() {

        if (!mision2Completada) {

            alert(
                "🔒 Debes completar la Misión 2 para desbloquear Chontales."
            );

            return;

        }


        mostrarPantalla(
            "tarjetaMision3"
        );

    }
);


conectarBoton(
    "btnComenzarMision3",
    function() {

        mostrarPantalla(
            "lectura3"
        );

    }
);


conectarBoton(
    "btnTerminarLectura3",
    function() {

        mostrarPantalla(
            "reto1Mision3"
        );

    }
);


conectarBoton(
    "btnAtrasLectura3",
    function() {

        mostrarPantalla(
            "tarjetaMision3"
        );

    }
);


// ==========================================================
// RETO 1 M3
// ==========================================================

const respuestasMision3 = {

    m3p1: "B",
    m3p2: "A",
    m3p3: "C",
    m3p4: "B",
    m3p5: "C"

};


Object.keys(respuestasMision3)
    .forEach(
        function(nombrePregunta) {

            const guardada =
                localStorage.getItem(
                    "m3_" +
                    nombrePregunta
                );


            if (guardada) {

                const opcion =
                    document.querySelector(
                        'input[name="' +
                        nombrePregunta +
                        '"][value="' +
                        guardada +
                        '"]'
                    );


                if (opcion) {
                    opcion.checked = true;
                }

            }


            document
                .querySelectorAll(
                    'input[name="' +
                    nombrePregunta +
                    '"]'
                )
                .forEach(
                    function(opcion) {

                        opcion.addEventListener(
                            "change",
                            function() {

                                localStorage.setItem(
                                    "m3_" +
                                    nombrePregunta,
                                    opcion.value
                                );

                            }
                        );

                    }
                );

        }
    );


conectarBoton(
    "btnComprobarReto1Mision3",
    function() {

        let puntos = 0;


        Object.keys(respuestasMision3)
            .forEach(
                function(pregunta) {

                    const respuesta =
                        document.querySelector(
                            'input[name="' +
                            pregunta +
                            '"]:checked'
                        );


                    if (
                        respuesta &&
                        respuesta.value ===
                        respuestasMision3[pregunta]
                    ) {

                        puntos++;

                    }

                }
            );


        const resultado =
            document.getElementById(
                "resultadoReto1Mision3"
            );


        const boton =
            document.getElementById(
                "btnContinuarReto2Mision3"
            );


        if (puntos === 5) {

            resultado.textContent =
                "🎉 ¡Excelente! Las 5 respuestas son correctas.";

            resultado.style.color =
                "green";


            boton.style.display =
                "inline-block";

        } else {

            resultado.textContent =
                "❌ Obtuviste " +
                puntos +
                " de 5. Revisa la fábula e inténtalo nuevamente.";

            resultado.style.color =
                "red";

        }

    }
);


conectarBoton(
    "btnContinuarReto2Mision3",
    function() {

        mostrarPantalla(
            "reto2Mision3"
        );

    }
);


conectarBoton(
    "btnAtrasReto1Mision3",
    function() {

        mostrarPantalla(
            "lectura3"
        );

    }
);


// ==========================================================
// CRUCIGRAMA M3
// ==========================================================

const respuestasCrucigrama = {

    crucigrama1: ["chichiltote"],
    crucigrama2: ["pochote"],
    crucigrama3: ["honestidad", "honradez"],
    crucigrama4: ["red"],
    crucigrama5: ["robaron"]

};


const camposCrucigrama = [
    "crucigrama1",
    "crucigrama2",
    "crucigrama3",
    "crucigrama4",
    "crucigrama5"
];


camposCrucigrama.forEach(
    function(id) {

        const campo =
            document.getElementById(id);


        if (!campo) {
            return;
        }


        const guardado =
            localStorage.getItem(
                "m3_" + id
            );


        if (guardado !== null) {
            campo.value = guardado;
        }


        campo.addEventListener(
            "input",
            function() {

                localStorage.setItem(
                    "m3_" + id,
                    campo.value
                );

            }
        );

    }
);


conectarBoton(
    "btnAtrasReto2Mision3",
    function() {

        mostrarPantalla(
            "reto1Mision3"
        );

    }
);


conectarBoton(
    "btnComprobarCrucigrama",
    function() {

        let correctas = 0;


        camposCrucigrama.forEach(
            function(id) {

                const campo =
                    document.getElementById(id);


                if (!campo) {
                    return;
                }


                const respuesta =
                    campo.value
                        .trim()
                        .toLowerCase();


                if (
                    respuestasCrucigrama[id]
                        .includes(respuesta)
                ) {

                    correctas++;

                }

            }
        );


        const resultado =
            document.getElementById(
                "resultadoCrucigrama"
            );


        if (correctas === 5) {

            resultado.textContent =
                "🎉 ¡Crucigrama completado!";

            resultado.style.color =
                "green";


            setTimeout(
                function() {

                    mostrarPantalla(
                        "reto3Mision3"
                    );

                },
                700
            );

        } else {

            resultado.textContent =
                "❌ Tienes " +
                correctas +
                " de 5 palabras correctas.";

            resultado.style.color =
                "red";

        }

    }
);


// ==========================================================
// RULETA M3
// ==========================================================

let ruletaGirando = false;

let valorRuleta = "";


const valoresRuleta = [
    "HONESTIDAD",
    "RESPETO",
    "ESFUERZO",
    "TRABAJO",
    "RESPONSABILIDAD",
    "ENGAÑO"
];


const consignasRuleta = {

    HONESTIDAD:
        "¿Cómo demuestra la fábula que la honestidad es importante?",

    RESPETO:
        "¿Qué debieron respetar los güises?",

    ESFUERZO:
        "¿Quién demostró esfuerzo en la fábula y por qué?",

    TRABAJO:
        "¿Por qué debemos valorar el trabajo ajeno?",

    RESPONSABILIDAD:
        "¿Qué responsabilidad debieron asumir los güises?",

    ENGAÑO:
        "¿Por qué aprovecharse del trabajo ajeno se relaciona con el engaño?"

};


conectarBoton(
    "btnGirarRuleta",
    function() {

        if (ruletaGirando) {
            return;
        }


        const ruleta =
            document.getElementById(
                "ruleta"
            );


        if (!ruleta) {
            return;
        }


        ruletaGirando = true;


        const indice =
            Math.floor(
                Math.random() *
                valoresRuleta.length
            );


        valorRuleta =
            valoresRuleta[indice];


        const resultado =
            document.getElementById(
                "resultadoRuleta"
            );


        const pregunta =
            document.getElementById(
                "preguntaRuleta"
            );


        const consigna =
            document.getElementById(
                "consignaRuleta"
            );


        const grados =
            1800 +
            (360 - indice * 60);


        ruleta.style.transition =
            "transform 4s cubic-bezier(0.12, 0.75, 0.18, 1)";

        ruleta.style.transform =
            "rotate(" +
            grados +
            "deg)";


        if (resultado) {

            resultado.textContent =
                "🎡 La ruleta está girando...";

        }


        if (pregunta) {

            pregunta.style.display =
                "none";

        }


        setTimeout(
            function() {

                ruletaGirando = false;


                if (resultado) {

                    resultado.textContent =
                        "🎯 La ruleta cayó en: " +
                        valorRuleta;

                }


                if (consigna) {

                    consigna.textContent =
                        consignasRuleta[
                            valorRuleta
                        ];

                }


                if (pregunta) {

                    pregunta.style.display =
                        "block";

                }


                localStorage.setItem(
                    "m3_valorRuleta",
                    valorRuleta
                );

            },
            4200
        );

    }
);


// ==========================================================
// RESPUESTA RULETA
// ==========================================================

const respuestaRuleta =
    document.getElementById(
        "respuestaRuleta"
    );


if (respuestaRuleta) {

    const guardada =
        localStorage.getItem(
            "m3_respuestaRuleta"
        );


    if (guardada !== null) {
        respuestaRuleta.value =
            guardada;
    }


    respuestaRuleta.addEventListener(
        "input",
        function() {

            localStorage.setItem(
                "m3_respuestaRuleta",
                respuestaRuleta.value
            );

        }
    );

}


conectarBoton(
    "btnAtrasReto3Mision3",
    function() {

        mostrarPantalla(
            "reto2Mision3"
        );

    }
);


conectarBoton(
    "btnComprobarRuleta",
    function() {

        if (
            !respuestaRuleta ||
            respuestaRuleta.value.trim() === ""
        ) {

            alert(
                "Escribe primero tu reflexión."
            );

            return;
        }


        const resultado =
            document.getElementById(
                "resultadoFinalRuleta"
            );


        if (resultado) {

            resultado.textContent =
                "🎉 ¡Excelente reflexión! Has completado el desafío.";

            resultado.style.color =
                "green";

        }


        completarMision3();

    }
);


// ==========================================================
// COMPLETAR MISIÓN 3
// ==========================================================

function completarMision3() {

    mision3Completada = true;


    localStorage.setItem(
        "mision3Completada",
        "true"
    );


    actualizarMapa();


    setTimeout(
        function() {

            mostrarPantalla(
                "finalMision3"
            );

        },
        700
    );

}


conectarBoton(
    "btnVolverMapaMision3",
    function() {

        actualizarMapa();

        mostrarPantalla(
            "mapa"
        );

    }
);


// ==========================================================
// ==========================================================
// DESAFÍO FINAL
// ==========================================================
// ==========================================================


// ----------------------------------------------------------
// BANCO DE PREGUNTAS
// ----------------------------------------------------------

const bancoDesafio = [

    // ================= MISIÓN 1 =================

    {
        mision: "🌋 Misión 1",
        pregunta: "¿Dónde se desarrolla la historia de Chico Largo?",
        opciones: {
            A: "León",
            B: "La isla de Ometepe",
            C: "Juigalpa",
            D: "Managua"
        },
        correcta: "B"
    },

    {
        mision: "🌋 Misión 1",
        pregunta: "¿Quién era Mamá Bucha?",
        opciones: {
            A: "Una cazadora",
            B: "Una famosa curandera",
            C: "Una pescadora",
            D: "Una exploradora"
        },
        correcta: "B"
    },

    {
        mision: "🌋 Misión 1",
        pregunta: "¿En qué animal se transformó Chico Largo?",
        opciones: {
            A: "Jaguar",
            B: "Venado",
            C: "Águila",
            D: "Mono"
        },
        correcta: "B"
    },

    {
        mision: "🌋 Misión 1",
        pregunta: "¿Qué hicieron los cazadores después de herir al venado?",
        opciones: {
            A: "Siguieron el rastro de sangre",
            B: "Regresaron a sus casas",
            C: "Buscaron a Mamá Bucha",
            D: "Abandonaron el bosque"
        },
        correcta: "A"
    },

    {
        mision: "🌋 Misión 1",
        pregunta: "¿Qué ocurrió al amanecer?",
        opciones: {
            A: "Chico Largo apareció herido en su casa",
            B: "Los cazadores capturaron al venado",
            C: "Mamá Bucha desapareció",
            D: "Chico Largo abandonó la isla"
        },
        correcta: "A"
    },


    // ================= MISIÓN 2 =================

    {
        mision: "🌺 Misión 2",
        pregunta: "¿A quién se acercó el espíritu maligno?",
        opciones: {
            A: "A Eva",
            B: "A la más linda rosa nueva",
            C: "A un árbol",
            D: "A la primera col"
        },
        correcta: "B"
    },

    {
        mision: "🌺 Misión 2",
        pregunta: "¿Qué dijo el diablo que le faltaba a la rosa?",
        opciones: {
            A: "Color",
            B: "Aroma",
            C: "Utilidad",
            D: "Belleza"
        },
        correcta: "C"
    },

    {
        mision: "🌺 Misión 2",
        pregunta: "¿Qué deseó la rosa?",
        opciones: {
            A: "Ser más bella",
            B: "Ser útil",
            C: "Ser un árbol",
            D: "Desaparecer"
        },
        correcta: "B"
    },

    {
        mision: "🌺 Misión 2",
        pregunta: "¿Qué ocurrió después de que Dios aceptó el deseo de la rosa?",
        opciones: {
            A: "Se convirtió en árbol",
            B: "Nació la primera col",
            C: "Desapareció",
            D: "Regresó a ser rosa"
        },
        correcta: "B"
    },

    {
        mision: "🌺 Misión 2",
        pregunta: "¿Qué decisión podemos valorar críticamente en el cuento?",
        opciones: {
            A: "Decidir sin pensar",
            B: "Reflexionar antes de tomar decisiones",
            C: "Creer todo lo que nos dicen",
            D: "Rechazar la utilidad"
        },
        correcta: "B"
    },


    // ================= MISIÓN 3 =================

    {
        mision: "🐦 Misión 3",
        pregunta: "¿Qué construía el chichiltote?",
        opciones: {
            A: "Una casa",
            B: "Una red",
            C: "Una cueva",
            D: "Un puente"
        },
        correcta: "B"
    },

    {
        mision: "🐦 Misión 3",
        pregunta: "¿Dónde construía su red el chichiltote?",
        opciones: {
            A: "En un pochote",
            B: "En una laguna",
            C: "En una montaña",
            D: "En una casa"
        },
        correcta: "A"
    },

    {
        mision: "🐦 Misión 3",
        pregunta: "¿Qué hicieron los dos güises?",
        opciones: {
            A: "Ayudaron al chichiltote",
            B: "Construyeron otra red",
            C: "Robaron su construcción",
            D: "La protegieron"
        },
        correcta: "C"
    },

    {
        mision: "🐦 Misión 3",
        pregunta: "¿Qué valor representa la enseñanza de la fábula?",
        opciones: {
            A: "Honestidad",
            B: "Desobediencia",
            C: "Aprovechamiento",
            D: "Engaño"
        },
        correcta: "A"
    },

    {
        mision: "🐦 Misión 3",
        pregunta: "¿Qué debe hacerse con el trabajo de otra persona?",
        opciones: {
            A: "Tomarlo sin permiso",
            B: "Ignorarlo",
            C: "Respetarlo",
            D: "Copiarlo"
        },
        correcta: "C"
    }

];


// ----------------------------------------------------------
// VARIABLES DEL DESAFÍO
// ----------------------------------------------------------

let preguntasDesafio = [];

let indicePreguntaDesafio = 0;

let puntajeDesafio = 0;

let correctasDesafio = 0;

let rachaDesafio = 0;

let mejorRachaDesafio = 0;

let tiempoRestante = 15;

let temporizadorDesafio = null;

let partidaTerminada = false;


// ----------------------------------------------------------
// MEZCLAR ARRAY
// ----------------------------------------------------------

function mezclarArray(array) {

    const copia = [...array];


    for (
        let i = copia.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            copia[i],
            copia[j]
        ] = [
            copia[j],
            copia[i]
        ];

    }


    return copia;
}


// ----------------------------------------------------------
// INICIAR DESAFÍO
// ----------------------------------------------------------

function iniciarDesafio() {

    if (!mision3Completada) {

        alert(
            "🔒 Primero debes completar las tres misiones."
        );

        return;

    }


    preguntasDesafio =
        mezclarArray(
            bancoDesafio
        ).slice(
            0,
            10
        );


    indicePreguntaDesafio = 0;

    puntajeDesafio = 0;

    correctasDesafio = 0;

    rachaDesafio = 0;

    mejorRachaDesafio = 0;

    partidaTerminada = false;


    mostrarPantalla(
        "juegoDesafio"
    );


    mostrarPreguntaDesafio();

}


// ----------------------------------------------------------
// COMENZAR DESAFÍO
// ----------------------------------------------------------

conectarBoton(
    "btnComenzarDesafio",
    iniciarDesafio
);


// ----------------------------------------------------------
// MOSTRAR PREGUNTA
// ----------------------------------------------------------

function mostrarPreguntaDesafio() {

    if (partidaTerminada) {
        return;
    }


    const pregunta =
        preguntasDesafio[
            indicePreguntaDesafio
        ];


    if (!pregunta) {

        finalizarDesafio(
            "🎉 ¡Completaste las 10 preguntas!"
        );

        return;

    }


    const numeroPregunta =
        document.getElementById(
            "numeroPregunta"
        );


    const puntajeActual =
        document.getElementById(
            "puntajeActual"
        );


    const origen =
        document.getElementById(
            "origenPregunta"
        );


    const texto =
        document.getElementById(
            "textoPregunta"
        );


    const racha =
        document.getElementById(
            "rachaDesafio"
        );


    if (numeroPregunta) {

        numeroPregunta.textContent =
            "Pregunta " +
            (indicePreguntaDesafio + 1) +
            " de 10";

    }


    if (puntajeActual) {

        puntajeActual.textContent =
            "⭐ " +
            puntajeDesafio +
            " puntos";

    }


    if (origen) {

        origen.textContent =
            pregunta.mision;

    }


    if (texto) {

        texto.textContent =
            pregunta.pregunta;

    }


    if (racha) {

        racha.textContent =
            "🔥 Racha: " +
            rachaDesafio;

    }


    const botones =
        document.querySelectorAll(
            ".opcionDesafio"
        );


    botones.forEach(
        function(boton) {

            const letra =
                boton.getAttribute(
                    "data-respuesta"
                );


            boton.textContent =
                letra +
                ") " +
                pregunta.opciones[letra];


            boton.disabled = false;

        }
    );


    iniciarTemporizadorDesafio();

}


// ----------------------------------------------------------
// TEMPORIZADOR
// ----------------------------------------------------------

function iniciarTemporizadorDesafio() {

    detenerTemporizadorDesafio();


    tiempoRestante = 15;


    const elemento =
        document.getElementById(
            "tiempoPregunta"
        );


    if (elemento) {

        elemento.textContent =
            tiempoRestante;

    }


    temporizadorDesafio =
        setInterval(
            function() {

                tiempoRestante--;


                if (elemento) {

                    elemento.textContent =
                        tiempoRestante;

                }


                if (tiempoRestante <= 0) {

                    detenerTemporizadorDesafio();


                    finalizarDesafio(
                        "⏰ ¡Tiempo agotado!"
                    );

                }

            },
            1000
        );

}


// ----------------------------------------------------------
// DETENER TEMPORIZADOR
// ----------------------------------------------------------

function detenerTemporizadorDesafio() {

    if (temporizadorDesafio) {

        clearInterval(
            temporizadorDesafio
        );

        temporizadorDesafio =
            null;

    }

}


// ----------------------------------------------------------
// RESPONDER
// ----------------------------------------------------------

document
    .querySelectorAll(
        ".opcionDesafio"
    )
    .forEach(
        function(boton) {

            boton.addEventListener(
                "click",
                function() {

                    if (
                        partidaTerminada
                    ) {
                        return;
                    }


                    detenerTemporizadorDesafio();


                    const botones =
                        document.querySelectorAll(
                            ".opcionDesafio"
                        );


                    botones.forEach(
                        function(b) {

                            b.disabled =
                                true;

                        }
                    );


                    const respuesta =
                        boton.getAttribute(
                            "data-respuesta"
                        );


                    const pregunta =
                        preguntasDesafio[
                            indicePreguntaDesafio
                        ];


                    if (
                        respuesta ===
                        pregunta.correcta
                    ) {

                        registrarRespuestaCorrecta();

                    } else {

                        rachaDesafio = 0;

                        finalizarDesafio(
                            "❌ Respuesta incorrecta. La partida ha terminado."
                        );

                    }

                }
            );

        }
    );


// ----------------------------------------------------------
// RESPUESTA CORRECTA
// ----------------------------------------------------------

function registrarRespuestaCorrecta() {

    correctasDesafio++;

    rachaDesafio++;


    if (
        rachaDesafio >
        mejorRachaDesafio
    ) {

        mejorRachaDesafio =
            rachaDesafio;

    }


    // Puntos según rapidez
    let puntosGanados = 60;


    if (tiempoRestante >= 11) {

        puntosGanados = 100;

    } else if (
        tiempoRestante >= 6
    ) {

        puntosGanados = 80;

    }


    // Bonificación por racha
    if (
        rachaDesafio === 3
    ) {

        puntosGanados += 30;

    }


    if (
        rachaDesafio === 5
    ) {

        puntosGanados += 50;

    }


    puntajeDesafio +=
        puntosGanados;


    const racha =
        document.getElementById(
            "rachaDesafio"
        );


    if (racha) {

        racha.textContent =
            "🔥 Racha: " +
            rachaDesafio;

    }


    if (
        indicePreguntaDesafio >=
        9
    ) {

        finalizarDesafio(
            "🎉 ¡Completaste las 10 preguntas!"
        );

        return;

    }


    indicePreguntaDesafio++;


    setTimeout(
        function() {

            mostrarPreguntaDesafio();

        },
        500
    );

}

// ==========================================================
// 58. CLASIFICACIÓN — LOCAL + SUPABASE
// ==========================================================

// ----------------------------------------------------------
// OBTENER CLASIFICACIÓN LOCAL
// ----------------------------------------------------------

function obtenerClasificacionLocal() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "clasificacionGuardianes"
            ) || "[]"
        );

    } catch (error) {

        console.error(
            "Error leyendo clasificación local:",
            error
        );

        return [];

    }

}


// ----------------------------------------------------------
// GUARDAR CLASIFICACIÓN LOCAL
// ----------------------------------------------------------

function guardarClasificacionLocal(lista) {

    localStorage.setItem(
        "clasificacionGuardianes",
        JSON.stringify(lista)
    );

}


// ----------------------------------------------------------
// REGISTRAR PUNTUACIÓN
// ----------------------------------------------------------

async function registrarPuntuacion() {

    const nombre =
        localStorage.getItem(
            "nombreJugador"
        ) ||
        "Explorador";


    // ------------------------------------------------------
    // 1. GUARDAR LOCALMENTE
    // ------------------------------------------------------

    let listaLocal =
        obtenerClasificacionLocal();


    const existente =
        listaLocal.find(
            function(jugador) {

                return jugador.nombre ===
                    nombre;

            }
        );


    if (existente) {

        if (
            puntajeDesafio >
            existente.puntos
        ) {

            existente.puntos =
                puntajeDesafio;

        }

    } else {

        listaLocal.push({

            nombre:
                nombre,

            puntos:
                puntajeDesafio

        });

    }


    listaLocal.sort(
        function(a, b) {

            return b.puntos -
                a.puntos;

        }
    );


    listaLocal =
        listaLocal.slice(
            0,
            20
        );


    guardarClasificacionLocal(
        listaLocal
    );


    // ------------------------------------------------------
    // 2. GUARDAR EN SUPABASE
    // ------------------------------------------------------

    if (
        !supabaseCliente
    ) {

        console.warn(
            "Supabase no está disponible."
        );

        return;

    }


    if (
        !navigator.onLine
    ) {

        console.log(
            "Sin internet. Se conserva la puntuación local."
        );

        return;

    }


    try {

        const resultado =
            await supabaseCliente
                .from(
                    "clasificacion_guardianes"
                )
                .insert({

                    nombre:
                        nombre,

                    puntos:
                        puntajeDesafio,

                    preguntas_correctas:
                        correctasDesafio,

                    mejor_racha:
                        mejorRachaDesafio

                });


        if (
            resultado.error
        ) {

            console.error(
                "Error de Supabase:",
                resultado.error
            );

        } else {

            console.log(
                "✅ Puntuación guardada en Supabase."
            );

        }

    } catch (error) {

        console.error(
            "Error de conexión con Supabase:",
            error
        );

    }

}


// ----------------------------------------------------------
// OBTENER CLASIFICACIÓN
// ----------------------------------------------------------

async function obtenerClasificacion() {

    // ------------------------------------------------------
    // 1. INTENTAR SUPABASE
    // ------------------------------------------------------

    if (
        supabaseCliente &&
        navigator.onLine
    ) {

        try {

            const resultado =
                await supabaseCliente
                    .from(
                        "clasificacion_guardianes"
                    )
                    .select(
                        "nombre,puntos,preguntas_correctas,mejor_racha,creado_en"
                    )
                    .order(
                        "puntos",
                        {
                            ascending: false
                        }
                    );


            if (
                !resultado.error
            ) {

                const filas =
                    resultado.data ||
                    [];


                // ------------------------------------------
                // CONSERVAR SOLO LA MEJOR PUNTUACIÓN
                // DE CADA JUGADOR
                // ------------------------------------------

                const mejores =
                    {};


                filas.forEach(
                    function(fila) {

                        if (
                            !mejores[
                                fila.nombre
                            ] ||
                            fila.puntos >
                            mejores[
                                fila.nombre
                            ].puntos
                        ) {

                            mejores[
                                fila.nombre
                            ] = {

                                nombre:
                                    fila.nombre,

                                puntos:
                                    fila.puntos,

                                preguntas_correctas:
                                    fila.preguntas_correctas,

                                mejor_racha:
                                    fila.mejor_racha,

                                creado_en:
                                    fila.creado_en

                            };

                        }

                    }
                );


                const lista =
                    Object.values(
                        mejores
                    );


                lista.sort(
                    function(a, b) {

                        return b.puntos -
                            a.puntos;

                    }
                );


                return lista.slice(
                    0,
                    20
                );

            }


            console.error(
                "Supabase devolvió un error:",
                resultado.error
            );

        } catch (error) {

            console.error(
                "No se pudo consultar Supabase:",
                error
            );

        }

    }


    // ------------------------------------------------------
    // 2. SI NO HAY INTERNET, USAR LOCAL
    // ------------------------------------------------------

    return obtenerClasificacionLocal();

}

// ==========================================================
// 59. FINALIZAR DESAFÍO
// ==========================================================

async function finalizarDesafio(motivo) { 
 
    if (partidaTerminada) { 
        return; 
    }
    partidaTerminada = true;


    detenerTemporizadorDesafio();


    await registrarPuntuacion();


    const motivoElemento =
        document.getElementById(
            "motivoFinDesafio"
        );


    const puntuacion =
        document.getElementById(
            "puntuacionFinal"
        );


    const correctas =
        document.getElementById(
            "preguntasCorrectas"
        );


    const mejorRacha =
        document.getElementById(
            "mejorRacha"
        );


    if (motivoElemento) {

        motivoElemento.textContent =
            motivo;

    }


    if (puntuacion) {

        puntuacion.textContent =
            puntajeDesafio +
            " puntos";

    }


    if (correctas) {

        correctas.textContent =
            correctasDesafio +
            " respuestas correctas";

    }


    if (mejorRacha) {

        mejorRacha.textContent =
            "🔥 Mejor racha: " +
            mejorRachaDesafio;

    }


    const lista =
    await obtenerClasificacion();

    const nombre =
        localStorage.getItem(
            "nombreJugador"
        ) ||
        "Explorador";


    const posicion =
        lista.findIndex(
            function(jugador) {

                return jugador.nombre ===
                    nombre;

            }
        );


    const posicionElemento =
        document.getElementById(
            "posicionJugador"
        );


    if (posicionElemento) {

        if (posicion >= 0) {

            posicionElemento.textContent =
                "🏅 Tu posición: " +
                (posicion + 1) +
                ".º lugar";

        }

    }


    // Trofeo: debe completar las 10 preguntas
    if (
        correctasDesafio === 10
    ) {

        localStorage.setItem(
            "trofeoGuardianes",
            "true"
        );

    }


    mostrarPantalla(
        "resultadoDesafio"
    );

}


// ==========================================================
// 60. NUEVA PARTIDA — SIN BORRAR EL PROGRESO
// ==========================================================

function nuevaPartidaDesafio() {

    preguntasDesafio = [];

    indicePreguntaDesafio = 0;

    puntajeDesafio = 0;

    correctasDesafio = 0;

    rachaDesafio = 0;

    mejorRachaDesafio = 0;

    tiempoRestante = 15;

    partidaTerminada = false;

    detenerTemporizadorDesafio();

    preguntasDesafio =
        mezclarArray(
            bancoDesafio
        ).slice(
            0,
            10
        );

    mostrarPantalla(
        "juegoDesafio"
    );

    mostrarPreguntaDesafio();

}


// ==========================================================
// BOTÓN 🔄 NUEVA PARTIDA
// ==========================================================

conectarBoton(
    "btnIntentarNuevamente",
    nuevaPartidaDesafio
);


// ==========================================================
// 61. VER CLASIFICACIÓN
// ==========================================================

conectarBoton(
    "btnVerClasificacion",
    function() {

        cargarClasificacion();

        mostrarPantalla(
            "clasificacion"
        );

    }
);


// ==========================================================
// 62. CARGAR CLASIFICACIÓN
// ==========================================================

async function cargarClasificacion() {

    const contenedor =
        document.getElementById(
            "tablaClasificacion"
        );

    if (!contenedor) {
    return;
}


const lista =
    await obtenerClasificacion();


contenedor.innerHTML = "";


const encabezado =
    document.createElement(
        "div"
    );


    encabezado.className =
        "fila-clasificacion encabezado";


    encabezado.innerHTML =
        `
        <span>Pos.</span>
        <span>Jugador</span>
        <span>Puntos</span>
        `;


    contenedor.appendChild(
        encabezado
    );


    lista.forEach(
        function(jugador, indice) {

            const fila =
                document.createElement(
                    "div"
                );


            fila.className =
                "fila-clasificacion";


            let posicion =
                (indice + 1) +
                ".º";


            if (indice === 0) {
                posicion = "🥇";
            }

            if (indice === 1) {
                posicion = "🥈";
            }

            if (indice === 2) {
                posicion = "🥉";
            }


            fila.innerHTML =
                `
                <span>${posicion}</span>
                <span>${jugador.nombre}</span>
                <span>${jugador.puntos}</span>
                `;


            contenedor.appendChild(
                fila
            );

        }
    );


    if (lista.length === 0) {

        const vacio =
            document.createElement(
                "p"
            );

        vacio.textContent =
            "Todavía no hay puntuaciones registradas.";

        contenedor.appendChild(
            vacio
        );

    }

}


// ==========================================================
// 63. VOLVER DEL RESULTADO
// ==========================================================

conectarBoton(
    "btnVolverResultado",
    function() {

        mostrarPantalla(
            "resultadoDesafio"
        );

    }
);


// ==========================================================
// 64. DESAFÍO FINAL DESDE EL MAPA
// ==========================================================

conectarBoton(
    "btnDesafioFinal",
    function() {

        if (!mision3Completada) {

            alert(
                "🔒 Primero debes completar las tres misiones."
            );

            return;

        }


        mostrarPantalla(
            "desafioFinal"
        );

    }
);


// ==========================================================
// 65. TROFEO
// ==========================================================

conectarBoton(
    "btnVolverMapaTrofeo",
    function() {

        mostrarPantalla(
            "mapa"
        );

    }
);


// ==========================================================
// 66. RECUPERAR NOMBRE
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
// FIN
// ==========================================================