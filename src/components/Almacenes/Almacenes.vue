<template>
    <wrapper titulo="Almacénes">
        <v-data-table  :headers="headers" :items="desserts"/>
        <dialogo v-model="dialogAgregarAlmacen" title="Agregar Almacén">
            <v-row>
                <v-col cols="12" sm="12">
                    <v-text-field label="Nombre de almacén" autofocus/>
                </v-col>
                <v-col cols="12" sm="12">
                    <v-text-field label="Clave"/>
                </v-col>
            </v-row>
            <template slot="actions">
                <v-btn text color="primary" @click="dialogAgregarAlmacen = false">Agregar</v-btn>
            </template>
        </dialogo>
        <v-btn color="success"  dark fab fixed bottom right @click="dialogAgregarAlmacen = true">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </wrapper>
</template>

<script>
    export default {
        name: "Almacenes"
    }
</script>

<style scoped>

</style>
