/*Concatenar dos arrays A y B de la siguiente forma: A0, B0, A1, B1, A2,
B2, ..., An, Bn. Los vectores pueden tener longitud distinta (requiere controlarlo).
Nota: los valores de cada vector se solicitarán separados por “,”*/

//Creacion de arrays, sE SOLICITA AL USUARIO Y SE CREA AUTOMATICAMENTE UN ARRAY AL SER CADENA DE TEXTO

//Funcion para concatenar arrays intercalados

function concatArrays(array1, array2){ //esta funcion recibira como parametros los array que se quieren copncatenar intercalados
    let resultado = []; //array vacio donde se almarecanran el resultado de concatenar

    let maxLength = Math.max(array1.length, array2.length); //la funcion Math.max nos dira la longitud del array mas largo, y lo guarda en la cariable maxLength

    //recorremos los arrays utilizando maxlength, eso asegura que se realizaran tantas iteeraciones como elementos tenga el array mas largo.
    for(let i = 0; i < maxLength; i++){
        if(i < array1.length){ //si i esta dentro del rango del primer array...
            resultado.push(array1[i]);
        }
        if(i < array2.length){ //si i esta dentro del rango del segundo array...
            resultado.push(array2[i]);
        }

    }
    return resultado;


}

let ingreso1 = prompt("Dime numeros separados por coma");
let ingreso2 = prompt("Dime otros numeros separados por coma");

let array1 = ingreso1.split(',');
let array2 = ingreso2.split(',');


let muestra = concatArrays(array1, array2);
console.log(muestra);

