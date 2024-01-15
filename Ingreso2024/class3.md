# <span style="color:green"> <font size = 10 > Estructura Condicional en la resolución de problemas Algorítmicos</font> </span>

 <span style="color:red"> <font size = 6 >BORRAR: nombre de este sección revisar</font> </span>

 <font size = 4 >  Piensa un número entre el 1 y el 6, arroja un dado, ganas si  adivinaste el número que saldrá al tirar el dado, pierdes en caso contrario. </font>

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/Jssw9sFDA" width="800" height="600"></iframe>


<font size = 4 > <span style="color:green"> Actividad: </span>Escribe un programa que luego de que elijas un número y tires el dado, dibuje un círculo en color verde si has tenido suerte y adivinaste el valor del dado. Si no has tenido suerte,  dibuja un círculo en algún otro color a elección.</font> 


 <span style="color:red"> <font size = 6 >BORRAR: analisis del problema </font> </span>


## <span style="color:green"> <font size = 4 > Algunos conceptos importantes para escribir un programa que resuelva este problema: </font> </span>


 <font size = 4 >  Si recordamos  al ejemplo de la primera clase [multiplicar dos números](#nuestro-programa-que-multiplica-dos-números-en-javaScript), hemos utilizado variables para recordar valores, </font>

## <span style="color:green"> <font size = 4 > ¿Qué son las variables? </font> </span>
 
* <font size = 4 >  Una variabla es la combinación de las siguientes cosas: </font>

* <font size = 4 > Un nombre  (o identificador) a elección </font>

* <font size = 4 > Una dirección en la memoria de la computadora </font> 
* <font size = 4 > Un valor almacenado en esa dirección de la memoria que puede cambiar durante la ejecución del programa</font>

* <font size = 4 > Un tipo, que especifica cuanto espacio ocupa ese valor en la memoria, y cómo interpretar este valor </font>

<font size = 4 >  Para usar una variable, necesitas en primer declarar la variable </font>

* * *

## <span style="color:green"> <font size = 4 > ¿Cómo cambiamos el valor almacenado en una variable? </font> </span>

<font size = 4 >  <span style="color:green"> Asignación: </span>  Una asignación cambia el valor de una variable. Una asignación es una sentencia de la forma:</font> 

    nombre_variable = expresion;
<font size = 4 > Donde  <span style="color:green"> nombre_variable </span>  es el nombre elegido para la variable. La asignación cambia el valor de la variable  nombre_variable por el valor de  <span style="color:green"> expresion</span></font> 

<span style="color:red">  <font size = 6 >  BORRAR: acá abajo la idea es utilizar este espacio para ejemplos on the fly
cambiar el valor de las variables, imprimir , etc. Hay una función que retorna un valor
</font></span>

<span style="color:green">  <font size = 4 >  Ejemplo: </font></span>

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/l56tAFfey" width="800" height="600"></iframe>

<font size = 4 > Link para abrir este ejermplo en otra ventana del navegador [variables](https://editor.p5js.org/compuUNRCIngreso/full/l56tAFfey) </font>

* * *

## <span style="color:green">  <font size = 4 >  Sentencia Condicional if </font></span>

 
    ...
    if (CONDICION) {
        [BLOQUE DE SENTENCIAS] 
    }

    [BLOQUE DE SENTENCIAS SIGUIENTES]
    ...


<img src="/img/if.png" alt="Sentencia Condicional if" style="height: 300px; width:500px;"/>

* * *
 
## <span style="color:green">  <font size = 4 >  Sentencia Condicional if-else </font></span>



    ...
    if (CONDICION) {
        [BLOQUE DE SENTENCIAS 1] 
    }else{
        [BLOQUE DE SENTENCIAS 2] 
    }

    [BLOQUE DE SENTENCIAS SIGUIENTES]
    ...


<img src="/img/if-else.png"  alt="Sentencia Condicional if" style="height: 300px; width:800px;"/>

* * *

## <span style="color:green">  <font size = 4 >  Operadores de comparación </font></span>

<font size = 4 > Los operadores de comparación nos permiten comparar el valor de dos expresiones:  </font>

    EXPR > EXPR
    EXPR >= EXPR
    EXPR < EXPR
    EXPR <= EXPR
    EXPR == EXPR
    EXPR != EXPR

<font size = 4 >  Estas expresiones booleanas, o condiciones, pueden ser usadas en el contexto de las sentencias condicionales  </font>

* * *

## <span style="color:green">  <font size = 4 >  Ahora si volvamos a tirar el dado... </font></span>


 <font size = 4 > Algunas funciones de utilidad [fill()](https://p5js.org/es/reference/#/p5/fill) y [circle()](https://p5js.org/es/reference/#/p5/circle) para resolver el problema. </font>

 <span style="color:red"> <font size = 6 >BORRAR: acá se usan  funciones con parametros </font> </span>
 

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/Jssw9sFDA" width="800" height="600"></iframe>

<font size = 4 > Link para abrir este ejercicio en otra ventana del navegador [tirar los dados](https://editor.p5js.org/compuUNRCIngreso/full/Jssw9sFDA) </font>

* * *

## <span style="color:green">  <font size = 4 >  Actividad 2: Dónde esta el punto (1)? </font></span>

<font size = 4 > El Lienzo está dividido en dos secciones por una línea recta horizontal.  Se  proveen variables <span style="color:green"> mouseX </span> y <span style="color:green"> mouseY </span> que almacenan las coordenadas (x, y) del punto sobre el Lienzo en donde se hace ‘click’. Escribir un programa que decida si se hizo un click por encima o por debajo de la línea. </font>

<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/3eExV-33b" width="800" height="600"></iframe>

<font size = 4 > Link para abrir este ejercicio en otra ventana del navegador [Donde esta el punto (1)?](https://editor.p5js.org/compuUNRCIngreso/full/3eExV-33b) </font>

* * *

## <span style="color:green">  <font size = 4 >  Actividad 3: Dónde esta el punto (2)? </font></span>

<font size = 4 >  En este caso, encontrarás el Lienzo divido en cuatro cuadrantes. Nuevamente se proveen las variables que almacenan las coordenadas (x, y) del punto sobre el Lienzo donde se hizo 'click' ( <span style="color:green"> mouseX</span> y  <span style="color:green"> mouseY</span>). Escribir un programa que decida  en qué cuadrante se ha hecho click (arriba-derecha, arriba-izquierda, abajo-derecha o abajo- izquierda). </font>


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/OnSK_3K-7" width="800" height="600"></iframe>


<font size = 4 > Link para abrir este ejercicio en otra ventana del navegador [Donde esta el punto (2)?](https://editor.p5js.org/compuUNRCIngreso/full/OnSK_3K-7) </font>

* * *

## <span style="color:green">  <font size = 4 >  Actividad 4: Le dí a la figura? </font></span>

<font size = 4 >  Cuando ejecutas este programa (botón  <span style="color:fuchsia"> play</span> en la esquina superior izquierda), se dibuja un círculo de tamaño aleatorio en el lienzo, las partes (centro y diametro) de este círculo   quedarán almacenadas en las variables:  <span style="color:green"> xCentro</span>,  <span style="color:green"> yCentro</span> y  <span style="color:green"> diametro</span>. Además, contamos con las variables  <span style="color:green"> mouseX</span> y  <span style="color:green"> mouseY</span>,  utilizadas anteriormente,  que almacenan las coordenadas de un 'click'. Esta actividad consiste en escribir un programa que  decida si se hizo 'click' dentro del círculo o fuera de él. </font>


<iframe src="https://editor.p5js.org/compuUNRCIngreso/full/N4XRJQjAK" width="800" height="600"></iframe>


<font size = 4 > Link para abrir este ejercicio en otra ventana del navegador [Le dí a la figura?](https://editor.p5js.org/compuUNRCIngreso/full/N4XRJQjAK) </font>

* * *





