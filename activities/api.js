function writeConsole(message){
	$('#textconsole').append(message + '<br>');
}

function getProgram() {
    var prog = editor.doc.getValue();
    return prog;
}

function getCanvasContext() {
    return context;
}

// Hace visible el lienzo (canvas). Idem a hacer click en el tab correspondiente
function showCanvas() {
    w2ui.tabs.click('lienzo');
}

// Hace visible el lienzo (canvas). Idem a hacer click en el tab correspondiente
function showConsole() {
    w2ui.tabs.click('consola');
}

// Canvas Mouse Position: return object {x:pos, y:pos}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    
    return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
    };
}

