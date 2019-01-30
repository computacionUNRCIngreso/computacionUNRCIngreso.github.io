	/*
	Esta actividad implementa las instrucciones avanzar(pasos), girarDerecha(grados) y 
	girarIzquierda(grados). Para ello se se lleva el estado del cursor, posición actual y dirección actual
	Programa de ejemplo:


	for(var i=0; i<4;i++){
		avanzar(100);
    	girarDerecha(90);
	}
	
	subirLapiz();
	girarIzquierda(90);
	avanzar(100);
	bajarLapiz();

	for(var i=0; i<4;i++){
    	avanzar(100);
    	girarDerecha(90);

	}
	*/
    
	//current position and direction	
	var xcursor=250,
		ycursor=250,
		direction=0,
		pencilUp=0, /*when 0 pencil is down, when 1 pencil is up 
					(avanzar does not draw in this case but it changes position of cursor) 
					On initial state always pencil is down*/

		//context of cursor canvas (cursorcanvas)
		cursorctx=null;

	var canv = document.createElement('canvas');
		canv.id = 'cursorcanvas';
		canv.width = "500";
		canv.height = "500";
		canv.style = "position: absolute; top:0; left:0; z-index:0; border:2px solid #27e400;";
		document.getElementById('tab-content').appendChild(canv);


	var canvas = document.getElementById("canvas");
		canvas.style = "position: absolute; top:0; left:0; z-index:1; border:1px solid #000000;";

	getCursorCanvasContext();

	cursorctx.clearRect(0,0,canv.width,canv.height);

	drawCursor();
	clearCanvas();
	showCanvas();

	//TODO: hacer esto de una mejor manera
	w2ui.tabs.on('click', function(event) {
		switch(event.target) {
                case 'lienzo':
                    $('#textconsole').hide();
                    $('#canvas').show();
                    $('#cursorcanvas').show();
                    break;
                case 'consola':
                    $('#canvas').hide();
                    $('#cursorcanvas').hide();
                    $('#textconsole').show();
                    break;
            }
	});	


	//TODO: hacer esto de una mejor manera- item[2] es limpiarLienzo
	w2ui.editortoolbar.items[2].onClick = function(){
											clearCanvas();
																						
											var selectedId = w2ui.actsidebar.selected;
											if(actividades[selectedId].actividad == "Repetición")
												initialState();
											else
												cursorctx.clearRect(0,0,canv.width,canv.height);
										}			

	//function to convert grade to radian
    function GradeToRadian(grade){
		return grade * Math.PI / 180.0;
	}

	//draw a line from (ox,oy) of size large in the given direction
    function drawLine(ox, oy, direction, large) {

    	var xtarget=ox + (Math.cos(GradeToRadian(direction)) * large),
			ytarget=oy + (Math.sin(GradeToRadian(direction)) * large);

		cursorctx.beginPath();
        cursorctx.moveTo(ox, oy);	
     
     	cursorctx.lineTo(xtarget, ytarget);
        cursorctx.stroke();

        return {
        	xtarget,
        	ytarget,
        }
    }

    function turn(current, lORr, grade){
    	var res = 0;
    	if (lORr == "left")
    		res =  (current + (360-grade))%360;
    	else	
    		res = (current + grade)%360;
    	return res;

    }

	//draw a triangule (cursor), in current position and direction  
    function drawCursor() {
        
        var innerdirection = direction, 
     		innerxcursor = xcursor,
			innerycursor = ycursor,
		
		
		innerdirection = turn(innerdirection,"right",90);
		target = drawLine(innerxcursor,innerycursor,innerdirection,10);
			
		innerxcursor = target.xtarget;
		innerycursor = target.ytarget;



		innerdirection = turn(innerdirection,"left",120);
		cursorctx.strokeStyle ='#fc0602';
		cursorctx.lineWidth =4;
		target = drawLine(innerxcursor,innerycursor,innerdirection,20);

		innerxcursor = target.xtarget;
		innerycursor = target.ytarget;

		innerdirection = turn(innerdirection,"left",120);
		target = drawLine(innerxcursor,innerycursor,innerdirection,20);

		innerxcursor = target.xtarget;
		innerycursor = target.ytarget;
		cursorctx.lineWidth =3;
		cursorctx.strokeStyle ='#006E00';

		innerdirection = turn(innerdirection,"left",120);
		target = drawLine(innerxcursor,innerycursor,innerdirection,10);

		innerxcursor = target.xtarget;
		innerycursor = target.ytarget;	


		innerdirection = turn(innerdirection,"left",90);

    }

    function getCursorCanvasContext() {
    	var  cursorCanvas = document.getElementById("cursorcanvas");
             cursorctx = cursorCanvas.getContext("2d");
             cursorctx.lineWidth =3;
             cursorctx.strokeStyle ='#006E00';
    	
	}

	function initialState(){

		cursorctx.clearRect(0,0,canv.width,canv.height);
		xcursor = 250;
		ycursor = 250;
		direction = 0;
		pencilUp = 0; //On initial state always pencil is down
		drawCursor();
		clearCanvas();

	}

	function main(){

		var ctx=null;

		//draw a line from (ox,oy) to (dx,dy). It is used in avanzar 
	    function drawLine(ox, oy, dx, dy) {
	    	ctx.beginPath();
	        ctx.moveTo(ox, oy);
	        ctx.lineTo(dx, dy);
	        ctx.stroke();
	    }


		function updateState(x,y){
			xcursor=x;
			ycursor=y;
		}

		/*From here API given to students*/

		/****colors ****/
	    var verde = '#27e400',
	    	rojo = '#fc0602',
	    	blanco = '#ffffff',
	    	negro = '#000000',
	    	azul = '#271af4',
	    	amarillo ='#ffff0e',
	    	violeta ='#7f1aa0';

		function avanzar(pasos){
			var xtarget=xcursor + (Math.cos(GradeToRadian(direction)) * pasos),
				ytarget=ycursor + (Math.sin(GradeToRadian(direction)) * pasos);
				
			if(pencilUp ==0) //if pencil is down avanzar does not draw lines	
				drawLine(xcursor,ycursor,xtarget,ytarget);
			
			updateState(xtarget,ytarget);
			cursorctx.clearRect(0,0,canv.width,canv.height);
			drawCursor();
		}

		function subirLapiz(){
			pencilUp = 1;
		}

		function bajarLapiz(){
			pencilUp = 0;
		}

		function girarDerecha(grade){
			direction = (direction + grade)%360;
			cursorctx.clearRect(0,0,canv.width,canv.height);
			drawCursor();	

		} 	

		function girarIzquierda(grade){
			girarDerecha(360-grade);
			cursorctx.clearRect(0,0,canv.width,canv.height);
			drawCursor();
		}


	    function cambiarColorLapiz(color) {
	        ctx.strokeStyle = color;
	    }
	    /**End Students API**/

	    prog = getProgram();

	    ctx = getCanvasContext();
	    
		initialState();
		showCanvas();
	    
	    try {
	        eval(prog); 
	    } catch (e) {
	        if (e instanceof SyntaxError) {
	            alert(e.message);
	        }
	    }	
	}
