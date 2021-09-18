import VueRouter from 'vue-router'

const Almacenes = () => import('./components/Almacenes/Almacenes')
const Zonas = () => import('./components/Zonas/Zonas')
const Ubicaciones = () => import('./components/Ubicaciones/Ubicaciones')
const PaquetesCliente = () => import('./components/Movimientos/PaquetesCliente')
const UbicacionesPorProducto = () => import('./components/Movimientos/UbicacionesPorProducto')
const Existencias = () => import('./components/Existencias/Existencias')

const routes = [
    { path: '/almacenes', component: Almacenes, name: 'Almacenes' },
    { path: '/zonas', component: Zonas, name: 'Zonas' },
    { path: '/ubicaciones', component: Ubicaciones, name: 'Ubicaciones' },
    { path: '/movimientos', component: PaquetesCliente, name: 'PaquetesCliente' },
    { path: '/ubicacion-producto/cliente/:idCliente/producto/:idProducto', component: UbicacionesPorProducto, name: 'UbicacionesPorProducto' },
    { path: '/existencias', component: Existencias, name: 'Existencias' },

]

// Función para cargar el route
let getRouter = (vue) => {
    vue.use(VueRouter)
    const router = new VueRouter({ routes, mode: 'history' })

    router.beforeEach((to, from, next) => {
        if (to.path === '/') {
            next({ name: 'Almacenes' })
        } else {
            next()
        }
    })

    return router
}

export default { getRouter }
