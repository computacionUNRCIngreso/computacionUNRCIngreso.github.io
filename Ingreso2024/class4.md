#  Estructura Repetitiva en la Resolución de Problemas Algorítmicos


Las funciones  que se listan abajo permiten  dibujar en el lienzo la trayectoria de ***El Lápiz del Caminante***. El sistema de coordenadas del ***Caminante*** utiliza píxeles como medida de la  distancia y grados para las rotaciones. ***El caminante*** inicia su recorrido en el centro del lienzo  mirando recto hacia la derecha (0 grados).

> [!NOTE|label: IMPORTANTE]
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


> [!TIP]
> Si haces click sobre el lienzo, en la Consola, verás la posición del click


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

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/kCc-U1osi"  width="800" height="600"></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [El Caminante](https://editor.p5js.org/compuUNRCIngreso/sketches/kCc-U1osi)

> [!WARNING]
> Notames que la misma secuencia de pasos se repite!

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

## Estructuras Repetitivas

Las estructuras repetitivas se utilizan cuando se quiere ejecutar un conjunto de instrucciones un cierto número de veces.


### Sentencia ``while``

``` 
    ...
    while (CONDICION) {
        [BLOQUE DE SENTENCIAS] 
    }

    [BLOQUE DE SENTENCIAS SIGUIENTES]
    ...
```

![sentencia while .center](img/while.png ':size=50%')

Un Ejemplo:


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/kjMtG37Ihy"  width="800" height="600">></iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejercicio en otra ventana del navegador [Ejemplo while](https://editor.p5js.org/compuUNRCIngreso/sketches/kjMtG37Ihy)





* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

### Sentencia ``for``


