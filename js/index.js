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
    Swal.fire(
        'Agregado al carrito',
        `${elemento.nombre}`,
        'success'
    )
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