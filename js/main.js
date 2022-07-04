//Sacar tickets en una boleteria para ver una pelicula y control para verificar si una sala esta llena o no

//Precio de la entrada
const precio = 500;

//Funciones constructoras
class sala {
    constructor(numeroDeSala, pelicula, imagen, capacidad) {
        this.numeroDeSala = parseInt(numeroDeSala);
        this.pelicula = pelicula.toUpperCase();
        this.imagen = imagen;
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
    constructor(id, nombreDelProducto, imagen, precio, disponibilidad) {
        this.id = id;
        this.nombreDelProducto = nombreDelProducto.toUpperCase();
        this.imagen = imagen;
        this.precio = precio;
        this.disponibilidad = disponibilidad
    }
}

//Salas
const sala1 = new sala(1, 'Sonic 2', 'https://www.lahiguera.net/cinemania/pelicula/10077/sonic_2_la_pelicula-cartel-10238.jpg', 30);
const sala2 = new sala(2, 'Jurassic World', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jurassic-world-dominion-poster-fotogramas-1651162168.jpg', 40);
const sala3 = new sala(3, 'Dr. Strange', 'https://pics.filmaffinity.com/Doctor_Strange_en_el_multiverso_de_la_locura-750542602-large.jpg', 50);

//comida y bebida
const cocaCola = new venta(1, 'Coca cola', "https://jumboargentina.vtexassets.com/arquivos/ids/666704/Coca-cola-Sabor-Original-1-5-Lt-2-245092.jpg?v=637674357676600000", 150, true);
const sprite = new venta(2, 'Sprite', "https://almacenonline.com.ar/wp-content/uploads/2019/07/sprite1.5-1.jpg", 150, true);
const fanta = new venta(3, 'Fanta', "https://jumboargentina.vtexassets.com/arquivos/ids/666455/Gaseosa-Fanta-Naranja-1-75-Lt-2-766720.jpg?v=637674249973870000", 150, true);
const pochoclos__s = new venta(4, 'Pochoclos tamaño small', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ9XMbbosy0d6iutXg_aNKEH8pDaQ-AoPng&usqp=CAU", 90, true);
const pochoclos__m = new venta(5, 'Pochoclos tamaño medium', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ9XMbbosy0d6iutXg_aNKEH8pDaQ-AoPng&usqp=CAU,150", true);
const pochoclos__l = new venta(6, 'Pochoclos tamaño large', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ9XMbbosy0d6iutXg_aNKEH8pDaQ-AoPng&usqp=CAU", 220, true);
const nachos = new venta(7, 'Nachos', "https://static.wixstatic.com/media/93657b_d1cb08162b3a4eec9d3db600dcad1de1~mv2.png/v1/fill/w_498,h_332,al_c,usm_0.66_1.00_0.01/93657b_d1cb08162b3a4eec9d3db600dcad1de1~mv2.png", 200, true);


//merchandising
const remeraJurassic = [
    s = new venta(8, 'Remera Jurassic Park tamaño s', "https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/jurassic-park31-01a9a5418d4043500516231028488882-1024-1024.jpg", 2500, true),
    m = new venta(9, 'Remera Jurassic Park tamaño m', "https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/jurassic-park31-01a9a5418d4043500516231028488882-1024-1024.jpg", 2500, true),
    l = new venta(10, 'Remera Jurassic Park tamaño l', "https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/jurassic-park31-01a9a5418d4043500516231028488882-1024-1024.jpg", 2500, true),
    xl = new venta(11, 'Remera Jurassic Park tamaño xl', "https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/jurassic-park31-01a9a5418d4043500516231028488882-1024-1024.jpg", 2500, true),
];
const remeraJurassic2 = new venta(8, 'Remera Jurassic Park tamaño s', 2500, true)

const remeraMarvel = [
    s = new venta(12, 'Remera Vengadores tamaño s', "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/av-31-08be92b6a4e4c709d315604278192795-1024-1024.jpg", 2500, true),
    m = new venta(13, 'Remera Vengadores tamaño m', "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/av-31-08be92b6a4e4c709d315604278192795-1024-1024.jpg", 2500, true),
    l = new venta(14, 'Remera Vengadores tamaño l', "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/av-31-08be92b6a4e4c709d315604278192795-1024-1024.jpg", 2500, true),
    xl = new venta(15, 'Remera Vengadores tamaño xl', "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/av-31-08be92b6a4e4c709d315604278192795-1024-1024.jpg", 2500, true),
];

const vasos = [
    vasoJurasic = new venta(16, 'Vaso Jurassic World', "https://d22fxaf9t8d39k.cloudfront.net/dbd8ea4d02da85afc8d7bda4d920e53632252f70273bf0fe21ac3d4f236ddc6228549.jpeg", 1000, true),
    vasoStarWars = new venta(17, 'Vaso Star Wars', "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/370968_a_vasostarwarscafectapa.jpg", 1000, true),
    vasoSonic = new venta(18, 'Vaso Sonic 2', "https://pbs.twimg.com/media/FM8syScXwA02Bda.jpg", 1000, true)
];


//Array del merchandising
const merchandising = remeraJurassic.concat(remeraMarvel).concat(vasos);


//Array de salas
const salas = [sala1, sala2, sala3];

//Array de comida y bebida
const comidaBebida = [cocaCola, sprite, fanta, pochoclos__s, pochoclos__m, pochoclos__l, nachos];

//array con todo
const arrayCompleto = merchandising.concat(salas.concat(comidaBebida));


//Variables
let peliculaElegida;
let entradas;
let carritoDeCompras = [];
let carrito;




//Funciones
const sacarEntradas = (ocupadas, sala, numeroDeSala) => {
    entradas = parseInt(prompt('¿Cuántas entradas desea sacar?'));   //...................................................................Sacar prompt
    ocupadas = ocupadas + entradas;
    if (ocupadas <= sala) {
        alert('Su costo es de : ' + entradas * precio + '$');
        console.info('La sala', numeroDeSala, 'tiene', ocupadas, 'asientos ocupados');
        return ocupadas;
    }
    ocupadas = ocupadas - entradas;
    alert('Lo sentimos, no hay espacio suficiente, quedan ' + (sala - ocupadas) + ' lugares');
    console.info('La sala', numeroDeSala, 'tiene', ocupadas, 'asientos ocupados');
    return ocupadas;
}

const agregarAlCarrito = (producto, array) => {
    producto = array.find(el => el.nombreDelProducto === producto);
    if (producto !== undefined) {
        carritoDeCompras.push(producto);
    } else {
        alert('El producto solicitado no existe');
    }
}

const precioTotal = (carritoDeCompras) => {
    let accum = 0;
    for (elemento of carritoDeCompras) {
        accum += elemento.precio
    }
    return accum
}


//Programa
const todasLasPeliculas = salas.map(el => el.pelicula);
console.log(`Las peliculas disponibles son: ${todasLasPeliculas}`);
const todasLasComidasYBebidas = comidaBebida.map(el => el.nombreDelProducto);
const allMerchandising = merchandising.map(el => el.nombreDelProducto);



//DOM para peliculas
let seccionPeliculas = document.getElementById("peliculas")
let peliculasCards = document.createElement("div");

let acumuladorPeliculas = ``

salas.forEach(el => {
    acumuladorPeliculas += `
    <div class="card" style="width: 18rem;">
        <img src="${el.imagen}" class="card-img-top" alt="${el.pelicula}">
        <div class="card-body">
            <h5 class="card-title">Sala ${el.numeroDeSala}: ${el.pelicula}</h5>
            <p class="card-text">Espacio en sala ${el.numeroDeSala}: ${el.capacidad} lugares</p>
            <a ref="${el.id}" class="btn btn-primary agregarAlCarrito">Agregar al carrito</a>
        </div>
    </div>`
});

peliculasCards.innerHTML = acumuladorPeliculas;
seccionPeliculas.appendChild(peliculasCards)
peliculasCards.className = ("d-flex flex-wrap justify-content-evenly")


//Dom para Comida y Bebida
let seccionComidaBebida = document.getElementById("comidaBebida")
let comidaBebidaCards = document.createElement("div");

let acumuladorComidaBebida = ``

comidaBebida.forEach(el => {
    acumuladorComidaBebida += `
    <div class="card" style = "width: 18rem;" >
        <img src="${el.imagen}" class="card-img-top" alt="${el.nombreDelProducto}">
            <div class="card-body">
                <h5 class="card-title">${el.nombreDelProducto}</h5>
                <p class="card-text">Precio: ${el.precio}</p>
                <a ref="${el.id}" class="btn btn-primary agregarAlCarrito">Agregar al carrito</a>
            </div>
        </div>`
});

comidaBebidaCards.innerHTML = acumuladorComidaBebida;
seccionComidaBebida.appendChild(comidaBebidaCards);
comidaBebidaCards.className = ("d-flex flex-wrap justify-content-evenly")

//DOM para merchandising
let seccionMerchandising = document.getElementById("merchandising")
let merchandisingCards = document.createElement("div");

let acumuladorMerchandising = ``

merchandising.forEach(el => {
    acumuladorMerchandising += `
            <div class="card" style = "width: 18rem;" >
                <img src="${el.imagen}" class="card-img-top" alt="${el.nombreDelProducto}">
                    <div class="card-body">
                        <h5 class="card-title">${el.nombreDelProducto}</h5>
                        <p class="card-text">Precio: ${el.precio}</p>
                        <a ref="${el.id}" class="btn btn-primary agregarAlCarrito">Agregar al carrito</a>
                    </div>
                </div>`
});

merchandisingCards.innerHTML = acumuladorMerchandising;
seccionMerchandising.appendChild(merchandisingCards);
merchandisingCards.className = ("d-flex flex-wrap justify-content-evenly")


//eventos
const botonAgregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");

botonAgregarAlCarrito.forEach(el => el.onclick = (event) => {
    const id = parseInt(event.target.getAttribute('ref'));
    const elemento = arrayCompleto.find(el => el.id === id);

    if (carritoDeCompras.some(el => el.id === id)) {
        const index = carritoDeCompras.findIndex(el => el.id === id);
        carritoDeCompras[index].cantidad = carritoDeCompras[index].cantidad + 1;
    } else {
        carritoDeCompras.push({
            id: elemento.id,
            nombre: elemento.nombreDelProducto,
            cantidad: 1,
            precio: elemento.precio
        });
    };
    console.log(carritoDeCompras)
})

const abrirModalIconoCarrito = document.getElementById("carritoModal");
let seccionCarrito = document.getElementById("listaDeCompras")

abrirModalIconoCarrito.onclick = (event) => {
    let acumulador = ""

    carritoDeCompras.forEach(el => {
        acumulador += `
            <div class="card" style = "width: 18rem;" >
            <div class="card-body">
                <h5 class="card-title">${el.nombre}</h5>
                <p class="card-text">Cantidad: ${el.cantidad}</p>
                <p class="card-text">Precio: ${el.precio}</p>
                </div>
            </div>
        `
    })
    
    seccionCarrito.innerHTML = acumulador;
}