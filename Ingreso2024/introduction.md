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

Los dispositivos de entrada-salida permiten que la computadora interactúe con el
mundo exterior. Algunos dispositivos comunes son: teclados, mouse, pantallas,
discos (almacenamiento), cámaras de video, micrófonos, parlantes, etc.

> [!NOTE|label:Nota]
> ¿Por qué *digitales*? Porque están formados por *circuitos lógicos (o, y, no,
> ...)* y almacenan y procesan datos numéricos. La memoria contiene sólo
> números, comúnmente representados en binario. Un dígito binario o *bit* es un
> valor de $\{0,1\}$.

<iframe width="530" height="315" src="https://www.youtube.com/embed/icrl3U0IVqw?si=qhdyxsDjpU8fuGQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> [!NOTE|label:Pregunta]
> ¿Por qué en *binario*? Porque es más simple diseñar un *bit* ya que tiene sólo
> dos posibles estados o valores. Representar una cifra decimal requiere 10
> estados posibles, lo cual será un dispositivo mucho más complejo.

Mas adelante veremos cómo es posible representar con simples bits números
enteros, aproximaciones de reales, vectores y matrices, imágenes, sonido, etc.

También veremos que podremos hacer animaciones mostrando en forma repetitiva
diferentes imágenes en la pantalla. Nuestro cerebro interpreta esa sucesión de
imágenes mostradas rápidamente como algo en movimiento.