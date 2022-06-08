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

//Programa
console.log('Las peliculas disponibles son: Sonic 2, Jurassic World y Dr. Strange')
do {
    //Input del usuario
    pelicula = prompt('¿Que película desea ver? \n Sonic 2 \n Jurassic World \n Dr. Strange \n "end" para salir');
    if (pelicula === 'end') {
        break;
    }

    if ((pelicula === 'Sonic 2') || (pelicula === 'sonic 2')) {
        entradas = parseInt(prompt('¿Cuántas entradas desea sacar?'));
        ocupadas1 = ocupadas1 + entradas;
        if (ocupadas1 <= sala1) {
            alert('Su costo es de : ' + entradas * precio + '$');
            console.info('La sala 1 tiene',ocupadas1,'asientos ocupados');
        } else {
            ocupadas1 = ocupadas1 - entradas;
            alert('Lo sentimos, no hay espacio suficiente, quedan ' + (sala1 - ocupadas1) + ' lugares');
            console.info('La sala 1 tiene',ocupadas1,'asientos ocupados');
        }

    } else if ((pelicula === 'Jurassic World') || ((pelicula === 'Jurassic world')) || (pelicula === 'jurassic world')) {
        entradas = parseInt(prompt('¿Cuántas entradas desea sacar?'));
        ocupadas2 = ocupadas2 + entradas;
        if (ocupadas2 <= sala2) {
            alert('Su costo es de : ' + entradas * precio + '$');
            console.info('La sala 2 tiene',ocupadas2,'asientos ocupados');
        } else {
            ocupadas2 = ocupadas2 - entradas;
            alert('Lo sentimos, no hay espacio suficiente, quedan ' + (sala2 - ocupadas2) + ' lugares');
            console.info('La sala 2 tiene',ocupadas2,'asientos ocupados');
        }

    } else if ((pelicula === 'Dr. Strange') || ((pelicula === 'Dr. strange')) || (pelicula === 'dr. strange')) {
        entradas = parseInt(prompt('¿Cuántas entradas desea sacar?'));
        ocupadas3 = ocupadas3 + entradas;
        if (ocupadas3 <= sala3) {
            alert('Su costo es de : ' + entradas * precio + '$');
            console.info('La sala 3 tiene',ocupadas3,'asientos ocupados');
        } else {
            ocupadas3 = ocupadas3 - entradas;
            alert('Lo sentimos, no hay espacio suficiente, quedan '+ (sala3 - ocupadas3) +' lugares');
            console.info('La sala 3 tiene',ocupadas3,'asientos ocupados');
        }

    } else {
        alert('La película solicitada no existe, intente nuevamente');
    }

} while (pelicula !== 'end');