import AuthConst from '../config/AuthConst'
import http from "./http";

let postCrearMovimiento = (movimiento) => {
    let url = AuthConst.BASE_URL_WMS + '/movimientos'
    return http.post(url, movimiento)
}

let getMovimientoByIdProducto = (idProducto) => {
    let url = AuthConst.BASE_URL_WMS + '/movimientos/producto/' + idProducto
    return http.get(url)
}

export default { postCrearMovimiento, getMovimientoByIdProducto }
