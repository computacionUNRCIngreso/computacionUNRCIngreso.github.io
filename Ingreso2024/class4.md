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


> [!NOTE|label:Preguntas]
> ¿Notaste que  la secuencia `pintar(); derecha()` se repite 4 veces?
> ¿Cómo  haríamos para dibujar una línea, hacia la derecha del cursor, de 10 casilleros de longitud? repetimos 10 veces la secuencia?
 

## Estructuras Repetitivas

Las estructuras repetitivas se utilizan cuando se quiere ejecutar repetidamente una secuencia de instrucciones un cierto número de veces.

### Una estructura repetitiva simple: ``repetir ``

La primera estructura repetitiva que tendremos definida en nuestro lenguaje será el `repetir`. Utilizaremos el `repetir`,  como en este caso, cuando sabemos la cantidad de veces  exacta que queremos repetir nuestra secuencia de instrucciones:


```
function lineaDerecha() {
  repetir(4, [pintar, derecha])
}

```

> [!NOTE|label:IMPORTANTE]
>  Las instrucciones` pintar, derecha ` se ejecutan 4 veces exactamente en el orden en el que aparecen en la lista!


Podemos ahora reescribir nuestra función `lineaDerecha()` utilizando el `repetir`. ¿Cómo lo modificamos para conseguir una línea de 10 casilleros? 


> [!TIP|label:Algunos ejercicios extras]
> Utilice el `repetir` para definir funciones `lineaIzquierda()`, `lineaAbajo()` y `lineaArriba()` las cuales grafican líneas de 4 casilleros de longitud hacia la izquierda, abajo y arriba de la posición del cursor, respectivamente.  Luego, utilice estas funciones para graficar un cuadrado.  


<span style="color:red"> <font size = 6 >Desde Aquí documentación en construcción</font> </span>
 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

### Sentencia ``for``


Lo usamos cuando sabemos exactamente el número de repeticiones o el rango sobre el cual queremos iterar:

``` 
    ...
    for(inicializacion; condicion; incremento) {
        [BLOQUE DE SENTENCIAS] 
    }
    [BLOQUE DE SENTENCIAS SIGUIENTES]
    ...

```
![sentencia for .center](img/for.png ':size=50%')

**Volvamos al ejemplo anterior y veamos un ejemplo!**

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


Algunas cuestiones a tener en cuenta:


* La ``inicializacion``  es ejecutada una única vez: la primera vez que se ejecuta el ``for``

* La ``condicion``: se ejecuta en cada repetición. El ``for`` para de iterar (repetir) cuando ``condicion`` es falsa.

*  ``[BLOQUE DE SENTENCIAS]``,  llamado cuerpo del ``for``,  se ejecuta en cada iteración (Si condicion es verdadera)

* El ``incremento``: Se ejecuta en cada iteración, después del  ``[BLOQUE DE SENTENCIAS]``

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


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

Algunas cuestiones a tener en cuenta:

 * Una sentencia ``while`` repite la ejecución de  una secuencia de sentencias (lo que llamamos el cuerpo del while) ***mientras una condición es verdadera***

 * Para de ejecutar cuando la condición es falsa.

 * La condiición se chequea ***después*** de que el cuerpo del while es executado y ***antes*** de que este se repita.

 * Si tu condición siempre es verdadera entonces tu programa nunca terminará de ejecutarse.


* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 








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

> [!TIP|label:Manos a la obra]

Te dejamos algunas [actividades](https://drive.google.com/file/d/1L5RKzGv-MMXO5FlGanxsvSSu5LbmAy8p/view?usp=drive_link) para que practiques!

<span style="color:red"> <font size = 6 >BORRAR: No revisé las actividades (del último ingreso) poco? mucho?, cambiamos? revisar! resolver! </font> </span>




