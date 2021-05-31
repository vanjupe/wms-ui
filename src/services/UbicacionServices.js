import AuthConst from '../config/AuthConst'
import http from "./http";

let getUbicaciones = () => {
    let url = AuthConst.BASE_URL_WMS + '/ubicaciones'
    return http.get(url)
}

let getUbicacion = (id) => {
    let url = AuthConst.BASE_URL_WMS + '/ubicaciones/'+ id
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

let getUbicacionesPorCliente = (idCliente) => {
    let url = AuthConst.BASE_URL_WMS + '/ubicaciones/cliente/'+ idCliente
    return http.get(url)
}

let getUbicacionesDeProducto = (idProducto) => {
    let url = AuthConst.BASE_URL_WMS + '/ubicaciones/producto/sku/' + idProducto + '/existencias'
    return http.get(url)
}

export default { getUbicaciones, getUbicacion, postGuardarUbicacion, actualizarUbicacion, eliminarUbicacion, getUbicacionesPorCliente, getUbicacionesDeProducto }
