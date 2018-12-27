function writeConsole(message){
	document.getElementById('textconsole').innerHTML = message;
}

function getProgram() {
    var prog = editor.doc.getValue();
    return prog;
}

function getCanvasContext() {
    return context;
}

// Canvas Mouse Position: return object {x:pos, y:pos}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    
    return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
    };
}

