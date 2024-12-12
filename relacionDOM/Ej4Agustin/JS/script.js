/*Crea una galería de fotos (al menos 5 fotos) que posea un botón para avanzar y otro
para retroceder.
 El botón para avanzar hará que se muestre la siguiente foto cada vez que se pulse.
Si se llega al final de la lista de imágenes, el botón deja de funcionar.
 El botón para retroceder hará que se muestre la foto anterior cada vez que se pulse.
Si se llega al principio de la lista de imágenes, el botón deja de funcionar.
b) Mejorar el ejercicio haciendo que el botón correspondiente se deshabilite
cuando se alcanza el final/principio de la lista de fotos.*/

let imag = document.querySelector("img");
let tipo = document.querySelector("img").getAttribute("src"); //almaceno el atributo "src" de la primera imagen, en este caso imagen1

document.querySelectorAll("button")[0].onclick = function () {
    //Debo volver a obtener los elementos por si no me ecuentro en la primera imagen
    let imag = document.querySelector("img");
    let tipo = document.querySelector("img").getAttribute("src");

    //realizo un switch para cambiar el tipo, cuando se presione el boton(coloco el enlace de la siguiente imagen).
    switch (tipo) {
        case "img/imagen1.jpg":
            imag.setAttribute("src", "img/imagen2.jpg"); //en caso de que al hacer click, el tipo sea "./img/imagen1.jpg", lo cambio por el de imagen 2
            document.querySelectorAll("button")[1].removeAttribute("disabled", ""); //Al ser cambiado del primer elemento, debo habilitar el boton para retoceder.
            break;

        case "img/imagen2.jpg":
            imag.setAttribute("src", "img/imagen3.jpg"); //en caso de que al hacer click, el tipo sea "./img/imagen1.jpg", lo cambio por el de imagen 2
            
            break;
        case "img/imagen3.jpg":
            imag.setAttribute("src", "img/imagen4.jpg"); //en caso de que al hacer click, el tipo sea "./img/imagen1.jpg", lo cambio por el de imagen 2
           
            break;
        case "img/imagen4.jpg":
            imag.setAttribute("src", "img/imagen5.jpg"); //en caso de que al hacer click, el tipo sea "./img/imagen1.jpg", lo cambio por el de imagen 2
            document.querySelectorAll("button")[0].setAttribute("disabled", ""); //Al ser cambiado del ULTIMO elemento, debo habilitar el boton para retoceder.
            break;
    }
}

document.querySelectorAll("button")[1].onclick = function () {
    //Debo volver a obtener los elementos por si no me ecuentro en la primera imagen
    let imag = document.querySelector("img");
    let tipo = document.querySelector("img").getAttribute("src");

    //realizo un switch para cambiar el tipo, cuando se presione el boton(coloco el enlace de la IMAGEN ANTERIOR).
    switch (tipo) {
        case "img/imagen5.jpg":
            imag.setAttribute("src", "img/imagen4.jpg"); //en caso de que al hacer click, el tipo sea "./img/imagen5.jpg", lo cambio por el de imagen 4
            document.querySelectorAll("button")[0].removeAttribute("disabled", ""); //Al ser cambiado del primer elemento, debo habilitar el boton para retoceder.
            break;

        case "img/imagen4.jpg":
            imag.setAttribute("src", "img/imagen3.jpg"); //en caso de que al hacer click, el tipo sea "./img/imagen2.jpg", lo cambio por el de imagen 3
            
            break;
        case "img/imagen3.jpg":
            imag.setAttribute("src", "img/imagen2.jpg"); //en caso de que al hacer click, el tipo sea "./img/imagen3.jpg", lo cambio por el de imagen 2
           
            break;
        case "img/imagen2.jpg":
            imag.setAttribute("src", "img/imagen1.jpg"); //en caso de que al hacer click, el tipo sea "./img/imagen2.jpg", lo cambio por el de imagen 1
            document.querySelectorAll("button")[1].setAttribute("disabled", ""); //Al ser cambiado del PRIMER elemento, debo habilitar el boton para AVANZAR.
            break;
    }
}
