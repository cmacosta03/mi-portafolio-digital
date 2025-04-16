// CARRITO DE COMPRAS
const cambio = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.getElementById('vaciar-carrito');
const carritoFlotante = document.getElementById('carrito-flotante'); // El contenedor flotante

// Cargar los event listeners
cargarEventlisteners();

function cargarEventlisteners() {
    // Escuchar el evento de agregar al carrito
    elementos1.addEventListener('click', comprarElemento);
    // Escuchar el evento de eliminar un producto del carrito
    cambio.addEventListener('click', eliminarElemento);
    // Escuchar el evento de vaciar el carrito
    vaciarcarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    // Crear un objeto con la información del producto
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    };
    // Insertar el producto en el carrito
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');

    row.innerHTML = `
     <td><img src="${elemento.imagen}" width="100" /></td>
     <td>${elemento.titulo}</td>
     <td>${elemento.precio}</td>
     <td><a href="#" class="borrar" data-id="${elemento.id}">x</a></td>
    `;

    lista.appendChild(row);

    // Mostrar el carrito automáticamente
    carritoFlotante.style.display = 'block';

    // Desplazar la página hacia el carrito (únicamente una vez)
    carritoFlotante.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function eliminarElemento(e) {
    e.preventDefault();

    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}







