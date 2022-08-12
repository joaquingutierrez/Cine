//Funciones
const funcionAgregarAlCarrito = (event) => {
    const id = parseInt(event.target.getAttribute('ref'));
    const item = arrayCompleto.find(el => el.id === id) || arrayParcial3.find(el => el.id === id);
    if (carritoDeCompras.some(el => el.id === id)) {
        const index = carritoDeCompras.findIndex(el => el.id === id);
        if ( id >= 10 ) {
            carritoDeCompras[index].cantidad = carritoDeCompras[index].cantidad + 1;
        } else {
            const indexDeSala = parseInt(event.target.getAttribute('ref2'))
            const indexFuncion = parseInt(event.target.getAttribute('ref3'))
            const indexHorario = parseInt(event.target.getAttribute('ref4'))
            salas[indexDeSala].funciones[indexFuncion].ocupadas[indexHorario] += salas[indexDeSala].cantidadEntradas
            const fecha = carritoDeCompras.findIndex(el => el.dia === salas[indexDeSala].funciones[indexFuncion].dia);
            if (fecha + 1) {
                const hora = carritoDeCompras.findIndex(el => el.hora === salas[indexDeSala].funciones[indexFuncion].horarios[indexHorario]);
                if (hora + 1) {
                    carritoDeCompras[hora].cantidad = carritoDeCompras[hora].cantidad + item.cantidadEntradas
                } else {
                    carritoDeCompras.push({
                        id: item.id,
                        nombre: item.nombre,
                        cantidad: item.cantidadEntradas,
                        precio: item.precio,
                        dia: salas[indexDeSala].funciones[indexFuncion].dia,
                        hora: salas[indexDeSala].funciones[indexFuncion].horarios[indexHorario]
                    });
                }
            }
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
            const indexDeSala = parseInt(event.target.getAttribute('ref2'))
            const indexFuncion = parseInt(event.target.getAttribute('ref3'))
            const indexHorario = parseInt(event.target.getAttribute('ref4'))
            salas[indexDeSala].funciones[indexFuncion].ocupadas[indexHorario] += salas[indexDeSala].cantidadEntradas
            carritoDeCompras.push({
                id: item.id,
                nombre: item.nombre,
                cantidad: item.cantidadEntradas,
                precio: item.precio,
                dia: salas[indexDeSala].funciones[indexFuncion].dia,
                hora: salas[indexDeSala].funciones[indexFuncion].horarios[indexHorario]
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
    array.forEach( (el,index) => {
        acumulador += `
    <div class="card" style="width: 18rem;">
        <img src="${el.imagen}" class="card-img-top" alt="${el.nombre}">
        <div class="card-body">
        `
        if (array[0].id < 10) { //cards para peliculas
            acumulador += `
            <h5 class="card-title">Sala ${el.id}: ${el.nombre}</h5>
            <p class="card-text">Espacio en sala ${el.id}: ${el.capacidad} lugares</p>
            
            <select class="form-select selectDia" ref="${index}" aria-label="Default select example">
                <option selected value="">Dia...</option>
            `
            el.funciones.forEach((el,i) => {  //Dias de la pelicula
                acumulador += `
                <option value="${i}">${el.dia}</option>
                `
            })
            acumulador += `
            </select>
            <div id="horarios_${index}"></div>
            <div id="cantidad_${index}"></div>
            <div id="botonCompra_${index}"></div>
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
        }

    })
    arrayParcial.forEach((el, index) => {
        precioHtml[index] = document.getElementById(`precioYBoton_${el.id}`)
    })
    target.innerHTML = acumulador;
}


const renderTablaCarrito = (array, target) => {
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
                        <td>${ (el.id < 10) ? el.nombre + ' - ' + el.dia + ' - ' + el.hora : el.nombre}</td>
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


const horariosEnFuncionDelDiaElegido = (event) => {
    const indexFuncion = parseInt(event.target.value)
    const indexDeSala = parseInt(event.target.getAttribute('ref'))
    const renderSelectHorarios = document.getElementById(`horarios_${indexDeSala}`)
    let acumulador
    if ( (indexFuncion + 1) ) {
        acumulador = `
            <select class="form-select selectHorario" ref="${indexDeSala}" ref2="${indexFuncion}" aria-label="Default select example">
                <option selected value="">Horario...</option>
        `
        salas[indexDeSala].funciones[indexFuncion].horarios.forEach( (el,i) => {
            acumulador += `
                <option value="${i}">${el}</option>
            `
            
        })
        acumulador += `
            </select>
        `
        renderSelectHorarios.innerHTML = acumulador;
        selectHorario = document.querySelectorAll('.selectHorario')
        selectHorario.forEach( el => el.addEventListener('change', elegirCantidad))
    } else {
        renderSelectHorarios.innerHTML = ''
    }
}

const elegirCantidad = (event) => {
    const indexDeSala = parseInt(event.target.getAttribute('ref'))
    const indexFuncion = parseInt(event.target.getAttribute('ref2'))
    const indexHorario = parseInt(event.target.value)
    const renderCantidad = document.getElementById(`cantidad_${indexDeSala}`)
    let acumulador
    if (indexHorario + 1) {
        acumulador = `
            <select class="form-select selectCantidad" ref="${indexDeSala}" ref2="${indexFuncion}" ref3="${indexHorario}" id="selectCantidad_${indexDeSala}" aria-label="Default select example">
                <option selected value="0">Cantidad...</option>
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
        `
    } else {
        acumulador = ``
    }
    renderCantidad.innerHTML = acumulador
    selectCantidad = document.querySelectorAll(`.selectCantidad`)
    selectCantidad.forEach(el => el.addEventListener('change', sacarEntradas))
}

const sacarEntradas = (event) => {
    const indexDeSala = parseInt(event.target.getAttribute('ref'))
    const indexFuncion = parseInt(event.target.getAttribute('ref2'))
    const indexHorario = parseInt(event.target.getAttribute('ref3'))
    const id = indexDeSala + 1
    const cantidadEntradas = parseInt(event.target.value)
    const hayLugar = salas[indexDeSala].capacidad - salas[indexDeSala].funciones[indexFuncion].ocupadas[indexHorario] - cantidadEntradas
    console.log(hayLugar)
    const renderBoton = document.getElementById(`botonCompra_${indexDeSala}`)
    let acumulador
    const fecha = carritoDeCompras.findIndex(el => el.dia === salas[indexDeSala].funciones[indexFuncion].dia);
    if ((cantidadEntradas) && (hayLugar >= 0)) {
        salas[indexDeSala].cantidadEntradas = cantidadEntradas //Variable para el carrito
        acumulador = `
        <p>Precio: ${salas[indexDeSala].precio*cantidadEntradas}</p>
        <a ref="${id}" ref2="${indexDeSala}" ref3="${indexFuncion}" ref4="${indexHorario}" class="btn btn-primary agregarAlCarrito" id="cantidadDefault_${indexDeSala}">Sacar Entradas</a>
        `
    } else if (hayLugar < 0) {
        acumulador = `<p>No hay lugar</p>`
    } else {
        acumulador = ``
    }
    renderBoton.innerHTML = acumulador
    botonAgregarAlCarrito = document.querySelectorAll(".agregarAlCarrito");
    botonAgregarAlCarrito.forEach(el => el.addEventListener('click', funcionAgregarAlCarrito));
    const botonCantidadDefault = document.getElementById(`cantidadDefault_${indexDeSala}`)
    botonCantidadDefault.addEventListener('click', cantidadDefault)
}

const cantidadDefault = (event) => {
    const indexDeSala = parseInt(event.target.getAttribute('ref2'))
    const renderBoton = document.getElementById(`botonCompra_${indexDeSala}`)
    selectCantidad = document.getElementById(`selectCantidad_${indexDeSala}`)
    selectCantidad.value = 0
    renderBoton.innerHTML = ``
    
}

