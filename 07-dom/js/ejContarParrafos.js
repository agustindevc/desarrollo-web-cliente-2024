/*a) contar número de enlaces de la página
  b) Indicar a qué enlace apunta el penúltimo enlace de la página.
  c) Indicar cuantos enlaces apuntan a la url: http://prueba
  d) Número de enlaces del 3er párrafo.*/

  //opcion 1
  document.addEventListener("DOMContentLoaded", () => {
    alert("DOM cargado.");

    let texto ="";

    if(navigator.cookieEnabled){
        texto = "Cokies habilitadas";
    } else {
        texto = "Cookies están inhabilitadas";
    }
    alert(texto);
    alert(window.location); //muestra la url que estamos utilizando
    alert(`Tamaño de la ventana: Altura ${window.innerHeight}, Anchura: ${window.innerWidth}`);
  });

//APUNTES OBJETO WINDOW
// El objeto window representa la ventana que contiene un documento DOM; 
// la propiedad document apunta al DOM document cargado en esa ventana.
// https://developer.mozilla.org/es/docs/Web/API/Window
// Window.innerHeight: Obtiene la altura del area de contenido del navegador incluyendo, 
// si es interpretado, la barra de deslizado.
// window.innerWidth: Obtiene el ancho del area de contenido de la ventana del navegador,
// si es interpretado, la barra de deslizado vertical.
// Window.location: Obtiene/fija la location, o URL actual, del objeto de la ventana.
// Window.navigator: Returns a reference to the navigator object.
// Window.sessionStorage: Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.
// Window.localStorage: Retorna una referencia al objeto almacenamiento local usado para
// almacenar datos que pueden ser de accedidos por el origen que los creo.

//OPCION 2

window.addEventListener("load", contarEnlaces);

function contarEnlaces(){
    let info = document.getElementById("informacion");

    //a) Numero de enlaces
    
    let numEnlaces = document.getElementsByTagName("a"); //CREA UN ARRAY CON LOS ELEMENTOS QUE TIENEN ESE ID. LUEGO BUSCO EL TAMAÑO DEL ARRAY PARA SABER LA CANTIDAD
    console.log(numEnlaces);
    info.innerHTML = "El numero de enlaces es: "+ numEnlaces.length

    //b) Direccion del penultimo enlace

    info.innerHTML += "<br>" + "La direccion del penúltimo enlace es: " + numEnlaces[numEnlaces.length-2];

    //c) número de enlaces que apuntan a http://prueba/

    let contador= 0
    for(let i=0; i<numEnlaces.length; i++){
        if(numEnlaces[i].href=='http://prueba/'){
            contador++;
        }
    }
    info.innerHTML += "<br>" + "El num de enlaces que apunta a http://prueba/ es: "+ contador;


    //d) Numero de enlaces del 3er parrafo
    let parrafos = document.getElementsByTagName("p");
    let enlaces = parrafos[2].getElementsByTagName("a").length;

    info.innerHTML += "<br>" + "El numero de enlaces del tercer parrafo es: " + enlaces.length;
}