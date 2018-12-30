function writeConsole(message){
	$('#textconsole').append(message + '<br>');
}

function getProgram() {
    return editor.doc.getValue();
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

// Retorna un rango (desde..hasta) para uso en for/of loops
function* rango(start, end, step = 1) {
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}

// espera
function esperar(milisegundos) {
    var begin = new Date();

    while (new Date() - begin < milisegundos) {
        showConsole();
    }
}
