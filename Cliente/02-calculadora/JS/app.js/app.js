// Vamos a realizar una Calculadora.
// Solicitamos número A, número B y operación (+, -. * y /)

function Sumar() {
    let num1 = PedirNum();
    let num2 = PedirNum();
    let resultado = num1 + num2;

    alert(`${num1} + ${num2} = ${resultado}`);
}

function Resta() {
    let num1 = PedirNum();
    let num2 = PedirNum();
    let resultado = num1 - num2;

    alert(`${num1} - ${num2} = ${resultado}`);
}

function Multiplicacion() {
    let num1 = PedirNum();
    let num2 = PedirNum();
    let resultado = num1 * num2;

    alert(`${num1} * ${num2} = ${resultado}`);
}

function Division() {
    let num1 = PedirNum();
    let num2 = PedirNum();
    let resultado = num1 / num2;

    alert(`${num1} / ${num2} = ${resultado}`);
}

function PedirNum(){
    let j = prompt("Introduce un número: "); // Pedir al usuario
    while(isNaN(j)){
        j = prompt("Error: introduce un número: ");
    }

    return Number(j);
}


let fin = false;
let operacion = "";
do {
    operacion = prompt("Indica la operación (+, -, *, / o salir): ");
    switch (operacion) {
        case "+":
            Sumar();
            break;
        case "-":
            Resta();
            break;
        case "*":
            Multiplicacion();
            break;
        case "/":
            Division();
            break;
        case "salir":
            fin = true;
            break;
    }
} while (!fin);

function SumarVentana(){
    let a = Recoger("Dime numero A: ");
    let b = Recoger("Dime numero B: ");

    Sumar(a,b);
}

