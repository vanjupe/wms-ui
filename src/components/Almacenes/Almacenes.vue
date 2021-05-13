<template>
    <wrapper>
        <v-data-table  :headers="headers" :items="almacenes">
            <template v-slot:item.acciones="{ item }">
                <v-btn icon @click="abrirDialogAlmacen(item)" class="primary--text"><v-icon small>mdi-pencil</v-icon></v-btn>
            </template>
        </v-data-table>
        <dialogo v-model="dialogOperarAlmacen" :title="almacenAOperar.id ? 'Editar Almacén' : 'Agregar Almacén'">
            <v-row>
                <v-col cols="12" sm="12">
                    <v-text-field v-model="almacenAOperar.nombre" label="Nombre de almacén" autofocus/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-text-field v-model="almacenAOperar.direccion" label="Dirección" @keyup.enter="almacenAOperar.id ? editarAlmacen() : agregarAlmacen()"/>
                </v-col>
            </v-row>
            <template slot="actions">
                <v-btn text class="primary--text" @click="almacenAOperar.id ? editarAlmacen() : agregarAlmacen()">Guardar</v-btn>
            </template>
        </dialogo>
        <dialogo v-model="dialogEliminarAlmacen" :title="'¿Desea eliminar ' + almacenAOperar.nombre + ' ?'">
            <template slot="actions">
                <v-btn text class="primary--text" @click="eliminarAlmacen()">Aceptar</v-btn>
            </template>
        </dialogo>
        <v-dialog max-width="600" transition="dialog-top-transition">
            <v-card style="border-radius: 15px">
                <v-card-title></v-card-title>
                <v-card-text>
                    <v-row class="pa-9">
                        <v-col cols="12" sm="12" class="text-sm-center">
                            <v-icon class="red--text" size="50px">mdi-delete-alert</v-icon>
                        </v-col>
                        <v-col cols="12" sm="12" class="text-sm-center">
                            <h2>¿Desea eliminar el registro?</h2>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn text plain>Cancelar</v-btn>
                    <v-btn text color="primary" plain loading>Aceptar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-btn color="success"  dark fab fixed bottom right @click="abrirDialogAlmacen">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </wrapper>
</template>

<script>
    import AlmacenServices from "../../services/AlmacenServices";

    export default {
        name: "Almacenes",
        data() {
            return{
                headers: [
                    { text: 'Nombre', value: 'nombre' },
                    { text: 'Dirección', value: 'direccion' },
                    { text: '', value: 'acciones' }
                ],
                dialogOperarAlmacen: false,
                almacenes: [],
                almacenAOperar: {},
                dialogEliminarAlmacen: false,
            }
        },
        async created () {
            this.$loader = true
            try {
                this.almacenes = await AlmacenServices.getAlmacenes()
            } catch (e) {
                this.$loader = false
                console.log(e)
            }
            this.$loader = false
        },
        methods: {
            async agregarAlmacen() {
                this.$loader = true
                try {
                    let almacenAgregado = await AlmacenServices.postGuardarAlmacen(this.almacenAOperar)
                    this.almacenes.push(almacenAgregado)
                } catch (e) {
                    console.log(e)
                }
                this.$loader = false
                this.dialogOperarAlmacen = false
            },
            abrirDialogAlmacen (almacen = { tipo: 'almacen' }) {
                this.almacenAOperar = JSON.parse(JSON.stringify(almacen))
                if (this.$refs.form) this.$refs.form.resetValidation()
                this.dialogOperarAlmacen = true
            },
            async editarAlmacen() {
                this.$loader = true
                try {
                    let almacenEditado = await AlmacenServices.actualizarAlmacen(this.almacenAOperar)
                    let index = this.$getIndex(this.almacenes, 'id', almacenEditado)
                    this.$set(this.almacenes, index, almacenEditado)
                } catch (e) {
                    console.log(e)
                }
                this.$loader = false
                this.dialogOperarAlmacen = false
            },
            abrirDialogEliminarAlmacen (almacen = { tipo: 'almacen' }) {
                this.almacenAOperar = JSON.parse(JSON.stringify(almacen))
                this.dialogEliminarAlmacen = true
            },
            async eliminarAlmacen() {
                this.$loader = true
                try {
                    this.almacenAOperar.estatus = false
                    let almacenEditado = await AlmacenServices.actualizarAlmacen(this.almacenAOperar)
                    let index = this.$getIndex(this.almacenes, 'id', almacenEditado)
                    this.$set(this.almacenes, index, almacenEditado)
                } catch (e) {
                    console.log(e)
                }
                this.$loader = false
                this.dialogEliminarAlmacen = false
            },
        }
    }

</script>

<style scoped>

</style>
