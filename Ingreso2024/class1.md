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
## <span style="color:green"> <font size = 4 >   Funcionamiento de una computadora </font> </span>


Se requiere una memoria para almacenar las instrucciones de
programa y los datos de entrada y computados
Se requiere de un dispositivo (autómata) que analice y ejecute
las instrucciones
1 Tome (lea) la próxima instrucción
2 La analice y ejecute, lo que puede requerir
1 Leer valores de la memoria
2 Realizar cálculos aritméticos y/o comparaciones
3 Posiblemente escribir un valor en la memoria
4 Determinar cuál será la próxima instrucción a ejecutar
Este dispositivo se denomina Unidad Central de
Procesamiento (CPU)2









