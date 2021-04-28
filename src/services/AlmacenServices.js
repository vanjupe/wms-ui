import AuthConst from '../config/AuthConst'
import http from "./http";

let getAlmacenes = () => {
    let url = AuthConst.BASE_URL_WMS + '/almacenes'
    return http.get(url)
}
let postGuardarAlmacen = (almacen) => {
    let url = AuthConst.BASE_URL_WMS + '/almacenes'
    return http.post(url, almacen)
}


export default { getAlmacenes, postGuardarAlmacen }

