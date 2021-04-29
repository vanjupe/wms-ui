<template>
    <wrapper titulo="Ubicaciones">
        <v-row>
            <v-col cols="12" sm="12">
                <v-autocomplete v-model="colegio" :items="colegios" item-value="idCliente" item-text="nombre"  menu-props="auto" label="Cliente" @change="seleccionarColegio"/>
            </v-col>
            <v-col v-if="mostrarProductos" cols="12" sm="12">
                <h4>Paquete de ejemplo</h4>
                <v-data-table  :headers="headers" :items="productos" item-key="name">
                    <template v-slot:item.acciones="{  }">
                        <v-btn text color="primary" small @click="verUbicaciones"><v-icon>mdi-google-maps</v-icon></v-btn>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
        <dialogo v-model="dialogUbicacionesProducto" title="Ubicaciones de producto">
            <v-row>
                <v-col cols="12" sm="12">
                    <v-list>
                        <v-list-item v-for="(ubicacion, index) in ubicaciones" :key="index">
                            <v-list-item-content @click="agregarUbicación()">
                                <v-list-item-title>{{ ubicacion.tipo + ubicacion.numero + ubicacion.zona.nombre + ubicacion.zona.numero }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </dialogo>
        <dialogo v-model="dialogAsignarUbicacion" title="Asignar ubicación" ancho="500">
            <v-row>
                <v-col cols="12" sm="12" md="4" style=" justify-content: center;align-items: center;">
                    <v-text-field disabled value="S1M2"/>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-select label="Destino" :items="ubicacionesPrueba"/>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-text-field label="Cantidad"/>
                </v-col>
                <v-col cols="12" sm="12" md="12" align="center">
                    <v-btn text color="primary" @click="dialogCrearUbicacion = true">Nueva ubicación</v-btn>
                </v-col>
            </v-row>
            <template slot="actions">
                <v-btn text color="primary" @click="dialogAsignarUbicacion = false">Guardar</v-btn>
            </template>
        </dialogo>
        <dialogo v-model="dialogCrearUbicacion" title="Crear ubicación" ancho="500">
            <v-row>
                    <v-col cols="12" sm="12" md="4">
                        <v-select label="Seleccione zona" :items="zonas"/>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                        <v-text-field label="Tipo"/>
                    </v-col>
                    <v-col cols="12" sm="12" md="4">
                        <v-text-field label="Número" type="number"/>
                    </v-col>
            </v-row>
            <template slot="actions">
                <v-btn text color="primary" @click="dialogCrearUbicacion = false">Guardar</v-btn>
            </template>
        </dialogo>
    </wrapper>
</template>

<script>
    import Cliente from "../../services/Cliente";
    import UbicacionServices from "../../services/UbicacionServices";

    export default {
        name: "Ubicaciones",
        async created () {
            this.$loader = true
            try {
                this.colegios = await Cliente.getClientesActivos()
            } catch (e) {
                this.$loader = false
                console.log(e)
            }
            this.$loader = false
        },
        data(){
            return{
                colegio: null,
                colegios: [],
                productos: [],
                headers: [
                    { text: 'Código', value: 'libro.isbn13' },
                    { text: 'Título', value: 'libro.titulo' },
                    { text: 'Ubicaciones', align: 'left', value: 'acciones' }
                ],
                dialogUbicacionesProducto: false,
                ubicaciones: [],
                dialogAsignarUbicacion: false,
                mostrarCampos: false,
                dialogCrearUbicacion: false,
                zonas: [
                    'M3',
                    'M4',
                    'M5'
                ],
                ubicacionesPrueba: [
                    'S1M2',
                    'S2M3',
                    'S4M3'
                ],
                mostrarProductos: false
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
           async verUbicaciones () {
               this.$loader = true
               try {
                    this.ubicaciones = await UbicacionServices.getUbicaciones()
                   this.dialogUbicacionesProducto = true
                } catch (e) {
                    console.log(e)
                }
               this.$loader = false
           },
            agregarUbicación(){
                this.dialogUbicacionesProducto = false
                this.dialogAsignarUbicacion = true
            }
        }
    }
</script>

<style scoped>

</style>
