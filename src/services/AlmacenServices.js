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

let actualizarAlmacen = (almacen, callback) => {
    let url = AuthConst.BASE_URL_WMS + '/almacenes'
    return http.put(url, almacen, callback)
}


export default { getAlmacenes, postGuardarAlmacen, actualizarAlmacen }

