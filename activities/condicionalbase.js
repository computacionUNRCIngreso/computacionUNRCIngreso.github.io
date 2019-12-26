
	/****colors ****/


	var verde = '#27e400';
	var rojo = '#fc0602';
	var blanco = '#ffffff';
	var negro = '#000000';
	var azul = '#271af4';
	var amarillo ='#ffff0e';
	var violeta ='#7f1aa0';



	/*API disponible para usar en cada actividad:
		*getCanvasContext(): obtiene el objeto asociado con el lienzo (canvas) de dibujo
		*getProgram(): obtiene el programa del editor
		*writeConsole(mensaje): escribe en la consola.
	*/

	function main(){

		prog = getProgram();
		
		function escribirConsola(mensaje){		
			writeConsole(mensaje)
		}		
		
		function numeroAleatorio(){
			return Math.random();		
		}

		function tirarDado() {
		  var min = 1;
          var max = 7;
  		  var dado = Math.floor((Math.random() * (max - min)))+ min;
          writeConsole("Dado: " + dado );
		  return dado;
		}
    
	    try {
	    	showConsole();
			eval(prog); 

	     } catch (e) {
	      if (e instanceof SyntaxError) {
	        alert(e.message);
	     }
	    }

	}

