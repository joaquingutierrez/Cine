//Sacar tickets en una boleteria para ver una pelicula y control para verificar si una sala esta llena o no

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
const sala1 = new sala(1, 'Sonic 2', 'https://www.lahiguera.net/cinemania/pelicula/10077/sonic_2_la_pelicula-cartel-10238.jpg', 30);
const sala2 = new sala(2, 'Jurassic World', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jurassic-world-dominion-poster-fotogramas-1651162168.jpg', 40);
const sala3 = new sala(3, 'Dr. Strange', 'https://pics.filmaffinity.com/Doctor_Strange_en_el_multiverso_de_la_locura-750542602-large.jpg', 50);

//comida y bebida
const cocaCola = new venta(10, 'Coca cola', "https://jumboargentina.vtexassets.com/arquivos/ids/666704/Coca-cola-Sabor-Original-1-5-Lt-2-245092.jpg?v=637674357676600000", 150, true);
const sprite = new venta(20, 'Sprite', "https://almacenonline.com.ar/wp-content/uploads/2019/07/sprite1.5-1.jpg", 150, true);
const fanta = new venta(30, 'Fanta', "https://jumboargentina.vtexassets.com/arquivos/ids/666455/Gaseosa-Fanta-Naranja-1-75-Lt-2-766720.jpg?v=637674249973870000", 150, true);
const pochoclos__s = new venta(40, 'Pochoclos tamaño small', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ9XMbbosy0d6iutXg_aNKEH8pDaQ-AoPng&usqp=CAU", 90, true);
const pochoclos__m = new venta(50, 'Pochoclos tamaño medium', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ9XMbbosy0d6iutXg_aNKEH8pDaQ-AoPng&usqp=CAU", 150, true);
const pochoclos__l = new venta(60, 'Pochoclos tamaño large', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ9XMbbosy0d6iutXg_aNKEH8pDaQ-AoPng&usqp=CAU", 220, true);
const nachos = new venta(70, 'Nachos', "https://static.wixstatic.com/media/93657b_d1cb08162b3a4eec9d3db600dcad1de1~mv2.png/v1/fill/w_498,h_332,al_c,usm_0.66_1.00_0.01/93657b_d1cb08162b3a4eec9d3db600dcad1de1~mv2.png", 200, true);
const pochoclos = {
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ9XMbbosy0d6iutXg_aNKEH8pDaQ-AoPng&usqp=CAU",
    nombre: "Pochoclos",
    size: [
        { id: 41, nombre: 'Small', precio: 90, disponibilidad: true },
        { id: 42, nombre: 'Medium', precio: 150, disponibilidad: true },
        { id: 43, nombre: 'Large', precio: 220, disponibilidad: true }
    ]
}



//merchandising
const remeraJurassic = [
    s = new venta(100, 'Remera Jurassic Park tamaño s', "https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/jurassic-park31-01a9a5418d4043500516231028488882-1024-1024.jpg", 2500, true),
    m = new venta(101, 'Remera Jurassic Park tamaño m', "https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/jurassic-park31-01a9a5418d4043500516231028488882-1024-1024.jpg", 2500, true),
    l = new venta(102, 'Remera Jurassic Park tamaño l', "https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/jurassic-park31-01a9a5418d4043500516231028488882-1024-1024.jpg", 2500, true),
    xl = new venta(103, 'Remera Jurassic Park tamaño xl', "https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/jurassic-park31-01a9a5418d4043500516231028488882-1024-1024.jpg", 2500, true),
];
const remeraJurassic2 = new venta(8, 'Remera Jurassic Park tamaño s', 2500, true)

const remeraMarvel = [
    s = new venta(200, 'Remera Vengadores tamaño s', "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/av-31-08be92b6a4e4c709d315604278192795-1024-1024.jpg", 2500, true),
    m = new venta(201, 'Remera Vengadores tamaño m', "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/av-31-08be92b6a4e4c709d315604278192795-1024-1024.jpg", 2500, true),
    l = new venta(202, 'Remera Vengadores tamaño l', "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/av-31-08be92b6a4e4c709d315604278192795-1024-1024.jpg", 2500, true),
    xl = new venta(203, 'Remera Vengadores tamaño xl', "https://d3ugyf2ht6aenh.cloudfront.net/stores/122/451/products/av-31-08be92b6a4e4c709d315604278192795-1024-1024.jpg", 2500, true),
];

const vasos = [
    vasoJurasic = new venta(300, 'Vaso Jurassic World', "https://d22fxaf9t8d39k.cloudfront.net/dbd8ea4d02da85afc8d7bda4d920e53632252f70273bf0fe21ac3d4f236ddc6228549.jpeg", 1000, true),
    vasoStarWars = new venta(301, 'Vaso Star Wars', "https://www.morph.com.ar/pub/media/catalog/product/cache/c249fbb42cf583b1a8cf6f6bd1b7b4b4/3/7/370968_a_vasostarwarscafectapa.jpg", 1000, true),
    vasoSonic = new venta(302, 'Vaso Sonic 2', "https://pbs.twimg.com/media/FM8syScXwA02Bda.jpg", 1000, true)
];


//Array del merchandising
const merchandising = remeraJurassic.concat(remeraMarvel).concat(vasos);


//Array de salas
const salas = [sala1, sala2, sala3];

//Array de comida y bebida
const comidaBebida = [cocaCola, sprite, fanta, pochoclos__s, pochoclos__m, pochoclos__l, nachos, pochoclos];

//array con todo
const arrayCompleto = merchandising.concat(salas.concat(comidaBebida));
let arrayParcial = arrayCompleto.filter(el => el.size)


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
let seccionComidaBebida = document.getElementById("comidaBebida")
let comidaBebidaCards = document.createElement("div");
let seccionMerchandising = document.getElementById("merchandising")
let merchandisingCards = document.createElement("div");
const todasLasPeliculas = salas.map(el => el.nombre);






//Funciones
const renderizarCards = (array, target) => {
    let acumulador = ""
    array.forEach(el => {
        acumulador += `
    <div class="card" style="width: 18rem;">
        <img src="${el.imagen}" class="card-img-top" alt="${el.nombre}">
        <div class="card-body">
        `
        if (array[0].id < 10) {
            acumulador += `
            <h5 class="card-title">Sala ${el.id}: ${el.nombre}</h5>
            <p class="card-text">Espacio en sala ${el.id}: ${el.capacidad} lugares</p>`

        } else if (el.size) {
            acumulador += `
                    <h5 class="card-title">${el.nombre}</h5>
                    <select class="form-select" aria-label="Default select example">
                        <option value="">Elija una opcion...</option>
                `
            el.size.forEach(el => {
                acumulador += `
                        <option value="${el.id}">${el.nombre}</option>
                    `
            })
            acumulador += `
                    </select>
                    <p class="card-text" id="precio"></p>
                `
        } else {
            acumulador += `
                <p class="card-text">Precio: ${el.precio}</p>
                `
        }
        acumulador += `
        <a ref="${el.id}" class="btn btn-primary agregarAlCarrito">Agregar al carrito</a>
        </div>
    </div>
        `
    })
    target.innerHTML = acumulador;
}


const renderTablaCarrito = (array, target) => {
    ;
    let precioTotal = 0;
    let acumulador = `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">eliminar</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Elemento</th>
                    <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>
    `
    array.forEach((el, index) => {
        acumulador += `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td class="containerEliminar"><span class="eliminar" ref="${el.id}"> X </span></td>
                        <td>${el.cantidad}</td>
                        <td>${el.nombre}</td>
                        <td>$${el.precio * el.cantidad}</td>
                    </tr>
        `
        precioTotal += el.precio * el.cantidad
    })
    acumulador += `
            </tbody>
        </table>
    `
    acumulador += `Precio Total: $${precioTotal}`
    target.innerHTML = acumulador;
    eliminarElementoDelCarrito = document.querySelectorAll(".eliminar")
    eliminarElementoDelCarrito.forEach(el => el.addEventListener("click", eliminar));

}

const buscador = (array, texto) => {
    sessionStorage.setItem('buscar', texto)
    return array.filter(elemento => elemento.nombre.toUpperCase().includes(texto.toUpperCase()))
}

const eliminar = (event) => {
    const id = parseInt(event.target.getAttribute('ref'));
    const elementoIndex = carritoDeCompras.findIndex(el => el.id === id);
    carritoDeCompras[elementoIndex].cantidad = carritoDeCompras[elementoIndex].cantidad - 1;
    if (carritoDeCompras[elementoIndex].cantidad === 0) {
        carritoDeCompras.splice(elementoIndex, 1);
    };
    renderTablaCarrito(carritoDeCompras, seccionCarrito);
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
    eliminarElementoDelCarrito = document.querySelectorAll('.eliminar');
    eliminarElementoDelCarrito.forEach(el => el.addEventListener("click", eliminar));
}


//Programa


//DOM para peliculas
renderizarCards(salas, peliculasCards);
seccionPeliculas.appendChild(peliculasCards);
peliculasCards.className = ("d-flex flex-wrap justify-content-evenly");


//Dom para Comida y Bebida
renderizarCards(comidaBebida, comidaBebidaCards);
seccionComidaBebida.appendChild(comidaBebidaCards);
comidaBebidaCards.className = ("d-flex flex-wrap justify-content-evenly")

//DOM para merchandising
renderizarCards(merchandising, merchandisingCards);
seccionMerchandising.appendChild(merchandisingCards);
merchandisingCards.className = ("d-flex flex-wrap justify-content-evenly")


//eventos
const botonAgregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");
let eliminarElementoDelCarrito = document.querySelectorAll('.eliminar');
eliminarElementoDelCarrito.forEach(el => el.addEventListener("click", eliminar));

botonAgregarAlCarrito.forEach(el => el.onclick = (event) => {
    const id = parseInt(event.target.getAttribute('ref'));
    const elemento = arrayCompleto.find(el => el.id === id) || arrayParcial.find(el => el.size.id === id);
    if (carritoDeCompras.some(el => el.id === id)) {
        const index = carritoDeCompras.findIndex(el => el.id === id);
        carritoDeCompras[index].cantidad = carritoDeCompras[index].cantidad + 1;
    } else {
        carritoDeCompras.push({
            id: elemento.id,
            nombre: elemento.nombre,
            cantidad: 1,
            precio: elemento.precio
        });
    };
    renderTablaCarrito(carritoDeCompras, seccionCarrito)
    eliminarElementoDelCarrito = document.querySelectorAll('.eliminar');
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))

})

renderTablaCarrito(carritoDeCompras, seccionCarrito)

seccionBuscador.className = ("d-flex flex-wrap justify-content-evenly");
if (sessionStorage.getItem('buscar') && sessionStorage.getItem('buscar').length > 1) {
    searchInput.value = sessionStorage.getItem('buscar');
    renderizarCards(buscador(arrayCompleto, searchInput.value), seccionBuscador);
}
searchInput.oninput = () => {
    (searchInput.value != "") ? renderizarCards(buscador(arrayCompleto, searchInput.value), seccionBuscador) : seccionBuscador.innerHTML = null
};


addEventListener('change', (event) => {
    let precioHtml = document.getElementById('precio')
    let id = parseInt(event.target.value)
    let item
    let precio
    console.log(arrayParcial)
    arrayParcial.forEach(el => {
        el.size.forEach(elemento => {
            if (elemento.id === id) {
                item = elemento
            }
        })
    })
    console.log(item)
    precio = item.precio
    precioHtml.innerText = 'Precio: ' + precio
})
