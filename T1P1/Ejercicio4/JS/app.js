/*Define un array bidimensional de tamaño NxN y guárdalo en una variable llamada matriz.
 Este valor N será introducido por el usuario (mediante prompt) y deberá estar comprendido entre 2 – 5 (incluidos).

a) (0,5 puntos) Rellena la matriz con valores aleatorios entre 1 y 99.

b) (1 punto) Muestra por consola el contenido de la matriz respetando el número de
filas y columnas. Es decir, todos los valores de una fila deben salir en horizontal separados por espacios y debajo, la siguiente fila.
Además, todos los valores deben ocupar 2 espacios. Si un valor ocupa solo un espacio, ponle un 0 delante.

c) (0,5 puntos) Calcula la media de la suma de todos sus elementos y muestra un mensaje por consola para indicar ese valor.*/


//Funcion para pedir un numero que indicara el tamaño de la matriz (devuelve el numero)
function pedirNumero(msj){
    let j = prompt(msj); // Pedir al usuario
    while(isNaN(j) || j < 2 || j > 5){
        j = prompt("dato incorrecto " + msj);
    }
    return Number(j);
}

//funcion para generar ramdom
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

//Funcion que crea la matriz y la rellena con numeros random entre 1 y 99, devuelve la matriz
function CreaYPintaMatriz(filas, columnas){
    let matriz = new Array(filas);

    for(let i = 0; i < filas; i++){ /*inicializo el array*/
        matriz[i] = new Array(columnas);
        let resultado = "";
        for(let j = 0; j < columnas; j++){
            matriz[i][j]= getRandomIntInclusive(1, 99);

            
            if(matriz[i][j] < 10){
                resultado += "0"+ matriz[i][j] + " ";        
            }
            else{
                resultado +=matriz[i][j]+ " ";
            }
        }
        console.log(resultado);
    
    }

}

let numero = pedirNumero("Dime un tamaño para la matriz: ");
let filas = numero;
let columnas = numero;
CreaYPintaMatriz(filas, columnas);


