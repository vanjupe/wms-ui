<template>
    <wrapper titulo="Zonas">
        <v-data-table  :headers="headers" :items="zonas"/>
        <dialogo v-model="dialogAgregarZona" title="Agregar zona">
            <v-row>
                <v-col cols="12" sm="12">
                    <v-text-field v-model="zonaAOperar.nombre" label="Nombre" autofocus/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-text-field v-model="zonaAOperar.numero" label="Número"/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-select v-model="zonaAOperar.cliente"
                              label="Selecciona el colegio" :items="colegios"/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-select v-model="zonaAOperar.almacen" label="Selecciona el almacén" :items="almacenes"/>
                </v-col>
            </v-row>
            <template slot="actions">
                <v-btn text color="primary" @click="agregarZona">Agregar</v-btn>
            </template>
        </dialogo>
        <v-btn color="success"  dark fab fixed bottom right @click="dialogAgregarZona = true">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </wrapper>
</template>

<script>
    import ZonaServices from "../../services/ZonaServices";

    export default {
        name: "Zonas",
        data () {
            return{
                dialogAgregarZona: false,
                headers: [
                    { text: 'Nombre', value: 'nombre' },
                    { text: 'Número', value: 'numero' },
                    { text: 'Almacen', value: 'almacen' },
                    { text: 'Cliente', value: 'cliente' },
                ],
                zonas: [],
                zonaAOperar: {},
                colegios: [
                    'Centro Escolar Espejo de los Lirios',
                    'Instituto Thomas Jefferson Sta. Mónica',
                    'Estefanía Castañeda Colegio',
                    'Robert F. Kennedy Colegio (Atizapán)',
                    'María Montessori Colegio C.T.M.'],
                almacenes:[
                    'Almacén interno',
                    'Almacén externo'
                ]
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
        },
        methods:{
            agregarZona(){
                this.zonas.push(this.zonaAOperar)
                this.dialogAgregarZona = false
            }
        }
    }
</script>

<style scoped>

</style>
