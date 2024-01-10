# <span style="color:green"> <font size = 10 > ¿Cómo representamos la Información?</font> </span>

<font size = 4 > Si la memoria de la computadora almacena solo ceros y unos, ¿Cómo almacenamos números decimales?.

 Si la memoria de una computadora almacena sólo números ¿Cómo podemos representar texto, imágenes, sonido, programas, etc.?

</font>

## <span style="color:green"> <font size = 4 > Representación de  la información con ceros y unos </font> </span> 

<font size = 4 > Cada cifra binaria (0 o 1) se conoce como bit. Cada celda de la memoria contiene un número fijo de bits. **Una celda con 8 bits se denomina byte. Un byte puede representar 256 valores (0 al 255)** </font>



<iframe width="530" height="315" src="https://www.youtube.com/embed/icrl3U0IVqw?si=qhdyxsDjpU8fuGQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

* * *

## <span style="color:green"> <font size = 4 > Ejemplos: </font> </span> 

<center>
<font size = 7 > 0 0 1 0 1 0 1 1 = ? </font>
</center>

&nbsp;


<center>
<font size = 7 > 1 1 1 1 1 1 1 1 = ? </font> 
</center>


 <img src="/img/pregunta.jpg" alt="pregunta" style="height: 150px; width:150px;"/> <font size = 4 > 
¿Cuántos números naturales se pueden representar con **n** dígitos? 
¿Cuál es el mayor de los números que pueden representarse con n dígitos?. 
Por ejemplo, ¿Cuántos números se pueden representar con 6 dígitos en el sistema binario? </font>

* * *

## <span style="color:green"> <font size = 4 > Capacidad de una memoria </font> </span>

 <img src="/img/capacidadmemoria.png" alt="capacidad memoria" style="height: 180px; width:800px;"/>  


* * *

## <span style="color:green"> <font size = 4 > Actividad 1 </font> </span>
 <font size = 4 >  Supongamos que contamos con un mazo de cartas muy particular: </font>
<center>
 <img src="/img/cartasbinarias.png" alt="cartas binarias" style="height: 120px; width:420px;"/>  
</center>


* <font size = 4 >  ¿Qué puedes observar sobre el número de puntos en las cartas? </font>

*  <font size = 4 >  ¿Cuántos puntos tendrá la siguiente carta si continuamos a la izquierda? ¿Y la siguiente? </font>

*  <font size = 4 >  Podemos poner algunas cartas con los puntos boca abajo y luego sumar los puntos que están boca arriba. Por ejemplo, el número 9 puede formarse como la suma de la carta de 8 puntos y la carta de 1 punto: </font>


<center>
 <img src="/img/cartasbinarias2.png" alt="cartas binarias" style="height: 120px; width:420px;"/>  
</center>

<font size = 4 > Cuando una carta está boca abajo y no muestra los puntos, la carta se representa con un 0 (Cero). Cuando sí muestra los puntos, se representa con un 1 (Uno)</font>

* <font size = 4 > ¿Cómo formarías el 6? ¿y el 0? ¿Puedes obtener el número representado por 10101? ¿Y 11111? </font>

* <font size = 4 >  ¿Cuántos números distintos puedes formar con las 5 cartas anteriores? ¿Cuál es el mayor número que puedes formar? ¿Cuál es el menor? </font>

* <font size = 4 > ¿Existe algún número que no se pueda formar entre el mayor y el menor número? ¿Y si tuviera n cartas (con n un número arbitrario mayor a 0) con las características descriptas?
</font>

* * *

## <span style="color:green"> <font size = 4 > Actividad 2 </font> </span>

Construcción de un [Flippy Do](https://drive.google.com/file/d/1MKUDxJKTkjJpOmWiQxSRqf9kNbLZ13Pc/view)
* * *


## <span style="color:green"> <font size = 4 > Actividad 3 </font> </span>
Trabajar con [números binarios](https://docs.google.com/document/d/1ceVQ3OLUBtFrGDKy1LhDUpFE4zeU-qo1j6iWVaHYl94/edit)

<span style="color:red">  <font size = 6 >  BORRAR: habrá que acortar esta práctica? </font></span>

* * *

## <span style="color:green"> <font size = 4 > ¿Y el texto? ¿Cómo lo representamos?  </font> </span> 

<font size = 4 > ASCII: acrónimo inglés de American Standard Code for Information Interchange - Código Estándar Estadounidense para el Intercambio de Información (1963, standard 1967). El código ASCII utiliza **7 bits** para representar los caracteres </font>


<center>
 <img src="/img/ascii.jpg" alt="Tabla ascii" />  
</center>



* <font size = 4 > ¿Cómo se representaría la palabra (o cadena de caracteres en términos más informáticos) “Hola”? </font>
*  <font size = 4 > ¿Cuántos símbolos (caracteres) incluye la tabla ASCII? </font>


## <span style="color:green"> <font size = 4 > ¿Y las imagenes? ¿Cómo las representamos?  </font> </span> 


<center>
 <img src="/img/pixel.png" alt="codificación de imágenes" style="height: 180px; width:250px;"//>  
</center>


* <font size = 4 >  Imágenes en blanco y negro: cada pixel puede representarse con un bit </font>

* <font size = 4 > Imágenes con escala de grises: Cada píxel es un número que representa un tono de gris (ej: 0=negro, ..., 255=blanco) </font>

* <font size = 4 > Imágenes color: Cada píxel es una tripla de valores de intensidades de (rojo, verde, azul) </font>

<center>
 <img src="/img/pixel2.png" alt="codificación de imágenes" style="height: 150px; width:400px;"//>  
</center>

## <span style="color:green"> <font size = 4 > Actividad 4 </font> </span>
<font size = 4 > Utilizar el siguiente [widget de pixelación](https://studio.code.org/s/pixelation/lessons/2/levels/1) para dibujar 
(en blanco y negro) la letra </font> <font size = 6 > a </font> 




