/*Un restaurante nos ha encargado una aplicación para colocar a los clientes
en sus mesas. En una mesa se pueden sentar de 0 (mesa vacía) a 4 comensales (mesa
llena).
El funcionamiento es el siguiente:

Cuando llega un cliente se le pregunta cuántos son. Como el programa no está preparado
para colocar a grupos mayores a 4, si un cliente solicita una mesa con más comensales
(pej, 6), el programa dará el mensaje “Lo siento, no admitimos grupos de 6, haga grupos
de 4 personas como máximo e intente de nuevo” y volverá a preguntar.

Para cada grupo nuevo que llega, se busca siempre la primera mesa libre (con 0 personas).
Si no quedan mesas libres, se busca una donde haya hueco para todo el grupo (por
ejemplo, si el grupo es de dos personas, se podrá colocar en mesas donde haya una o dos
personas).

Cada vez que se sientan nuevos clientes se debe mostrar el estado de las mesas.
Los grupos no se pueden romper, aunque haya huecos sueltos suficientes.
A tener en cuenta:
• El programa comienza pidiendo el número de mesas que tiene el restaurante.

• Inicialmente, las mesas se cargan con valores aleatorios entre 0 y 4 y mostrará por
pantalla como quedan las mesas inicialmente.

• El programa seguirá pidiendo comensales hasta que se introduzca un valor
negativo.
Ejemplo de ejecución:
//El usuario ha metido un valor de 10
Estado de las mesas: 3 2 0 2 4 1 0 2 1 1
El usuario pide una mesa para 2.
Por favor, Siéntese en la mesa 3
Estado de las mesas: 3 2 2 2 4 1 0 2 1 1
El usuario pide una mesa para 4
Por favor, Siéntese en la mesa 7
Estado de las mesas: 3 2 2 2 4 1 4 2 1 1
El usuario pide una mesa para 3
Por favor, Siéntese en la mesa 6
Estado de las mesas: 3 2 2 2 4 4 4 2 1 1
El usuario pide una mesa para 4
Lo siento, no queda sitio en el restaurante.
Estado de las mesas: 3 2 2 2 4 1 4 2 1 1*/


let cantidadMesas = preguntarMesas("Cuantas mesas hay en el restaurante?");


//CREO EL ARRAY DEL TAMAÑO CANTIDAD MESAS (FILAS)
let mesas = new Array(cantidadMesas);

for(let i = 0; i < mesas.length; i++){
    //a cada elemento del aray mesas asigno un cantidad personas random
    mesas[i] = getRandomInt(5); 
}

while (true) {
    let comensales = preguntarComensales("Cuántos comensales son?");
    if (comensales < 0) {
        break; // Salir del bucle si el número es negativo
    }




//Se recorre la matriz buscando hueco en funcion de la cantidad de comensales
for(let i = 0; i < mesas.length; i++){
    if(mesas[i] == 0){
        mesas[i] = comensales; //si la mesa tiene 0 comensales, le asigno la cantidad que han llegado
    }
    else if(4 - mesas[i] <= comensales){ //si la mesa tiene menos de 4 comensales y junto a los que han llegado no superan los 4, le sumo los comensales nuevos
        mesas[i] += comensales;
    }
    else{
        console.log("Lo siento, no tenemos mesas disponibles");
    }
    console.log(mesas);
}
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max); /*Math.floor trunca el numero en el primer decimal*/
}

function preguntarComensales(msj){
    let j = prompt(msj); // Pedir al usuario
    while(isNaN(j) || j > 4){
        j = prompt("Lo siento, no admitimos grupos de "+ j +", haga grupos de 4 personas como máximo e intente de nuevo." + msj);
    }
    return Number(j);
}

function preguntarMesas(msj){
    let j = prompt(msj); // Pedir al usuario
    while(isNaN(j)){
        j = prompt("Error, dime cuantas mesas hay en el restaurante: " + msj);
    }
    return Number(j);
}
    


