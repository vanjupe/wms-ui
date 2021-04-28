import Vue from 'vue'

let load = (vuePrincipal) => {
    let datosGlobales = new Vue({
        data: {
            $loader: false
        }
    })

    vuePrincipal.mixin({
        computed: {
            $loader: {
                get () { return datosGlobales.$data.$loader },
                set (newValue) { datosGlobales.$data.$loader = newValue }
            }
        },
        methods: {
        }
    })

    Vue.prototype.$menu = [
        { texto: 'Almacenes', to: { name: 'Almacenes' } },
        { texto: 'Zonas', to: { name: 'Zonas' } }
    ]
}

export default { load }
