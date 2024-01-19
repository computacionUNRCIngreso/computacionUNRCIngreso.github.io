# ¿Cómo representamos la Información?

Si la memoria de la computadora almacena solo ceros y unos, ¿Cómo almacenamos números decimales?.

Si la memoria de una computadora almacena sólo números ¿Cómo podemos representar texto, imágenes, sonido, programas, etc.?


## Representación de  la información con ceros y unos

Cada cifra binaria (0 o 1) se conoce como bit. Cada celda de la memoria contiene un número fijo de bits. **Una celda con 8 bits se denomina byte. Un byte puede representar 256 valores (0 al 255)**



<iframe width="530" height="315" src="https://www.youtube.com/embed/icrl3U0IVqw?si=qhdyxsDjpU8fuGQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

## Ejemplos:

  

  
  $$ 0 0 1 0 1 0 1 1 = ? $$

  $$ 1 1 1 1 1 1 1 1 = ? $$


 
> [!NOTE|label:Preguntas]
> 1. ¿Cuántos números naturales se pueden representar con **n** dígitos? 
> 2. ¿Cuál es el mayor de los números que pueden representarse con n dígitos?. 
> 3. Por ejemplo, ¿Cuántos números se pueden representar con 6 dígitos en el sistema binario?
> 
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


## Capacidad de una memoria

![memoria .center](img/capacidadmemoria.png ':size=70%')

 


* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


##  Actividad 1 

Supongamos que contamos con un mazo de cartas muy particular:


![cartas .center](img/cartasbinarias.png ':size=50%')

 
> [!NOTE|label:Preguntas]
> 1. ¿Qué puedes observar sobre el número de puntos en las cartas?
> 2. ¿Cuántos puntos tendrá la siguiente carta si continuamos a la izquierda? ¿Y la siguiente? 
> 3. Podemos poner algunas cartas con los puntos boca abajo y luego sumar los puntos que están boca arriba. Por ejemplo, el número 9 puede formarse como la suma de la carta de 8 puntos y la carta de 1 punto: 


![cartas .center](img/cartasbinarias2.png ':size=50%')



Cuando una carta está boca abajo y no muestra los puntos, la carta se representa con un 0 (Cero). Cuando sí muestra los puntos, se representa con un 1 (Uno)

> [!NOTE|label:Preguntas]
> ¿Cómo formarías el 6? ¿y el 0? ¿Puedes obtener el número representado por 10101? ¿Y 11111?
> ¿Cuántos números distintos puedes formar con las 5 cartas anteriores? ¿Cuál es el mayor número que puedes formar? ¿Cuál es el menor?
> ¿Existe algún número que no se pueda formar entre el mayor y el menor número? ¿Y si tuviera n cartas (con n un número arbitrario mayor a 0) con las características descriptas?

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


## Actividad 2 

Construcción de un [Flippy Do](https://drive.google.com/file/d/1MKUDxJKTkjJpOmWiQxSRqf9kNbLZ13Pc/view)

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *



## Actividad 3

Trabajar con [números binarios](https://docs.google.com/document/d/1ceVQ3OLUBtFrGDKy1LhDUpFE4zeU-qo1j6iWVaHYl94/edit)

<span style="color:red">  <font size = 6 >  BORRAR: habrá que recortar esta práctica? </font></span>

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


## ¿Y el texto? ¿Cómo lo representamos? 

> ***ASCII***: acrónimo inglés de American Standard Code for Information Interchange - Código Estándar Estadounidense para el Intercambio de Información (1963, standard 1967). El código ***ASCII*** utiliza **7 bits** para representar los caracteres.


![ascii .center](img/ascii.jpg ':size=70%')

> [!NOTE|label:Preguntas]
> 1. ¿Cómo se representaría la palabra (o cadena de caracteres en términos más informáticos) “Hola”? 
> 2. ¿Cuántos símbolos (caracteres) incluye la tabla ASCII? 


## ¿Y las imagenes? ¿Cómo las representamos? 


![codificación imágenes .center](img/pixel.png ':size=40%')


*  ***Imágenes en blanco y negro***: cada pixel puede representarse con un bit
 
*  ***Imágenes con escala de grises***: Cada píxel es un número que representa un tono de gris (ej: 0=negro, ..., 255=blanco) 

*  ***Imágenes color***: Cada píxel es una tripla de valores de intensidades de (rojo, verde, azul)



![codificación imágenes .center](img/pixel2.png ':size=40%')
 

## Actividad 4

* Utilizar el siguiente [widget de pixelación](https://studio.code.org/s/pixelation/lessons/2/levels/1) para dibujar 
(en blanco y negro) la letra 'a'. 




