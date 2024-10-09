// const nombres = [
//     "Juan",
//     "Ana",
//     "Sara",
//     "David",
//     "Pablo",
//     "Luz",
//     "Mark",
//     "Irene",
//     "Nina",
//     "Alba",
//   ];

function filtrarAmigos(nombres){
    let coinciden = " ";
    for(let i = 0; i < nombres.length; i++){
        if(nombres[i].length == 4){
            coinciden += nombres[i] + " ";
            
        }
    }
    return coinciden;
}

/*let amigosJose = filtrarAmigos(nombres);

console.log(amigosJose);
document.write(amigosJose); /*Esta funcion escribe un documento nuevo con la salida*/


//Utilizacion de split
let nombres2 = prompt("Dime nombres separados por coma: ");
let nombresArray = nombres2.split(',');

let amigosJose = filtrarAmigos(nombresArray);
console.log(amigosJose);
document.write(amigosJose);