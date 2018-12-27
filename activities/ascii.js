
/*API disponible para usar en cada actividad:
    *getCanvasContext(): obtiene el objeto asociado con el lienzo (canvas) de dibujo
    *getProgram(): obtiene el programa del editor
    *writeConsole(mensaje): escribe en la consola.
*/

function main() {

    function deAsciiACaracter(n){
        writeConsole(String.fromCharCode(n));
    }

    function deCaracterAAscii(c){
        return writeConsole(c.charCodeAt(0));
    }

    function longitudMensaje(texto){
        return texto.length;
    }

    function paraTodoCaracterConvertir(mensaje){
        var p ='';
        for (i = 0; i < longitudMensaje(mensaje); i++) {
            p=p + ' ' + mensaje.charCodeAt(i);
        }
        writeConsole(p);        
    }

    mostrarConsola();

    var prog = getProgram();

    try {
        eval(prog);
    } catch (e) {
        if (e instanceof SyntaxError) {
           alert(e.message);
        }
    }
}






