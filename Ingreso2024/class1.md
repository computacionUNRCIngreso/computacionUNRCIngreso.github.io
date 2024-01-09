# <span style="color:green"> <font size = 10 >  Algoritmos y Programas  </font> </span>


## <span style="color:green"> <font size = 4 >  ¿Qué es un algoritmo? </font> </span>


 <font size = 4 >  Una secuencia de operaciones bien definidas que resuelve un
problema concreto luego de una secuencia de pasos finita (termina). </font>

* * *

## <span style="color:green"> <font size = 4 >   ¿Cómo se describe un programa?</font> </span>

<font size = 4 > Por medio de un lenguaje que permite describir las computaciones
*   <span style="color:green"> Lenguaje natural</span>: Problemas de falta de precisión y posibles ambigüedades

*   <span style="color:green"> Código de máquina </span>: Representación de las instrucciones y datos codificadas para un tipo de máquina en particular

*   <span style="color:green"> Lenguaje de programación </span>: Provee una máquina abstracta, de alto nivel. Hace los programas portables mediante su
traducción a códigos de máquina específicas.
</font>

* * *

## <span style="color:green"> <font size = 4 >   Escribiendo Algortimos para resolver problemas </font> </span>

<font size = 4 > 1. Dada una grilla de _n x n_ y un lápiz que comprende y puede ejecutar  las siguientes primitivas:</font>

<center>
<img src="/img/primitivas.png" alt="primitivas" style="height: 200px; width:400px;"/>
</center>
<font size = 4 > a. Escriba un Algoritmo (secuencia de pasos) que pinte el siguiente cuadrado:</font>
    <center>
    <img src="/img/cuadrado.png" alt="cuadrado" style="height: 200px; width:200px;"/>
    </center>
<font size = 4 > b. Escriba un Algoritmo (secuencia de pasos) que pinte dos cuadrados:</font>
    <center>
    <img src="/img/dos-cuadrados.png" alt="dos-cuadrado" style="height: 200px; width:400px;"/>
    </center>

 <font size = 4 >**¿Es la solución planteadas en el ejercicio anterior las únicas posibles? ¿Cuántas soluciones diferentes se podrían escribir? ¿Y si deseamos hacer 10 cuadrados?** </font>
 
 <font size = 4 >2. Calcular la multiplicación de dos números naturales (llamemos a estos dos números a y b ) usando sumas. Dé en primer lugar una descripción matemática del problema y luego  escriba un algoritmo en lenguaje natural para resolver este problema.</font>

**Solución:** 
    <center>
         <img src="/img/multiplicacion.png" alt="multiplicacion"/>
    </center>

<font size = 4 >**Algoritmo (en lenguaje natural):**</font>


1. a = ?, b = ?, acumulador **←** 0, contador **←** 0 (acumulador y contador: variables auxiliares)
 
2. **Si** contador = b **ir** al paso 6 (terminar)

3. acunulador **←** acumulador + a

4. contador **←** contador + 1
5. **Volver al paso 2**
6. **Fin**: el resultado queda en acumalador

<font size = 4 >**¿Lo  ejecutamos paso a paso para a = 4 y b = 3?** </font>


 <font size = 4 >3.  Calcular la suma de los números menores a uno dado, digamos m. Dé una descripción matemática del problema, luego escriba un algoritmo para resolver este problema.

* * *
## <span style="color:green"> <font size = 4 >   Computadora </font> </span>

 <font size = 4 > **Una computadora moderna es una máquina que tiene al menos los siguientes componentes (hardware):** </font>

 <center>
         <img src="/img/hardware.png" alt="hardware" style="height: 300px; width:300px;"/>
</center>



* <font size = 4 > <span style="color:green"> Memoria:</span> Una secuencia de celdas que almacenan información. Permite almacenar (“recordar”) valores numéricos. </font>

* <font size = 4 > <span style="color:green"> Unidad central de procesamiento o CPU: </span> se encarga de ejecutar las instrucciones de un programa almacenado en la memoria. </font>
* <font size = 4 > <span style="color:green"> Dispositivos de entrada-salida (teclado, pantalla, sensores, etc.):</span> le permite interactuar con el mundo exterior. </font>

* * *

## <span style="color:green"> <font size = 4 >   Memoria </font> </span>

### <span style="color:green"> <font size = 4 >   Memoria (principal o RAM) </font> </span>
<font size = 4 > 

* Tabla de n celdas (bytes) que almacenan valores numéricos
* Contiene las instrucciones del programa y datos
* Cada celda se referencia por su dirección: Valor entre 0..n − 1
* Su capacidad es n (cantidad de celdas o bytes)

</font>

### <span style="color:green"> <font size = 4 >   Sólo almacena números! (por eso es digital) </font> </span>
<font size = 4 > 

* ¿Cómo se representan las instrucciones, texto (letras y símbolos), imágenes, videos, números enteros, reales . . . ?

<span style="color:green"> todo se debe codificar!.</span>
Como veremos en la [clase 2](#clase2)  


</font>

* * *
## <span style="color:green"> <font size = 4 >   Funcionamiento de una computadora </font> </span>

* <font size = 4 > La <span style="color:green"> memoria </span>  almacena las instrucciones de programa y los datos de entrada y los datos computados.</font>
* <font size = 4 > La <span style="color:green"> CPU </span> analiza y ejecute las instrucciones: </font>

    1.  <font size = 4 > Tome (lea) la próxima instrucción </font>
    2.  <font size = 4 > La analice y ejecute, lo que puede requerir: </font>
        1.  <font size = 4 > Leer valores de la memoria </font>
        2.  <font size = 4 > Realizar cálculos aritméticos y/o comparaciones </font>
        3.  <font size = 4 > Posiblemente escribir un valor en la memoria </font>
        4.  <font size = 4 > Determinar cuál será la próxima instrucción a ejecutar </font>


* * *

## <span style="color:green">  <font size = 4 > Herramientas de programación  </font> </span>



### <span style="color:green">  <font size = 4 >  Lidiando con la complejidad  <!-- {docsify-ignore} -->   </font> </span>


* <font size = 4 > Cargar las instrucciones y datos de un programa en la memoria usando números es muy tedioso y propenso a cometer errores </font>
* <font size = 4 > Las instrucciones de máquina son muy simples (de bajo nivel). Un programa real requiere de miles o millones de instrucciones </font>

### <span style="color:green">  <font size = 4 > Solución: Uso de herramientas y abstracciones  <!-- {docsify-ignore} --> </font> </span>


* <font size = 4 > Programamos usando lenguajes de programación de alto nivel (texto legible)</font>
* <font size = 4 > Los traducimos a instrucciones de máquina usando otros programas (compilador o intérprete)</font>


* * * 

## <span style="color:green">  <font size = 4 > Lenguajes de programación  </font> </span>

### <font size = 4 >  Nuestro programa que multiplica dos números en JavaScript:  <!-- {docsify-ignore} -->   </font>



<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/-j2BmBYG5"  width="800" height="600"></iframe>
<!--iframe src="https://editor.p5js.org/compuUNRCIngreso/full/kCc-U1osi" width="800" height="600" ></iframe-->


 <font size = 4 >  Podés acceder a este ejemplo: [multiplicar dos números](https://editor.p5js.org/compuUNRCIngreso/sketches/-j2BmBYG5).

La sentencia <span style="color:green"> while (condición) </span> ejecuta las instrucciones entre llaves repetidamente mientras la condición sea verdadera.
Lo que sigue a <span style="color:green"> // </span> es ignorado por el traductor (comentarios para el programador)

</font>


* * *


<font size = 4 > Volvamos a los ejercicios <span style="color:green"> [1a y 1b](#escribiendo-algortimos-para-resolver-problemas) </span>, y utilicemos [p5.js](https://editor.p5js.org/compuUNRCIngreso/sketches/gWXUTRthW) y JavaScript para programar los algoritmos que ya realizamos. Antes de comenzar exploremos el ambiente de programación, las funciones e intrucciones con las que contamos:


* <span style="color:green"> izquierda(): </span> mueve el cursor 1 paso a la izquierda
* <span style="color:green"> derecha(): </span> mueve el cursor 1 paso a la derecha
* <span style="color:green"> abajo(): </span> mueve el cursor 1 paso hacia abajo
* <span style="color:green"> arriba(): </span> mueve el cursor 1 paso hacia abajo
* <span style="color:green"> pintar(): </span> pinta en color negro la posición actual del cursor
* <span style="color:green"> repetir(n){\<instrucciones\>}: </span> repite las instrucciones que aparecen entre llaves n veces

</font>

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/gWXUTRthW" width="800" height="600"></iframe>

* * *

## <span style="color:green">  <font size = 4 > Programación  </font> </span>

<font size = 4 >

<span style="color:green">  Para programar, ¿Sólo necesito aprender un lenguaje? </span>

1. **NO: Programar es resolver problemas mediante algoritmos**

2. Un lenguaje de programación sólo permite describir programas

3. Para diseñar y escribir una solución (programa) se requiere:

    1. Definir cómo representar el problema. (Uso de estructuras de datos)

    2. Definir operaciones y manipulaciones (algoritmos) sobre esas estructuras de datos

4. Otros problemas:

    * Almacenamiento y procesamiento de grandes volúmenes de datos (bases de datos)

    * Lidiar con la complejidad del problema para lograr programas eficientes y usables

</font>

* * *

 
