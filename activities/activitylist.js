var actividades=[
    {
        actividad: "Actividad1",
        descripcion: "descripcion actividad 1",
        file: "actividad1.js",
        main: "main()",
        apidoc: [
            {
                funcion: "marcarOrigen(x, y)",
                descripcion: "hace nada"
            },
            {
                funcion: "marcarDestino(x,y)",
                descripcion: "hace nada. x es la coord. columna...."
            },
            {
                funcion: "dibujar()",
                descripcion: "hace nada. x es la coord. columna...."
            },
            {
                funcion: "cambiarAnchoLapiz(nro)",
                descripcion: "hace nada. x es la coord. columna...."
            },
            {
                funcion: "cambiarColorLapiz(color)",
                descripcion: "hace nada. x es la coord. columna...."
            }

        ],
        display: "canvas" ,// "canvas"/"textarea/..."
        initialprog:"//Escriba su programa aquí"
    },
    {
        actividad: "Actividad2",
        descripcion: "Esta actividad 2",
        file: "actividad2.js",
        main: "main()",
        apidoc: [
            {
                funcion: "f1()",
                descripcion: "hace nada"
            },
            {
                funcion: "f2(x,y)",
                descripcion: "hace nada. x es la coord. columna...."
            }
        ],
        display: "canvas", // "canvas"/"textarea/..."
        initialprog:"dibujar();"
    }
];