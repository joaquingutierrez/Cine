//Sacar tickets en una boleteria para ver una pelicula y control para verificar si una sala esta llena o no

//Precio de la entrada
const precio = 500;

//Funciones constructoras
class sala {
    constructor(numeroDeSala,pelicula,capacidad) {
        this.numeroDeSala = parseInt(numeroDeSala);
        this.pelicula = pelicula.toUpperCase();
        this.capacidad = parseInt(capacidad);
        this.ocupadas = 0;
        this.horarios = {
            horario1: '16:15 hs',
            horario2: '20:15 hs',
            horario3: '23:30 hs'
        }
    }
};

class venta {
    constructor(id, nombreDelProducto, precio, disponibilidad) {
        this.id = id;
        this.nombreDelProducto = nombreDelProducto.toUpperCase();
        this.precio = precio;
        this.disponibilidad = disponibilidad
    }
}

//Salas
const sala1 = new sala(1,'Sonic 2', 30);
const sala2 = new sala(2,'Jurassic World', 40);
const sala3 = new sala(3,'Dr. Strange', 50);

//comida y bebida
const cocaCola = new venta(1, 'Coca cola', 150, true);
const sprite = new venta(2, 'Sprite', 150, true);
const fanta = new venta(3, 'Fanta', 150, true);
const pochoclos__s = new venta(4, 'Pochoclos tamaño small', 90, true);
const pochoclos__m = new venta(5, 'Pochoclos tamaño medium', 150, true);
const pochoclos__l = new venta(6, 'Pochoclos tamaño large', 220, true);
const nachos = new venta(7, 'Nachos', 200, true);


//merchandising
const remeraJurassic = [
    s = new venta (8, 'Remera Jurassic Park tamaño s', 2500, true),
    m = new venta (9, 'Remera Jurassic Park tamaño m', 2500, true),
    l = new venta (10, 'Remera Jurassic Park tamaño l', 2500, true),
    xl = new venta (11, 'Remera Jurassic Park tamaño xl', 2500, true),
];

const remeraMarvel = [
    s = new venta (12, 'Remera Vengadores tamaño s', 2500, true),
    m = new venta (13, 'Remera Vengadores tamaño m', 2500, true),
    l = new venta (14, 'Remera Vengadores tamaño l', 2500, true),
    xl = new venta (15, 'Remera Vengadores tamaño xl', 2500, true),
];

const vasos = [
    vasoJurasic = new venta (16, 'Vaso Jurassic World', 1000, true),
    vasoStarWars = new venta (17, 'Vaso Star Wars', 1000, true),
    vasoSonic = new venta (18, 'Vaso Sonic 2', 1000, true)
];


//Array del merchandising
const merchandising = remeraJurassic.concat(remeraMarvel).concat(vasos);


//Array de salas
const salas = [sala1, sala2, sala3];

//Array de comida y bebida
const comidaBebida = [cocaCola, sprite, fanta, pochoclos__s,pochoclos__m,pochoclos__l, nachos];



//Variables
let peliculaElegida;
let entradas;
let carritoDeCompras = [];
let carrito;




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

const agregarAlCarrito = (producto, array) => {
    producto = array.find( el => el.nombreDelProducto === producto);
    if (producto !== undefined) {
        carritoDeCompras.push( producto );
    } else {
        alert('El producto solicitado no existe');
    }
}

const precioTotal = (carritoDeCompras) => {
    let accum = 0;
    for ( elemento of carritoDeCompras) {
        accum += elemento.precio 
    }
    return accum
}



//Programa
const todasLasPeliculas = salas.map(el => el.pelicula);
console.log(`Las peliculas disponibles son: ${todasLasPeliculas}`);
const todasLasComidasYBebidas = comidaBebida.map( el => el.nombreDelProducto);
const allMerchandising = merchandising.map( el => el.nombreDelProducto);


do {

    peliculaElegida = prompt(`¿Que película desea ver? \n ${todasLasPeliculas.join('\n')} \n "end" para salir`).toUpperCase();

    if (peliculaElegida === 'END') {
        break;
    }

    peliculaElegida = salas.find( el => el.pelicula === peliculaElegida);

    if ( peliculaElegida !== undefined ) {
        peliculaElegida.ocupadas = sacarEntradas( peliculaElegida.ocupadas , peliculaElegida.capacidad, peliculaElegida.numeroDeSala);


        let aux = prompt(`¿Desea agregar comida y/o bebida? \n"si" \nCualquier otro valor para terminar`).toUpperCase();
        if (aux === 'SI') {
            while ( aux === 'SI') {
                carrito = prompt(`¿Qué desea agregar? \n ${todasLasComidasYBebidas.join('\n')} \n Por favor, ingrese de a uno.`).toUpperCase();
                agregarAlCarrito(carrito, comidaBebida);
                aux = prompt(`¿Desea agregar algo más? \n "si" \n "no" para terminar`).toUpperCase();
            }
        }

        aux = prompt(`¿Desea agregar merchandising? \n "si" \n "no" para terminar`).toUpperCase();
        if (aux === 'SI') {
            while ( aux === 'SI') {
                carrito = prompt(`¿Qué desea agregar? \n${allMerchandising.join('\n')} \nPor favor, ingrese de a uno.`).toUpperCase();
                agregarAlCarrito(carrito, merchandising);
                aux = prompt(`¿Desea agregar algo más? \n "si" \ncualquier otro valor para terminar`).toUpperCase();
            }
        }

    } else {
        alert('La película solicitada no existe, intente nuevamente');
    }

} while (peliculaElegida !== 'END');

console.log(carritoDeCompras);
console.log(precioTotal(carritoDeCompras));