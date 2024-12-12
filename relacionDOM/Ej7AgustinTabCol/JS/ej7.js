/*Crea una tabla con 4 filas y 4 celdas por fila. Usando atributos de HTML, coloca un
borde y un tamaño de 400x400px y deja el fondo en blanco.
a) Crea el código Javascript necesario para que cada vez que se pulse sobre una
celda, esa celda se vuelva de color negro. Nota: hay que usar funciones anónimas
y this.
b) Mejora el ejercicio anterior para que cada vez que se pulse sobre una celda, esta
cambie a negro o a blanco alternativamente según corresponda.
c) Super mejora: define una lista de 4 colores y ahora cada vez que se pulsa sobre
una celda, esta va cambiando de color siguiendo la lista de colores definida (si
llega al final de la lista, vuelve al principio).*/

let todasCeldas = document.querySelectorAll("td");

let colores = ["red", "blue", "green", "yellow"];

for(let i = 0; i < todasCeldas.length; i++){
    todasCeldas[i].onclick = function () {
        cambiarColor(this);
    }
}

function cambiarColor(celda){
    switch (celda.style.backgroundColor){
        case "white":
            celda.style.backgroundColor = colores[0];
            break;
        case "red":
            celda.style.backgroundColor = colores[1];
            break;
        case "blue":
            celda.style.backgroundColor = colores[2];
            break;
        case "green":
            celda.style.backgroundColor = colores[3];
            break;
        default:
            celda.style.backgroundColor = colores[0];
            break;
    }
};

//OPCION DE CREAR UNA TABLA MEDIANTE UN BOTON

let btnNuevaTabla = document.getElementById("btnNuevaTabla");
btnNuevaTabla.addEventListener("click", crearTabla);

function crearTabla(){
    let tamanio = prompt("Dime el tamaño de la nueva tabla.");
    let ubicacionTabla = document.getElementById("lugarTabla"); //tomo el lugar del HTML donde se ubicara la nueva tabla.
    
    //creacion de la seccion Table para el HTML con su clase y su id
    let nuevaTabla = document.createElement("table");
    nuevaTabla.classList.add("tablaPropia");
    nuevaTabla.id = "tablaPropia";
    //creacion de la seccion tbody en el HTML
    let tablaBody = document.createElement("tbody");

    //definicion de atributos para la nueva tabla
    nuevaTabla.setAttribute("border", 1);
    nuevaTabla.style.width = "400px";
    nuevaTabla.style.height = "400px";

    //CREACION DE LAS FILAS Y COLUMNAS DE LA TABLA
    for(let i = 0; i<tamanio; i++){
        let fila = document.createElement("tr");
        for(let j = 0; j < tamanio; j++){
            let celda = document.createElement("td");


            //aplicacion de la funcion cambiar color a la celda
            celda.onclick = function(){
                cambiarColor(this);
            };
            fila.appendChild(celda); //inserto la celda creada, en la fila
        }
        tablaBody.appendChild(fila); //añado la fila creada, a la tabla.
    }
    nuevaTabla.appendChild(tablaBody); //inserto la tabla en el elemento table
    ubicacionTabla.appendChild(nuevaTabla); //inserto el elemento table en el div creado para ubicarlo en el html.


}
