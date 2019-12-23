# Ambiente de programación

Simple ambiente de programación en Javascript para enseñanza de programación.

Pasos para usar el ambiente:


1. Para  ejecutar el ambiente, abrir el archivo progenv.html
2. Desplegar la barra de herramientas "Actividades" ubicada en la parte izquierda del ambiente.
3. Se proveen algunas actividades a modo de ejemplo, se puede visualizar la documentación (descripcion y API) de cada una en la parte inferior del ambiente. 
4. El botón "Guardar",  guarda la actividad  de manera local. Si la actividad fue guardada, se mostrará en el editor cuando se cargue nuevamente la actividad (utilizando siempre el mismo navegador).
5. El botón "Limpiar Lienzo" deja el lienzo de dibujo en blanco.
6. El botón "Limpiar Console" deja la consola en blanco.

Pasos para agregar una nueva actividad:

1. El archivo \<myactividad\>.js conteniendo la implementación de la actividad (función principal y API) debe ubicarse en el directorio "activities". En este directorio se proveen actividades de ejemplo.

2. Editar el archivo activitylist.js ubicado en el directorio "activities",  agregando un nuevo objeto en el arreglo "actividades". Cada objeto contiene la siguiente información:

    - actividad: nombre de la actividad. Este nombre aparecerá en la barra de herramientas "Actividades" del ambiente.
    - descripcion: descripción de la actividad. Será visualizado en la parte inferior del ambiente.
    - archivo: \<myactividad\>.js. Nombre del archivo que contiene la función principal y la API que se provee como parte de la actividad. Este archivo debe estar ubicado en el directorio "activities". 
    - main: nombre de la función principal que se ejecutará cuando se haga click sobre el botón "ejecutar".
    - apidoc: arreglo conteniendo la API (función y descripción) que se provee como parte de la actividad. Esta información se mostrará en la parte inferior del ambiente junto con la descripción de la actividad.
    - proginicial: programa/comentario que deseamos  que aparezca en el editor al momento de cargar la actividad.



3. Para cada actividad se proveen las siguientes funciones (definidas en api.js), que se deben utilizar para acceder al lienzo (canvas), consola y editor. Todas han sido usadas, a modo de ejemplo, en las actividades provistas:

    - getCanvasContext(): obtiene el objeto context, asociado con el lienzo (canvas) de dibujo.
    - getProgram(): obtiene el texto (programa) del editor.
    - writeConsole(mensaje): escribe "mensaje" en la consola.
    - showConsole(): automáticamente muestre la consola (sin necesidad de clickear en la pestaña).
    - showCanvas(): automáticamente muestre el lienzo (sin necesidad de clickear en la pestaña). 

    
[Ambiente de Programación](progenv.html)




