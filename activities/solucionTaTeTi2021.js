 /*Esta función se invoca al presionar el botón ejecutar.
    */
    function dibujarTablero(){
        dibujarLinea(167, 0, 167, 500)
        dibujarLinea(334, 0, 334, 500)
        dibujarLinea(0, 167, 500, 167)
        dibujarLinea(0, 334, 500, 334)
    }


    /*Esta función se invoca al hacer click en el tablero.
    Si la celda del tablero sobre la cual se hizo click no esta
    ocupada por una ficha, dibuja la ficha del jugador de turno 
    en esa posición. Luego verifica
    si hay un jugador ganador. Si lo hay escribe el nombre del mismo
    en la consola (jugador 1 o jugador 2)
    */
    function realizarJugada(){
      
        // Verificar que el juego no haya terminado
        
        // Determinar la celda elegida y
        var celda = obtenerCeldaClick();
    
        // verificar que no esté ocupada
        if(hayFicha(celda)){
            escribir("NO! celda ocupada");
        }else{
            // Dibujar la ficha del jugador correspondiente al turno en la celda elegida
            dibujarFichaEnCelda(celda,turnoJugador);
            
            // Registrar la jugada 
            guardarJugada(celda,turnoJugador);
            //y verificar si hay un ganador o se ha alcanzado un empate
        
            var ganador = verificarGanador();
            if(ganador ==1)
                escribir("Ganó el jugador CRUZ");
            if(ganador ==2)
                escribir("Ganó el jugador CIRCULO");
            if(ganador ==0)
                escribir("Empate!");
            
            
            
            // Cambiar el turno para la próxima jugada
            cambiarTurno();
        }    
    }

    
    function verificarGanador(){
        if ((quienJugoEnCelda(1)==1 && quienJugoEnCelda(2)==1 && quienJugoEnCelda(3)==1) ||
            (quienJugoEnCelda(1)==1 && quienJugoEnCelda(4)==1 && quienJugoEnCelda(7)==1) ||
            (quienJugoEnCelda(4)==1 && quienJugoEnCelda(5)==1 && quienJugoEnCelda(6)==1) ||
            (quienJugoEnCelda(2)==1 && quienJugoEnCelda(5)==1 && quienJugoEnCelda(8)==1) ||
            (quienJugoEnCelda(7)==1 && quienJugoEnCelda(8)==1 && quienJugoEnCelda(9)==1) ||
            (quienJugoEnCelda(3)==1 && quienJugoEnCelda(6)==1 && quienJugoEnCelda(9)==1) ||
            (quienJugoEnCelda(1)==1 && quienJugoEnCelda(5)==1 && quienJugoEnCelda(9)==1) ||
            (quienJugoEnCelda(3)==1 && quienJugoEnCelda(5)==1 && quienJugoEnCelda(7)==1)){
                return 1;
        }    
        if ((quienJugoEnCelda(1)==2 && quienJugoEnCelda(2)==2 && quienJugoEnCelda(3)==2) ||
           (quienJugoEnCelda(1)==2 && quienJugoEnCelda(4)==2 && quienJugoEnCelda(7)==2) ||
           (quienJugoEnCelda(4)==2 && quienJugoEnCelda(5)==2 && quienJugoEnCelda(6)==2) ||
           (quienJugoEnCelda(2)==2 && quienJugoEnCelda(5)==2 && quienJugoEnCelda(8)==2) ||
           (quienJugoEnCelda(7)==2 && quienJugoEnCelda(8)==2 && quienJugoEnCelda(9)==2) ||
           (quienJugoEnCelda(3)==2 && quienJugoEnCelda(6)==2 && quienJugoEnCelda(9)==2) ||
           (quienJugoEnCelda(1)==2 && quienJugoEnCelda(5)==2 && quienJugoEnCelda(9)==2) ||
           (quienJugoEnCelda(3)==2 && quienJugoEnCelda(5)==2 && quienJugoEnCelda(7)==2)){
                return 2;
         }   
         //empate
         if (tableroLleno()){ 
                return 0
         }
    }

    function tableroLleno(){
       for(var i=0; i<tablero.length; i++){
          if(tablero[i]==0)
              return false;
       }
       return true; 
       
    }




    function quienJugoEnCelda(celda){
        return tablero[celda -1];

    }

    function hayFicha(celda){
        if(tablero[celda-1]!=0){
            return true;
        }else{
            return false;
        }    
    }


    /*
    Registra que el jugador dado colocó una ficha en la celda dada
    Pre:celda es un número entre el 1 y el 9 y jugador es 1 o2
               */
   function guardarJugada(celda, jugador){
       tablero[celda-1] = jugador;
   }
  

    function cambiarTurno(){
        if(turnoJugador == 1)
            turnoJugador = 2;
        else
            turnoJugador = 1;
    }
    
    
    function obtenerCeldaClick(){
    
        var x = obtenerX();
        var y = obtenerY();
    
        //primera fila
        if (x <= 167 && y <= 167)
            return 1;
        if (x >167 && x <= 334 && y <= 167 )
            return 2;
        if (x > 334 && x <= 500 && y <= 167 )
            return 3;
        
        // segunda fila
        if (x <= 167 && y > 167 && y <= 334)
            return 4;
        if (x >167 && x <= 334 && y > 167 && y <= 334 )
            return 5;
        if (x > 334 && x <= 500 && y > 167 && y <= 334 )
            return 6;
        
        // ultima fila
        if (x <= 167 && y > 334 && y <= 500)
            return 7;
        if (x >167 && x <= 334 && y > 334 && y <= 500 )
            return 8;
        if (x > 334 && x <= 500 && y > 334 && y <= 500 )
            return 9;
    
    }
    
    function dibujarFichaEnCelda(celda,turnoJugador){
    
        var t = 75;
        var ox = 41;
        var oy = 41;
        
        if (celda == 1){
            dibujarFicha(turnoJugador, ox, oy, t);
        }
        if (celda == 2){
            ox = 167 + 41;
            dibujarFicha(turnoJugador, ox, oy, t);
        }
        if (celda == 3){
            ox = 334 + 41;
            dibujarFicha(turnoJugador, ox, oy, t);
        }
        if (celda == 4){
            oy = 167 + 41;
            dibujarFicha(turnoJugador, ox, oy, t);
        }
        if (celda == 5){
            ox = 167 + 41;
            oy = 167 + 41;
            dibujarFicha(turnoJugador, ox, oy, t);
        }
        if (celda == 6){
            ox = 334 + 41;
            oy = 167 + 41
            dibujarFicha(turnoJugador, ox, oy, t);
        }
        if (celda == 7){
            oy = 334 + 41;
            dibujarFicha(turnoJugador, ox, oy, t);
        }
        if (celda == 8){
            ox = 167 + 41;
            oy = 334 + 41;
            dibujarFicha(turnoJugador, ox, oy, t);
        }
        if (celda == 9){
            ox = 334 + 41;
            oy = 334 + 41;
            dibujarFicha(turnoJugador, ox, oy, t);
        }
        
    }
    
    function dibujarFicha(jugador, x, y, t){
        if (jugador == 1){
            dibujarImagen("activities/cross.png", x, y, t, t);
        }else{
            dibujarImagen("activities/circle.png", x, y, t, t);
        }
    }

