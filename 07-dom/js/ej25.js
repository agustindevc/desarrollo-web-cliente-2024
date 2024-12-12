/* Ejercicio: Administrador de Lista de Tareas Objetivo 1. Crear una lista de
tareas con opciones para añadir elementos en diferentes posiciones, reemplazar,
y eliminar. 2. Cada botón realizará una acción específica usando uno de los
métodos de manipulación del DOM. -->

<!-- Api de elementos
elemento.before(); Añade el nuevo elemento justo antes.
elemento.after(); Añade el nuevo elemento justo después.
elemento.prepend(); Añade el nuevo elemento justo antes del primer hijo.
elemento.append(); Añade el nuevo elemento justo después del último hijo
elemento.replaceChildren(); eliminar todos los hijos y los cambia por el nuevo elemento.
elemento.replaceWith(); se sustituye el elemento por el nuevo.
elemento.remove(); elimina el propio elemento. */

console.log("Estoy");

//AGREGAR TAREA ANTES DEL ELEMENTO
let btnAgregarAntes = document.getElementById('btnAgregarAntes');
btnAgregarAntes.addEventListener('click', agregarAntes);

function agregarAntes(){
    let primerElem = document.getElementById('primerElemento');
    
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea'); /*todos los elementos li, tendran la clase tarea*/
    nuevoElem.textContent= "Nueva tarea delante del 1er elemento";
    primerElem.before(nuevoElem);

}

//AGREGAR TAREA DESPUES DEL ELEMENTO
let btnAgregarDespues = document.getElementById('btnAgregarDespues');
btnAgregarDespues.addEventListener('click', AgregarDespues);

function AgregarDespues(){
    let primerElem = document.getElementById('primerElemento');
    
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea'); /*todos los elementos li, tendran la clase tarea*/
    nuevoElem.textContent= "Nueva tarea antes del 1er elemento";
    primerElem.after(nuevoElem);

}

//AGREGAR TAREA AL INICIO DE LA LISTA
let btnAgregarAlInicio = document.getElementById('btnAgregarAlInicio');
btnAgregarAlInicio.addEventListener('click', AgregarAlInicio);

function AgregarAlInicio(){
    let primerElem = document.getElementById('listaTareas');
    
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea'); /*todos los elementos li, tendran la clase tarea*/
    nuevoElem.textContent= "Nueva tarea al principio de la lista";
    primerElem.prepend(nuevoElem);
}


//AGREGAR TAREA AL FINAL DE LA LISTA
let btnAgregarAlFinal = document.getElementById('btnAgregarAlFinal');
btnAgregarAlFinal.addEventListener('click', AgregarAlFinal);

function AgregarAlFinal(){
    let primerElem = document.getElementById('listaTareas');
    
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea'); /*todos los elementos li, tendran la clase tarea*/
    nuevoElem.textContent= "Nueva tarea al final de la lista";
    primerElem.append(nuevoElem);
}

//REEMPLAZAR TODOS LOS ELEMENTOS DE LA LISTA
let btnReemplazarElem = document.getElementById('btnReemplazarElem');
btnReemplazarElem.addEventListener('click', reemplazarElem);

function reemplazarElem(){
    let primerElem = document.getElementById('listaTareas');
    
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea'); /*todos los elementos li, tendran la clase tarea*/
    nuevoElem.textContent= "Reemplazo";
    nuevoElem.id="primerElemento"
    primerElem.replaceChildren(nuevoElem);
}

//REEMPLAZAR PRIMER ELEMENTO
let btnReemplazarPrimerElem = document.getElementById('btnReemplazarPrimerElem');
btnReemplazarPrimerElem.addEventListener('click', reemplazarPrimerElem);

function reemplazarPrimerElem(){
    let primerElem = document.getElementById('primerElemento');
        
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea'); /*todos los elementos li, tendran la clase tarea*/
    nuevoElem.textContent= "Reemplazo primer elemento";
    primerElem.replaceWith(nuevoElem);
}

//ELIMINAR EL PRIMER ELEMENTO
let btnEliminarPrimerElem = document.getElementById('btnEliminarPrimerElem');
btnEliminarPrimerElem.addEventListener('click', EliminarPrimerElem);

function EliminarPrimerElem(){
    let primerElem = document.getElementById('primerElemento');    
    primerElem.remove();
}

//REEMPLAZAR PRIMER ELEMENTO DE LA LSITA
let btnreemplazarPrimerTarea = document.getElementById('btnreemplazarPrimerTarea');
btnreemplazarPrimerTarea.addEventListener('click', reemplazarPrimerTarea);

function reemplazarPrimerTarea(){
    let primerElem = document.querySelector("li");
        
    let nuevoElem = document.createElement('li');
    nuevoElem.classList.add('tarea'); /*todos los elementos li, tendran la clase tarea*/
    nuevoElem.textContent= "Reemplazo primera tarea";
    primerElem.replaceWith(nuevoElem);
}

//ELIMINAR PRIMER ELEMENTO DE LA LISTA
let btnEliminarElemento1 = document.getElementById('btnEliminarElemento1');
btnEliminarElemento1.addEventListener('click', eliminarElemento1);

function eliminarElemento1(){
    let primerElem = document.querySelector("li");
    primerElem.remove();
}



