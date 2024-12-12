/*EJERCICIO 1 (1.5 puntos):
Crea un programa que se dispare al pulsar los 2 botones existentes en la página 
(agregar y borrar). Ese programa se va a encargar de crear de forma dinámica una lista 
que deberá además tener asociado un enlace (http o https). Se deberá tener en cuenta que 
el nombre del elemento que se incluye a la lista se deberá solicitar por pantalla (prompt).
Se facilita fichero ejercicio1.html que incluye ya los estilos oportunos necesarios. 
Se puede usar la variable .innerHTML en la acción de borrar.
Puedes ver el ejemplo de ejecución de este ejercicio en clase.*/

listadoPrincipal = document.getElementById("listaDinamica")

//Llamo mal primer button y le asigno su funcion (agregar un enlace)
document.querySelectorAll("button")[0].onclick = function () {
    let item = document.createElement("li");
    item.innerHTML = prompt("Dime el nombre del elemento a agregar");
    let enlace = prompt("introduce el enlace");
    item.setAttribute("src", enlace);
    listadoPrincipal.appendChild(item);
}

//Llamo mal segundo button y le asigno su funcion (borrar la lista)
document.querySelectorAll("button")[1].onclick = function () {
    let borrar = document.querySelectorAll("li");
    for(let i = 0; i < borrar.length; i++){
        borrar[i].remove();
    }
}
