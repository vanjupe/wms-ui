import AuthConst from '../config/AuthConst'
import http from "./http";

const getProducto = (idProducto) => {
    let url = AuthConst.BASE_URL_WMS + '/productos/sku/' + idProducto
    return http.get(url)
}

const getProductosByCliente = (idCliente) => {
    let url = AuthConst.BASE_URL_WMS + '/productos/cliente/' + idCliente
    return http.get(url)
}

const getExistenciaDisponible = (movimientos) => {
    return movimientos.reduce((total, m) => total + getEntrada(m), 0)
}

function getEntrada(movimiento) {
    return (esUbicacionRecepcion(movimiento.origen.ubicacion) ? (movimiento.origen.cantidad * -1) : 0) +
      (esUbicacionRecepcion(movimiento.destino.ubicacion) ? (movimiento.destino.cantidad * -1) : 0)
}

function esUbicacionRecepcion(ubicacion) {
    return  ubicacion.nombre === 'Recepción' && ubicacion.zona.nombre === 'Proveedores'
}

export default { getProducto, getProductosByCliente, getExistenciaDisponible }
