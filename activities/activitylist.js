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
        actividad: "Dibujar cuadrado",
        descripcion: "Te proponemos que utilices las funciones disponibles para dibujar un cuadrado de lado 100 px.",
        archivo: "secuencia.js",
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
        ],
        proginicial:"//Escriba su programa aquí"
    },
    {
        actividad: "Condicional Básico",
        descripcion: "Escribe un programa en el que intentes adivinar si un número que elijas es el número que saldrá al tirar el dado. Para tirar el dado dispones de la función <b>tirarDado()</b>. En caso que el número aleatorio coincida con el número elegido, deberá mostrar un mensaje en la consola que diga: <b>Ganador!</b> y en caso que no adivine el número, el mensaje deberá decir: <b>Siga Participando!</b>. <br> <br><b>Ayuda:</b> puedes usar la sentencia condicional: <br> <b>&nbsp&nbsp&nbsp&nbspif(</b> escribe aquí una condición lógica a evaluar <b>){</b> <br>&nbsp&nbsp&nbsp&nbsp&nbsp //escribe aquí lo que quieres que suceda cuando sea verdadera <br><b>&nbsp&nbsp&nbsp&nbsp}else{</b><br> &nbsp&nbsp&nbsp&nbsp&nbsp //y aquí lo que quieres que suceda cuando sea falsa <br><b>&nbsp&nbsp&nbsp&nbsp}</b>",
        archivo: "condicionalbase.js",
        main: "main()",
        apidoc: [
            {
                funcion: "tirarDado()",
                descripcion: "Devuelve de manera aleatoria un número entre 1 y 6, y escribe el número aleatorio en la consola."
            },            
                        {
                funcion: "escribirConsola(mensaje)",
                descripcion: "Escribe el texto que contiene la variable <b>mensaje</b> en la consola. Ejemplo: <b>escribirConsola(</b>\"Hola!\"<b>)</b>;"
            },
                        
        ],
        proginicial:"//Escriba su programa aquí"
    },    
        {
        actividad: "Toma de decisión",
        descripcion: "Suponiendo que tenés un dado de seis caras, hacé un programa que para los números pares dibuje un triángulo, y para los impares dibuje un círculo",
        archivo: "condicional.js",
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
                funcion: "tirarDado()",
                descripcion: "Devuelve de manera aleatoria un número entre 1 y 6, y escribe el número aleatorio en la consola."
            },
                        {
                funcion: "esPar(nro)",
                descripcion: "Dado un número como argumento, retorna <b>true</b> si es par, o <b>false</b> si es impar."
            },
                        {
                funcion: "dibujarCirculo(ox, oy, r)",
                descripcion: "dibuja un círculo con centro (ox,oy) y radio r."
            },
            {
                funcion: "dibujarTriangulo(ox, oy, l)",
                descripcion: "dibuja un triángulo equilatero con vértice izquierdo (ox,oy) y lado de longitud l."
            },
        ],
        proginicial:"//Escriba su programa aquí"
    },
    {
        actividad: "Donde esta el punto? (1)",
        descripcion: "En esta actividad el programa que usted escriba en el editor será ejecutado al hacer click sobre el Lienzo. La línea horizontal en el lienzo se ubica en la coordenada y=250 y x variable entre 0 y 500.",
        archivo: "dondeEstaElpunto1.js",
        main: "main()",
        apidoc: [
            {
                funcion: "escribir(mensaje)",
                descripcion: "Muestra el mensaje dado en la Consola"
            },
            {
                funcion: "obtenerX()",
                descripcion: "devuelve la coordenada X del punto en donde se hizo click"
            },
            {
                funcion: "obtenerY()",
                descripcion: "devuelve la coordenada Y del punto en donde se hizo click"
            }

        ],
        proginicial:`var x =obtenerX();
var y =obtenerY();
//continue su programa aquí`
    },
    {
        actividad: "Donde esta el punto? (2)",
        descripcion: "En esta actividad el programa que usted escriba en el editor será ejecutado al hacer click sobre el Lienzo. La línea horizontal en el lienzo se ubica en la coordenada y=250 y x variable entre 0 y 500. Por otra parte, la línea vertical en el lienzo se ubica en la coordenada x=250 e y variable entre 0 y 500.",
        archivo: "dondeEstaElpunto2.js",
        main: "main()",
        apidoc: [
            {
                funcion: "escribir(mensaje)",
                descripcion: "Muestra el mensaje dado en la Consola"
            },
            {
                funcion: "obtenerX()",
                descripcion: "devuelve la coordenada X del punto en donde se hizo click"
            },
            {
                funcion: "obtenerY()",
                descripcion: "devuelve la coordenada Y del punto en donde se hizo click"
            }

        ],
        proginicial:`var x =obtenerX();
var y =obtenerY();
//continue su programa aquí`
    },
    {
        actividad: "Codificando caracteres",
        descripcion: "Se proveen  instrucciones para codificar caractares y números",
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
                descripcion: "Dada una cadena de caracteres (String), muestra el código ASCII de cada caracter de la misma en la consola."
            },
            {
                funcion: "decimalABinario(nro)",
                descripcion: "Dada una número en sistema decimal muestra en la consola su representación en el sistema binario."
            }


        ],
        proginicial:"//Escriba su programa aquí"
    },
    {
        actividad: "Cifrando Mensajes",
        descripcion: "Completar la función \"cifrar\" para que encripte el mensaje dado utilizando la clave dada.",
        archivo: "cifradoCesar.js",
        main: "main()",
        apidoc: [
            {
                funcion: "obtenerCaracter(texto , i)",
                descripcion: "Calcula y retorna la letra que se encuentra en la posición i del texto dado."
            },
            {
                funcion: "convertirMinuscula(texto)",
                descripcion: "Convierte y retorna el texto dado a minúscula."
            },
            {
                funcion: "longitudMensaje(texto)",
                descripcion: "Calcula y retorna la cantidad de letras que tiene el texto dado."
            },
            {
                funcion: "deAsciiACaracter(n)",
                descripcion: "Dado un número n, calcula y retorna el correspondiente símbolo de la tabla ASCII."
            },
            {
                funcion: "deCaracterAAscii(c)", 
                descripcion: "Dado un caracter, calcula y retorna  su código (número) según la tabla ASCII."
            }
            
        ],
        proginicial: 
`cifrar("hola", 3);

function cifrar(mensaje, clave) {
    var resultado="";
             
    /*TODO: Dado un mensaje y una clave, escribir un programa que cifre el mensaje y la guarde en la
    variable resultado.
    */ 
    
    return resultado;
  
}`

    },
    {
        actividad: "Animaciones",
        descripcion: "Ejemplo de la API de animación (cruda)",
        apidoc: [],
        proginicial:`// animatedCircle(cx, cy, r, color, velocityX, velocityY
var circle = animatedCircle(50,50, 20, 'blue', 0.1, 0.08);

var scene = [
    animatedDrawingLine(100,100, 300, 100, 'red'),
    circle

];

animate(scene, function(elapsedTime){
    return elapsedTime > 10000;
});`
    },
    {
        actividad: "El caminante",
        descripcion: "En esta actividad se proveen instrucciones para caminar (avanzar) y girar, dibujando el camino recorrido en el Lienzo.",
        archivo: "repeticion.js",
        main: "main()",
        apidoc: [
            {
                funcion: "avanzar(p)",
                descripcion: "Avanza el cursor p cantidad de pasos, en línea recta, hacia la dirección indicada por el cursor. Si el lapiz esta bajo se dibuja el trayecto."
            },
            {
                funcion: "girarDerecha(g)",
                descripcion: "Gira el cursor g grados hacia la derecha."
            },
            {
                funcion: "girarIzquierda(g)",
                descripcion: "Gira el cursor g grados hacia la izquierda."
            },
            {
                funcion: "subirLapiz()",
                descripcion: "Luego de esta instrucción, y hasta tanto no se baje el lápiz, la instrucción avanzar modifica la posición del cursor pero no traza el camino recorrido."
            },
            {
                funcion: "bajarLapiz()",
                descripcion: "Baja el lápiz. Si el lápiz esta bajo la instrucción avanzar traza el camino recorrido."
            },
            {
                funcion: "cambiarColorLapiz(c)",
                descripcion: "Cambia el color del lápiz de dibujo al color  dado como argumento. colores disponibles: verde, rojo, fucsia, negro, azul, amarillo y violeta."
            },
            {
                 funcion: "cambiarColorLapizAleatorio()",
                 descripcion: "Cambia el color del lápiz de dibujo a un color aleatorio dentro de los colores disponibles: verde, rojo, fuscia, negro, azul, amarillo y violeta."
            },
	    {
		funcion: "posicionarCursor(x,y)",
		descripcion: "posiciona el cursor en la coordenada (x,y) dentro del tapíz, manteniendo la dirección actual del cursor."    
	    } 	


        ],
        proginicial:"//Escriba su programa aquí"
    },
    {
        actividad: "TaTeTi - Preliminares",
        descripcion: "En esta actividad dibujaremos las fichas y el tablero del juego TaTeTi, lo que servirá como base para la implementación del juego completo en las próximas clases. ¡Manos a la obra! ",
        archivo: "preliminaresTaTeTi.js",
        main: "main()",
        apidoc: [
            {
                funcion: "escribir(mensaje)",
                descripcion: "Muestra el mensaje dado en la Consola"
            },
            {
                funcion: "dibujarLinea(ox,oy,dx,dy)",
                descripcion: "Dibuja una linea entre el punto de origen (ox,oy) y el punto destino (dx,dy)."
            },
            {
                funcion: "obtenerX()",
                descripcion: "Devuelve la coordenada X del punto en donde se hizo click"
            },
            {
                funcion: "obtenerY()",
                descripcion: "Devuelve la coordenada Y del punto en donde se hizo click"
            },
            {
                funcion: "cambiarColorLapiz(c)",
                descripcion: "Cambia el color del lápiz de dibujo al color dado como argumento. colores disponibles: verde, rojo, blanco, negro, azul, amarillo y violeta."
            },
            {
                funcion: "dibujarImagen(arch, x, y, w, h)",
                descripcion: "Dibuja la imagen almacenada en 'arch' con origen en (ox,oy), ancho de longitud w y alto de longitud h"
            }
        ],
        proginicial:`
/*
 * Esta función se invoca al presionar el botón Ejecutar
 */
function principal() {

}

/*
 * Esta función se invoca al hacer click en el lienzo
 */
function clickEnLienzo() {

}`

},
    {
        actividad: "TaTeTi",
        descripcion: "Te proponemos que utilices las funciones y variables que se proveen a continuación  para implementar el famoso juego TaTeTi. El docente te dará consignas para que puedas realizarlo. Manos a la obra! ",
        archivo: "tateti.js",
        main: "main()",
        apidoc: [
            {
                funcion: "escribir(mensaje)",
                descripcion: "Muestra el mensaje dado en la Consola"
            },
            {
                funcion: "obtenerX()",
                descripcion: "Devuelve la coordenada X del punto en donde se hizo click"
            },
            {
                funcion: "obtenerY()",
                descripcion: "Devuelve la coordenada Y del punto en donde se hizo click"
            },
            {
                funcion: "dibujarLinea(ox, oy, dx, dy)",
                descripcion: "Dibuja una línea entre el punto de origen (ox,oy) y el punto destino (dx,dy)."
            },
            {
                funcion: "dibujarImagen(arch, x, y, w, h)",
                descripcion: "Dibuja la imagen dada 'arch' con origen en (ox,oy), ancho de longitud w y alto de longitud h"
            },
            {
                funcion: "variable: turnoJugador",
                descripcion: "Almacena el jugador que tienen el turno para jugar (jugador 1 o jugador 2). Valor inicial: 1"
            },
            {
                funcion: "variable: tablero",
                descripcion: "Almacena el estado de cada una de las 9 posiciones del tablero (0 sin ficha, 1 ficha jugador 1, 2 ficha jugador 2). Valor inicial: [0,0,0,0,0,0,0,0,0]"
            },
            {
                funcion: "variable: juegoTerminado",
                descripcion: "Almacena el estado del juego (true indica partida finalizada, false indica partida en curso). Valor inicial: false"
            }


            
        ],
        proginicial:`
/*Esta función se invoca al presionar el botón ejecutar.
*/
function dibujarTablero(){
    dibujarLinea(167, 0, 167, 500)
    dibujarLinea(334, 0, 334, 500)
    dibujarLinea(0, 167, 500, 167)
    dibujarLinea(0, 334, 500, 334)
}


/*Esta función se invoca al hacer click en el tablero.
Si la celda del tablero sobre la cual se hizo click no esta
ocupada por una ficha, dibuja la ficha del jugador de turno 
en esa posición. Luego verifica
si hay un jugador ganador. Si lo hay escribe el nombre del mismo
en la consola (jugador 1 o jugador 2)
*/
function realizarJugada(){
  
    // Verificar que el juego no haya terminado
    
    // Determinar la celda elegida y

    // verificar que no esté ocupada

    // Dibujar la ficha del jugador correspondiente al turno en la celda elegida
    
    // Registrar la jugada y verificar si hay un ganador o se ha alcanzado un empate

    // Cambiar el turno para la próxima jugada
    
 }`

},

{
        actividad: "TaTeTi-Final ",
        descripcion: "Ya hemos programada parte del TaTeTi, te proponemos que utilices las funciones  y variables que se proveen a continuación  para terminar con la implementación del famoso juego TaTeTi. El docente te dará consignas para que puedas realizarlo. Manos a la obra! ",
        archivo: "tateti.js",
        main: "main()",
        apidoc: [
            {
                funcion: "escribir(mensaje)",
                descripcion: "Muestra el mensaje dado en la Consola"
            },
            {
                funcion: "obtenerX()",
                descripcion: "Devuelve la coordenada X del punto en donde se hizo click"
            },
            {
                funcion: "obtenerY()",
                descripcion: "Devuelve la coordenada Y del punto en donde se hizo click"
            },
            {
                funcion: "dibujarLinea(ox, oy, dx, dy)",
                descripcion: "Dibuja una línea entre el punto de origen (ox,oy) y el punto destino (dx,dy)."
            },
            {
                funcion: "dibujarImagen(arch, x, y, w, h)",
                descripcion: "Dibuja la imagen dada 'arch' con origen en (ox,oy), ancho de longitud w y alto de longitud h"
            },
            {
                funcion: "variable: turnoJugador",
                descripcion: "Almacena el jugador que tienen el turno para jugar (jugador 1 o jugador 2). Valor inicial: 1"
            },
            {
                funcion: "variable: tablero",
                descripcion: "Almacena el estado de cada una de las 9 posiciones del tablero (0 sin ficha, 1 ficha jugador 1, 2 ficha jugador 2). Valor inicial: [0,0,0,0,0,0,0,0,0]"
            },
            {
                funcion: "variable: juegoTerminado",
                descripcion: "Almacena el estado del juego (true indica partida finalizada, false indica partida en curso). Valor inicial: false"
            }


            
        ],
        proginicial:`
/*
Las constantes FST (first) y SND (second) representan el primer y segundo número
distinguido para delimitar celdas en el tablero de 500x500 pixeles. FST es un tercio
de la longitud de lado y SND dos tercios.
*/
const FST = 167;
const SND = 334;

/*
Esta función se invoca al presionar el botón ejecutar.
*/
function dibujarTablero(){
    dibujarLinea(167, 0, 167, 500)
    dibujarLinea(334, 0, 334, 500)
    dibujarLinea(0, 167, 500, 167)
    dibujarLinea(0, 334, 500, 334)
}

/* 
Esta función se invoca al hacer click en el tablero.
Si la celda del tablero sobre la cual se hizo click no esta
ocupada por una ficha, dibuja la ficha del jugador de turno 
en esa posición. Luego verifica
si hay un jugador ganador. Si lo hay escribe el nombre del mismo
en la consola (jugador 1 o jugador 2)
*/
function realizarJugada(){

    // Verificar que el juego no haya terminado
    
    // Determinar la celda elegida y
    var celda = obtenerCeldaClick();
    
    // verificar que no esté ocupada

    // Dibujar la ficha del jugador correspondiente al turno en la celda elegida
    dibujarFichaEnCelda(celda, turnoJugador);
    
    // Registrar la jugada y verificar si hay un ganador o se ha alcanzado un empate

    // Cambiar el turno para la próxima jugada
    cambiarTurno();
}

function obtenerCeldaClick() {

    var x = obtenerX();
    var y = obtenerY();

    if (x < FST && y < FST){
        return 1;
    }

    if (x > FST && x < SND && y < FST) {
        return 2;
    }

    if (x > SND && y < FST) {
        return 3;
    }

    if (x < FST && y > FST && y < SND) {
        return 4;
    }

    if (x > FST && x < SND && y > FST && y < SND) {
        return 5;
    }

    if (x > SND && y > FST && y < SND) {
        return 6;
    }

    if (x < FST && y > SND) {
        return 7;
    }

    if (x > FST && x < SND && y > SND) {
        return 8;
    }

    if (x > SND && y > SND) {
        return 9;
    }
}

function dibujarFichaEnCelda(celda, turnoJugador) {

    var size = 100;             // tamaño de la ficha
    var shift = (FST - size)/2; // desplazamiento dentro de la celda
    var x;                      // coordenadas para dibujar en cada celda
    var y;
    
    if (celda == 1) {
        x = shift;
        y = shift;
        dibujarFicha(turnoJugador, x, y, size);
    }
    
    if (celda == 2) {
        x = shift + FST;
        y = shift;
        dibujarFicha(turnoJugador, x, y, size);
    }
    
    
    if (celda == 3) {
        x = shift + SND;
        y = shift;
        dibujarFicha(turnoJugador, x, y, size);
    }
    
    if (celda == 4) {
        x = shift;
        y = shift + FST;
        dibujarFicha(turnoJugador, x, y, size);
    }
    
    if (celda == 5){
        x = shift + FST;
        y = shift + FST;
        dibujarFicha(turnoJugador, x, y, size);
    }
    
    if (celda == 6) {
        x = shift + SND;
        y = shift + FST;
        dibujarFicha(turnoJugador, x, y, size);
    }
    
    if (celda == 7) {
        x = shift;
        y = shift + SND;
        dibujarFicha(turnoJugador, x, y, size);
    }
    
    if (celda == 8){
        x = shift + FST;
        y = shift + SND;
        dibujarFicha(turnoJugador, x, y, size);
    }
    
    if (celda == 9) {
        x = shift + SND;
        y = shift + SND;
        dibujarFicha(turnoJugador, x, y, size);
    }
}

function dibujarFicha(jugador, x, y, t) {
    if (jugador == 1) {
        dibujarImagen("activities/cross.png", x, y, t, t);
    } else {
        dibujarImagen("activities/circle.png", x, y, t, t);
    }
}

function cambiarTurno(){
    if( turnoJugador == 1){
        turnoJugador = 2;
    }else{
        turnoJugador = 1;
    }
}
`

}

];
