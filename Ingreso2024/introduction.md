# ¿Qué estudia esta disciplina?

* Análisis y desarrollo de ***algoritmos***

* Representación de problemas e información (estructuras de datos)

* Estudio y desarrollo de modelos de computación, es decir de la maquinaria
  necesaria para computar

* Lenguajes y técnicas de programación

* Áreas prácticas: Gráficos, animación, simulación, redes y telecomunicaciones,
  aprendizaje automático (inteligencia artificial), ingeniería de software, ...

-------------------------------------------------------------------------------

## Problemas fundamentales

 1. ¿Qué tipos de problemas se pueden resover automáticamente (por una máquina)?

 2. ¿A qué costo se puede resolver un problema (cuántos pasos o cuánta memoria
    requiere)?

![pregunta .center](img/pregunta.jpg ':size=25%')

-------------------------------------------------------------------------------

## Computación y matemáticas

En computación nos concentramos en cómo computar *mecánicamente* una solución a
un problema, lo que nos lleva a las siguientes preguntas.

1. ¿Cómo debería ser un *dispositivo de cómputo programable* o *computadora*?
2. ¿Cómo se deberían *describir los programas*?

Para la primera pregunta hay muchas alternativas pero nos concentraremos en un
*dispositivo de cómputo general*.

Para la segunda pregunta también hay muchas alternativas, es por eso que existen
muchos *lenguajes de programación*.

A los problemas generalmente los plantearemos como *problemas matemáticos*
usando valores *numéricos*, *conjuntos*, *secuencias*, *tuplas*, *matrices* y otros.

También necesitaremos describir la *manipulación* de esos objetos para construir
soluciones mediante la aplicación de *funciones* y *operadores*.

> Ejemplo: El *valor absoluto de un número es su valor no negativo*
> (independiente de su signo).
> Matemáticamente:
> $$ 
> abs(n) = \mid n\mid =   \left\{
>                           \begin{matrix} 
>                             n  \: si \: n \geq 0 \\
>                             -n \: \textrm{en otro caso}
>                           \end{matrix}
>                         \right.
> $$
> En un programa (en un lenguaje hipotético) se podría definir como
> ```
> abs(n) = n si n > 0 sino -n
> ```

Como otro ejemplo de representación, un punto en un sistema de coordenadas
cartesianas de dos dimensiones podría hacerse con un par ordenado (o *tupla*) de
la forma $(x,y)$, donde $x$ representa el valor en el eje horizontal o *abscisa*
e $y$ el valor en el eje vertical u *ordenada*.

![Coordenadas cartesianas .center](img/cartesian-coordinate-system.svg ":size=50%")

> Veremos que los lenguajes de programación nos permiten definir y manipular
> datos como los mencionados. En algunos casos con diferentes notaciones.

----------------------------------------------------------------------------

## Problemas y computación

En matemáticas un problema o concepto comúnmente se describe mediante una
definición.

> *Problema*: Una raíz de una función $f$ es un valor $x$ tal que $f(x)=0$.
> 
> Ejemplo: El valor $x=0.5$ es la raíz de la función $f(x)=2x-1$, como se puede
> apreciar en el gráfico de abajo.

![raiz de f .center](img/root-function-plot.svg ":size=50%")

La frase anterior define *qué es* una raíz pero no especifica *cómo se calcula*.

El álgebra nos permite encontrar una solución mediante su *manipulación
simbólica* aplicando propiedades de la aritmética.

> Buscamos un valor $x$ tal que $2x-1=0$, entonces, $2x=1$, finalmente
> $x=\frac{1}{2}=0.5$.

Un enfoque *computacional* es escribir un *algoritmo* que *busque* la solución.
Un algoritmo posible (para funciones crecientes) es el siguiente:

Dado un intervalo $[x_0, x_1]$ en el que puede estar la raíz en $x$.

1. Determinar el punto medio del intervalo: $x = (x_1 + x_2) / 2$
2. Si $abs(f(x))<0.001$, la raíz es $x$, fin del programa. Sino, continuamos
3. Si $f(x)<0$, el nuevo intervalo es $(x_1=x, x_2)$, sino es $(x_1, x_2=x)$
4. Volver al paso 1

Ejecutemos el algoritmo con el intervalo inicial $(-1,1)$.

> 1. Paso 1: $x = (-1 + 1) / 2 = 0$
> 2. Paso 2: $abs(f(0))=1$. Debemos continuar
> 3. Paso 3: Como $f(0)=-1<0$, el nuevo intervalo de búsqueda es $(0,1)$
> 4. Paso 4: Volvemos al paso 1 del algoritmo
> 5. Paso 1: $x = (0 + 1) / 2 = \frac{1}{2} = 0.5$
> 6. Paso 2: Ahora $abs(f(0.5)) = 0 < 0.001$, la raíz es $x=0.5$

> [!WARNING|label:Preguntas]
> 1. ¿Qué sucede con el algoritmo dado si damos un intervalo que no contiene la
>    raíz?
> 2. ¿Cuántos pasos haríamos si el intervalo inicial fuera $[0, 1]$?

----------------------------------------------------------------------------

## Tecnología: Computadoras digitales

La siguiente figura muestra la arquitectura de una computadora digital.

![hardware .center](img/hardware.png ':size=50%')

Cuando calculamos manualmente usamos papel y lápiz para *anotando* o
*recordando* valores y resultados intermedios. En una computadora, el papel es
la *memoria*. En la memoria también se almacenan las instrucciones del programa
a ajecutar.

La *CPU* se encarga de ir leyendo cada instrucción del programa desde la
memoria y ejecutarla. Comúnmente hay distintos tipos de instrucciones:

- Lectura/escritura de un valor en la CPU desde/hacia la memoria.
- Operaciones aritméticas: $+, -, \times, /, \ldots$
- Operaciones lógicas: $\lt, \gt, =, \neq, \leq, \geq, \ldots$
- Otras como *saltar a otra instrucción*, *saltar si una condición es verdadera*, ...

Debemos notar que comúnmente los algoritmos consisten en una secuencia de
instrucciones con cálculos, decisiones lógicas y repeticiones.

Los dispositivos de entrada-salida permiten que la computadora interactúe con el
mundo exterior. Algunos dispositivos comunes son: teclados, mouse, pantallas,
discos (almacenamiento), cámaras de video, micrófonos, parlantes, etc.

> [!NOTE|label:Nota]
> ¿Por qué *digitales*? Porque están formados por *circuitos lógicos (o, y, no,
> ...)* y almacenan y procesan datos numéricos. La memoria contiene sólo
> números, comúnmente representados en binario. Un dígito binario o *bit* es un
> valor de $\{0,1\}$.

<iframe width="530" height="315" 
src="https://www.youtube.com/embed/icrl3U0IVqw?si=qhdyxsDjpU8fuGQc" 
title="El sistema binario" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

En realidad el sistema binario se basa en los *sistemas numericos posicionales*,
como el decimal.

Estos sistemas se basan en un conjunto de cifras que conforman su *base*. En
decimal, las cifras son el conjunto $\{0,1,2,3,4,5,6,7,8,9\}$.

El valor de un número está dado por 
  
$$d_{n-1} d_{n-2} \ldots d_0 = \sum_{i=0}^{n-1} d_i^{b^i} $$

Ejemplos: 

1. En decimal, la base $b=10$, entonces

   $$4531 = 1 \times 10^0 + 3 \times 10^1 + 5 \times 10^2 + 4 \times 10^3$$

2. En binario, la base $b=2$ y las cifras, el conjunto $\{0,1\}$

   $$1011 = 1 \times 2^0 + 1 \times 2^1 + 0 \times 2^2 + 1 \times 2^3$$

   $1011$ en binario equivale al 11 en decimal: $(1011)_{2} = (11)_{10}$

> [!NOTE|label:Pregunta]
> ¿Por qué en *binario*? Porque es más simple diseñar un *bit* ya que tiene sólo
> dos posibles estados o valores. Representar una cifra decimal requiere 10
> estados posibles, lo cual requiere de dispositivos mucho más complejos.

Mas adelante veremos cómo es posible representar con simples bits números
enteros, aproximaciones de reales, vectores y matrices, imágenes, sonido, etc.

También veremos que podremos hacer animaciones mostrando en forma repetitiva
diferentes imágenes en la pantalla. Nuestro cerebro interpreta esa sucesión de
imágenes mostradas rápidamente como algo en movimiento.