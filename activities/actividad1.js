	/*API disponible para usar en cada actividad:
		*getCanvasContext(): obtiene el objeto asociado con el lienzo (canvas) de dibujo
		*getProgram(): obtiene el programa del editor
		*writeConsole(mensaje): escribe en la consola.
	*/

function main(){
    
    /****colors ****/

    var verde = '#27e400';
    var rojo = '#fc0602';
    var blanco = '#ffffff';
    var negro = '#000000';
    var azul = '#271af4';
    var amarillo ='#ffff0e';
    var violeta ='#7f1aa0';



    var ctx=null,
        prog = getProgram();

    ctx = getCanvasContext();


    function marcarOrigen(x, y) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    function marcarDestino(x, y) {
        ctx.lineTo(x, y);
    }

    function dibujar() {
        ctx.stroke();
    }

    function cambiarColorLapiz(color) {
        ctx.strokeStyle = color;
    }


    function cambiarAnchoLapiz(ancho) {
        ctx.lineWidth = ancho;
    }
    
    showCanvas();
    try {
        eval(prog); 
     } catch (e) {
      if (e instanceof SyntaxError) {
        alert(e.message);
     }
    }
}

