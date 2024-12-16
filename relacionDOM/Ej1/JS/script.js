//Variables constantes

const enlace = document.getElementById("enlace");
const botonMostrar = document.getElementById("mostrarURL");
const botonCambiar =document.getElementById("cambiarURL");

//FUNCIONES

//Funcion para mostrar la URL y el texto.
function mostrarURL(){
    alert(`URL del enlace: ${enlace.href}\nTexto del enlace: ${enlace.textContent}`);    
}

function cambiarURL(){
    enlace.href = "https://www.youtube.com/";
    enlace.textContent = "He cambiado";
}

//Asigancion de eventos a los botones
botonMostrar.addEventListener('click', mostrarURL);
botonCambiar.addEventListener('click', cambiarURL);