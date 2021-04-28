const MODE = 'desarrollo' // produccion ó desarrollo (process.env.NODE_ENV)

const BASE_URL_VIS = MODE === 'produccion' ? 'https://www.vanjupe.com.mx/vis/mvc' : 'http://localhost:8089/vis/mvc'
const BASE_URL_WMS = MODE === 'http://localhost:8090'

export default {
    BASE_URL_VIS,
    BASE_URL_WMS,
    MODE
}
