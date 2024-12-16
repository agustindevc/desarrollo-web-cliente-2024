/*solicito un numero por pantalla*/

function PedirNum(msj){
    let j = prompt(msj); // Pedir al usuario
    while(isNaN(j)){
        j = prompt("Error: " + msj);
    }
    return Number(j);
}

function CreaYPintaMatriz(filas, columnas){
    let matriz = new Array(filas);

    for(let i = 0; i < filas; i++){ /*inicializo el array*/
        matriz[i] = new Array(columnas);
        let numInicial = prompt("Dime el numero inicial: ")
        for(let j=0;j<columnas;j++){
            matriz[i][j]= numInicial*(j+1);
        }
        
    }
   // console.log(matriz);
    
    pintarMtriz(matriz);
    
}

function pintarMtriz(matriz){
    console.log(matriz);
    let resultado= "";
    for(let i = 0; i < filas; i++){ //recorro las filas
        for(let j = 0; j < columnas; j++){ //recorro las columnas y le asigno valor
                       
            if(matriz[i][j] < 10){
                resultado += "0"+ matriz[i][j] + " ";        
            }
            else{
                resultado +=matriz[i][j]+ " ";
            }
            
            
        }
        
        console.log(resultado);
        resultado ="";
    }
    
}


let filas = PedirNum("Dime el número de filas: ");
let columnas = PedirNum("Dime el número de columnas: ");

CreaYPintaMatriz(filas, columnas);