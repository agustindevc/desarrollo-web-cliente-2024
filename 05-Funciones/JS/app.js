//DEFINICION DE FUNCIONES

let func = new Function("a", "b", "return a*b"); //DEFINICION DE LA FUNCION
let resultado = func(10,10); //LE PASO LOS PARAMETROS A LA FUNCION
console.log(resultado); //MUESTRO EL RESULTADO

//FUNCIONES AUTOINVOCADAS

(function(){
    let msg = "hola";
    console.log(msg);
})();

//FUNCIONES ANONIMAS(no tiene un nombre con el que llamarla, no permite elr eaprovechamiento de codigo)

let a = 10;
let b = 10;

resultado = function(a,b){return a*b};
console.log(resultado(a,b));

//NOTACION FLECHA --arrow Functions

const fun = (a,b) => a * b; //le indico luego de la flecha la funcion que debe realizar con los parametros
console.log(fun(10,10));git 