

function PedirNum(msj){
    let j = prompt(msj); // Pedir al usuario
    while(isNaN(j)){
        j = prompt("Error: " + msj);
    }
    return Number(j);
}


function CreaYPintaMatriz(fila, columna){
    let matriz = new Array(columna);
  

    //inicializamos matriz
    for(let i= 0; i < columna; i++){
        matriz[i] = new Array(fila);
    }

    //relleno valores
        for(let i = 0; i < fila; i++){
            for(let j = 0; j < columna; j++){
            matriz[i][j] = j;           
        }
        console.log(matriz[i]);
    }
}

let fila = PedirNum("dime tamaño de fila: ");
let columna = PedirNum("Dime tamaño de columna");

CreaYPintaMatriz(fila, columna);






