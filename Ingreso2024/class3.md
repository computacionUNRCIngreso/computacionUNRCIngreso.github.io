# Estructura Condicional en la resolución de problemas Algorítmicos

 <span style="color:red"> <font size = 6 >BORRAR: REVISAR nombre de este sección</font> </span>

Piensa un número entre el 1 y el 6, arroja un dado, ganas si  adivinaste el número que saldrá al tirar el dado, pierdes en caso contrario. 


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/Jssw9sFDA" width="800" height="600"></iframe>


***Actividad***: Escribe un programa que luego de que elijas un número y tires el dado, dibuje un círculo en color verde si has tenido suerte y adivinaste el valor del dado. Si no has tenido suerte,  dibuja un círculo en algún otro color a elección.


 <span style="color:red"> <font size = 6 >BORRAR: analisis del problema </font> </span>


## Algunos conceptos importantes para escribir un programa que resuelva este problema:


Si recordamos  al ejemplo de la primera clase [multiplicar dos números](#nuestro-programa-que-multiplica-dos-números-en-javaScript), hemos utilizado variables para recordar valores,

## ¿Qué son las variables? 
 
* Una variabla es la combinación de las siguientes cosas: 

* Un nombre  (o identificador) a elección 

* Una dirección en la memoria de la computadora 
* Un valor almacenado en esa dirección de la memoria que puede cambiar durante la ejecución del programa

* Un tipo, que especifica cuanto espacio ocupa ese valor en la memoria, y cómo interpretar este valor 

>  Para usar una variable, necesitas en primer lugar declarar la variable 

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


## ¿Cómo cambiamos el valor almacenado en una variable?

***Asignación***: Una asignación cambia el valor de una variable. Una asignación es una sentencia de la forma:
   ```
    nombre_variable = expresion;
   ```

Donde  ``nombre_variable`` es el nombre elegido para la variable. La asignación cambia el valor de la variable  ``nombre_variable`` por el valor de  ``expresion``

<span style="color:red">  <font size = 6 >  BORRAR: acá abajo la idea es utilizar este espacio para ejemplos on the fly
cambiar el valor de las variables, imprimir , etc. Hay una función que retorna un valor
</font></span>

Ejemplo: 

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/l56tAFfey" width="800" height="600"></iframe>

Link para abrir este ejermplo en otra ventana del navegador [variables](https://editor.p5js.org/compuUNRCIngreso/full/l56tAFfey)

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

## Sentencia Condicional ``if``

``` 
    ...
    if (CONDICION) {
        [BLOQUE DE SENTENCIAS] 
    }

    [BLOQUE DE SENTENCIAS SIGUIENTES]
    ...
```

![sentencia if .center](img/if.png ':size=40%')



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

 
## Sentencia Condicional ``if-else`` 


```
    ...
    if (CONDICION) {
        [BLOQUE DE SENTENCIAS 1] 
    }else{
        [BLOQUE DE SENTENCIAS 2] 
    }

    [BLOQUE DE SENTENCIAS SIGUIENTES]
    ...

```
![sentencia if .center](img/if-else.png ':size=60%')



* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

##   Operadores de comparación
 
Los operadores de comparación nos permiten comparar el valor de dos expresiones:

```
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

Algunas funciones de utilidad [fill()](https://p5js.org/es/reference/#/p5/fill) y [circle()](https://p5js.org/es/reference/#/p5/circle) para resolver el problema.

 <span style="color:red"> <font size = 6 >BORRAR: acá se usan  funciones con parametros </font> </span>
 

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/Jssw9sFDA" width="800" height="600"></iframe>

Link para abrir este ejercicio en otra ventana del navegador [tirar los dados](https://editor.p5js.org/compuUNRCIngreso/full/Jssw9sFDA) 

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


## Actividad 2: Dónde esta el punto (1)?
 

El Lienzo está dividido en dos secciones por una línea recta horizontal.  Se  proveen variables ``mouseX`` y  ``mouseY`` que almacenan las coordenadas ``(x, y)`` del punto sobre el Lienzo en donde se hace ‘click’. Escribir un programa que decida si se hizo un click por encima o por debajo de la línea. 

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/3eExV-33b" width="800" height="600"></iframe>

Link para abrir este ejercicio en otra ventana del navegador [Donde esta el punto (1)?](https://editor.p5js.org/compuUNRCIngreso/full/3eExV-33b)

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 


## Actividad 3: Dónde esta el punto (2)? 

En este caso, encontrarás el Lienzo divido en cuatro cuadrantes. Nuevamente se proveen las variables que almacenan las coordenadas ``(x, y)`` del punto sobre el Lienzo donde se hizo 'click' (``mouseX`` y  ``mouseY``). 

Escribir un programa que decida  en qué cuadrante se ha hecho click (arriba-derecha, arriba-izquierda, abajo-derecha o abajo- izquierda). 


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/OnSK_3K-7" width="800" height="600"></iframe>


Link para abrir este ejercicio en otra ventana del navegador [Donde esta el punto (2)?](https://editor.p5js.org/compuUNRCIngreso/full/OnSK_3K-7)
 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

##  Actividad 4: Le dí a la figura?
 
Cuando ejecutas este programa (botón ``play`` en la esquina superior izquierda), se dibuja un círculo de tamaño aleatorio en el lienzo, las partes (centro y diametro) de este círculo   quedarán almacenadas en las variables: ``xCentro``, ``yCentro`` y ``diametro``. Además, contamos con las variables ``mouseX`` y ``mouseY``,  utilizadas anteriormente,  que almacenan las coordenadas de un 'click'. Esta actividad consiste en escribir un programa que  decida si se hizo 'click' dentro del círculo o fuera de él.


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/N4XRJQjAK" width="800" height="600"></iframe>

Link para abrir este ejercicio en otra ventana del navegador [Le dí a la figura?](https://editor.p5js.org/compuUNRCIngreso/full/N4XRJQjAK) 

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

