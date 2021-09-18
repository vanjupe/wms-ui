import Vue from 'vue'

let load = (vuePrincipal) => {
    let datosGlobales = new Vue({
        data: {
            $loader: false,
            $alerta: { model: false, ancho: '', color: '', icon: '', mensaje: '' }
        }
    })

    vuePrincipal.mixin({
        computed: {
            $loader: {
                get () { return datosGlobales.$data.$loader },
                set (newValue) { datosGlobales.$data.$loader = newValue }
            },
            $alerta: {
                get () { return datosGlobales.$data.$alerta },
                set (newValue) { datosGlobales.$data.$alerta = newValue }
            }
        },
        methods: {
            $getIndex (array, atributo, elementoABuscar) {
                return array.map(elemento => elemento[atributo]).indexOf(elementoABuscar[atributo])
            },
            $showAlerta (ancho = '600', color = 'gray', icon = 'mdi-checkbox-blank-circle', mensaje = '', accion = null) {
                this.$alerta.model = false
                this.$nextTick(() => {
                    this.$alerta.ancho = ancho
                    this.$alerta.color = color
                    this.$alerta.icon = icon
                    this.$alerta.mensaje = mensaje
                    this.$alerta.accion = accion
                    this.$alerta.model = true
                })
            },
        }
    })

    Vue.prototype.$menu = [
        { texto: 'Almacenes', to: { name: 'Almacenes' }, icon: 'mdi-factory' },
        { texto: 'Zonas', to: { name: 'Zonas' }, icon: 'mdi-map-clock' },
        { texto: 'Ubicaciones', to: { name: 'Ubicaciones' }, icon: 'mdi-map-marker' },
        { texto: 'Movimientos', to: { name: 'PaquetesCliente' }, icon: 'mdi-repeat' },
        { texto: 'Existencias', to: { name: 'Existencias' }, icon: 'mdi-repeat' }
    ]
}

export default { load }
