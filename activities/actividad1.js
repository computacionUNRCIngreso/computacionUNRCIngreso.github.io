
	/****colors ****/


	var verde = '#27e400';
	var rojo = '#fc0602';
	var blanco = '#ffffff';
	var negro = '#000000';
	var azul = '#271af4';
	var amarillo ='#ffff0e';
	var violeta ='#7f1aa0';



	/********************/

	//context viene dado, lo puedo usar.
	//getprogram tambien

	function main(){


	    var prog = getProgram();
	    
	    try {

			eval(prog); 

	     } catch (e) {
	      if (e instanceof SyntaxError) {
	        alert(e.message);
	     }
	    }

	   
	    
	}

	/**************API*************/

	function marcarOrigen(x, y) {
		context.beginPath();
		context.moveTo(x, y);
	}

	function marcarDestino(x, y) {
		context.lineTo(x, y);
	}

	function dibujar() {
	  	context.stroke();
	}

	function cambiarColorLapiz(color) {
	  context.strokeStyle = color;
	}


	function cambiarAnchoLapiz(ancho) {
	  context.lineWidth = ancho;

	}

	/*********************************/


	







