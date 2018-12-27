var actividades=[
    {
        actividad: "Dibujando",
        descripcion: "En esta actividad se proveen instrucciones que utilizadas en secuenciamente permite dibujar líneas en el lienzo y con ellas figuras",
        file: "actividad1.js",
        main: "main()",
        apidoc: [
            {
                funcion: "marcarOrigen(x, y)",
                descripcion: "Marca en el lienzo el punto: (x,y) como punto de origen."
            },
            {
                funcion: "marcarDestino(x,y)",
                descripcion: "Marca en el lienzo el punto: (x,y) como punto de destino."
            },
            {
                funcion: "dibujar()",
                descripcion: "Dibuja una linea entre el punto de orgen y el punto des previamente marcados."
            },
            {
                funcion: "cambiarAnchoLapiz(nro)",
                descripcion: "Cambia el ancho del lápiz de dibujo al ancho dado como argumento."
            },
            {
                funcion: "cambiarColorLapiz(c)",
                descripcion: "Cambia el color del lápiz de dibujo al color  dado como argumento. colores disponibles: verde, rojo, blanco, negro, azul, amarillo y violeta."
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
