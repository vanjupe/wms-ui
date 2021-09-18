import AuthConst from '../config/AuthConst'
import http from "./http";
import UbicacionServices from "./UbicacionServices";

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
    return (UbicacionServices.esUbicacionRecepcion(movimiento.origen.ubicacion) ? (movimiento.origen.cantidad * -1) : 0) +
      (UbicacionServices.esUbicacionRecepcion(movimiento.destino.ubicacion) ? (movimiento.destino.cantidad * -1) : 0)
}

export default { getProducto, getProductosByCliente, getExistenciaDisponible }
