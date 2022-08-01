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
        } else if (array[0].id >= 1000) {
            acumulador += `
            <h5 class="card-title">${el.nombre}</h5>
            <p class="card-text">Fecha de Estreno: ${el.fecha}</p>
            </div>
            </div>`
        } else {
            acumulador += `
                <p class="card-text">Precio: ${el.precio}</p>
                `
        } if (array[0].id < 1000) {
            acumulador += `
            <a ref="${el.id}" class="btn btn-primary agregarAlCarrito">Agregar al carrito</a>
            </div>
        </div>
            `
        }

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
