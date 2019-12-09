
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
       
    	} catch (e) {
	        if (e instanceof SyntaxError) {
	            alert(e.message);
	        }
   		}
   	
	};


	a = document.getElementById("canvas");
	if(a.getAttribute('attach')==null){
    
    	a.setAttribute('attach','true');
    	canvas.addEventListener('click', listener,false);
	}

		
	function dibujarLinea(ox, oy, dx, dy) {
			var ctx = getCanvasContext();
			ctx.strokeStyle = '#7f1aa0';
			ctx.beginPath();
			ctx.moveTo(ox, oy);
			ctx.lineTo(dx, dy);
			ctx.stroke();
	}
	showCanvas();
	dibujarLinea(0, 250, 500, 250);
	dibujarLinea(250, 0, 250, 500);

									  	
	function obtenerX(){
		return clickx;
	}
	
	function obtenerY(){
		return clicky;
	}

	function escribir(mensaje){
		writeConsole(mensaje);
		showConsole();
	}



	function main(){
		escribir("botón executar desactivado para esta actividad");	
	}
	
