import AuthConst from '../config/AuthConst'
import http from "./http";

let getProducto = (idProducto) => {
    let url = AuthConst.BASE_URL_WMS + '/productos/sku/' + idProducto
    return http.get(url)
}

let getProductosByCliente = (idCliente) => {
    let url = AuthConst.BASE_URL_WMS + '/productos/cliente/' + idCliente
    return http.get(url)
}

export default { getProducto, getProductosByCliente }
