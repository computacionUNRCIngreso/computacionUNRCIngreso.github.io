
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

		var ctx=null,
		    prog = getProgram();

		ctx = getCanvasContext();

		function posicionarseEn(x, y) {
			ctx.beginPath();
			ctx.moveTo(x, y);
		}

		function dibujarLineaHacia(x, y) {
			ctx.lineTo(x, y);
			ctx.stroke();
		}

		function dibujarLinea(ox, oy, dx, dy) {
			posicionarseEn(ox, oy);
			dibujarLineaHacia(dx, dy);
		}

		function cambiarColorLapiz(color) {
		  ctx.strokeStyle = color;
		}


		function cambiarAnchoLapiz(ancho) {
		  ctx.lineWidth = ancho;

		}

   
	    try {

			eval(prog); 

	     } catch (e) {
	      if (e instanceof SyntaxError) {
	        alert(e.message);
	     }
	    }

	}

