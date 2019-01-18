

function main(){

    /***API para el alumno****/

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

    /****Fin API para el alumno****/

    /*función para obtener los parámetros actuales con lo que se invoca la función 
    que el alumno debe implementar*/
    function getParams(func){
        var str=func.toString();
        var len = str.indexOf("(");
        return str.substr(len+1,str.indexOf(")")-len -1).replace(/ /g,"").split(',')
    }

    /*Esta función encripta el texto dado mediante el mecanismo de cifrado cesar con código key 
    Precondición: El texto de entrada contiene solo caracteres del alfabeto 
    (inglés (sin acento- sin ñ)): [a..z,A..Z] */
    function hideCesarEncrypted(message,key) {
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
        var res = eval(prog),
            msj = (getParams(prog)[0]).replace(/\"/g,""),
            oracle = hideCesarEncrypted(msj, getParams(prog)[1]),
            show = " ";

        //muestra la consola
        showConsole();

        if(!res)
            res = "indefinido";
        
        if(res == oracle){
            show = "<br> <font color='#27e400'> <big> <b> Muy Bien!! </b> </big> </font> <br> <br> Resultado = " + res     
        }else{
            show = "<br> <font color='#fc0602'> <big> <b> Error! </b> </big> </font> <br> <br> Resultado Obtenido = " + res + "<br>" + "Resultado Esperado = " + oracle;            
        }
        writeConsole(show);
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert(e.message);
        }
    }

}//fin función main








       












































