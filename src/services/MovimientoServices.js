import AuthConst from '../config/AuthConst'
import http from "./http";

let postCrearMovimiento = (movimiento) => {
    let url = AuthConst.BASE_URL_WMS + '/movimientos'
    return http.post(url, movimiento)
}

export default { postCrearMovimiento }
