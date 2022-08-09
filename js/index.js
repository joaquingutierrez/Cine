//DOM para peliculas
renderizarCards(salas, peliculasCards);
seccionPeliculas.appendChild(peliculasCards);
peliculasCards.className = ("d-flex flex-wrap justify-content-evenly");

//DOM para próximos estrenos
const traerDeJson = (json) => {
    const respuesta = fetch(json)
        .then((res) => res.json())
        .then((res) => {
            proximosEstrenos = res.proximosEstrenos
            renderizarCards(proximosEstrenos, proximosEstrenosCards);
            seccionProximosEstrenos.appendChild(proximosEstrenosCards);
            proximosEstrenosCards.className = ("d-flex flex-wrap justify-content-evenly");
        })
}
traerDeJson('../json/proximosEstrenos.json')



//Dom para Comida y Bebida
renderizarCards(comidaBebida, comidaBebidaCards);
seccionComidaBebida.appendChild(comidaBebidaCards);
comidaBebidaCards.className = ("d-flex flex-wrap justify-content-evenly")

//DOM para merchandising
renderizarCards(merchandising, merchandisingCards);
seccionMerchandising.appendChild(merchandisingCards);
merchandisingCards.className = ("d-flex flex-wrap justify-content-evenly")


//eventos 
let selectHtml = document.querySelectorAll('.selectSize')
selectHtml.forEach( el => el.addEventListener('change', renderizarPrecioYBoton))

let selectCantidadEntradas = document.querySelectorAll('.selectCantidad')
selectCantidadEntradas.forEach( el => el.addEventListener('change', sacarEntradas))

let botonAgregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");
botonAgregarAlCarrito.forEach(el => el.addEventListener('click', funcionAgregarAlCarrito))

let eliminarElementoDelCarrito = document.querySelectorAll('.eliminar');
eliminarElementoDelCarrito.forEach(el => el.addEventListener("click", eliminar));

renderTablaCarrito(carritoDeCompras, seccionCarrito)

seccionBuscador.className = ("d-flex flex-wrap justify-content-evenly");
if (sessionStorage.getItem('buscar') && sessionStorage.getItem('buscar').length > 1) {
    searchInput.value = sessionStorage.getItem('buscar');
    renderizarCards(buscador(arrayCompleto, searchInput.value), seccionBuscador);
}
searchInput.oninput = () => {
    (searchInput.value != "") ? renderizarCards(buscador(arrayCompleto, searchInput.value), seccionBuscador) : seccionBuscador.innerHTML = null
};

