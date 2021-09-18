import AuthConst from '../config/AuthConst'
import http from "./http";

const postCrearMovimiento = (movimiento) => {
    let url = AuthConst.BASE_URL_WMS + '/movimientos'
    return http.post(url, movimiento)
}

const getMovimientoByIdProducto = (idProducto) => {
    let url = AuthConst.BASE_URL_WMS + '/movimientos/producto/' + idProducto
    return http.get(url)
}

const getTipoMovimiento = (value) => {
    const tipos = {
        'REMISION': 'Remisión',
        'VENTA-INTERNET': 'Venta Internet',
        'DEVOLUCION-INVENTARIO': 'Devolución Inventario',
        'DEVOLUCION-PROVEEDORES': 'Devolución Proveedores',
        'DEVOLUCION-SURTIDO': 'Devolución Surtido',
        'MERMA': 'Merma'
    }

    return tipos[value] || 'Desconocido'
}

export default { postCrearMovimiento, getMovimientoByIdProducto, getTipoMovimiento }
