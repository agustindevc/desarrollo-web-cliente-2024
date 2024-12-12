let tabla = document.getElementById('generaTabla');

tabla.addEventListener('click', creoTabla);

function creoTabla(){
    let tam = recogerNum("Dime tamaño de la matriz");

    let seccionTabla = document.getElementById('seccionTabla');

    let nuevaTabla = document.createElement('table');
    let  tablaBody = document.createElement('tbody');

    nuevaTabla.style.width = '100%';
    nuevaTabla.setAttribute('border',1); //AÑADE BORDE A LA TABLA

    for(let i = 0; i<tam; i++){
        let fila = document.createElement('tr');

        for (let j=0; j<tam; j++){
            let celda = document.createElement('td');
            let textoCelda = document.createTextNode(`Fila : ${i+1}, Columna ${j+1}`);

            celda.appendChild(textoCelda);

            //Añadir un menjador de eventos para cambiar el color
            //al hacer click en la celda oportuna.
            celda.onclick = function(){
                cambiarColorCelda(this);
            };
            fila.appendChild(celda);
            // añado la celda que acabo de crear a la fila que estoy construyendo
        }
        tablaBody.appendChild(fila)
    }
    nuevaTabla.appendChild(tablaBody);
    seccionTabla.appendChild(nuevaTabla);
}

function cambiarColorCelda(celda){
    celda.style.backgroundColor = celda.style.backgroundColor === 'blue' ? 'green' : 'blue';
}

function recogerNum(msj) {
    let valido = false
    let a
    do {
        a = prompt(msj)
        if (isNaN(a) || a == "") {
            alert("No valido")
        } else {
            valido = true
        }
    } while (valido == false)
    return Number(a);
}