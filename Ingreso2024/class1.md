# Algoritmos y Programas


## ¿Qué es un algoritmo?

> ***Algoritmo:***: Una secuencia de operaciones bien definidas que resuelve un
> problema concreto luego de una secuencia de pasos finita (*termina*)

* * *

## ¿Cómo se describe un programa?

Por medio de un *lenguaje o notación* que permite describir las computaciones

* ***Lenguaje natural***: Problemas de falta de precisión y posibles ambigüedades

* ***Código de máquina***: Representación de las instrucciones y datos
  codificadas para un tipo de máquina en particular

* ***Lenguaje de programación***: Provee una máquina abstracta, de alto nivel.
  Hace los programas portables mediante su traducción a códigos de máquina específicas.

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ** * * * * * * *

## Escribiendo Algortimos para resolver problemas


> *Problema*: Calcular la multiplicación de dos números naturales (llamemos a estos dos 
> números a y b ) usando sumas. Dé en primer lugar una descripción matemática
> del problema y luego  escriba un algoritmo en lenguaje natural para resolver
> este problema.

Podemos describir este problema matemáticamente como:

         
$$a \times b = \sum_{i=1}^b a$$

La notación de arriba significa: $\underbrace{a+a+\ldots+a}_{b \: veces}$

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * ** * * * * * * *


Un Algoritmo que resuelve este problema es el siguiente (en lenguaje natural):**

1. $a=?$, $b=?$, $resultado \leftarrow 0$, $veces \leftarrow 0$ `a` y `b` son los *datos de entrada* o *inputs* 
`resultado` y `veces`: *variables auxiliares*
2. **Si** veces = b **ir** al paso 6 (terminar)
3. resultado **←** resultado + a
4. veces **←** veces + 1
5. **Volver al paso 2**
6. **Fin**: en `resultado` queda la solución

**¿Lo  ejecutamos paso a paso para a = 4 y b = 3?**


Como vimos, los lenguajes de programación nos permiten abstraernos de los detalles de la máquina concreta. Escribamos en JavaScript
el programa que multiplica dos números.

> [!TIP|label: Atención]
> Antes de comenzar exploremos el ambiente de programación

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/-j2BmBYG5"  width="100%" height="900"></iframe>


> [!TIP|label: NOTA]
> Link para abrir este ejermplo en otra ventana del navegador  [multiplicar dos números](https://editor.p5js.org/compuUNRCIngreso/sketches/-j2BmBYG5)


- La sentencia `while` (mientras) ejecuta las instrucciones que siguen entre
llaves repetidamente mientras la condición sea verdadera. Este es solo nuestro primer ejemplo! Veremos estructuras repetitivas en las próximas clases!

- Lo que sigue a `//`es ignorado por el traductor (son comentarios del programador)

> [!NOTE|label: NOTA]
> Una ***variable*** representa un valor (como en matemáticas) que se puede usar
> mediante su nombre o identificador. 
> En un programa, cada variable corresponde a una celda de la memoria la cual
> contendrá el valor correspondiente.


2. Dada una grilla de $n \times n$ y un lápiz que comprende y puede ejecutar  las
  siguientes primitivas:

    ![primitivas .center](img/primitivas.png ':size=50%')

    1. Escriba un Algoritmo (secuencia de pasos) que pinte el siguiente
       cuadrado:
       
       ![cuadrado .center](img/cuadrado.png ':size=40%')
    
    2. Escriba un Algoritmo (secuencia de pasos) que pinte dos cuadrados:

       ![dos-cuadrados .center](img/dos-cuadrados.png ':size=50%')

> [!NOTE|label:Preguntas]
> 1. ¿Es la solución planteada en el ejercicio anterior la única posible? 
> 2. ¿Y si deseamos hacer 10 cuadrados?


Utilizaremos el editor web **p5.js** y JavaScript para programar los algoritmos que ya realizamos. 

Antes de comenzar exploremos el ambiente de programación y las funciones con las que contamos:


* `izquierda()`: mueve el cursor 1 paso a la izquierda
* `derecha()`: </span> mueve el cursor 1 paso a la derecha
* `arriba()`: mueve el cursor 1 paso hacia abajo
* `abajo()`: mueve el cursor 1 paso hacia abajo
* `pintar()`: pinta en color negro la posición actual del cursor

> [!NOTE|label:IMPORTANTE]
> Notar que las `funciones` anteriores definen comportamiento reusable y podemos **abstraernos** de `cómo` funcionan, solo nos interesa `qué` función realizan cuando  estás son invocadas: Cada una de ella realiza una de las primitivas definida en la tabla de primitivas presentada anteriormente.


<!--span style="color:green"> repetir(n){\<instrucciones\>}:repite las instrucciones que aparecen entre llaves n veces</span--> 
<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/gWXUTRthW" width="800" height="600"></iframe>

Link para abrir este ejemplo en otra ventana del navegador  [dibujar en la cuadricula](https://editor.p5js.org/compuUNRCIngreso/sketches/gWXUTRthW)

  
 3.  Calcular la suma de los números menores a uno dado, digamos $m$. Dar una
     descripción matemática del problema, luego escriba un algoritmo para
     resolver este problema.

* * *
<!--
## Computadora


- **Una computadora moderna es una máquina que tiene al menos los siguientes
  componentes (hardware):**

  ![hardware .center](img/hardware.png ':size=50%')

* ***Memoria***: Una secuencia de celdas que almacenan información. Permite
  almacenar (“recordar”) valores numéricos.

* ***Unidad central de procesamiento o CPU***: se encarga de ejecutar las
  instrucciones de un programa almacenado en la memoria.

* ***Dispositivos de entrada-salida***: teclado, pantalla, sensores, etc.
  Permiten interactuar con el mundo exterior. </font>

* * *
-->

<!--
## Memoria

### Memoria (principal o RAM)

* Tabla de $n$ celdas (***bytes***) que almacenan valores numéricos
* Contiene las instrucciones del programa y datos
* Cada celda se referencia por su dirección: Valor entre $[0, n − 1]$
* Su capacidad es $n$ (cantidad de celdas o bytes)
-->
<!--
### Sólo almacena números! (por eso es digital)

> [!WARNING]
> ¿Cómo se representan las instrucciones, texto (letras y símbolos), imágenes,
> videos, números enteros, reales...?

***todo se debe codificar con números!*** (como veremos en la [clase 2](#clase2))

-->
<!--
* * *

## Funcionamiento de una computadora

* La ***memoria*** almacena las instrucciones de programa, los datos de entrada
  y los datos computados o resultados.

* La ***CPU*** analiza y ejecuta las instrucciones:

    1. Toma (lee) la próxima instrucción </font>
    2. La analiza y ejecuta, lo que puede requerir:
        - Leer valores de la memoria </font>
        - Realizar cálculos aritméticos o comparar valores
        - Posiblemente escribir un valor en la memoria
        - Determinar cuál será la próxima instrucción a ejecutar (comúnmente la
          inmediata siguiente)

  > [!NOTE|label:NOTA]
  > La CPU ejecuta esos pasos repetidamente (*ciclos*). Cada paso se hace en
  > cada pulso de un reloj interno. Su *velocidad* depende de la *cantidad de pulsos*
  > por segundo o ***Hertzs (Hz)***. Ej: $1 GHz = 1,000,000,000$.

* Un ***dispositivo de entrada*** (ej: teclado) escribe datos en una celda
  de la memoria
* Un ***dispositivo de salida*** (ej: pantalla) lee datos desde algunas celdas
  de la memoria

* * *
-->
<!--
## Herramientas de programación

### Lidiando con la complejidad  

* Cargar las instrucciones y datos de un programa en la memoria usando números
  es muy tedioso y propenso a cometer errores
* Las instrucciones de máquina son muy simples (de bajo nivel). Un programa real
  requerirá cientos de miles o millones de instrucciones

### Solución: Uso de herramientas y abstracciones  
* Programamos usando lenguajes de programación de alto nivel (texto legible)
* Los traducimos a instrucciones de máquina usando otros programas (compilador o intérprete)

* * * 
-->


## Programación

> [!WARNING|label:Pregunta] ***Para programar, ¿Sólo necesito aprender un lenguaje?***
>
> 1. **NO: Programar es resolver problemas mediante algoritmos**
> 2. Un lenguaje de programación sólo permite describir programas
>
> - Para diseñar y escribir una solución (programa) se requiere:
>   1. Definir cómo representar el problema. (Uso de estructuras de datos)
>   2. Definir operaciones y manipulaciones (algoritmos) sobre esas estructuras
>      de datos 

Otros problemas:

* Almacenamiento y procesamiento de grandes volúmenes de datos (bases de datos)
* Lidiar con la complejidad del problema para lograr programas eficientes y usables
