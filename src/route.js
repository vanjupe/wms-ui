import VueRouter from 'vue-router'

const Almacenes = () => import('./components/Almacenes/Almacenes')

const routes = [
    { path: '/almacenes', component: Almacenes, name: 'Almacenes' }
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
