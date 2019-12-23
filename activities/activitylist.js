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
        actividad: "A jugar...",
        descripcion: "Te proponemos que utilices las funciones que se proveen a continuación  para implementar el famoso juego TaTeTi. El docente te dará consignas para que puedas realizarlo. Manos a la obra! ",
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
                funcion: "dibujarLinea(ox,oy,dx,dy)",
                descripcion: "Dibuja una linea entre el punto de origen (ox,oy) y el punto destino (dx,dy)."
            },
            {
                funcion: "cambiarColorLapiz(c)",
                descripcion: "Cambia el color del lápiz de dibujo al color dado como argumento. colores disponibles: verde, rojo, blanco, negro, azul, amarillo y violeta."
            },
            {
                funcion: "quienJuega()",
                descripcion: "Devuelve el número de jugador (1 ó 2) al que le toca jugar"
            },
            {
                funcion: "cambiarJugador()",
                descripcion: "Cambia el jugador de turno. Si quien jugó es el jugador 1 entonces le tocará el turno al jugador 2. Por el contrario, si jugó el jugador 2 será el turno del jugador 1"
            },
            {
                funcion: "anotarQuienJugoEn(celda, jugador)",
                descripcion: "Registra que el jugador dado colocó una ficha en la celda dada. Se asume que la celda es un número entre el 1 y el 9 y el jugador es 1 ó 2"
            },
            {
                funcion: "hayFicha(celda)",
                descripcion: "Dada una celda, devuelve verdadero si hay una ficha colocada en la celda dada, en otro caso devuelve falso"
            },
            {
                funcion: "quienJugoEnCelda(celda)",
                descripcion: "Devuelve el número de jugador que colocó la ficha en la celda dada. Si la celda esta vacia devuelve 0. Se asume que la celda es un número entre el 1 y el 9"
            }

            
        ],
        proginicial:`
/*Esta función se invoca al presionar el botón ejecutar.
*/
function dibujarTablero(){
    
    /*escriba su código aquí para:
     *dibujar un tablero de TaTeTi de 3 x 3
     */
}


/*Esta función se invoca al hacer click en el tablero.
Si la celda del tablero sobre la cual se hizo click no esta
ocupada por una ficha, dibuja la ficha del jugador de turno 
en esa posición. Luego verifica
si hay un jugador ganador. Si lo hay escribe el nombre del mismo
en la consola (jugador 1 o jugador 2)
*/
function realizarJugada(){
  
    /*escriba su código aquí para:
     *obtener la posición del  click,
     *dibujar la ficha del jugador de turno en la celda clickeada,
     *verificar si hay un jugador ganador e informarlo por consola
     */
 }`

}

];
