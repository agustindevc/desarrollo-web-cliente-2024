console.log("javascript");

let creaAnuncio = document.getElementById("incluyeAnuncio");

creaAnuncio.addEventListener("click", incluirAnuncio);

function incluirAnuncio(){
    //Pedir al usuario la direccion de la imagen y el enlace
    let pathImg = prompt("Direccion de la imagen ", "./img/foto1.jpg");
    let urlEnlace = prompt("URL del enlace", "https://www.marca.es");

    //Crear un div
    let nuevoHijo = docuemnt.createElement("div"); //CREACION DE UN ELEMENTO DIV POR MEDIO DE JS

    //Creo el enlace
    let enlace = document.createElement("a");
    enlace.href = urlEnlace;
    enlace.textContent = prompt("Dime el texto de enlace: ");

    //creo la imagen

    let imagen = docuemnt.createElement("img");
    imagen.src = pathImg;
    imagen.alt = "Imagen alternativo";
    imagen.style.width = "100px";
    
    //Agregar a nuestro hijo (div)
    nuevoHijo.appendChild(imagen);
    nuevoHijo.appendChild(enlace);

    let seccion = document.getElementById(seccionArticles);
    seccion.appendChild(nuevoHijo);
}    