//EJERCICIO1

//creo la funcion para preguntar el tipo de cambio
function preguntarConversion(msj){
    let j = prompt(msj); // Pedir al usuario
    while(isNaN(j) || j <= 0 || j >= 3){
        j = prompt("dato incorrecto " + msj);
    }
    return cambio(j);
}

//creo la funcion para preguntar el importe a convertir
function preguntarImporte(msj){
    let j = prompt(msj); // Pedir al usuario
    while(isNaN(j) || j < 0){
        j = prompt("dato incorrecto " + msj);
    }
    return monto(j);
}

//Funcion que convierte de Euro a pesetas. Devuelve el resultado de dicha conversion
function convertirEuroPes(importe){
    let res = (importe * 166);
    return res;
}

//Funcion que convierte de Euro a dolares. Devuelve el resultado de dicha conversion
function convertirPesEuro(importe){
    let res = (importe * 1.09);
    return res;
}



//variable para almacenar el resultado
let muestraResultado;

function convertir(importe, conversion){
    if(conversion == 1){
        muestraResultado = convertirEuroPes(importe);
    }else{
        muestraResultado = convertirPesEuro(importe);
    }
    console.log("El resultado es"+ muestraResultado);
}


//llamada a las funciones para pedir valores al usuario
let conversion = preguntarConversion("Dime una opcion de conversion (1 para cambio a pesetas, 2 para cambio a dolares");
let importe = preguntarImporte("Dime el importe a convertir: ");
let muestra = convertir(importe, conversion);
console.log(muestra);

