# Programando Mi Primer Juego en P5


En esta sección vamos a integrar gran parte de los conceptos que vinimos trabajando, y ver alguno más, para construir un
pequeño videojuego.
El videojuego a desarrollar esta inspirado en la narrativa del famoso [Angry Birds](https://es.wikipedia.org/wiki/Angry_Birds).


## Nuestro videojuego - *Versión 0.1*

En esta variante del juego el Rey Cerdo intenta atrapar (aplastando) al Angry Bird, para esto, cada un cierto tiempo determina una posición a la cual trasladarse (de manera aleatoria) y, si el Angry Bird se encuentra justo en un cierto rango de distancia de la posición elegida por el cerdo, entonces el angry bird será atrapado. El objetivo por el momento es tratar de escapar al cerdo. El jugador podrá mover al Angry Bird por toda el area de juego para evitar ser atrapado, utilizando las teclas de dirección (&larr; , &uarr; , &darr; , &rarr;).

A medida que vayamos avanzando en esta sección iremos complejizando el juego y agregando más funcionalidades. Por el momento comencemos por lo básico, los movimientos:

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/2rmPQj_1e" width="800" height="600"></iframe>

***Actividad***: La primer tarea será dotar de movilidad a nuestro personaje para que se pueda desplazar (sin salirse de los limites
de la pantalla). En concreto deberas programar las funciones ``moveForward()``, ``moveBackward()``, ``moveUp()`` y ``moveDown()`` para que cambien la posición del angry bird al ser ejecutadas. La invocación a estas cuatro funciones se dará cuando el jugador presione las respectivas teclas de dirección.

<!-- ¿ meter la idea de requisitos ?-->

> [!NOTE|label:NOTA]
> Las posiciones de los personajes en el area de juego están representadas por valores almacenados en cuatro variables, dos para las coordenadas *x* e *y* del angry bird (``birdX`` y ``birdY``), y otras dos para las del cerdo (``pigX`` y ``pigY``). Cualquier cambio en el valor de esas variables se verá reflejado como un cambio de posición del personaje en la pantalla de juego. El área de juego tiene una dimensión de 600 puntos horizontal por 400 puntos vertical.

###  Refrescando un poco: ¿Cómo se escriben las funciones?

Ya has utilizado funciones desde el comienzo invocándolas y también has escrito codigo para completar su definición (dentro su cuerpo ```{... }```). Pero ya es hora de detenernos en algunos detalles y dejarlos bien en claro para continuar:

* Cuando queremos utilizar una función (ejecutarla) simplemente escribimos su nombre seguido de un par de paréntesis y opcionalmente finalizamos con un punto y coma (``;``), por ejemplo escribimos ``moveForward();`` para invocarla.
* Para que una invocación resulte, previamente debemos definir la función en algún lado, escribirla siguiendo algunas reglas sintácticas establecidad en el lenguaje.
* La definición de una función comienza con la palabra reservada *``function``*, que es seguida del nombre que le demos a la función; luego un par de paréntesis (``()``), entre ellos **puede o no haber uno o más nombres (identificadores)**, que llamaremos parametros de la función; y a continuación de los paréntesis un par de llaves (``{... }``) que encerrarán todo el cuerpo de la función, todas las instrucciones o sentencias que definen lo que hace la función van entre estas llaves.

```
   function nombreDeLaFunción( parametro1, parametro2,... , parametro_n) ) {
        [BLOQUE DE SENTENCIAS] 
    }
```

>[!NOTE|label:NOTA] Los parámetros definidos entre los paréntesis pueden ser utilizados como variables visibles dentro del cuerpo de la función, que traeran los valores con los que se haya invocado a la función a la hora de usarla.

## Iteración 2 - *Detectando al Angry Bird*

Actualmente el cerdo realiza movimientos aleatorios cada un segundo, decide un lugar (una posición **(x,y)** del área de juego) al azar al cual saltar y se desplaza hasta allí. En ningún momento el cerdo tiene en cuenta qué tan cerca ha saltado del angry bird, no existe la noción de visibilidad, detección o cercanía. Tan solo puede distingir si lo está tocando o no. Quisiéramos incorporarle al cerdo un grado de inteligencia mayor, es decir, que bajo alguna medida de distancia predefinida pueda saber si ha saltado cerca o no, y si lo está, entonces que se comporte como si lo hubiera visto y comience a saltar en la zona.

***Actividad***: Se requiere implementar modificaciones en la función de movida del cerdo (``movePig()``), para incorporar la noción de detección por distancia de visibilidad y saltos acotados dentro de una zona determinada, de manera variable.

 *"Vamos por partes"* - JTR.

> [!TIP|label:Análisis del problema - primera parte]
> ¿Cómo resolver la detección?: Si la zona demarcada por el cuadrado verde en torno al cerdo fuese el área de visibilidad que el mismo tiene, entonces, de la siguiente imagen se desprende que el cerdo estaría viendo o detectando al angry bird. Aparecen aquí dos *subproblemas* para poder calcular esto, por un lado necesitamos obtener los valores que determinan el cuadrado (qué es de posición dinamica) y por el otro calcular si la posición del angry bird está dentro o fuera del mismo.

![img analisis 1](img/visibleArea.png ':size=40%') ![img analisis 1b](img/visibleArea2.png ':size=40%')

Con algunas cuentas sencillas podemos determinar dinamicamente los valores del cuadrado, a partir de conocer la posición del cerdo (sus variables de coordenadas *x* e *y*) y la distancia de detección visual (indicada como <span style="color: red;">VD</span> en el siguiente grafico). Una vez obtenidos los valores que describen la locación del cuadrado en el plano cartesiano, ya sabemos de ejercicios anteriores como calcular si un punto (en este caso ![img angry bird](img/birdAvatar.png ':size=2%')) está o no dentro del mismo. 

![img analisis 2 .center](img/visibleAreaValues.png ':size=40%')

> [!NOTE|label:NOTA] En realidad conocemos el punto medio del cuadrado (en este caso ![img pig](img/pigAvatar.png ':size=2%')) y, si observamos la forma en la que está implementada la decición de la captura, podemos ver que no es necesario el calculo explicito del cuadrado...


> [!TIP|label:Análisis del problema - segunda parte]
> ¿Cómo resolvemos las zonas de salto variable?: El cálculo aleatorio para la nueva posición del cerdo se lleva a cabo al comienzo de la función ``movePig()`` y los valores resultantes estan acotados por las variables límites. Actualizando dinamicamente estas variables lograremos ir acotando las zonas de salto en cada iteración. Aparecen aquí dos *subproblemas*, ¿dónde las actualizo? y ¿cómo calcular su valor?

```
function movePig() {
    
    // Calcular la nueva posición a la que moverá el cerdo
    pigX = randomNumber(limiteInferiorX,limiteSuperiorX);
    pigY = randomNumber(limiteInferiorY,limiteSuperiorY);

    ...

}
    
```



  <!-- angry bird (``birdX`` y ``birdY``)
  cerdo (``pigX`` y ``pigY``).
-->
## Iteración 3

 TBD

***Actividad***: Agreguemos objetivos y ganemos vidas...



full :https://editor.p5js.org/compuUNRCIngreso/full/NbtC4_QIE
<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/NbtC4_QIE" width="800" height="600"></iframe>
<!--
edit :https://editor.p5js.org/compuUNRCIngreso/sketches/NbtC4_QIE
<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/NbtC4_QIE" width="800" height="600"> ...</iframe>
-->

