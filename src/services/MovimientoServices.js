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
        'VENTA-INTERNET': 'Venta internet',
        'DEVOLUCION-INVENTARIO': 'Devolución a inventario',
        'DEVOLUCION-PROVEEDORES': 'Devolución a proveedores',
        'DEVOLUCION-SURTIDO': 'Devolución a surtido',
        'MERMA': 'Merma'
    }

    return tipos[value] || 'Desconocido'
}

export default { postCrearMovimiento, getMovimientoByIdProducto, getTipoMovimiento }
