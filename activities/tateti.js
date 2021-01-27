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
var tablero = [0,0,0,0,0,0,0,0,0];

// jugador que tienen el turno para jugar (jugador 1 o jugador 2)
var turnoJugador = 1;

var juegoTerminado = false;


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

     function dibujarImagen(arch, x, y, w, h) {
         var ctx = getCanvasContext();  
         var img = new Image();
         img.src = arch;
       
        img.onload = function(){
                          ctx.drawImage(img, x, y, w, h);
                     }
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
            tablero[i] =0;
         }
        turnoJugador = 1;
        juegoTerminado = false;
         clearCanvas();
         dibujarTablero();
         //showCanvas();

    }
	
