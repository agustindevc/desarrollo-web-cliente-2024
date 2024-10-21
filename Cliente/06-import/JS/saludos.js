// incuimos y definicmos las funciones a exportar

function saludar(nombre){
    return `Hola, ${nombre}`;
}

function despedida(nombre){
    return `Hasta luego, ${nombre}`;
}

//otra forma de exportacion, la declaro como funcion exportable
export function despedidas(nombre){
    return `Hasta luego, ${nombre}`;
}

//Exporto las funciones
export{saludar, despedida};

//otra forma de exportar todo
// export * from './saludos.js'; (Se deben declarar todas las funciones comoe exportables)