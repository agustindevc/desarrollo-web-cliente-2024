let btnCorrrer = document.getElementById('correr');
btnCorrrer.addEventListener('click', iniciarCarrera);



function calcularVelocidades(){
    let velocidades = [];
    for(let i = 1; i <= 4; i++){
        velocidades.push(Math.random()*5 +1)
    }
        return velocidades;
}

function iniciarCarrera(){
    let corredores = document.querySelectorAll("div"); //selecciona todos los elementos div y crea un array que los contiene
    let timer;
    let div1 = corredores[0];
    let div2 = corredores[1];
    let div3 = corredores[2];
    let div4 = corredores[3];
    
    let velocidades = calcularVelocidades();
    let final = false;

    timer = setInterval(function(){ //setInterval Inicializa unm intervalo de ejecucion de una funcion en in tiempo(milisegundos) determinado
        if (!final){
            div1.style.setProperty("left", div1.style.getPropertyValue("left") + velocidades[0] + "px")
        
            if (div1.style.setPropertyValue("left")>=1080){
            final = true;
            alert("ha ganado div 1");
            }
        }
        else{
            clearInterval(timer);
        }

    }, 50); 
       
}