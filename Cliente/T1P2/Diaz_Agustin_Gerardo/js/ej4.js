
/*Crea un programa que se dispare al pulsar el único botón de la página.
 Ese programa se va a encargar de crear de forma dinámica una tabla
  cada vez que se pulse.

Para ello, preguntará al usuario por pantalla el número de filas y el número
 de celdas por fila que tendrá la tabla. Dichos números deben ser enteros positivos 
 e inferiores o iguales a 10. Si esto no ocurre, vuelve a pedirse el numero correspondiente. 
 Cada tabla creada debe pertenecer a la clase “tabla” de CSS para que quede bien maquetada. 
Además, cada celda creada DEBE TENER en su interior el número de fila a la que pertenece.

Adicionalmente, debe permitir el que al pinchar en una celda esta incluya una imagen. 
Se incluirá una inicial y conforme se pinche en la celda se irá pasando a otra imagen 
de las disponibles. Conforme llegue al final de las imágenes disponibles debe empezar
 por la inicial.
*/

let btnNuevaTabla = document.getElementById("btnGenerarTabla");
btnNuevaTabla.addEventListener("click", crearTabla);

function crearTabla() {
    
    //pido numero de filas y de celdas(columnas)
    let filas = prompt("Dime el numero de filas: ");
    let celdas = prompt("Dime el numero de celdas: ");

    //creo el elemento table en el documento
    let tabla = document.createElement("table");

    //le asigno la clase tabla al elemento
    tabla.className = "tabla";

    //recorro la tabla y a cada fila le añado el numero de celdas que se ha indicado
    for (let i = 0; i < filas; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < celdas; j++) {
            let td = document.createElement("td");

            //coloco el texto dentro de la celda
            td.textContent = i + 1;

            //inserto el elemento td dentro del tr en cada iteracion
            tr.appendChild(td);
        }

        //inserto el elemento tr dentro de la tabla en cada iteracion
        tabla.appendChild(tr);
    }

    //añado la tabla a la seccion tabla del documento
    document.querySelector("seccionTabla").appendChild(tabla);
}

