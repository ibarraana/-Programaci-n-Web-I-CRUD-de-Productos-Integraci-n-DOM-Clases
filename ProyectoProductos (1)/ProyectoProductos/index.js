import Producto from './classes/Producto.js'

document.getElementById('agregar').onclick = function(e){

    e.preventDefault()

    let codigoProducto = document.getElementById("codigo").value
    let nombreProducto = document.getElementById("nombre").value
    let precioProducto = document.getElementById("precio").value

    if (!soloNumero(precioProducto)) {
        alert("Precio del producto incorrecto, debe ser numérico")
    } else if (Producto.existeCodigo(codigoProducto)) {
        alert("Ya existe un producto con ese código")
    } else {
        let producto = Producto.crear(codigoProducto, nombreProducto, precioProducto)
        
        cargarTabla()

        document.getElementById("codigo").value = ""
        document.getElementById("nombre").value = ""
        document.getElementById("precio").value = ""
    }
}

function cargarTabla() {
    let productosBody = document.getElementById("productosBody")
    if (productosBody) {
        productosBody.innerHTML = ""
        Producto.items.forEach((producto) => {
            productosBody.innerHTML += `
            <tr class="border-b">
                <td class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">${producto.codigo}</td>
                <td class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">${producto.nombre}</td>
                <td class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">${producto.precio}</td>
                <td class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <button class="btn-eliminar bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" data-codigo="${producto.codigo}">Eliminar</button>
                </td>
            </tr>
            `
        })
    }
}


document.addEventListener('click', function(e) {

    if (e.target.classList.contains('btn-eliminar')) {
        const codigo = e.target.getAttribute('data-codigo')        
        Producto.eliminarPorCodigo(codigo)
        cargarTabla()        
    }

})


function soloNumero(cadena) {
      const patron = /^[0-9]+$/
      return patron.test(cadena)
}