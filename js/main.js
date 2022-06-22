//Sacar tickets en una boleteria para ver una pelicula y control para verificar si una sala esta llena o no

//Precio de la entrada
const precio = 500;

//Funciones constructoras
class sala {
    constructor(pelicula,capacidad) {
        this.pelicula = pelicula.toUpperCase();
        this.capacidad = parseInt(capacidad);
        this.horarios = {
            horario1: '16:15 hs',
            horario2: '20:15 hs',
            horario3: '23:30 hs'
        }
    }
};

//Salas
const sala1 = new sala('Sonic 2', 30);
const sala2 = new sala('Jurassic World', 40);
const sala3 = new sala('Dr. Strange', 50);

//comida y bebida
const cocaCola = {
    id: 1,
    nombre: 'Coca Cola',
    precio: 150
}

const sprite = {
    id: 2,
    nombre: 'Sprite',
    precio: 150
}

const fanta = {
    id: 3,
    nombre: 'Fanta',
    precio: 150
}

const pochoclos = {
    id: 4,
    nombre: 'Pochoclos',
    tamano: {
        s: 90,
        m: 150,
        l: 220
    }
};

const nachos = {
    id: 5,
    nombre: 'Nachos',
    precio: 100,
}

//merchandising
const remeraJurassic = {
    s: {
        id: 6,
        disponibilidad: true
    },
    m: {
        id: 7,
        disponibilidad: true
    },
    l: {
        id: 8,
        disponibilidad: true
    },
    xl: {
        id: 9,
        disponibilidad: true
    },
    precio: 2500
}

const remeraMarvel = {
    s: {
        id: 10,
        disponibilidad: true
    },
    m: {
        id: 11,
        disponibilidad: true
    },
    l: {
        id: 12,
        disponibilidad: true
    },
    xl: {
        id: 13,
        disponibilidad: true
    },
    precio: 2500
}

const vasos = {
    vaso: ['Jurassic World', 'Star Wars', 'Sonic 2'],
    precio: 1000
}

//Array del merchandising
merchandising = [remeraJurassic, remeraMarvel, vasos]


//Array de salas
const salas = [sala1, sala2, sala3];

//Array de comida y bebida
const comidaBebida = [gaseosas, pochoclos, nachos];



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
console.log(`Las peliculas disponibles son: ${salas[0].pelicula}, ${salas[1].pelicula} y ${salas[2].pelicula}`)
do {
    //Input del usuario
    pelicula = prompt(`¿Que película desea ver? \n ${salas[0].pelicula} \n ${salas[1].pelicula} \n ${salas[2].pelicula} \n "end" para salir`).toUpperCase();
    if (pelicula === 'END') {
        break;
    }

    if (pelicula === salas[0].pelicula) {
        ocupadas1 = sacarEntradas(ocupadas1, salas[0].capacidad, 1);

    } else if (pelicula === salas[1].pelicula) {
        ocupadas2 = sacarEntradas(ocupadas2, salas[1].capacidad, 2);

    } else if (pelicula === salas[2].pelicula) {
        ocupadas3 = sacarEntradas(ocupadas3, salas[2].capacidad, 3);

    } else {
        alert('La película solicitada no existe, intente nuevamente');
    }

} while (pelicula !== 'END');
