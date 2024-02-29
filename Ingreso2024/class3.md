# Estructura Condicional en la resolución de problemas Algorítmicos

Pulsa el botón ![ejecutar](img/runbtn.svg) en la ventana del editor, luego piensa un número entre el 1 y el 6 y  arroja un dado, ganas si  adivinaste el número que saldrá al tirar el dado, pierdes en caso contrario. 


<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/Jssw9sFDA" width="800" height="600"></iframe>



***Actividad***: Escribe un programa que luego de que elijas un número y tires el dado, dibuje un círculo en color verde si has tenido suerte y adivinaste el valor del dado. Si no has tenido suerte,  dibuja un círculo en algún otro color a elección.



## Revisaremos algunos conceptos importantes antes de escribir un programa que resuelva este problema:


Si recordamos  al ejemplo de la primera clase [multiplicar dos números](#nuestro-programa-que-multiplica-dos-números-en-javaScript), hemos utilizado variables para recordar valores, pero...

## ¿Qué son las variables? 
 
Una variable es la combinación de las siguientes cosas: 

* Un nombre  (o identificador) a elección, 
* Una dirección en la memoria de la computadora, 
* Un valor almacenado en esa dirección de la memoria que puede cambiar durante la ejecución del programa,
* Un tipo, que especifica cuanto espacio ocupa ese valor en la memoria, y cómo interpretar este valor. 

> [!WARNING|label: Importante]
>  Para usar una variable necesitas, en primer lugar, declarar la variable! 

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


## ¿Cómo cambiamos el valor almacenado en una variable?

***Asignación***: Una asignación cambia el valor de una variable. Una asignación es una sentencia de la forma:
   
   ```js
    nombre_variable = expresion
   ```

Donde  ``nombre_variable`` es el nombre elegido para la variable. La asignación cambia el valor de la variable  ``nombre_variable`` por el valor de  ``expresion``


Ejemplo: 

<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/l56tAFfey" width="800" height="600"></iframe>

> [!TIP|label: NOTA]
> Link para abrir este ejermplo en otra ventana del navegador [variables](https://editor.p5js.org/compuUNRCIngreso/sketches/l56tAFfey)

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

## Sentencia Condicional ``if``

```js 
    ...
    if (CONDICION) {
        BLOQUE DE SENTENCIAS 
    }

    BLOQUE DE SENTENCIAS SIGUIENTES
    ...
```

![sentencia if .center](img/if.png ':size=50%')



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

 
## Sentencia Condicional ``if-else`` 


```js
    ...
    if (CONDICION) {
        BLOQUE DE SENTENCIAS 1 
    } else{
        BLOQUE DE SENTENCIAS 2 
    }

    BLOQUE DE SENTENCIAS SIGUIENTES
    ...

```
![sentencia if .center](img/if-else.png ':size=70%')



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

##   Operadores de comparación
 
Los operadores de comparación nos permiten comparar el valor de dos expresiones:

```js
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

> [!TIP|label:Ayuda]
> Algunas funciones de utilidad [fill()](https://p5js.org/es/reference/#/p5/fill) y [circle()](https://p5js.org/es/reference/#/p5/circle) para resolver el problema.
 

<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/Jssw9sFDA" width="800" height="600"></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [tirar los dados](https://editor.p5js.org/compuUNRCIngreso/sketches/Jssw9sFDA) 

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


## Actividad 2: Dónde esta el punto (1)?
 
Al pulsar el botón ![ejecutar](img/runbtn.svg) en la ventana del editor se mostrará el Lienzo, de tamaño **500 x 500**, dividido en dos partes iguales  por una línea recta horizontal.  Se  proveen variables ``mouseX`` y  ``mouseY`` que almacenan las coordenadas ``(x, y)`` del punto  donde se hace ***click*** sobre el lienzo. 

La tarea consiste en escribir un programa que decida si se hizo  ***click*** por encima o por debajo de la línea horizontal.

> [!TIP|label:Ayuda]
> Notar que cada vez que se hace ***click*** sobre el lienzo, en la esquina inferior derecha se muestran las coordenadas del ***click***! Esto puede ayudarte al inicio para ubicarte en el sistema de coordenadas cartesianas.  


> [!WARNING|label:Pregunta]
> Nuestro lienzo esta representado como un ***sistema de coordenadas cartesianas***! ¿Dónde esta representado el punto `(0,0)` en este sistema de coordenadas?
 

<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/3eExV-33b" width="800" height="600"></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Donde esta el punto (1)?](https://editor.p5js.org/compuUNRCIngreso/sketches/3eExV-33b)

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


## Actividad 3: Dónde esta el punto (2)?
 

En este caso, al pulsar el botón ![ejecutar](img/runbtn.svg) en la ventana del editor, encontrarás el Lienzo divido en cuatro cuadrantes. Nuevamente se proveen las variables que almacenan las coordenadas ``(x, y)`` del punto donde se hizo ***click*** (``mouseX`` y  ``mouseY``). 

Escribir un programa que decida  en qué cuadrante se ha hecho ***click*** (*arriba-derecha*, *arriba-izquierda*, *abajo-derecha* o *abajo-izquierda*). 


<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/OnSK_3K-7" width="800" height="600"></iframe>


> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Donde esta el punto (2)?](https://editor.p5js.org/compuUNRCIngreso/sketches/OnSK_3K-7)
 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

##  Actividad 4: Le dí a la figura?


 
Cuando ejecutas este programa (botón  ![ejecutar](img/runbtn.svg)), se dibuja un círculo de tamaño aleatorio en el lienzo. Las partes (*centro* y *diametro*) de este círculo quedarán almacenadas en las variables: ``xCentro``, ``yCentro`` y ``diametro``. Además, contamos con las variables ``mouseX`` y ``mouseY``,  utilizadas anteriormente,  que almacenan las coordenadas de un ***click***. Esta actividad consiste en escribir un programa que  decida si se hizo ***click*** dentro del círculo o fuera de él.


<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/N4XRJQjAK" width="800" height="600"></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Le dí a la figura?](https://editor.p5js.org/compuUNRCIngreso/sketches/N4XRJQjAK) 

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


##  Actividad 5: Le dí a la figura (2)?
 
Cuando ejecutas este programa (botón  ![ejecutar](img/runbtn.svg)), se dibuja un cuadrado de tamaño aleatorio en el lienzo. El tamaño de los lados de este cuadrado   quedará almacenada en la variable: ``sideSise``; y las coordenadas `(x,y)` de la esquina superior izquierda del cuadrado quedará almacenada en las variables `xCoord` e `yCoord`, respectivamente. Además, contamos con las variables ``mouseX`` y ``mouseY``,  que almacenan las coordenadas de un *click*. Esta actividad consiste en escribir un programa que  decida si se hizo *click* dentro del cuadrado o fuera de él.


<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/obPixCPm6"  width="800" height="600">></iframe>


> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Le dí a la figura?](https://editor.p5js.org/compuUNRCIngreso/sketches/obPixCPm6)


##  Actividad 6: Que no se escape Angry Bird!



Cuando ejecutas este programa (botón  ![ejecutar](img/runbtn.svg)), tendrás a ***Angry Bird*** en su posición inicial, has ***click*** en el lienzo para comenzar.

Cada vez que presionas la tecla `->`, ***Angry Bird*** se mueve unos pasos hacia adelante!
 

> [!WARNING|label:Atención]
> Nos detenemos y analizamos el código provisto con detalle. 



***Angry Bird*** desaparece cuando sobrepasa los límites del lienzo! La tarea consiste en modificar el código provisto para que ***Angry Bird*** vuelva a comenzar desde su posición inicial cuando éste sobrepasa los límites del lienzo. 


Algunas variables necesarias para resolver este problema:

* `windowWidth`: almacena el  ancho del lienzo
* `windowHeight`: almacena la altura del lienzo

* `birdX`: almacena la  coordenada x de la  posición de angry bird en el lienzo
* `birdY`: almacena la  coordenada y de la  posición de angry bird en el lienzo


<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/K22t_WWgl" . width="800" height="600">></iframe>


> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Angry Bird en movimiento](https://editor.p5js.org/compuUNRCIngreso/sketches/K22t_WWgl)
 
### Ejercicio extra (para resolver en casa)

Si te animás podes definir la la función **moveBackward()**,  que mueve a ***AngryBird*** 20 pasos hacia atrás cuando se presiona la tecla `<-`  

 
