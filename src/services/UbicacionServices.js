import AuthConst from '../config/AuthConst'
import http from "./http";

let getUbicaciones = () => {
    let url = AuthConst.BASE_URL_WMS + '/ubicaciones'
    return http.get(url)
}

let postGuardarUbicacion = (ubicacion) => {
    let url = AuthConst.BASE_URL_WMS + '/ubicaciones'
    return http.post(url, ubicacion)
}

let actualizarUbicacion = (ubicacion, callback) => {
    let url = AuthConst.BASE_URL_WMS + '/ubicaciones'
    return http.put(url, ubicacion, callback)
}

let eliminarUbicacion = (idUbicacion, callback) => {
    let url = AuthConst.BASE_URL_WMS + '/ubicaciones/'+ idUbicacion
    return http.remove(url, callback)
}

export default { getUbicaciones, postGuardarUbicacion, actualizarUbicacion, eliminarUbicacion }
