//Funciones
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
    acumulador += `<p>Precio Total: $${precioTotal}</p>`
    target.innerHTML = acumulador;
    eliminarElementoDelCarrito = document.querySelectorAll(".eliminar")
    eliminarElementoDelCarrito.forEach(el => el.addEventListener("click", eliminar));
}


const eliminar = (event) => {
    const id = parseInt(event.target.getAttribute('ref'));
    const elementoIndex = carritoDeCompras.findIndex(el => el.id === id);
    carritoDeCompras[elementoIndex].cantidad = carritoDeCompras[elementoIndex].cantidad - 1;
    if (carritoDeCompras[elementoIndex].cantidad === 0) {
        carritoDeCompras.splice(elementoIndex, 1);
    };
    renderTablaCarrito(carritoDeCompras, facturacion);
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
    eliminarElementoDelCarrito = document.querySelectorAll('.eliminar');
    eliminarElementoDelCarrito.forEach(el => el.addEventListener("click", eliminar));
}

//DOM para facturación
renderTablaCarrito(carritoDeCompras, facturacion)
