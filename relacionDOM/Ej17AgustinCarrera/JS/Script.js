let btnCorrer = document.getElementById("correr");
btnCorrer.addEventListener("click", iniciarCarrera);

function calcularVelocidades(){

    //creo un array para almacenar las velocidades posibles con numeros random
    let velocidades = [];
    for (let i = 1; i<=4; i++){
        velocidades.push(parseInt(Math.random()*5+1));
    }
    console.log(velocidades);
    return velocidades;
}

function iniciarCarrera(){

    //creo el array corredores y guardo alli los elementos div del documento
    let corredores = document.querySelectorAll("div");
    let timer;

    //creo variables y les asigno un div del array a cada una
    let div1 = corredores[0];
    let div2 = corredores[1];
    let div3 = corredores[2];
    let div4 = corredores[3];
    
    //guardo una velocidad y establezco el final en false
    let velocidades = calcularVelocidades();
    let final = false;

    //creo variables para almacenar el estilo (en tiempo real) de cada div
    //para poder acceder luego al valor de la propiedad left.
    let estilo1 = window.getComputedStyle(div1);
    let estilo2 = window.getComputedStyle(div2);
    let estilo3 = window.getComputedStyle(div3);
    let estilo4 = window.getComputedStyle(div4);

    timer = setInterval(function(){
        let velocidad1 = parseInt(estilo1.getPropertyValue("left")) + parseInt(Math.random()*5+1); //aleatorio entre 1 y 5
        let velocidad2 = parseInt(estilo2.getPropertyValue("left")) + parseInt(Math.random()*5 +1);
        let velocidad3 = parseInt(estilo3.getPropertyValue("left")) + parseInt(Math.random()*5 +1);
        let velocidad4 = parseInt(estilo4.getPropertyValue("left")) + parseInt(Math.random()*5 +1);
        if (!final){

            //si no ha llegado al final, le asigno una nueva "velocidad" a la propiedad left del div1 
            div1.style.setProperty("left", velocidad1 + "px");
            
            //si la propiedad left llego a 1080. ha llegado al final
            if (parseInt(estilo1.getPropertyValue("left")) >= 1080){
                final = true;
                alert("ha ganado div 1");
            }
            // Repetimos para div2, div3, y div4.
            div2.style.setProperty("left", velocidad2 + "px");
            if (parseInt(estilo2.getPropertyValue("left")) >= 1080){
                final = true;
                alert("ha ganado div 2");
            }
            div3.style.setProperty("left", velocidad3 + "px");
            if (parseInt(estilo3.getPropertyValue("left")) >= 1080){
                final = true;
                alert("ha ganado div 3");
            }
            div4.style.setProperty("left", velocidad4 + "px");
            if (parseInt(estilo4.getPropertyValue("left")) >= 1080){
                final = true;
                alert("ha ganado div 4");
            }
        } else {
            //al haber llegado al final, se detiene el intervalo
            clearInterval(timer);
        }
    }, 100)
}
    // REINICIAR
    document.getElementById('reiniciar').onclick = function () {
        let corredores = document.querySelectorAll("div");
        corredores[0].style.left = "0px";
        corredores[1].style.left = "0px";
        corredores[2].style.left = "0px";
        corredores[3].style.left = "0px";
        clearInterval(timer);
    };

    function iniciarCarreraOptima(){
 
        let corredores = document.querySelectorAll("div");
        corredores[0].style.left = "0px";
        corredores[1].style.left = "0px";
        corredores[2].style.left = "0px";
        corredores[3].style.left = "0px";
    
        let velocidades = [];
        let timer;
    
        let final = false;
    
        timer = setInterval(function(){
            // opción 2 velocidad variable en cada momento
            velocidades = calcularVelocidades();
            if (!final){
                for (let i=0; i<4; i++){
                    corredores[i].style.left = parseInt(corredores[i].style.left) + velocidades[i] + "px";
    
                    if (parseInt(corredores[i].style.left)>=1080){
                        final=true;
                        alert("Ha ganado el corredor: " + (i+1));
                    }
                }
            }
            else{
                clearInterval(timer);
            }
        }, 100);
    }

