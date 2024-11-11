/*Modifica el código del ejemplo de la calculadora JavaScript para que además 
de tener botones que permitan marcar números y operadores con distintos colores tenga:

a) Incluir un botón que permita marcar la tecla C (clear) con color
 rojo fuerte y símbolo C en blanco.

b) Incluir un botón que marque todos los números con un mismo color. 
Incluir un segundo botón que marque todos los operadores con otro color.

c) Un botón que permita limpiar todo lo que se haya marcado y volver a la
 situación original (es decir, que la calculadora se vea tal y como se veía inicialmente).

Se facilita html y CSS.
Puedes ver el ejemplo de ejecución de este ejercicio en clase.*/

//llamo al elemento de clase "limpiar" al que voy a aplicar los cambios y lo guardo
let botonC = document.getElementsByClassName("limpiar");

//creo la funcion que se ejecuta al hacer click en el span "La C"
function modificacion(botonC) { //recibe por parametros el elemento a modicifar
    botonC.style.backgroundColor = red; //modifico el elemento recibido por paramentros.
}