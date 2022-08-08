//Funciones constructoras
class sala {
    constructor(numeroDeSala, pelicula, imagen, capacidad) {
        this.id = parseInt(numeroDeSala);
        this.nombre = pelicula.toUpperCase();
        this.imagen = imagen;
        this.capacidad = parseInt(capacidad);
        this.precio = 550;
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
        this.nombre = nombreDelProducto.toUpperCase();
        this.imagen = imagen;
        this.precio = precio;
        this.disponibilidad = disponibilidad
    }
}

//Salas
const salas = [
    sala1 = new sala(1, 'Sonic 2', 'https://www.lahiguera.net/cinemania/pelicula/10077/sonic_2_la_pelicula-cartel-10238.jpg', 30),
    sala2 = new sala(2, 'Jurassic World', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jurassic-world-dominion-poster-fotogramas-1651162168.jpg', 40),
    sala3 = new sala(3, 'Dr. Strange', 'https://pics.filmaffinity.com/Doctor_Strange_en_el_multiverso_de_la_locura-750542602-large.jpg', 50)
]


//comida y bebida
const comidaBebida = [
    cocaCola = new venta(10, 'Coca cola', "https://jumboargentina.vtexassets.com/arquivos/ids/666704/Coca-cola-Sabor-Original-1-5-Lt-2-245092.jpg?v=637674357676600000", 150, true),
    sprite = new venta(20, 'Sprite', "https://almacenonline.com.ar/wp-content/uploads/2019/07/sprite1.5-1.jpg", 150, true),
    fanta = new venta(30, 'Fanta', "https://jumboargentina.vtexassets.com/arquivos/ids/666455/Gaseosa-Fanta-Naranja-1-75-Lt-2-766720.jpg?v=637674249973870000", 150, true),
    nachos = new venta(70, 'Nachos', "https://static.wixstatic.com/media/93657b_d1cb08162b3a4eec9d3db600dcad1de1~mv2.png/v1/fill/w_498,h_332,al_c,usm_0.66_1.00_0.01/93657b_d1cb08162b3a4eec9d3db600dcad1de1~mv2.png", 200, true),
    pochoclos = {
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ9XMbbosy0d6iutXg_aNKEH8pDaQ-AoPng&usqp=CAU",
        nombre: "Pochoclos",
        id: 40,
        size: [
            { id: 41, nombre: 'Pochoclos - Small', opcion: 'Small', precio: 90, disponibilidad: true },
            { id: 42, nombre: 'Pochoclos - Medium', opcion: 'Medium', precio: 150, disponibilidad: true },
            { id: 43, nombre: 'Pochoclos - Large', opcion: 'Large', precio: 220, disponibilidad: true }
        ]
    }
]

const merchandising = [
    remeraJurassic = {
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/jurassic-park31-01a9a5418d4043500516231028488882-1024-1024.jpg",
        nombre: "Remera Jurassic Park",
        id: 100,
        size: [
            { id: 101, nombre: "Remera Jurassic Park - Small", opcion: "S", precio: 2500, disponibilidad: true },
            { id: 102, nombre: "Remera Jurassic Park - Medium", opcion: "M", precio: 2500, disponibilidad: true },
            { id: 103, nombre: "Remera Jurassic Park - Large", opcion: "L", precio: 2500, disponibilidad: true },
            { id: 104, nombre: "Remera Jurassic Park - Extra Large", opcion: "XL", precio: 2500, disponibilidad: true }
        ]
    },
    remeraMarvel = {
        imagen: "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/av-31-08be92b6a4e4c709d315604278192795-1024-1024.jpg",
        nombre: "Remera Marvel",
        id: 200,
        size: [
            { id: 201, nombre: "Remera Marvel - Small", opcion: "S", precio: 2500, disponibilidad: true },
            { id: 202, nombre: "Remera Marvel - Medium", opcion: "M", precio: 2500, disponibilidad: true },
            { id: 203, nombre: "Remera Marvel - Large", opcion: "L", precio: 2500, disponibilidad: true },
            { id: 204, nombre: "Remera Marvel - Extra Large", opcion: "XL", precio: 2500, disponibilidad: true }
        ]
    },
    vasoJurasic = new venta(300, 'Vaso Jurassic World', "https://d22fxaf9t8d39k.cloudfront.net/dbd8ea4d02da85afc8d7bda4d920e53632252f70273bf0fe21ac3d4f236ddc6228549.jpeg", 1000, true),
    vasoStarWars = new venta(301, 'Vaso Star Wars', "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/370968_a_vasostarwarscafectapa.jpg", 1000, true),
    vasoSonic = new venta(302, 'Vaso Sonic 2', "https://pbs.twimg.com/media/FM8syScXwA02Bda.jpg", 1000, true)
]

//array con todo
const arrayCompleto = merchandising.concat(salas.concat(comidaBebida));
let arrayParcial = arrayCompleto.filter(el => el.size)
let arrayParcial2 = arrayParcial.map(el => el.size)
let arrayParcial3 = []
arrayParcial2.forEach(el => el.forEach(elemento => arrayParcial3.push(elemento)))



//Variables
let peliculaElegida;
let entradas;
let carritoDeCompras = JSON.parse(localStorage.getItem('carrito')) || [];
let carrito;
const searchInput = document.getElementById("searchInput");
let seccionBuscador = document.getElementById("seccionBuscador");
let seccionCarrito = document.getElementById("listaDeCompras")
let seccionPeliculas = document.getElementById("peliculas")
let peliculasCards = document.createElement("div");
let seccionProximosEstrenos = document.getElementById("proximosEstrenos")
let proximosEstrenosCards = document.createElement("div")
let seccionComidaBebida = document.getElementById("comidaBebida")
let comidaBebidaCards = document.createElement("div");
let seccionMerchandising = document.getElementById("merchandising")
let merchandisingCards = document.createElement("div");
const todasLasPeliculas = salas.map(el => el.nombre);
const facturacion = document.getElementById("facturacion")
let precioHtml = []

