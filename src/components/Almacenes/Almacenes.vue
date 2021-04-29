<template>
    <wrapper titulo="Almacénes">
        <v-data-table  :headers="headers" :items="almacenes"/>
        <dialogo v-model="dialogAgregarAlmacen" title="Agregar Almacén">
            <v-row>
                <v-col cols="12" sm="12">
                    <v-text-field v-model="almacenAOperar.nombre" label="Nombre de almacén" autofocus/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-text-field v-model="almacenAOperar.clave" label="Clave" @keyup.enter="agregarAlmacen"/>
                </v-col>
            </v-row>
            <template slot="actions">
                <v-btn text color="primary" @click="agregarAlmacen">Agregar</v-btn>
            </template>
        </dialogo>
        <v-btn color="success"  dark fab fixed bottom right @click="dialogAgregarAlmacen = true">
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
                    { text: 'Clave', value: 'clave' }
                ],
                dialogAgregarAlmacen: false,
                almacenes: [],
                almacenAOperar: {}
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
        methods:{
            agregarAlmacen(){
                this.almacenes.push(this.almacenAOperar)
                this.dialogAgregarAlmacen = false
            }
        }
    }
</script>

<style scoped>

</style>
