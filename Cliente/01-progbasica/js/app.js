//alert("Hola mundo")



//Activamos Quoka ctrl+shift+p


console.log("Hola Mundo");

//nombre = "Agustin";

console.log(nombre);

//alert(nombre);

var nombre;
let a= 3;
let b= '2';
let c= a + b;
let ok = true;
console.log(c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof ok);
console.log(a + nombre);
if (b>a){
    console.log("");
} else{
    console.log("");
}

let objeto1 = Symbol(1);
console.log(typeof objeto1); 
console.log(objeto1); Symbol(1)

let horaDia = 12;
let mensaje = "";

if (horaDia >= 6 && horaDia <= 11){
    mensaje="Buenos dias";
}
else if (horaDia >= 12 && horaDia < 18){
    mensaje="Buenas tardes";
}
else if (horaDia >= 18 && horaDia < 24 || horaDia >= 1 && horaDia < 6){
    mensaje="Buenas noches";
}

else{
    mensaje="error";
}
console.log(mensaje);
//--------------------------------------------------------

let z= 2;
let y='2';

if(z==y){
    console.log("Son iguales");
}
if(z===y){
    console.log("Son iguales");
}

/*OPERADOR TERNARIO
El operador ternario de JavaScript es un operador condicional que tiene tres operandos.
Se usa para tomar una decisión basada en una expresión que se evalúa como true o false
Es una forma abreviada de la sentencia if else que crea código más limpio, fácil de entender 
y rápido de escribir.*/

let resultado = (z===y) ? "Verdadero" : "falso";
console.log(resultado);

//Otra opcion:
let opcion = (z===y) ? "1" : "2"; //Si Z es identico a y muestra el primero, sino el segundo
console.log(opcion); 2

/*Ej de operador ternario: */

let miNumero = "18";
console.log(miNumero);

if(isNaN(miNumero)){
    console.log("no es un numero");
}
miNumero=Number(miNumero);
console.log(miNumero);

let miString=String(miNumero);
console.log(miString);

let contador=0;
while(contador < 3){
    console.log(contador);
    contador++;
}
let cont = 0;
do{
    console.log(cont++);
} while(cont<4);

for (let conta=0; conta<5; conta++){
    console.log(conta);
}

let mes = 1;
//SWITCH
switch (mes){
    case 1: case 2: case 3:
        estacion="Invierno";
        break;
    case 4: case 5: case 6:
        estacion="Primavera";
        break;
    case 7: case 8: case 19:
        estacion="Verano";
        break;
    case 10: case 11: case 12:
        estacion="otoño";
    break;
    default: "ERROR";
}
console.log(estacion);


for (let i=0; i<=2; i++){
    for (let j=0; j<=3; j++){
        console.log("c1 "+ i + "c2: " + j);
        if (j==2){
            break;
        }
    }


//Creacion de un objeto
const objeto3={nombre: "Agustin", apellido: "Diaz", edad: 29};
console.log(typeof objeto3);


let marcaCoches = ['BMW', 'Audi','Renault','Ford'];
console.log(typeof marcaCoches);
for(let i = 0; i <= marcaCoches.length; i++){
    console.log(marcaCoches[i]);
}
}

//---------------------------------------

//Definir Clase

class Persona{
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    pasoaTexto(){
        return `${this._nombre}
        ${this._apellido},
        edad: ${this._edad}`;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Probar la clase persona
let persona = new Persona(`Agustin`, "Diaz", 29) //se pueden utilizar comillas simples o dobles
console.log(persona);
let nombre2 = persona.toString();
console.log(nombre);


//Objeto
const objeto3={nombre: "Agustin", apellido: "Diaz", edad: 29};
console.log(typeof objeto3);

let persona2 = new Persona(objeto3.nombre,objeto3.apellido,objeto3.edad);
console.log(persona2.pasoaTexto());

// Definicion de Funciones

//variables para utilizar en este ejemplo
var aa = 4; //esta forma defino variables globales
var bb = 5;

function miFuncion(xx, yy){
    let aa = 7; //reasigno a las variables globales, valores que quiero que tengan en esta seccion del codigo
    let bb = 10;  
    console.log("Suma: " + (xx + yy));
    console.log("Suma: "+ (aa + bb));
    console.log("Suma; " + `${aa + bb}`);
    return xx+yy;
}

let result = miFuncion(7,8);
console.log(result);

console.log(typeof miFuncion);

//calculadora
//funciones

/*function Sumar(){

$prueba = 0
do{   
    let a = prompt("Dime numero A: ");
    let b = window.prompt("Dime número B: ");

    if(isNaN(a) || isNaN(b)){
        alert(`ERROR`);
    }
    else{
        alert(`La suma es: ${Number(a)+Number(b)}`); //debo castear a numero, sino tomará los numeros como cadenas
        $prueba = 1
    }
} while($prueba == 0);
}
Sumar();
*/
//funcion FRAN



let operacion = obtenerOperacion;

function recogerNumero(){
    let num = prompt("Introduce un número: "); // Pedir al usuario
    while(isNaN(num)){
        num = prompt("Error: introduce un número: ");
    }
}return num;

function obtenerOperacion(){
    let operacion = prompt("Dime la operacion: (+ - * /)");
    while(operacion != "+", "-", "*", "/"){
        operacion = prompt("Error, introduce una operacion valida")
    }return operacion;
}

function calculadora(){

let a = recogerNumero();

let b = recogerNumero();
 
    switch (obtenerOperacion()){
        case "+":
            alert(`La suma es: ${Number(a)+Number(b)}`);
            break;
        case "-":
            alert(`La resta es: ${Number(a)-Number(b)}`);
            break;
        case "*":
            alert(`La resta es: ${Number(a)*Number(b)}`);
            break;
        case "*":
            alert(`La resta es: ${Number(a)/Number(b)}`);
            break;
    }
calculadora();
}





