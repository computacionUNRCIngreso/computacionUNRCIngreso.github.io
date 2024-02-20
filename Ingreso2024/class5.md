# Programando Mi Primer Juego en P5


En esta sección vamos a integrar gran parte de los conceptos que vinimos trabajando, y ver alguno más, para construir un
pequeño videojuego.
El videojuego a desarrollar esta inspirado en la narrativa del famoso [Angry Birds](https://es.wikipedia.org/wiki/Angry_Birds).


## Nuestro videojuego versión 0.1

En esta variante del juego el Rey Cerdo intenta atrapar (aplastando) al Angry Bird, para esto, cada un cierto tiempo determina una posición a la cual trasladarse (de manera aleatoria) y, si el Angry Bird se encuentra justo en un cierto rango de distancia de la posición elegida por el cerdo, entonces el angry bird será atrapado. El jugador podrá mover al Angry Bird por toda el area de juego para tratar de escapar, utilizando las teclas de dirección (&larr; , &uarr; , &darr; , &rarr;).

A medida que vayamos avanzando en esta sección iremos complejizando el juego y agregando más funcionalidades. Por el momento comencemos por lo básico, los movimientos:

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/2rmPQj_1e" width="800" height="600"></iframe>

***Actividad***: La primer tarea será dotar de movilidad a nuestro personaje para que se pueda desplazar (sin salirse de los limites
de la pantalla). En concreto deberas programar las funciones ``moveForward()``, ``moveBackward()``, ``moveUp()`` y ``moveDown()`` para que cambien la posición del angry bird al ser ejecutadas. La invocación a estas cuatro funciones se dará cuando el jugador presione las teclas de dirección respectivas.

> [!NOTE|label:NOTA]
> Las posiciones de los personajes en el area de juego están representadas por valores almacenados en cuatro variables, dos para las coordenadas x e y del angry bird (``birdX`` y ``birdY``), y otras dos para las del cerdo (``pigX`` y ``pigY``). Cualquier cambio en el valor de esas variables se verá reflejado como un cambio de posición del personaje en la pantalla de juego.

###  Refrescando un poco: ¿Cómo se escriben las funciones?

Ya has utilizado funciones desde el comienzo invocándolas y también has escrito codigo para completar su definición (dentro su cuerpo {...}). Pero ya es hora de detenernos en algunos detalles y dejarlos bien en claro para continuar:

* Cuando queremos utilizar una función (ejecutarla) simplemente escribimos su nombre seguido de un par de paréntesis y opcionalmente finalizamos con un punto y coma (``;``), por ejemplo escribimos ``moveForward();`` para invocarla.
* Para que una invocación resulte, previamente debemos definir la función en algún lado, escribirla siguiendo algunas reglas sintácticas establecidad en el lenguaje.
* La definición de una función comienza con la palabra *``function``*, que es seguida del nombre que le demos a la función; luego un par de paréntesis (``()``), entre ellos **puede o no haber uno o más nombres (identificadores)**, que llamaremos parametros de la función; y a continuación de los paréntesis un par de llaves (``{}``) que encerrarán todo el cuerpo de la función, todas las instrucciones o sentencias que definen lo que hace la función van entre estas llaves.

```
   function nombreDeLaFunción( parametro1, parametro2,... , parametro_n) ) {
        [BLOQUE DE SENTENCIAS] 
    }
```

## Version 0.3

Actualmente el cerdo realiza movimientos aleatorios cada un segundo, decide un lugar (un punto **x** **y** del área de juego) al azar al cual saltar y se desplaza hasta allí. En ningún momento el cerdo tiene en cuenta qué tan cerca ha saltado del angry bird, no existe la noción de visibilidad, detección o cercanía. Tan solo puede distingir si lo está tocando o no. Quisiéramos incorporarle al cerdo un grado de inteligencia mayor, es decir, que también bajo alguna medida de distancia predefinida pueda saber si está cerca o no, y si lo está, entonces que comience a saltar cerca de la zona.

***Actividad***: Se requiere implementar modificaciones en la función de movida del cerdo, para incorporar la noción de detección por distancia de visibilidad y saltos acotados dentro de una zona determinada de manera variable.

> [!NOTE|label:NOTA]
> Analisis del problema: .....

  angry bird (``birdX`` y ``birdY``), y otras dos para las del cerdo (``pigX`` y ``pigY``). Cualquier cambio en el valor de esas variables se verá reflejado como un cambio de posición del personaje en la pantalla de juego.

## Version 0.5

Actualmente el cerdo realiza movimientos .... TBC

***Actividad***: Vamos a ...

## Version 0.9

Actualmente el cerdo realiza movimientos .... TBC

***Actividad***: Vamos a ...

<!--

## Algunos conceptos importantes para escribir un programa que resuelva este problema:


Si recordamos  al ejemplo de la primera clase [multiplicar dos números](#nuestro-programa-que-multiplica-dos-números-en-javaScript), hemos utilizado variables para recordar valores,

## ¿Qué son las variables? 
 
* Una variabla es la combinación de las siguientes cosas: 

* Un nombre  (o identificador) a elección 

* Una dirección en la memoria de la computadora 
* Un valor almacenado en esa dirección de la memoria que puede cambiar durante la ejecución del programa

* Un tipo, que especifica cuanto espacio ocupa ese valor en la memoria, y cómo interpretar este valor 

> [!WARNING|label: IMPORTANTE]
>  Para usar una variable, necesitas en primer lugar declarar la variable 

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


## ¿Cómo cambiamos el valor almacenado en una variable?

***Asignación***: Una asignación cambia el valor de una variable. Una asignación es una sentencia de la forma:
   ```
    nombre_variable = expresion;
   ```

Donde  ``nombre_variable`` es el nombre elegido para la variable. La asignación cambia el valor de la variable  ``nombre_variable`` por el valor de  ``expresion``

<span style="color:red">  <font size = 6 >  acá abajo la idea es utilizar este espacio para ejemplos on the fly
cambiar el valor de las variables, imprimir , etc. Hay una función que retorna un valor
</font></span>

Ejemplo: 

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/l56tAFfey" width="800" height="600"></iframe>

> [!TIP|label: NOTA]
> Link para abrir este ejermplo en otra ventana del navegador [variables](https://editor.p5js.org/compuUNRCIngreso/full/l56tAFfey)

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

## Sentencia Condicional ``if``

``` 
    ...
    if (CONDICION) {
        [BLOQUE DE SENTENCIAS] 
    }

    [BLOQUE DE SENTENCIAS SIGUIENTES]
    ...
```

![sentencia if .center](img/if.png ':size=40%')



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

 
## Sentencia Condicional ``if-else`` 


```
    ...
    if (CONDICION) {
        [BLOQUE DE SENTENCIAS 1] 
    }else{
        [BLOQUE DE SENTENCIAS 2] 
    }

    [BLOQUE DE SENTENCIAS SIGUIENTES]
    ...

```
![sentencia if .center](img/if-else.png ':size=60%')



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

##   Operadores de comparación
 
Los operadores de comparación nos permiten comparar el valor de dos expresiones:

```
    EXPR > EXPR
    EXPR >= EXPR
    EXPR < EXPR
    EXPR <= EXPR
    EXPR == EXPR
    EXPR != EXPR
```

Estas expresiones booleanas, o condiciones, pueden ser usadas en el contexto de las sentencias condicionales.

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  

##  Ahora si volvamos a tirar el dado...

> [!TIP|label:AYUDA]
> Algunas funciones de utilidad [fill()](https://p5js.org/es/reference/#/p5/fill) y [circle()](https://p5js.org/es/reference/#/p5/circle) para resolver el problema.

 <span style="color:red"> <font size = 6 >acá se usan  funciones con parametros </font> </span>
 

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/Jssw9sFDA" width="800" height="600"></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [tirar los dados](https://editor.p5js.org/compuUNRCIngreso/full/Jssw9sFDA) 

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


## Actividad 2: Dónde esta el punto (1)?
 

El Lienzo está dividido en dos secciones por una línea recta horizontal.  Se  proveen variables ``mouseX`` y  ``mouseY`` que almacenan las coordenadas ``(x, y)`` del punto sobre el Lienzo en donde se hace ‘click’. Escribir un programa que decida si se hizo un click por encima o por debajo de la línea. 

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/3eExV-33b" width="800" height="600"></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Donde esta el punto (1)?](https://editor.p5js.org/compuUNRCIngreso/full/3eExV-33b)

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


## Actividad 3: Dónde esta el punto (2)? 

En este caso, encontrarás el Lienzo divido en cuatro cuadrantes. Nuevamente se proveen las variables que almacenan las coordenadas ``(x, y)`` del punto sobre el Lienzo donde se hizo 'click' (``mouseX`` y  ``mouseY``). 

Escribir un programa que decida  en qué cuadrante se ha hecho click (arriba-derecha, arriba-izquierda, abajo-derecha o abajo- izquierda). 


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/OnSK_3K-7" width="800" height="600"></iframe>


> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Donde esta el punto (2)?](https://editor.p5js.org/compuUNRCIngreso/full/OnSK_3K-7)
 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

##  Actividad 4: Le dí a la figura?
 
Cuando ejecutas este programa (botón ``play`` en la esquina superior izquierda), se dibuja un círculo de tamaño aleatorio en el lienzo, las partes (centro y diametro) de este círculo   quedarán almacenadas en las variables: ``xCentro``, ``yCentro`` y ``diametro``. Además, contamos con las variables ``mouseX`` y ``mouseY``,  utilizadas anteriormente,  que almacenan las coordenadas de un 'click'. Esta actividad consiste en escribir un programa que  decida si se hizo 'click' dentro del círculo o fuera de él.


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/N4XRJQjAK" width="800" height="600"></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Le dí a la figura?](https://editor.p5js.org/compuUNRCIngreso/full/N4XRJQjAK) 

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


##  Actividad 5: Le dí a la figura (2)?
 
Cuando ejecutas este programa (botón ``play`` en la esquina superior izquierda), se dibuja un cuadrado de tamaño aleatorio en el lienzo, el tamaño de los lados de este cuadrado   quedará almacenada en la variable: ``lado``, y las coordenadas `(x,y)` de la esquina superior izquierda del cuadrado en las variables `xCoord` e `yCoord` respectivamente. Además, contamos con las variables ``mouseX`` y ``mouseY``,  que almacenan las coordenadas de un 'click'. Esta actividad consiste en escribir un programa que  decida si se hizo 'click' dentro del cuadrado o fuera de él.


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/obPixCPm6"  width="800" height="600">></iframe>


> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Le dí a la figura?](https://editor.p5js.org/compuUNRCIngreso/sketches/obPixCPm6)


##  Actividad 6: Que no se escape Angry Bird!



Cuando ejecutas este programa (botón ``play`` en la esquina superior izquierda), tendrás a **Angry Bird** en su posición inicial, has click en el lienzo para comenzar.

Cada vez que presionas la tecla `->` **Angry Bird** se mueve unos pasos hacia adelante!. Analicemos el código provisto con detalle. Podrás notar que **Angry Bird** desaparece cuando sobrepasa los límites del lienzo. La tarea consiste en modificar el código provisto para que **Angry Bird** vuelva a comenzar desde su posición inicial cuando este sobrepasa los límites del lienzo. 


Algunas variables necesarias para resolver este problema:

* `windowWidth`: almacena el  ancho del lienzo
* `windowHeight`: almacena la altura del lienzo

* `birdX`: almacena la  coordenada x de la  posición de angry bird en el lienzo
* `birdY`: almacena la  coordenada y de la  posición de angry bird en el lienzo


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/K22t_WWgl" . width="800" height="600">></iframe>


> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Angry Bird en movimiento](https://editor.p5js.org/compuUNRCIngreso/sketches/K22t_WWgl)
 
> [!TIP|label:NOTA]
>  Si te animás podes definir la la función **moveBackward()**,  que mueve a **AngryBird** 20 pasos hacia atrás cuando se presiona la tecla **<-**  

 -->
