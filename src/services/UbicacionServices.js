import AuthConst from '../config/AuthConst'
import http from "./http";

let getUbicaciones = () => {
    let url = AuthConst.BASE_URL_WMS + '/ubicaciones/zona/1'
    return http.get(url)
}


export default { getUbicaciones }
