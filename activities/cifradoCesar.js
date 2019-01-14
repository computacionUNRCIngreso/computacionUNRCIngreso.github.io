

function main(){

  
    /* Esta función devuelve la letra que se encuentra en la posición i del texto*/
    function obtenerCaracter(texto,i){
        return texto.charAt(i);
    }

    /*Esta función devuelve el texto dado en minúscula*/
    function convertirMinuscula(texto){
        return texto.toLowerCase();
    }

    /* Esta función devuelve la cantidad de letras que tiene el texto dado*/
    function longitudMensaje(texto){
        return texto.length;
    }

    /* Dado un caracter, devuelve el código ascii correspondiente */
    function deCaracterAAscii(c){
        return c.charCodeAt(0);
    }

    /*Esta función devuelve la letra que el código c representa según la tabla ASCII*/
    function deAsciiACaracter(c){
        return String.fromCharCode(c);
    }

    /*Esta función encripta el texto dado mediante el mecanismo de cifrado cesar con código key*/  
    //TODO: usarla como oraculo
    function cifrarOculto(message,key) {
        var result="",
            ascii,
            current,
            k;
            
        message=convertirMinuscula(message);  
        k = key % 26;
        // for (i = 0; i < longitudMensaje(message); i++) {
        for (let current of message) {
            // actual = obtenerCaracter(message,i); 
            ascii=deCaracterAAscii(current);
            current=deAsciiACaracter(ascii+k);
            if (current> 'z') {
                current= deAsciiACaracter(ascii + k - 26);
            } 
            result = result + current;
                        
        }
        return result;
    }

    //se obtiene el programa del editor
    var prog = getProgram();
    

    try {
        //se ejecuta el programa
        var c = eval(prog);

        //muestra la consula y escribe el resultado
        showConsole();
        writeConsole(c);
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert(e.message);
        }
    }


}//fin función main








       












































