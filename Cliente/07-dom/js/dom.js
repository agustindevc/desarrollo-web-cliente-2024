function inicioDOM(){
    console.log("Dom cargado");
    document.body.style.background = 'cyan';

    let titulo = document.getElementById("title");
    console.log(titulo.innerHTML);
    console.log(titulo.innetHTML);
    console.log(titulo.textContent);
    console.log(titulo.textContent.length);

    //FUNCIONES DE JS PARA OBTENER ELEMENTOS DE UN DOCUMENTO.

    //getElementsByName funcion que crea un array con los elementos del tipo de etiqueta que se le indique
    let up_name = document.getElementsByName("up");
    console.log(up_name[0]);
    console.log(up_name[1]);
    console.log(up_name[0].tagName);
    console.log(up_name[1].tagName);
    
    //getElementsByName
    let parrafos = document.getElementsByTagName("p");
    console.log(parrafos);

    console.log(`Numero de párrafos que tengo: ${parrafos.length}`);


    //Document.getElementsByClassName()
    parrafos = document.getElementsByClassName("parrafos1"); //entre parenteis el nombre de la clase
    console.log(parrafos);


    //Recorro el array y muestro el contenido, indicando a cual parrafo se refiere
    for (let i = 0; i < parrafos.length; i++){
        
        if(i == 3){
            parrafos[i].innerHTML = "Párrafo cambiado";
        }

        console.log(`Parrafo ${i+1}: ${parrafos[i].innerHTML}`);
    }   

    //querySelector() //devuelve todos los elentos de la teqiqueta y clase indicados
    let parrafo1 = document.querySelector("p.parrafos1"); //entre parenteis LA ETIQUETA Y . el nombre de la clase
    console.log(parrafo1);

    //querySelectorAll() //devuelve un array con todos los elementos. Si no encuentra devuelve un array vacio
    let elementos = document.querySelectorAll('p.parrafor1');
    console.log(`Numero de párrafos que tengo: ${parrafos.length}`);
    for (let i = 0; i < elementos.length; i++){
        console.log(`Elemento ${i+1}: ${elementos[i].innerHTML}`);
    }   

    //selecciono el dom parcialmente
    let sectionProjects = document.getElementById("projects");
    console.log(sectionProjects);
    elementos = section.projects.querySelectorAll('section.projects');
    console.log(`Numero de párrafos que tengo: ${elementos.length}`);
    for (let i = 0; i < elementos.length; i++){

        console.log(`Elemento ${i+1}: ${elementos[i].innerHTML}`);
    }   

    
}

//funcion que cambia el color del titulo de rojo a negro o viceversa al hacer click
let estado = true; //true negro, false rojo
function cambioCabecera(cabecera){
    if(estado){
        cabecera.style.color ='red';
        estado = false;
    } else {
        cabecera.style.color ='black';
        estado = true;
    }

    //opcion 2 OPERADOR TERNARIO
    //cabecera.style.color = (cabecera.style.color === 'red') ? 'black' : 'red';
}

//MODIFICAMOS EL TITULO 2 (SUBTITULO).
function cambioSubtitulo(){
    let elemento = document.getElementById('subtitle');
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
}

document.getElementById('subtitle').onclick = cambioSubtitulo;

//opcion 1 llamada a eventos desde JS
// elemento.onclick = cambioSubtitulo;

let titleh3 = document.getElementById('H3title');
titleh3.addEventListener('click', cambioSubtitulo3());

elemento = document.getElementById('H3title');
elemento.style.color = 'blue';

function cambioSubtitulo3(){
    let elemento = document.getElementById('H3title');
    elemento.style.color = (elemento.style.color === 'orange') ? 'pink' : 'orange';
}

let c1 = document.getElementById('caja1');
c1.addEventListener('click', cambioClase1);

let c2 = document.getElementById('caja2');
c2.addEventListener('click', cambioClase2);


function cambioClase1(){
    if(c1.classList.contains('caja--negra')){
        console.log("1")
        c1.classList.remove('caja--negra');
        c1.classList.add('caja--roja');
    }else {
        console.log("2")
        c1.classList.remove('caja--roja');
        c1.classList.add('caja--negra');
    }  
}

function cambioClase2(){
    console.log("3")
    if(c2.classList.contains('caja--negra')){
        c2.classList.remove('caja--negra');
        c2.classList.add('caja--roja');
    }else {
        console.log("4")
        c2.classList.replace('caja--roja','caja--negra');
    }  
}