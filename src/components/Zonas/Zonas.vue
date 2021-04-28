<template>
    <wrapper titulo="Zonas">
        <v-data-table  :headers="headers" :items="zonas"/>
        <dialogo v-model="dialogAgregarZona" title="Agregar zona">
            <v-row>
                <v-col cols="12" sm="12">
                    <v-text-field label="Nombre" autofocus/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-text-field label="Número"/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-select label="Selecciona el colegio"/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-select label="Selecciona el almacén"/>
                </v-col>
            </v-row>
            <template slot="actions">
                <v-btn text color="primary" @click="dialogAgregarAlmacen = false">Agregar</v-btn>
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
                zonas: []
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
    }
</script>

<style scoped>

</style>
