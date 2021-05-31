<template>
<wrapper>
    <v-row>
        <v-col cols="12" align="center" class="mb-3">
            <h2 class="indigo--text">{{ producto.descripcion }}</h2>
            <h4 class="caption">{{ producto.codigoDeBarras }}</h4>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" align="center" class="mb-4">
            <h3>Inventario: {{ this.ubicacionInventario.existencia }}</h3>
        </v-col>
        <v-col cols="12">
            <v-data-table :headers="headers" :items="ubicacionesFisicas"/>
        </v-col>
    </v-row>
    <dialogo v-model="dialogAgregarUbicacion" title="Agregar ubicación">
        <v-row>
            <v-col cols="12" sm="12" md="6">
                <v-select v-model="movimientoParaEnviar.id" label="Seleccione ubicación" :items="ubicaciones" item-text="nombre" item-value="id"/>
            </v-col>
            <v-col cols="12" sm="12" md="6">
                <v-text-field v-model="movimientoParaEnviar.cantidad" label="Cantidad"/>
            </v-col>
        </v-row>
        <template slot="actions">
            <v-btn text color="primary" @click="crearMovimiento">Agregar</v-btn>
        </template>
    </dialogo>
    <v-btn color="success" dark fab fixed bottom right @click="dialogAgregarUbicacion = true">
        <v-icon>mdi-map-marker-plus</v-icon>
    </v-btn>
</wrapper>
</template>

<script>
    import UbicacionServices from "../../services/UbicacionServices";
    import ProductoServices from "../../services/ProductoServices";
    import MovimientoServices from "../../services/MovimientoServices";

    export default {
        name: "UbicacionesPorProducto",
        data(){
            return{
                headers: [
                    {text: 'Almacén', value: 'zona.almacen.nombre'},
                    {text: 'Zona', value: 'zona.nombre'},
                    {text: 'Ubicación', value: 'nombre'},
                    {text: 'Cantidad', value: 'existencia'},
                    {text: '', value: 'acciones'}
                ],
                dialogAgregarUbicacion: false,
                ubicaciones: [],
                idProducto: null,
                idCliente: null,
                ubicacionesProducto: [],
                producto: {},
                ubicacionesFisicas: [],
                ubicacionInventario: {},
                movimiento: {},
                movimientoParaEnviar: {}
            }
        },
        async created () {
            this.$loader = true
            try {
                this.idProducto = this.$route.params.idProducto
                this.idCliente = this.$route.params.idCliente
                this.buscarUbicacionProducto()
                this.producto = await ProductoServices.getProducto(this.idProducto)
                this.ubicaciones = await UbicacionServices.getUbicacionesPorCliente(this.idCliente)
            } catch (e) {
                this.$loader = false
                console.log(e)
            }
            this.$loader = false
        },
        methods: {
            async buscarUbicacionProducto () {
                this.$loader = true
                try {
                    this.ubicacionesProducto = await UbicacionServices.getUbicacionesDeProducto(this.idProducto)
                    this.ubicacionesProducto.forEach((ubicacion, index) => {
                        if (ubicacion.nombre === 'Inventario'){
                            this.ubicacionInventario = ubicacion
                        }else {
                            this.$set(this.ubicacionesFisicas, index, ubicacion)
                        }
                    })

                } catch (e) {
                    this.$loader = false
                    console.log(e)
                }
                this.$loader = false
            },
            async crearMovimiento(){
                this.$loader = true
                try {
                    this.movimiento = {
                        movimientoInventario: {
                            nombre: "MOVIMIENTO",
                            tipo: "Completo"
                        },
                        origen: {
                            cantidad: -this.movimientoParaEnviar.cantidad,
                            idUbicacion: this.ubicacionInventario.id,
                            idProducto: this.producto.id
                        },
                        destino: {
                            cantidad: this.movimientoParaEnviar.cantidad,
                            idUbicacion: this.movimientoParaEnviar.id,
                            idProducto: this.producto.id
                        }
                    }
                    console.log(this.movimiento)
                    await MovimientoServices.postCrearMovimiento(this.movimiento)
                }catch (e) {
                    console.log(e)
                    this.$loader = false
                }
                this.dialogAgregarUbicacion = false
                this.$loader = false
            }

        },
    }
</script>

<style scoped>

</style>
