# Algoritmos y Programas


## ¿Qué es un algoritmo?

> ***Algoritmo:***: Una secuencia de operaciones bien definidas que resuelve un
> problema concreto luego de una secuencia de pasos finita (*termina*).

* * *

## ¿Cómo se describe un programa?

Por medio de un *lenguaje o notación* que permite describir las computaciones

* ***Lenguaje natural***: Problemas de falta de precisión y posibles ambigüedades

* ***Código de máquina***: Representación de las instrucciones y datos
  codificadas para un tipo de máquina en particular

* ***Lenguaje de programación***: Provee una máquina abstracta, de alto nivel.
  Hace los programas portables mediante su traducción (o codificación) a
  instrucciones de máquina específicas.

> [!NOTE|label:Lenguaje de programación]
> Define una sintaxis y una semántica (significado/representación) para:
> - Describir valores numéricos (como 1, 3.14, -5), lógicos ($\{true, false\}$),
>   caracteres ($\{'a','b'\ldots,'z',\ldots\}$), cadenas de caracteres como
>   `"hola mundo"`, secuencias de datos como `[1,2,3,4,5]` y otros
> - Definir *variables* y *constantes*: Darles nombres a datos. Ej: 
>   `const Pi=3.14` y `var x = 0`
> - Expresiones matemáticas ($a+b$, $(x + y) / z$, $\ldots$)
> - Expresiones lógicas ($a==b$, $a<b$, $a<=b$, $\ldots$) y sus combinaciones
>   con los operadores $\lor$ (`or` o `||`), $\land$ (`and` o `&&`),
>   $\neq$ (`!=`) y otros
> - Sentencias de control de flujo de ejecución:
>   - Secuencias (o bloques) de operaciones. Ej: `{ op1; op2; ... }`
>   - Condicionales como `if (x>0) y=1 else y=-1`  (*hacer y=1 si x es mayor que
>     cero, sino hacer y=-1*)
>   - Ciclos o repeticiones de operaciones
> - Definir e invocar (usar) *funciones*

-------------------------------------------------------------------------------

1. Dada una grilla de $n \times n$ y un lápiz que comprende y puede ejecutar
  las siguientes primitivas u operaciones (el lápiz sería la CPU):

    ![primitivas .center](img/primitivas.png ':size=50%')

    1. Escriba un Algoritmo (secuencia de pasos) que pinte el siguiente
       cuadrado:
       
       ![cuadrado .center](img/cuadrado.png ':size=40%')
    
    2. Escriba un Algoritmo (secuencia de pasos) que pinte dos cuadrados:

       ![dos-cuadrados .center](img/dos-cuadrados.png ':size=50%')

> [!WARNING|label:Preguntas]
> 1. ¿Es la solución planteada en el ejercicio anterior la única posible? 
> 2. ¿Y si deseamos hacer 10 cuadrados?

-------------------------------------------------------------------------------

Utilizaremos el editor web [p5.js](p5js.org) que se basa en el lenguaje de
programación JavaScript. Los programas se ejecutan en nuestro navegador web.

En este programa ya existen las siguientes primitivas (funciones) predefinidas:

* `izquierda()`: mueve el cursor 1 paso a la izquierda
* `derecha()`: mueve el cursor 1 paso a la derecha
* `arriba()`: mueve el cursor 1 paso hacia arriba
* `abajo()`: mueve el cursor 1 paso hacia abajo
* `pintar()`: pinta en color negro la posición actual del cursor

> [!NOTE|label:Funciones]
> Podemos ver una *función* como un *miniprograma* que realiza alguna acción.
> Para ejecutar una función se la debe *invocar* mediante su nombre y sus
> argumentos o parámetros entre paréntesis (como cuando en matemáticas
> escribimos algo como $seno(30)$ para calcular el seno de 30º). 
> En este caso el uso de `()` indica que no tienen parámetros.
>
> Invocar una función es como *reemplazarla por su cuerpo*.
> Ejemplo: Si definimos la siguiente función
> ``` js
> // Definición         Invocación   equivale a
> function linea() {    linea()      derecha()
>   derecha()                        pintar()
>   pintar()                         derecha()
>   derecha()                        pintar()
>   pintar()
> }
> ```

-------------------------------------------------------------------------------

En este ejercicio el código en `ej_dibujar_en_la_cuadricula.js` *define* la función `dibujar()`, en
la cual deberán escribir la secuencia de acciones (invocar a funciones) para que
dibuje un cuadrado.

Al pulsar el botón ![ejecutar](img/runbtn.svg) en la ventana del editor, el
sistema ejecutará la función `dibujar()`.

<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/zZbT3F77b" 
        width="800" height="600">
</iframe>

> [!TIP|label:NOTA]
> Link para abrir este ejemplo en otra ventana del navegador [dibujar en la
> cuadricula](https://editor.p5js.org/compuUNRCIngreso/sketches/zZbT3F77b)

-------------------------------------------------------------------------------

## Un problema numérico

> *Problema*: Calcular la multiplicación de dos números naturales (llamemos a
> estos dos números a y b) usando sumas. Dé en primer lugar una descripción
> matemática del problema y luego  escriba un algoritmo en lenguaje natural para
> resolver este problema.

Podemos describir este problema matemáticamente como:
         
$$a \times b = \sum_{i=1}^b a$$

La notación de arriba significa: $\underbrace{a+a+\ldots+a}_{b \: veces}$

-------------------------------------------------------------------------------

Un algoritmo que resuelve este problema es el siguiente (en lenguaje natural):**

1. $a=?$, $b=?$, $resultado \leftarrow 0$, $veces \leftarrow 0$
   - `a` y `b` son los *datos de entrada* o *inputs*
   - `resultado` y `veces` son *variables auxiliares*
2. **Si** veces = b **ir** al paso 6 (terminar)
3. resultado **←** resultado + a
4. veces **←** veces + 1
5. **Volver al paso 2**
6. **Fin**: en `resultado` queda la solución

**¿Lo  ejecutamos paso a paso para a = 4 y b = 3?**

-------------------------------------------------------------------------------

Como vimos, los lenguajes de programación nos permiten abstraernos de los
detalles de la máquina concreta. Escribamos en JavaScript el programa que
multiplica dos números.

Necesitamos repetir operaciones mientras se cumpla una condición. La sentencia
`while` (*mientras*) al rescate!

```js
while (c) {     // 1. Evaluar c. Si c es verdadero, ejecutar a; sino b
  a             //    este es el "cuerpo" del ciclo
}               // 2. Volver al paso 1 (al while)
b               // 3. Aquí ya salimos del ciclo
```

> Esta sentencia es un ejemplo de una *abstracción* sintáctica y alternativa
> para describir ciclos sin usar *saltos* (como por ejemplo, *volver al paso
> 2*).

<iframe src="https://editor.p5js.org/compuUNRCIngreso/sketches/-j2BmBYG5" 
        width="100%" height="900">
</iframe>

> [!TIP|label: NOTA]
> Link para abrir este ejemplo en otra ventana del navegador  [multiplicar dos
> números](https://editor.p5js.org/compuUNRCIngreso/sketches/-j2BmBYG5)

> [!NOTE|label: Variable]
> Una ***variable*** representa un valor (como en matemáticas) que se puede usar
> mediante su nombre o identificador. 
> En un programa, cada variable corresponde a una celda de la memoria la cual
> contiene el valor correspondiente.

-------------------------------------------------------------------------------

### Ejercicio extra (para resolver en casa)

Calcular la suma de los números menores a uno dado, digamos $m$. Dar una
descripción matemática del problema, luego escriba un algoritmo para resolver
este problema.

## Programación

> [!WARNING|label:Pregunta] ***Para programar, ¿Sólo necesito aprender un
> lenguaje?***
>
> 1. **NO: Programar es resolver problemas mediante algoritmos**
> 2. Un lenguaje de programación sólo nos da una notación para escribir
>    programas
>
> Para diseñar y escribir una solución (programa) se requiere:
>   1. Definir cómo representar el problema (estructuras de datos)
>   2. Definir operaciones y manipulaciones (algoritmos) sobre los datos

Otros problemas:

- Almacenamiento y procesamiento de grandes volúmenes de datos (bases de datos)
- Lidiar con la complejidad del problema para lograr programas eficientes (que
  no requieran tanta memoria y tiempo de procesamiento) para que sean usables
