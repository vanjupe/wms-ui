import AuthConst from '../config/AuthConst'
import http from "./http";

let getProducto = (idProducto) => {
    let url = AuthConst.BASE_URL_WMS + '/productos/sku/' + idProducto
    return http.get(url)
}

export default { getProducto }
