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

let N = 0;
do{
    N = prompt("Dime un numero mayor a 2");
}while(N < 3);

let matriz = new Array(N);
for(let i = 0; i < N; i++){
    matriz[i] = new Array(N); //filas
    for(let J = 0; J < N; J++){
        matriz[i][j] = N*(J+1); //columnas
    }
}

console.log(matriz);