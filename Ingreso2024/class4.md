#  Estructura Repetitiva en la Resolución de Problemas Algorítmicos


Retomaremos un ejercicio  visto en clases anteriores: Dada una grilla de *n x n* y las siguientes funciones: 

* `izquierda()`: mueve el cursor 1 paso a la izquierda
* `derecha()`:  mueve el cursor 1 paso a la derecha
* `arriba()`: mueve el cursor 1 paso hacia arriba
* `abajo()`: mueve el cursor 1 paso hacia abajo
* `pintar()`: pinta en color negro la posición actual del cursor


El programa que se muestra en el editor de `p5.js` dibuja una línea (hacia la derecha del cursor), de 4 casilleros de longitud:

<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/Xv5SeaErt" width="800" height="600"></iframe> 

> [!TIP|label:NOTA]
> Link para abrir este ejemplo en otra ventana del navegador  [dibujar en la cuadricula](https://editor.p5js.org/compuUNRCIngreso/sketches/Xv5SeaErt)


> [!WARNING|label:Preguntas]
> ¿Notaste que  la secuencia `pintar() derecha()` se repite 4 veces?
> ¿Cómo  haríamos para dibujar una línea, hacia la derecha del cursor, de 10 casilleros de longitud? ¿Repetimos 10 veces la secuencia?
 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

## Estructuras Repetitivas

Las estructuras repetitivas se utilizan cuando se quiere ejecutar repetidamente una secuencia de instrucciones un cierto número de veces. En esta clase veremos algunas estructuras repetitivas simples.

### Una estructura repetitiva simple: ``repetir ``

La primera estructura repetitiva que tendremos definida en nuestro lenguaje será el `repetir`. Utilizaremos el `repetir`,  como en este caso, cuando sabemos la cantidad de veces  exacta que queremos repetir nuestra secuencia de instrucciones:


 ``` js
                                           
 function lineaDerecha() {              function lineaDerecha() { 
   repetir(4,[pintar, derecha])            repetir(4,pintarDerecha)                                  
 }                                =     }

                                        function pintarDerecha() { 
                                           pintar()
                                           derecha()
                                        }
                       
```


> [!WARNING|label:Importante]
>  * El `repetir` toma como argumento una lista de funciones sin argumentos o bien una función sin argumentos
>  * Las funciones` pintar, derecha ` se ejecutan 4 veces exactamente en el orden en el que aparecen en la lista!


> [!WARNING|label:Pregunta]
> ¿Cómo lo modificamos para conseguir una línea de 10 casilleros? 



### Ejercicio extra (para resolver en casa)

Utilice el `repetir` para definir funciones `lineaIzquierda()`, `lineaAbajo()` y `lineaArriba()` las cuales grafican líneas de 4 casilleros de longitud hacia la izquierda, abajo y arriba de la posición del cursor, respectivamente.  Luego, utilice estas funciones para graficar un cuadrado.  


* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

### Estructura repetitiva``for-of``


Esta estructura también la  usaremos cuando sabemos exactamente el número de repeticiones o el rango sobre el cual queremos iterar:

```js 
    ...

    for (var i of range(1,5) ){
        pintar()
        derecha()
    }
    [BLOQUE DE SENTENCIAS SIGUIENTES]
    ...

```
![sentencia for .center](img/for-of.png ':size=60%')

**Volvamos al ejercicio anterior y veamos un ejemplo!**

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


<!--Algunas cuestiones a tener en cuenta:


* La ``inicializacion``  es ejecutada una única vez: la primera vez que se ejecuta el ``for``

* La ``condicion``: se ejecuta en cada repetición. El ``for`` para de iterar (repetir) cuando ``condicion`` es falsa.

*  ``[BLOQUE DE SENTENCIAS]``,  llamado cuerpo del ``for``,  se ejecuta en cada iteración (Si condicion es verdadera)

* El ``incremento``: Se ejecuta en cada iteración, después del  ``[BLOQUE DE SENTENCIAS]``

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

-->


## Más Actividades!


Las funciones  que se listan abajo permiten  dibujar en el lienzo la trayectoria de ***El Lápiz del Caminante***. El sistema de coordenadas del ***Caminante*** utiliza píxeles como medida de la  distancia y grados para las rotaciones. ***El caminante*** inicia su recorrido en el ***centro del lienzo  mirando recto hacia la derecha (0 grados)***
.
> [!WARNING|label: Importante]
> Los grados  positivos son en el sentido de las agujas del reloj!


Funciones para manipular ***El  Caminante*** sobre el lienzo:

* ``avanzar(p) ``:   El caminante avanza ``p`` cantidad de pasos (pixeles), en línea recta, en  la 
    dirección actual. Si el lapiz esta bajo se dibuja el trayecto.

* ``girarDerecha(g) ``: Gira la dirección del caminante ``g`` grados hacia la derecha.

* ``girarIzquierda(g)``: Gira la dirección del caminante ``g`` grados hacia la izquierda.

* ``posicionarCaminante(x , y)``: Traslada el caminante a la coordenada ``(x,y)`` dentro del lienzo, 
    manteniendo la dirección actual del  mismo. (Sin dibujar el trayecto)

* ``mostrarPosicionCaminante()``: Muestra la posición actual, coordenadas ``(x, y)``  del caminante.

* ``subirLapiz()``: Luego de invocar esta función, y hasta tanto no se baje el lápiz, la instrucción avanzar modifica la posición del caminante pero
    no traza el camino recorrido.

* ``bajarLapiz()``: Baja el lápiz. Si el lápiz esta bajo la instrucción avanzar traza el camino recorrido.

* ``cambiarColorLapiz(c)``: Cambia el color del lápiz de dibujo al color dado como argumento. Colores disponibles:

    * ``verde`` 
    * ``rojo``
    * ``fucsia``	
    * ``negro``
    * ``azul`` 
    * ``amarillo``
    * ``violeta``

* ``cambiarTrazoLapiz(n)``: Define el ancho del trazo del lapiz. ``n`` representa pixeles.

* ``cambiarColorLapizAleatorio()``: Cambia el color del lápiz de dibujo a un color aleatorio dentro de los colores 
    disponibles.


> [!TIP|label: Ayuda]
> Si haces click sobre el lienzo, verás la posición del ***click*** en la consola!


* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


La primera  actividad consiste escribir un programa que dibuje  la siguiente trayectoria (escalera) del ***Caminante***:

![escalera .center](img/escalera.jpg ':size=40%')

<!--for (i = 1; i <= 4; i++){
      avanzar(20);
      girarDerecha(90);
      avanzar(20);
      girarIzquierda(90);
   }  
-->

<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/kCc-U1osi"  width="800" height="600">></iframe>




> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [El Caminante](https://editor.p5js.org/compuUNRCIngreso/sketches/kCc-U1osi)

> [!WARNING| Importante]
> Si tienes la necesidad de repetir la misma secuencia de instrucciones para resolver el ejercicio, entonces recuerda usar  las estructuras repetitivas!

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


> [!TIP|label:Manos a la obra]
> Te dejamos algunas actividades para que practiques! 
> 1. Dibujar un triángulo equilatero: La suma de sus ángulos interiores es 180º (Cada ángulo mide 60º)
> 2. Dibujar un hexágono (polígono regular de 6 lados):  La suma de sus ángulos interiores es 720º (Cada ángulo mide 120º)
> 3. ¿Es posible dibujar un círculo? ¿Cómo? En caso afirmativo escriba las instrucciones para ello.
> 4. Escriba un programa para dibujar la siguiente figura donde los lados de cada triángulo equilatero miden 50 pixeles. Recuerde que puede definir, y usar, nuevas funciones, por ejemplo `dibujarTriangulo()`.
>
> ![banderines .center](img/banderines.png ':size=40%')

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

<span style="color:red"> <font size = 6 >Desde Aquí documentación en construcción</font> </span>


### Sentencia ``while``

```js
    ...
    while (CONDICION) {
        [BLOQUE DE SENTENCIAS] 
    }

    [BLOQUE DE SENTENCIAS SIGUIENTES]
   ` ...
```

![sentencia while .center](img/while.png ':size=50%')

Un Ejemplo:


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/kjMtG37Ihy"  width="800" height="600">></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Ejemplo while](https://editor.p5js.org/compuUNRCIngreso/sketches/kjMtG37Ihy)

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

Algunas cuestiones a tener en cuenta:

 * Una sentencia ``while`` repite la ejecución de  una secuencia de sentencias (lo que llamamos el cuerpo del while) ***mientras una condición es verdadera***

 * Para de ejecutar cuando la condición es falsa.

 * La condiición se chequea ***después*** de que el cuerpo del while es executado y ***antes*** de que este se repita.

 * Si tu condición siempre es verdadera entonces tu programa nunca terminará de ejecutarse.


* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

