<template>
    <wrapper>
        <v-data-table  :headers="headers" :items="zonas">
            <template v-slot:item.acciones="{ item }">
                <v-btn icon class="primary--text" @click="abrirDialogZona(item)"><v-icon small>mdi-pencil</v-icon></v-btn>
            </template>
        </v-data-table>
        <dialogo v-model="dialogOperarZona" :title="zonaAOperar.id ? 'Editar Zona' : 'Agregar Zona'">
            <v-row>
                <v-col cols="12" sm="12">
                    <v-text-field v-model="zonaAOperar.nombre" label="Nombre" autofocus/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-select v-model="zonaAOperar.idCliente" label="Selecciona el cliente" :items="clientes"
                              item-value="id" item-text="nombre"/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-select v-model="zonaAOperar.idAlmacen" label="Selecciona el almacén" :items="almacenes"
                              item-value="id" item-text="nombre"/>
                </v-col>
            </v-row>
            <template slot="actions">
                <v-btn text color="primary" @click="zonaAOperar.id ? editarZona() : agregarZona()">Guardar</v-btn>
            </template>
        </dialogo>
        <v-btn color="success"  dark fab fixed bottom right @click="abrirDialogZona">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </wrapper>
</template>

<script>
    import ZonaServices from "../../services/ZonaServices";
    import AlmacenServices from "../../services/AlmacenServices";
    import ClienteServices from "../../services/ClienteServices";

    export default {
        name: "Zonas",
        data () {
            return{
                dialogOperarZona: false,
                headers: [
                    { text: 'Nombre', value: 'nombre' },
                    { text: 'Almacen', value: 'almacen.nombre' },
                    { text: 'Cliente', value: 'cliente.nombre' },
                    { text: '', value: 'acciones' }
                ],
                zonas: [],
                zonaAOperar: {},
                clientes: [],
                almacenes: []
            }
        },
        async created () {
            this.$loader = true
            try {
                this.zonas = await ZonaServices.getZonas()
            } catch (e) {
                this.$loader = false
                console.log(e)
            }
            this.$loader = false
            let vm = this
            AlmacenServices.getAlmacenes()
                .then(almacenes => {
                    vm.almacenes = almacenes
                })
            ClienteServices.getClientes()
            .then(clientes => {
                vm.clientes = clientes
            })
        },
        methods:{
            async agregarZona() {
                console.log(this.zonaAOperar)
                this.$loader = true
                try {
                    let zonaAgregada = await ZonaServices.postGuardarZona(this.zonaAOperar)
                    this.zonas.push(zonaAgregada)
                } catch (e) {
                    console.log(e)
                }
                this.$loader = false
                this.dialogOperarZona = false
            },
            async editarZona() {
                this.$loader = true
                try {
                    let zonaEditada = await ZonaServices.actualizarZona(this.zonaAOperar)
                    let index = this.$getIndex(this.zonas, 'id', zonaEditada)
                    this.$set(this.zonas, index, this.zonaAOperar)
                } catch (e) {
                    console.log(e)
                }
                this.$loader = false
                this.dialogOperarZona = false
            },
            abrirDialogZona (zona) {
                this.zonaAOperar = JSON.parse(JSON.stringify(zona))
                if (this.$refs.form) this.$refs.form.resetValidation()
                this.dialogOperarZona = true
            },
        }
    }
</script>

<style scoped>

</style>
