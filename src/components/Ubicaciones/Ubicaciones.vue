<template>
    <wrapper>
        <v-data-table  :headers="headers" :items="ubicaciones">
            <template v-slot:item.acciones="{ item }">
                <v-btn icon class="primary--text" @click="abrirDialogUbicacion(item)"><v-icon small>mdi-pencil</v-icon></v-btn>
                <v-btn icon class="red--text" @click="abrirEliminar(item)"><v-icon small>mdi-delete</v-icon></v-btn>
            </template>
        </v-data-table>
        <dialogo v-model="dialogOperarUbicacion" :title="ubicacionAOperar.id ? 'Editar Ubicación' : 'Agregar Ubicación'">
            <v-row>
                <v-col cols="12" sm="12">
                    <v-text-field v-model="ubicacionAOperar.nombre" label="Nombre" autofocus/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-select v-model="ubicacionAOperar.idZona" label="Selecciona zona" :items="zonas"
                              item-value="id" item-text="nombre"/>
                </v-col>
            </v-row>
            <template slot="actions">
                <v-btn text color="primary" @click="ubicacionAOperar.id ? editarUbicacion() : agregarUbicacion()">Guardar</v-btn>
            </template>
        </dialogo>
        <v-btn color="success"  dark fab fixed bottom right @click="abrirDialogUbicacion">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </wrapper>
</template>

<script>
    import Cliente from "../../services/Cliente";
    import UbicacionServices from "../../services/UbicacionServices";
    import ZonaServices from "../../services/ZonaServices";

    export default {
        name: "Ubicaciones",
        async created () {
            this.$loader = true
            try {
                this.ubicaciones = await UbicacionServices.getUbicaciones()
                this.zonas = await ZonaServices.getZonas()
            } catch (e) {
                this.$loader = false
                console.log(e)
            }
            this.$loader = false
        },
        data(){
            return{
                headers: [
                    { text: 'Nombre', value: 'nombre' },
                    { text: 'Zona', value: 'zona.nombre' },
                    { text: '', value: 'acciones' }
                ],
                ubicaciones: [],
                dialogOperarUbicacion: false,
                ubicacionAOperar: {},
                zonas: []

            }
        },
        methods:{
            async seleccionarColegio () {
                this.$loader = true
                try {
                    this.productos = await Cliente.getProductosColegio(this.colegio, '2021-2022')
                    this.mostrarProductos = true
                } catch (e) {
                    this.$loader = false
                    console.log(e)
                }
                this.$loader = false
            },
            async editarUbicacion() {
                this.$loader = true
                try {
                    let ubicacionEditada = await UbicacionServices.actualizarUbicacion(this.ubicacionAOperar)
                    let index = this.$getIndex(this.ubicaciones, 'id', ubicacionEditada)
                    this.$set(this.ubicaciones, index, ubicacionEditada)
                } catch (e) {
                    console.log(e)
                }
                this.$loader = false
                this.dialogOperarUbicacion = false
            },
            async agregarUbicacion() {
                this.$loader = true
                try {
                    let ubicacionAgregada = await UbicacionServices.postGuardarUbicacion(this.ubicacionAOperar)
                    this.ubicaciones.push(ubicacionAgregada)
                } catch (e) {
                    console.log(e)
                }
                this.$loader = false
                this.dialogOperarUbicacion = false
            },
            abrirDialogUbicacion (ubicacion) {
                this.ubicacionAOperar = JSON.parse(JSON.stringify(ubicacion))
                if (this.$refs.form) this.$refs.form.resetValidation()
                this.dialogOperarUbicacion = true
            },
            abrirEliminar(ubicacion){
                this.$showAlerta('600', 'red' , 'mdi-delete-alert', '¿Desea eliminar la ubicación ' + ubicacion.nombre + '?', () => this.eliminarUbicacion(ubicacion) )
            },
            async eliminarUbicacion(ubicacion) {
                this.$loader = true
                try {
                    await UbicacionServices.eliminarUbicacion(ubicacion.id)
                    let index = this.$getIndex(this.ubicaciones, 'id', ubicacion)
                    this.ubicaciones.splice(index, 1)
                    this.$showAlerta('600', 'success' , 'mdi-check-circle', 'Se ha eliminado la ubicación')
                } catch (e) {
                    this.$showAlerta('600', 'red' , 'mdi-alert-circle', 'No fue posible eliminar la ubicación')
                    console.log(e)
                }
                this.$loader = false
                this.dialogOperarUbicacion = false
            },
        }
    }
</script>

<style scoped>

</style>
