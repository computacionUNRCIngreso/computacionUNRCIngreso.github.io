// Actividad TATETI

//colores
var verde = '#27e400';
var rojo = '#fc0602';
var blanco = '#ffffff';
var negro = '#000000';
var azul = '#271af4';
var amarillo ='#ffff0e';
var violeta ='#7f1aa0';

// estado de cada posición del tablero (0 sin ficha, 1 ficha jugador 1, 2 ficha jugador 2)
var celdas = [0,0,0,0,0,0,0,0,0];

// jugador que tienen el turno para jugar (jugador 1 o jugador 2)
var turno = 1;

var clickx=0,
    clicky=0,
    canvas = document.getElementById("canvas"),

    listener = function (event) {
   		  var rect = canvas.getBoundingClientRect();
		  clickx = event.clientX - rect.left;
		  clicky = event.clientY - rect.top;

                  var prog = getProgram();

		  try {
        	       var res = eval(prog);
       	          }catch (e) {
	              if (e instanceof SyntaxError) {
	                   alert(e.message);
	          }
   		  }

       
         realizarJugada();		
	   		
	   },

     a = document.getElementById("canvas");
     if(a.getAttribute('attach')==null){
        	a.setAttribute('attach','true');
    	        canvas.addEventListener('click', listener,false);
     }	

    function obtenerY(){
         return clicky;
    }


    function obtenerX(){
         return clickx;
    }
   
    function dibujarCuadrado(x,y,t,c){
        
        cambiarColorLapiz(c);
        
        dibujarLinea(x, y, x+t, y);
        dibujarLinea(x, y, x, y+t);   
        dibujarLinea(x+t, y, x+t, y+t);
        dibujarLinea(x, y+t, x+t, y+t);
    }

    function dibujarImagen(x, y, t, jugador){
        if (jugador==1) archImg= "activities/emogi1.jpg";
        else archImg = "activities/emogi2.jpg";
        dibujarFicha(x, y, t, archImg);
    }

     function dibujarFicha(x,y,t,arch) {
         var ctx = getCanvasContext();  
         var img = new Image();
         img.src = arch;
       
        img.onload = function(){
                          ctx.drawImage(img, x, y, t, t);
                     }
    }

    /*Devuelve el número de jugador (1 ó 2) al que le toca jugar*/
    function quienJuega(){
        return turno;
    }


    /*Cambia el jugador de turno, si quien jugó es el jugador 1 
    entonces le tocará el turno al jugador 2. Si jugó el jugador 
    2 será el turno del jugador 1*/
    function cambiarJugador(){
       if (turno==1) 
            turno = 2;
       else 
            turno = 1;
    }

    /*Registra que el jugador dado colocó una ficha
    en la celda dada
    Pre:celda es un número entre el 1 y el 9 y 
    jugador es 1 o 2*/
    function anotarQuienJugoEn(celda, jugador){
       celdas[celda-1] =jugador;
    }

    /*Dada una celda, hayFicha devuelve verdadero si hay 
    una ficha colocada en la celda dada*/
    function hayFicha(celda){
      return estadoDeCelda(celda)!=0
    }

    /*private: retorna 0,1 o2 
    Pre:celda es un número entre el 1 y el 9*/
    function estadoDeCelda(c){
        return celdas[c-1];
    }

    /*Devuelve el numero de jugador que colocó 
    la ficha en la celda dada.
    Si la celda esta vacia devuelve 0
    Pre:celda es un número entre el 1 y el 9*/
    function quienJugoEnCelda(celda){
        return estadoDeCelda(celda);
    }


    
    function escribir(mensaje){
         writeConsole(mensaje);
         showConsole();
    }

    function dibujarLinea(ox, oy, dx, dy) {
         var ctx = getCanvasContext();
         //ctx.strokeStyle = '#7f1aa0';
         ctx.beginPath();
         ctx.moveTo(ox, oy);
         ctx.lineTo(dx, dy);
         ctx.stroke();
    }

    function cambiarColorLapiz(color) {
         var ctx = getCanvasContext();  
         ctx.strokeStyle = color;
    }


    function main(){

         var prog = getProgram();
         try {
           	var res = eval(prog);
           	
         }catch (e) {
    	 if (e instanceof SyntaxError) {
    	      alert(e.message);
         }
         }
         cambiarColorLapiz(negro); 
         for (var i = 0; i < 9; i++) {
            celdas[i] =0;
         }
                  
         dibujarTablero();
         showCanvas();
    }
	
