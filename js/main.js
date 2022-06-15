//Sacar tickets en una boleteria para ver una pelicula y control para verificar si una sala esta llena o no

//Precio de la entrada
const precio = 500;

//Espacio en salas
const sala1 = 30;
const sala2 = 40;
const sala3 = 50;

//Ocupación de las salas y variables
let ocupadas1 = 0;
let ocupadas2 = 0;
let ocupadas3 = 0;
let pelicula;
let entradas;


//Funciones
const sacarEntradas = (ocupadas, sala, numeroDeSala) => {
    entradas = parseInt(prompt('¿Cuántas entradas desea sacar?'));
    ocupadas = ocupadas + entradas;
    if (ocupadas <= sala) {
        alert('Su costo es de : ' + entradas * precio + '$');
        console.info('La sala', numeroDeSala, 'tiene',ocupadas,'asientos ocupados');
        return ocupadas;
    }
    ocupadas = ocupadas - entradas;
    alert('Lo sentimos, no hay espacio suficiente, quedan ' + (sala - ocupadas) + ' lugares');
    console.info('La sala', numeroDeSala, 'tiene',ocupadas,'asientos ocupados');
    return ocupadas;
}

//Programa
console.log('Las peliculas disponibles son: Sonic 2, Jurassic World y Dr. Strange')
do {
    //Input del usuario
    pelicula = prompt('¿Que película desea ver? \n Sonic 2 \n Jurassic World \n Dr. Strange \n "end" para salir');
    if (pelicula === 'end') {
        break;
    }

    if ((pelicula === 'Sonic 2') || (pelicula === 'sonic 2')) {
        ocupadas1 = sacarEntradas(ocupadas1, sala1, 1);

    } else if ((pelicula === 'Jurassic World') || ((pelicula === 'Jurassic world')) || (pelicula === 'jurassic world')) {
        ocupadas2 = sacarEntradas(ocupadas2, sala2, 2);

    } else if ((pelicula === 'Dr. Strange') || ((pelicula === 'Dr. strange')) || (pelicula === 'dr. strange')) {
        ocupadas3 = sacarEntradas(ocupadas3, sala3, 3);

    } else {
        alert('La película solicitada no existe, intente nuevamente');
    }

} while (pelicula !== 'end');