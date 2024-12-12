let autos=['BMW', 'Audi', 'Volvo'];

console.log(autos);
console.log(typeof autos);

// Creacion de ARRAY

let item = new Array(1,6); //creo un array con 1 y 6
console.log(item);
let items = new Array(6);//creo un array de 6
console.log(items);

let pets = new Array('perro', 'gato', 'periquito');
console.log(pets);
console.log(pets.length);
console.log(pets[0]);

//ITERAR en el ARRAY
let len = pets.length;
for (i=0; i<len; i++){
    console.log(pets[i]); //se debe tener en cuenta que no va i-1 aqui, porque no entraria el ultimo
}

//INSERTAR ELEMENTOS EN EL ARRAY
pets.push('rana', 'toro'); //añade elementos al final del array
console.log(pets);

items[2]='toro'; //sobreescribir elemento del array. si se lo indico a una posicion superior, crea espacios vacios hasta llegar a esa posicion.
console.log(items);

console.log(pets.pop()); //Muestra el ultimo elemento del ARRAY Y LO ELIMINA
console.log(pets.pop());
console.log(pets);

console.log(pets.shift()); //Muestra el primer elemento del ARRAY Y LO ELIMINA
console.log(pets);

pets.unshift('Perro');
console.log(pets); //añade un elemento al principio



const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); //Para 1 posicion. Param 2: 0 INSERTA en la posicion 1 Y MUEVE EL RESTO
console.log(months);
months.splice(1, 1, 'Feb'); //Para 1 posicion. Param 2: 1 reemplaza en la posicion 1
console.log(months);

months.splice(5, 0, 'July', 'August', 'Sept'); //Para 1 posicion. Param 2: 1 reemplaza en la posicion 1
console.log(months);

let eliminados = months.splice(4); //elimina los ultimos 4 elementos y lo guarda en la variable elimindos.

console.log(eliminados);
console.log(months); //Quedan en el array los no eliminados

//ORDENACION DE ARRAYS

console.log(months.reverse()); //da vuelta los elementos del ARRAY
console.log(months.sort()); //Ordena de forma alfanumerica.

//PARTES DE UNA PALABRA, FRASE, VECTORES,... DELIMITADOS POR UN SEPARADOR.
let cadena ='Javascript es un lenguaje de programacion';
let vector = '12,34,45,6,7,9,';

cadena = cadena.replace('Java','ECMA');
console.log(cadena);

let palabras = cadena.split(' ');//separa los elementos en lo que se le indique entre comillas, en este caso en cada espacio.
let numeros = vector.split(',');

console.log(palabras);
console.log(numeros);

//Busqueda de una posicion.
let posicion = months.indexOf('Jan');
console.log(posicion);

//Slice (corta el array desde la posicion que se le indique)
months.push('Apr');
console.log(months);
let corte = (months.slice(2));
console.log(corte);


//MATRICES
//Definicion de matrices.
/*let matriz = [];//genero un array (si se la longitud que debe tener lo indico aqui)
let j=prompt("Dime el tamaño de columna: ");

for (let j=0; j<i;j++){ //creo un bucle para generar la matriz acorde al tamaño que necesite
    matriz[j] = new Array(i);
}
*/
//----------------------------------------------

autos=[['BMW', 'BMW2', 'BMW3'], ['Audi1', 'Audi2'],['Volvo']];
console.log(autos);
console.log(autos.length);
console.log(autos [0].length);
console.log(autos [1].length);
console.log(autos [2].length);


function PintaMatriz(autos){
    let resultado;

    //relleno valores
    for(let i = 0; i < autos.length; i++){
        for(let j = 0; j < autos[1].length; j++){
            resultado += autos[i],[j];           
        }
        console.log(resultado);
        resultado = "";
    }
}

PintaMatriz(autos);



