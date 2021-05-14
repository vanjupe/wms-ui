import AuthConst from '../config/AuthConst'
import http from "./http";

let getZonas = () => {
    let url = AuthConst.BASE_URL_WMS + '/zonas'
    return http.get(url)
}
let postGuardarZona = (zona) => {
    let url = AuthConst.BASE_URL_WMS + '/zonas'
    return http.post(url, zona)
}
let actualizarZona = (zona, callback) => {
    let url = AuthConst.BASE_URL_WMS + '/zonas'
    return http.put(url, zona, callback)
}

export default { getZonas , postGuardarZona, actualizarZona }
