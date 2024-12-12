/*Crear un menú vertical con efecto acordeón usando los siguientes apartados:
 Inicio
    ￿ Portada.
    ￿ Acerca de mí.
    ￿ Mis fotos.
 Proyectos
    ￿ Web Apps.
    ￿ Mobile Apps.
    ￿ Juegos.
 Portfolio
    ￿ Páginas webs.
    ￿ Software.
     Contacto
A tener en cuenta:
 El menú debe tener una maquetación en CSS.
 Los subapartados permanecen ocultos hasta que se pulsa sobre el apartado
correspondiente.
 Al abrir un bloque de subapartados, se cierran los demás.*/

console.log("Script Cargado");

listadoPrincipal = document.querySelectorAll("li");

//variables para comprobar el estado de los elementos.
let pulsado0 = false;
let pulsado1 = false;
let pulsado2 = false;

//creo funcion para deplegar listas


listadoPrincipal[0].addEventListener("click", deplegarLista0);
listadoPrincipal[1].addEventListener("click", deplegarLista1);
listadoPrincipal[2].addEventListener("click", deplegarLista2);

function deplegarLista0() {

    //Al hacer click sobre el primer elemento, se coloca su estado de pulsado en true
    // y se borran los hijos de los demas elementos en caso de que hayan sido pulsados.
    if(!pulsado0){
        pulsado0 = true;

        if(pulsado1){
            listadoPrincipal[1].lastChild.remove();
            pulsado1 = false;
        }
        if(pulsado2){
            listadoPrincipal[2].lastChild.remove();
            pulsado2 = false;
        }
    

        //creo la lista desplegable del primer elemento
        let hijos0 = ["Portada", "Acerca de Mi", "Mis Fotos"];
        
        //creo la lista de inicio con los elementos del array
        let listaInicio = document.createElement("ul");
        for (let i = 0; i < hijos0.length; i++){
            let item = document.createElement("li");
            item.innerHTML = hijos0[i];
            listaInicio.appendChild(item);
        }
        listadoPrincipal[0].appendChild(listaInicio);
    }
    else {
        listadoPrincipal[0].lastChild.remove();
            pulsado0= false;
    }
}


function deplegarLista1() {

    //Al hacer click sobre el primer elemento, se coloca su estado de pulsado en true
    // y se borran los hijos de los demas elementos en caso de que hayan sido pulsados.
    if(!pulsado1){
        pulsado1 = true;

        if(pulsado0){
            listadoPrincipal[0].lastChild.remove();
            pulsado0 = false;
        }
        if(pulsado2){
            listadoPrincipal[2].lastChild.remove();
            pulsado2 = false;
        }
    

        //creo la lista desplegable del primer elemento
        let hijos1 = ["Web App", "Mobile Apps", "Juegos"];
        
        //creo la lista de Proyectos con los elementos del array
        let listaProyectos = document.createElement("ul");
        for (let i = 0; i < hijos1.length; i++){
            let item = document.createElement("li");
            item.innerHTML = hijos1[i];
            listaProyectos.appendChild(item);
        }
        listadoPrincipal[1].appendChild(listaProyectos);
    }
    else {
        listadoPrincipal[1].lastChild.remove();
            pulsado1= false;
    }
}

function deplegarLista2 () {
    if(!pulsado2){
        pulsado2 = true;

        if(pulsado0){
            listadoPrincipal[0].lastChild.remove();
            pulsado0 = false;
        }
        if(pulsado1){
            listadoPrincipal[1].lastChild.remove();
            pulsado1 = false;
        }

        let hijos2 = ["Paginas Webs","Software"];
        let listaPortfolio = document.createElement("ul");

        for(let i = 0; i < hijos2.length; i++){
            let item = document.createElement("li");
            item.innerHTML = hijos2[i];
            listaPortfolio.appendChild(item);
        }
        listadoPrincipal[2].appendChild(listaPortfolio);
    } else {
        listadoPrincipal[2].lastChild.remove();
        pulsado2 = false;
    }
}