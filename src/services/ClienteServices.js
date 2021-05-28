import AuthConst from '../config/AuthConst'
import http from "./http";

let getClientes = () => {
    let url = AuthConst.BASE_URL_WMS + '/clientes'
    return http.get(url)
}

let getPaquetesPorClienteCiclo = (idCliente, ciclo) => {
    let url = AuthConst.BASE_URL_VIS + '/rest/paquetes/cliente/' + idCliente + '/ciclo/' + ciclo
    return http.get(url)
}

export default { getClientes, getPaquetesPorClienteCiclo }
