# Ambiente de programación

Simple ambiente de programación en Javascript para enseñanza de programación.

Pasos para usar el ambiente:


1. Para  ejecutar el ambiente, abrir el archivo progenv.html
2. Desplegar la barra de herramientas "Actividades" ubicada en la parte izquierda del ambiente.
3. Se proveen algunas actividades como ejemplo, se puede visualizar la documentación (descripcion y API) de cada una en la parte inferior del ambiente. 


Pasos para agregar una nueva actividad:

1. Para agregar actividades se debe editar el archivo activitylist.js ubicado en el directorio "activities",  agregando un nuevo objeto en el arreglo "actividades". Cada objeto contiene la siguiente información:

- actividad: nombre de la actividad. Este nombre será usado en la barra izquierda de actividades del ambiente.
    - descripcion: descripcion de la actividad. Será visualizado en la parte inferior del ambiente.
    - archivo: nombre del archivo que contiene la API de la actividad. Este archivo debe estar ubicado en el directorio "activities".
    - main: nombre de la funcion que se ejecutará cuando se haga click sobre el botón "ejecutar".
    - apidoc: arreglo conteniendo la API (funcion y descripcion). Esta información se muestra en la parte inferior del ambiente junto con la descripción de la actividad.
    - proginicial: programa/comentario que deseamos  que aparezca en el editor al momento de cargar la actividad.

2. Para cada actividad se proveen las siguientes funciones (definidas en api.js), que puede utilizar para acceder al lienzo, consola y editor:

    - getCanvasContext(): obtiene el objeto asociado con el lienzo (canvas) de dibujo.
    - getProgram(): obtiene el texto (programa) del editor.
    - writeConsole(mensaje): escribe "mensaje" en la consola.




