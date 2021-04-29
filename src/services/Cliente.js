import AuthConst from '../config/AuthConst'
import http from "../services/http";

let getClientesActivos = () => {
    let url = AuthConst.BASE_URL_VIS + '/clientes/internet/activos'
    return http.get(url)
}
let getProductosColegio = (colegio, ciclo) => {
    let url = AuthConst.BASE_URL_VIS + '/vi/clientes/' + colegio + '/ciclo/' + ciclo + '/inventario/entregado.json'
    return http.get(url)
}


export default { getClientesActivos, getProductosColegio }
