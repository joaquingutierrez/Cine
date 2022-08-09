//Funciones
const funcionAgregarAlCarrito = (event) => {
    const id = parseInt(event.target.getAttribute('ref'));
    const item = arrayCompleto.find(el => el.id === id) || arrayParcial3.find(el => el.id === id);
    if (carritoDeCompras.some(el => el.id === id)) {
        const index = carritoDeCompras.findIndex(el => el.id === id);
        if ( id >= 10 ) {
            carritoDeCompras[index].cantidad = carritoDeCompras[index].cantidad + 1;
        } else {
            carritoDeCompras[index].cantidad = carritoDeCompras[index].cantidad + item.cantidadEntradas
        }
    } else {
        if ( id > 10 ) {
            carritoDeCompras.push({
                id: item.id,
                nombre: item.nombre,
                cantidad: 1,
                precio: item.precio
            });
        } else {
            carritoDeCompras.push({
                id: item.id,
                nombre: item.nombre,
                cantidad: item.cantidadEntradas,
                precio: item.precio
            });
        }

    };
    Swal.fire(
        'Agregado al carrito',
        `${item.nombre}`,
        'success'
    )
    renderTablaCarrito(carritoDeCompras, seccionCarrito)
    eliminarElementoDelCarrito = document.querySelectorAll('.eliminar');
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras))
}

const renderizarCards = (array, target) => {
    let acumulador = ""
    array.forEach(el => {
        acumulador += `
    <div class="card" style="width: 18rem;">
        <img src="${el.imagen}" class="card-img-top" alt="${el.nombre}">
        <div class="card-body">
        `
        if (array[0].id < 10) { //cards para peliculas
            acumulador += `
            <h5 class="card-title">Sala ${el.id}: ${el.nombre}</h5>
            <p class="card-text">Espacio en sala ${el.id}: ${el.capacidad} lugares</p>
            <select class="form-select selectCantidad" ref="precioYBoton_${el.id}" refID="${el.id}" aria-label="Default select example">
                <option selected value="">Cantidad...</option>
                <option value="1"">1</option>
                <option value="2"">2</option>
                <option value="3"">3</option>
                <option value="4"">4</option>
                <option value="5"">5</option>
                <option value="6"">6</option>
                <option value="7"">7</option>
                <option value="8"">8</option>
                <option value="9"">9</option>
            </select>
            <div id="precioYBoton_${el.id}" ref='precioYBoton_${el.id}'></div>
        </div>
    </div>
            `

        } else if (el.size) {
            acumulador += `
            <h5 class="card-title">${el.nombre}</h5>
            <select class="form-select selectSize" ref='precioYBoton_${el.id}' aria-label="Default select example">
                <option value="">Elija una opcion...</option>
                `
            el.size.forEach(el => {
                acumulador += `
                <option value="${el.id}">${el.opcion}</option>
                `
            })
            acumulador += `
            </select>
            <div id="precioYBoton_${el.id}" ref='precioYBoton_${el.id}'></div>
        </div>
    </div>
            `
        } else if (array[0].id >= 1000) {
            acumulador += `
            <h5 class="card-title">${el.nombre}</h5>
            <p class="card-text">Fecha de Estreno: ${el.fecha}</p>
        </div>
    </div>
            `
        } else {
            acumulador += `
            <p class="card-text">Precio: ${el.precio}</p>
            <a ref="${el.id}" class="btn btn-primary agregarAlCarrito">Agregar al carrito</a>
        </div>
    </div>
            `
        } if (array[0].id < 10) {

        }

    })
    arrayParcial.forEach((el, index) => {
        precioHtml[index] = document.getElementById(`precioYBoton_${el.id}`)
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

const renderizarPrecioYBoton = (event) => {
    const id = parseInt(event.target.value)
    const refSelect = event.target.getAttribute('ref')
    let refPrecio = []
    precioHtml.forEach((el, i) => {
        refPrecio[i] = el.getAttribute('ref')
    })
    const index = refPrecio.findIndex(el => el == refSelect)
    if (id) {
        let item
        let precio
        arrayParcial.forEach(el => {
            el.size.forEach(elemento => {
                if (elemento.id === id) {
                    item = elemento
                }
            })
        })
        precio = item.precio
        precioHtml[index].innerHTML = `
        <p>Precio: ${precio}</p>
        <a ref="${id}" class="btn btn-primary agregarAlCarrito">Agregar al carrito</a>
        `
    } else {
        precioHtml[index].innerHTML = ''
    }
    botonAgregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");
    botonAgregarAlCarrito.forEach(el => el.addEventListener('click', funcionAgregarAlCarrito));
}

const sacarEntradas = (event) => {
    const cantidadEntradas = parseInt(event.target.value)
    const id = parseInt(event.target.getAttribute('refID'))
    const refSelect = event.target.getAttribute('ref')
    let refPrecio = []
    salas.forEach((el, index) => {
        entradasHtml[index] = document.getElementById(`precioYBoton_${el.id}`)
    })
    entradasHtml.forEach((el, i) => {
        refPrecio[i] = el.getAttribute('ref')
    })
    const index = refPrecio.findIndex(el => el == refSelect)
    if (cantidadEntradas) {
        let item = salas[id - 1]
        salas[id - 1].cantidadEntradas = cantidadEntradas
        salas[id - 1].precioTotalEntradas = item.precio*cantidadEntradas
        entradasHtml[index].innerHTML = `
        <p>Precio: ${salas[id - 1].precioTotalEntradas}</p>
        <a ref="${id}" class="btn btn-primary agregarAlCarrito">Sacar Entradas</a>
        `
        
    } else {
        entradasHtml[index].innerHTML = ''
    }
    botonAgregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");
    botonAgregarAlCarrito.forEach(el => el.addEventListener('click', funcionAgregarAlCarrito));
}