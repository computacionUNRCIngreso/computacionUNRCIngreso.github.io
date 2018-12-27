var actividades=[
    {
        actividad: "Dibujando",
        descripcion: "En esta actividad se proveen instrucciones que utilizadas  secuencialmente permiten dibujar líneas en el lienzo y con ellas figuras.",
        archivo: "actividad1.js",
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
                descripcion: "Dibuja una línea entre el punto de origen y el punto destino previamente marcados."
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
        proginicial:"//Escriba su programa aquí"
    },
    {
        actividad: "Dibujando 2",
        descripcion: "Esta actividad provee instrucciones para dibujar líneas y figuras geométricas. Además de la instrucción tirarMoneda().",
        archivo: "actividad2.js",
        main: "main()",
        apidoc: [
          
            {
                funcion: "dibujarLinea(ox, oy, dx, dy)",
                descripcion: "Dibuja una linea entre el punto de origen (ox,oy) y el punto destino (dx,dy)."
            },
            {
                funcion: "cambiarAnchoLapiz(nro)",
                descripcion: "Cambia el ancho del lápiz de dibujo al ancho dado como argumento."
            },
            {
                funcion: "cambiarColorLapiz(c)",
                descripcion: "Cambia el color del lápiz de dibujo al color  dado como argumento. colores disponibles: verde, rojo, blanco, negro, azul, amarillo y violeta."
            },
            {
                funcion: "tirarMoneda()",
                descripcion: "Devuelve cara (0) o cruz (1) de manera aleatoria y escribe el resultado en la consola."
            },
            {
                funcion: "dibujarRectangulo(ox, oy, lx, ly)",
                descripcion: "dibuja un rectángulo con vértice superior izquierdo (ox,oy), longitud de lados horizantales lx y longitud de lados verticales ly."
            },
            {
                funcion: "dibujarCirculo(ox, oy, r)",
                descripcion: "dibuja un círculo con centro (ox,oy) y radio r."
            },
            {
                funcion: "dibujarTriangulo(ox, oy, l)",
                descripcion: "dibuja un triángulo equilatero con vértice izquierdo (ox,oy) y lado de longitud l."
            }          

        ],
        proginicial:"//Escriba su programa aquí"
    },
    {
        actividad: "Código Ascii",
        descripcion: "En esta actividad se proveen instrucciones para pasar de ASCII a caracter y viceversa.",
        archivo: "ascii.js",
        main: "main()",
        apidoc: [
            {
                funcion: "deAsciiACaracter(n)",
                descripcion: "Dado un número n, muestra en la consola el correspondiente símbolo en la tabla ASCII."
            },
            {
                funcion: "deCaracterAAscii(c)",
                descripcion: "Dado un caracter, muestra en la consola su código según la tabla ASCII."
            },
            {
                funcion: "paraTodoCaracterConvertir(mensaje)",
                descripcion: "Dada una cadena de caracteres (String), muestra el código ASCII de cada caracter de la misma"
            }
            
        ],
        proginicial:"//Escriba su programa aquí"
    }



];