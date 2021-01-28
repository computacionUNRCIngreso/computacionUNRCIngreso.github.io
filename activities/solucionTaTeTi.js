
var zer = 0
var fst = 167
var snd = 334
var thd = 500
    

/**
 * @fileOverview Este archivo contiene una implementación funcional del juego TaTeTi, para la plataforma
 * ProgEnv. Esta versión es una extención de la desarrollada durante la clase nro 7 del cursillo de
 * ingreso 2020 a las carreras de computación de la Universidad Nacional de Río Cuarto.
 * @author Valeria Bengolea y Gastón Scilingo.
 * @version 3.0
 */


/*
Esta función se invoca al presionar el botón ejecutar.
*/
function dibujarTablero(){
    dibujarLinea(167, 0, 167, 500)
    dibujarLinea(334, 0, 334, 500)
    dibujarLinea(0, 167, 500, 167)
    dibujarLinea(0, 334, 500, 334)
}


/*
Esta función se invoca al hacer click en el tablero.
Si la celda del tablero sobre la cual se hizo click no esta
ocupada por una ficha, dibuja la ficha del jugador de turno 
en esa posición. Luego verifica si hay un jugador ganador. Si lo hay
escribe el nombre del mismo en la consola (jugador 1 o jugador 2)
*/
function realizarJugada(){

		// Verificar que el juego no haya terminado
		if (juegoTerminado){
			escribir("Juego terminado!");
			return;
		}
    
    	// Determinar la celda elegida y verificar que no esté ocupada
        var celda = obtenerCeldaClick();
        if (hayFicha(celda)) {
        	alert("Celda ocupada!");
			return;
        }
    
    	// Dibujar la ficha del jugador correspondiente al turno en la celda elegida
    	dibujarFichaEnCelda(celda, turnoJugador);

    	// Registrar la jugada y verificar si hay un ganador o se ha alcanzado un empate
        guardarJugada(celda, turnoJugador);
        ganador = verificarGanador();
        if (ganador==1) escribir("Ganó jugador 1");
        if (ganador==2) escribir("Ganó jugador 2");
        if (ganador==0) escribir("Empate");

        // Cambiar el turno para la próxima jugada
        cambiarTurno();    
 }

function obtenerCeldaClick() {
    var x = obtenerX()
    var y = obtenerY()
    if (x >= 0 && x <= fst && y >=0 && y <= fst)
        return 1
    if (x >= fst && x <= snd && y >=0 && y <= fst)
        return 2
    if (x >= snd && x <= thd && y >=0 && y <= fst)
        return 3
        
    if (x >= 0 && x <= fst && y >=fst && y <= snd)
        return 4
    if (x >= fst && x <= snd && y >=fst && y <= snd)
        return 5
    if (x >= snd && x <= thd && y >=fst && y <= snd)
        return 6

    if (x >= 0 && x <= fst && y >= snd && y <= thd)
        return 7
    if (x >= fst && x <= snd && y >= snd && y <= thd)
        return 8
    if (x >= snd && x <= thd && y >= snd && y <= thd)
        return 9   
}

/*
	Dada un una celda y un turno actual, dibuja la ficha correspondiente
	al jugador del turno en la celda dada.
*/
function dibujarFichaEnCelda(celda, turnoJugador){

    var tamano = 50
    if (celda==1) {
        ox = 0 + 167/2 - tamano/2
        oy = 0 + 167/2 - tamano/2
        dibujarFicha(turnoJugador,ox,oy,tamano)
    }
    if (celda==2) {
        ox = 167 + 167/2 - tamano/2
        oy = 0 + 167/2 - tamano/2
        dibujarFicha(turnoJugador,ox,oy,tamano)
    }
    if (celda==3) {
        ox = 334 + 167/2 - tamano/2
        oy = 0 + 167/2 - tamano/2
        dibujarFicha(turnoJugador,ox,oy,tamano)
    }
    if (celda==4) {
        ox = 0 + 167/2 - tamano/2
        oy = 167 + 167/2 - tamano/2
        dibujarFicha(turnoJugador,ox,oy,tamano)
    }
    if (celda==5) {
        ox = 167 + 167/2 - tamano/2
        oy = 167 + 167/2 - tamano/2
        dibujarFicha(turnoJugador,ox,oy,tamano)
    }
    if (celda==6) {
        ox = 334 + 167/2 - tamano/2
        oy = 167 + 167/2 - tamano/2
        dibujarFicha(turnoJugador,ox,oy,tamano)
    }
    if (celda==7) {
        ox = 0 + 167/2 - tamano/2
        oy = 334 + 167/2 - tamano/2
        dibujarFicha(turnoJugador,ox,oy,tamano)
    }
    if (celda==8) {
        ox = 167 + 167/2 - tamano/2
        oy = 334 + 167/2 - tamano/2
        dibujarFicha(turnoJugador,ox,oy,tamano)
    }
    if (celda==9) {
        ox = 334 + 167/2 - tamano/2
        oy = 334 + 167/2 - tamano/2
        dibujarFicha(turnoJugador,ox,oy,tamano)
    }
}

/* 
	Cambia el turno, si quien jugó es el jugador 1 entonces le tocará
	el turno al jugador 2. Si jugó el jugador 2 será el turno del jugador 1
*/
function cambiarTurno(){
   if (turnoJugador==1) 
        turnoJugador = 2;
   else 
        turnoJugador = 1;
}


/*
	Verifica si hay un ganador o si se produjo un empate.
	Si hay una configuración de fichas ganadoras sobre el tablero entonces, 
	retorna el número correspondiente al jugador que ha ganado.
	Si se pordujo un empate retorna un 0.
*/
function verificarGanador(){
    if (quienJugoEnCelda(1)==1 && quienJugoEnCelda(2)==1 && quienJugoEnCelda(3)==1) {juegoTerminado = true; return 1;}
    if (quienJugoEnCelda(1)==1 && quienJugoEnCelda(4)==1 && quienJugoEnCelda(7)==1) {juegoTerminado = true; return 1;}
    if (quienJugoEnCelda(4)==1 && quienJugoEnCelda(5)==1 && quienJugoEnCelda(6)==1) {juegoTerminado = true; return 1;}
    if (quienJugoEnCelda(2)==1 && quienJugoEnCelda(5)==1 && quienJugoEnCelda(8)==1) {juegoTerminado = true; return 1;}
    if (quienJugoEnCelda(7)==1 && quienJugoEnCelda(8)==1 && quienJugoEnCelda(9)==1) {juegoTerminado = true; return 1;}
    if (quienJugoEnCelda(3)==1 && quienJugoEnCelda(6)==1 && quienJugoEnCelda(9)==1) {juegoTerminado = true; return 1;}
    if (quienJugoEnCelda(1)==1 && quienJugoEnCelda(5)==1 && quienJugoEnCelda(9)==1) {juegoTerminado = true; return 1;}
    if (quienJugoEnCelda(3)==1 && quienJugoEnCelda(5)==1 && quienJugoEnCelda(7)==1) {juegoTerminado = true; return 1;}
    
    if (quienJugoEnCelda(1)==2 && quienJugoEnCelda(2)==2 && quienJugoEnCelda(3)==2) {juegoTerminado = true; return 2;}
    if (quienJugoEnCelda(1)==2 && quienJugoEnCelda(4)==2 && quienJugoEnCelda(7)==2) {juegoTerminado = true; return 2;}
    if (quienJugoEnCelda(4)==2 && quienJugoEnCelda(5)==2 && quienJugoEnCelda(6)==2) {juegoTerminado = true; return 2;}
    if (quienJugoEnCelda(2)==2 && quienJugoEnCelda(5)==2 && quienJugoEnCelda(8)==2) {juegoTerminado = true; return 2;}
    if (quienJugoEnCelda(7)==2 && quienJugoEnCelda(8)==2 && quienJugoEnCelda(9)==2) {juegoTerminado = true; return 2;}
    if (quienJugoEnCelda(3)==2 && quienJugoEnCelda(6)==2 && quienJugoEnCelda(9)==2) {juegoTerminado = true; return 2;}
    if (quienJugoEnCelda(1)==2 && quienJugoEnCelda(5)==2 && quienJugoEnCelda(9)==2) {juegoTerminado = true; return 2;}
    if (quienJugoEnCelda(3)==2 && quienJugoEnCelda(5)==2 && quienJugoEnCelda(7)==2) {juegoTerminado = true; return 2;}
    
    if (tableroLLeno()){ juegoTerminado = true; return 0};
}


function dibujarFicha(jugador, x, y, t){
    if (jugador==1) archImg= "activities/cross.png";
    else archImg = "activities/circle.png";
    dibujarImagen(archImg, x, y, t, t);
}

/*
Registra que el jugador correspondiente dado colocó una ficha en la celda dada
Pre:celda es un número entre el 1 y el 9 y jugador es 1 o 2
 */
function guardarJugada(celda, turnoJugador){
   tablero[celda-1] = turnoJugador;
}

// TODO: Vale cambiar nombres

/*
Dada una celda, devuelve verdadero si hay una ficha colocada en la celda y falso en otro caso
*/
function hayFicha(celda){
  return tablero[celda-1]!=0
}


/*
Devuelve el numero de jugador que colocó la ficha en la celda dada.
Si la celda esta vacia devuelve 0.
Pre:celda es un número entre el 1 y el 9
*/
function quienJugoEnCelda(celda){
    return tablero[celda-1];
}

/*
Verifica si el tablero está completo. Retorna verdadero si todas
las celdas contienen ficha y falso en otro caso.
*/ 
function tableroLLeno(){
	if ( tablero[0] != 0 && tablero[1] != 0 && tablero[3] != 0 &&
	 	tablero[4] != 0 && tablero[5] != 0 && tablero[6] != 0 &&
	  	tablero[7] != 0 && tablero[8] != 0 && tablero[2] != 0
	) {
		return true;
	}
		return false;
}

function showStatus(){
	console.log("ganador "+ganador);
    console.log("tablero: "+tablero);
	console.log("juegoTerminado : "+juegoTerminado);
	console.log("turno :"+turnoJugador);
}
