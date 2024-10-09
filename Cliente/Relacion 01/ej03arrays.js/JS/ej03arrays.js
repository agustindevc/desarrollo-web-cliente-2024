/*Crea un script que pida al usuario un numero entero positivo N mayor a 2.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a pedir.
A continuación, debe crearse una matriz NxN rellena con los resultados de la tabla de
multiplicar de N (empezando en 1). Finalmente, muestra por consola la matriz “en forma
de matriz”
Ej: Para el número 3, el programa debe mostrar
03 06 09
12 15 18
21 24 27
*/

let numero = 0;
do{
    numero = prompt("Dime un numero mayor a 2: ");
}while(numero <= 2);

let matriz = newArray(numero)

for(let i = 0; i < filas; i++){ /*inicializo el array*/
    matriz[i] = new Array(numero);
    for(let j=0;j<numero;j++){
        matriz[i][j]= numero*(j+1);
    }
}
