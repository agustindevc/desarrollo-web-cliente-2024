function copiaUnicos(array1, array2){
    let arrayFinal = [];

    // Agregar elementos únicos de array1 que no estén repetidos en array1 ni esten en array2
    for (let i=0; i<array1.length; i++){
        // if (array2.indexOf(array1[i]) === -1 && !repetidos(array1, array1[i])){
        if (!array2.includes(array1[i]) && !repetidos(array1, array1[i])){
            arrayFinal.push(array1[i]);
        }
    }
    // Agregar elementos únicos de array2 que no estén repetidos en array2 ni esten en array1
    for (let i=0; i<array2.length; i++){
        // if (array1.indexOf(array2[i]) === -1 && !repetidos(array2, array2[i])){
        // if (array1.indexOf(array2[i]) === -1 && esUnico(array2, array2[i])){
        if (!array1.includes(array2[i]) && !repetidos(array2, array2[i])){
            arrayFinal.push(array2[i]);
        }
    }
    return arrayFinal; 
}


//otra forma de hacerlo...
/*El método indexOf() busca la primera aparición del valor elem dentro del array y devuelve su indice.
Si el valor de elem aparece una sola vez en el array, entonces el índice de su primera
aparición (indexOf()) será igual al índice de su última aparición (lastIndexOf()),
porque solo habrá una aparición.*/
function esUnico(array, elem){
    return array.indexOf(elem) === array.lastIndexOf(elem);
}

//Funcion que recibe por parametros un array y el elemento que queremos comprobar si esta repetido
function repetidos(array, elem){
    let cont = 0; //se crea una variable contador
    for (let i = 0; i < array.length; i++){ //se recorre el array recibido por parametros
        if (array[i] === elem){ //si un elemento del array coincide con el elementro, se suma 1 al contador
            cont++;
        }
    }
    if (cont == 1){ //si el contador esta en 1, significa que el elemento aparecio una sola vez. Si es mayor significa que esta repetido.
        return false;
    } else {
        return true;
    }
}

let resultado = copiaUnicos([77, "ciao", 8, "ciao", 42, 2, "2"], [77, 42, 9]);
console.log(resultado); // Salida: [8,9]