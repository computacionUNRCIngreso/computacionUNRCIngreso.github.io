# Programando Mi Primer Juego en P5


En esta sección vamos a integrar gran parte de los conceptos que vinimos trabajando, y ver alguno más, para construir un
pequeño videojuego.
El videojuego a desarrollar esta inspirado en la narrativa del famoso [Angry Birds](https://es.wikipedia.org/wiki/Angry_Birds).


## Nuestro videojuego - *Versión 0.1*

En esta variante del juego el ***Rey Cerdo*** intenta atrapar (aplastando) a ***Angry Bird***, para esto, cada un cierto tiempo determina una posición a la cual trasladarse (de manera aleatoria) y, si  ***Angry Bird*** se encuentra justo en un cierto rango de distancia de la posición elegida por el cerdo, entonces ***Angry Bird*** será atrapado. El objetivo de ***Angry Bird***,  por el momento, será  escapar del cerdo. El jugador podrá mover a ***Angry Bird*** por toda el área de juego para evitar ser atrapado, utilizando las teclas de dirección (&larr; , &uarr; , &darr; , &rarr;).

A medida que avancemos en esta sección iremos añadiendo más complejidad al juego y agregando nuevas funcionalidades. Por ahora, comencemos con lo básico, los movimientos:

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/2rmPQj_1e" width="800" height="600"></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Nuestro videojuego](https://editor.p5js.org/compuUNRCIngreso/full/2rmPQj_1e)

## Iteración 1 - *Dando movimiento a Angry Bird*

***Actividad***: La primer tarea consistirá en permitir que nuestro personaje se mueva para desplazarse por la pantalla sin exceder sus límites. Especificamente, deberás programar las funciones ``moveForward()``, ``moveBackward()``, ``moveUp()`` y ``moveDown()`` para que modifiquen  la posición de ***Angry bird*** al ser ejecutadas. Estas cuatro funciones serán invocadas cuando el jugador presione las teclas de dirección correspondientes.

<!-- ¿ meter la idea de requisitos ?-->

> [!NOTE|label:La representación]
> Las posiciones de los personajes en el área de juego están representadas por valores almacenados en cuatro variables, dos para las coordenadas *x* e *y* de ***Angry Bird*** (``birdX`` y ``birdY``), y otras dos para las del cerdo (``pigX`` y ``pigY``). Cualquier modificación en el valor de estas variables se traducirá en un cambio de posición del personaje en la pantalla de juego. El área de juego tiene una dimensión de 600 puntos horizontal x 400 puntos vertical.

###  Revisemos brevemente: ¿Cómo se escriben las funciones?

Ya has utilizado funciones desde el comienzo invocándolas y también has escrito código para completar su definición (dentro de su cuerpo ```{... }```). Pero ya es hora de detenernos en algunos detalles y dejarlos bien en claro antes de avanzar:

* Cuando queremos utilizar una función (ejecutarla o invocarla) escribimos su nombre seguido de un par de paréntesis y **opcionalmente** finalizamos con un punto y coma (``;``), por ejemplo escribimos ``moveForward();`` para invocarla.

* Para que una invocación resulte, previamente debemos definir la función en algún lado, es decir, escribirla siguiendo algunas reglas sintácticas establecidad en el lenguaje.

* La definición de una función comienza con la palabra reservada ``function``, seguida del nombre que le asignamos a la función. Después de esto, se colocan un par de paréntesis (``()``). Dentro de estos paréntesis **puede o no haber uno o más nombres (identificadores)**, que denominaremos parámetros de la función. Finalmente, a continuación de los paréntesis, se colocan un par de llaves (``{... }``) que encierran el cuerpo de la función, es decir, las instrucciones o sentencias que definen lo que realiza la función.

```js
   function nombreDeLaFunción( parametro1, parametro2,... , parametro_n) ) {
        [BLOQUE DE SENTENCIAS] 
    }
```

> [!WARNING|label:Importante] 
> Los parámetros definidos entre los paréntesis pueden ser utilizados como variables visibles dentro del cuerpo de la función, permitiendo que la función utilice los valores pasados al ser invocada.

## Iteración 2 - *Detectando a Angry Bird*

En la situación actual, el cerdo se mueve de manera aleatoria cada un segundo, seleccionando una posición, ***(x,y)***,  al azar en el área de juego para saltar hacia ella. Sin embargo, no considera la proximidad a ***Angry Bird*** en ningún momento, careciendo de visibilidad, detección o noción de cercanía. Su único criterio es si está tocando a  ***Angry Bird*** o no. Para mejorar su comportamiento, deseamos dotar al cerdo de un mayor grado de inteligencia. Esto implica que, basándose en una medida de distancia predefinida, pueda determinar si ha saltado cerca de ***Angry Bird***. En caso afirmativo, debería comportarse como si lo hubiera visto, lo que significa iniciar movimientos en la zona.


***Actividad***: Se requiere implementar modificaciones en la función de movida del cerdo (``movePig()``), para incorporar la noción de detección por distancia de visibilidad y saltos acotados dentro de una zona determinada, de manera variable.

 *"Vamos por partes"* - JTR.

> [!TIP|label:Análisis del problema - primera parte]
> ¿Cómo resolver la detección?: Si la zona demarcada por el cuadrado verde en torno al cerdo fuese el área de visibilidad que el mismo tiene, entonces, de las siguientes imágenes se desprende que el cerdo estaría viendo o detectando a ***Angry Bird*** en la primera situación, pero no en la segunda. Aparecen aquí dos *subproblemas* para poder calcular esto, por un lado necesitamos obtener los valores que determinan el cuadrado (qué es de posición dinamica) y por el otro calcular si la posición ***Angry Bird*** está dentro o fuera del mismo.

![imagen angry bird visible](img/visibleArea.png ':size=40%') ![img angry bird no visible](img/visibleArea2.png ':size=40%')

Con algunas cuentas sencillas podemos determinar dinamicamente los valores del cuadrado, a partir de conocer la posición del cerdo (sus variables de coordenadas *x* e *y*) y la distancia de detección visual (indicada como <span style="color: red;">VD</span> en el siguiente grafico). Una vez obtenidos los valores que describen la locación del cuadrado en el plano cartesiano, ya sabemos de ejercicios anteriores como calcular si un punto (la posición de ![imagen angry bird](img/birdAvatar.png ':size=2%')) está o no dentro del mismo. 

![img analisis 2 .center](img/visibleAreaValues.png ':size=40%')

> [!NOTE|label:Observación] En realidad siempre conocemos el punto medio del cuadrado (la posición de ![imagen pig](img/pigAvatar.png ':size=2%')) y, si observamos la forma en la que está implementada la decición de la captura, podemos inferir que tampoco es necesario el calculo explicito del cuadrado para saber si la posición actual de ***Angry Bird*** esta o no dentro del cuadrado...


> [!TIP|label:Análisis del problema - segunda parte]
> ¿Cómo resolvemos las zonas de salto variable?: El cálculo aleatorio para la nueva posición del cerdo se lleva a cabo al comienzo de la función ``movePig()`` y los valores resultantes estan acotados por las variables límites. Actualizando dinamicamente estas variables lograremos ir acotando las zonas de salto en cada ejecución de ``movePig()``. Aparecen aquí dos *subproblemas*, ¿dónde las actualizo? y ¿cómo calcular su valor?

```js
function movePig() {
    
    // Calcular la nueva posición a la que moverá el cerdo
    pigX = randomNumber(lowerBoundX,upperBoundX)
    pigY = randomNumber(lowerBoundY,upperBoundY)

    ...

}
    
```

El primer subproblema es de fácil solución: si ya escribimos el código para decidir cuando el cerdo está detectando a ***Angry Bird*** y cuando no, entonces ya sabemos donde actualizaremos las variables. El segundo subproblema consiste en determinar los valores límites que acotarán la nueva zona donde el cerdo hará los saltos aleatorios. Como se supone que su posición actual le ha permitido ver al pajaro, entonces la nueva zona debería ser en torno a la actual posición de ***Angry Bird***. El siguiente gráfico nos ayuda a pensar como podríamos calcular los limites para la nueva área de saltos del cerdo.

![imagen proxima area de salto .center](img/nextAreaValues.png ':size=40%')

> [!WARNING|label:CUIDADO] ¿Qué debería pasar con los saltos del cerdo si ***Angry Bird*** logra escapar de la zona de detección? 


## Iteración 3 - *Agregando objetivos y vidas*

Actualmente nuestro juego termina si el cerdo logra atraparnos. Quisiéramos incorporar el concepto de objetivo y vidas, de modo tal que si ***Angry Bird*** cumple cierto objetivo gana el juego, y que se pueda ir ganando vidas para tratar de sobrevivir más tiempo en el juego. De este modo quisiéramos que el cerdo nos reste una vida cada vez que logra atraparnos y el juego se pierda si nos logra atrapar y ya no nos quedaban más vidas. Habrá que capturar huevos para obtener vidas y puntos. Cada vez que ***Angry Bird*** capture un huevo, el mismo debe desaparecer y aparecer en algún otro lugar del área de juego.


***Actividad***: Se requiere implementar la lógica de la captura de un huevo en la función ``checkGetEgg()``. Esta función se ejecuta constantemente, unas sesenta veces por segundo. Parte de las tareas a resolver por la función es la generación de un nuevo huevo en una nueva posición aleatoria. Esto puede abstraerse implementando la función ``newRandomEgg()``.

> [!NOTE|label:Las vidas y los puntos]
> Notar que en esta versión del juego se han incorporado las variables ``lives`` y ``score``. Las mismas llevarán la cuenta de las vidas y los puntos obtenidos respectivamente.

> [!TIP|label:Ayuda]
> Se cuenta con un par de funciones para actualizar la información de las vidas de forma gráfica en la pantalla:
>   - La función ``addLifeToPanel()`` agrega un gráfico de corazón en la parte superior.
>   - La función ``removeLifeFromPanel()`` quita el último corazón agregado.

***Actividad***: Modificar la lógica del cerdo, para que ahora contemple las vidas del ***Angry Bird*** cuando lo captura. Y por último, implementar la función ``checkIfWon()`` de acuerdo al objetivo que se plantee para ganar el juego. La función ``checkIfWon()`` también se ejecuta constantemente.

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/Q15VN3vRX" width="800" height="600"></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Nuestro videojuego versión 1](https://editor.p5js.org/compuUNRCIngreso/full/Q15VN3vRX)

<!--
edit :https://editor.p5js.org/compuUNRCIngreso/sketches/NbtC4_QIE
<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/NbtC4_QIE" width="800" height="600"> ...</iframe>
-->
  <!-- angry bird (``birdX`` y ``birdY``)
  cerdo (``pigX`` y ``pigY``).
-->
