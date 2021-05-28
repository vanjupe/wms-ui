<template>
<wrapper>
    <v-row>
        <v-col cols="12" align="center" class="mb-3">
            <h2 class="indigo--text">Nombre de cliente encontrado</h2>
            <h4 class="caption">Ciclo seleccionado</h4>
        </v-col>
        <v-col cols="12">
            <h3 class="blue--text ml-3">Nombre de paquete</h3>
        </v-col>
        <v-col cols="12">
            <v-data-table :headers="headers"/>
        </v-col>
    </v-row>
    <dialogo v-model="dialogBuscarCliente" title="Buscar cliente">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="12" md="6" align="center">
                <v-autocomplete v-model="colegio" :items="colegiosFiltrados" no-filter item-value="idCliente" item-text="nombre" :search-input.sync="buscar" label="Cliente"/>
            </v-col>
            <v-col cols="12" sm="12" md="6" align="center">
                <v-select :items="ciclos" label="Ciclo" v-model="ciclo"/>
            </v-col>
        </v-row>
        <template slot="actions">
            <v-btn text color="primary">Buscar</v-btn>
        </template>
    </dialogo>
    <v-btn color="success"  dark fab fixed bottom right @click="dialogBuscarCliente = true">
        <v-icon>mdi-text-box-search-outline</v-icon>
    </v-btn>
</wrapper>
</template>

<script>
    export default {
        name: "PaquetesColegio",
        async created () {
            this.$loader = true
            try {
                let anioActual = Number(new Date().getFullYear()) // Año actual
                for (let i = 0; i <= 3; i++) {
                    let anio = anioActual - i
                    this.ciclos.push(anio + '-' + (anio + 1))
                }
            } catch (e) {
                this.$loader = false
                console.log(e)
            }
            this.$loader = false
        },
        data () {
            return {
                colegios: [],
                ciclo: null,
                ciclos: [],
                colegiosFiltrados: [],
                dialogBuscarCliente: true,
                headers: [
                    { text: 'ISBN13', value: 'isbn13' },
                    { text: 'Título', value: 'libro.isbn13' },
                    { text: 'Editorial', value: 'libro.titulo' },
                    { text: 'Categoría', value: 'libro.editorial.nombreEditorial' },
                    { text: '', value: 'accions' }

                ],

            }
        },

    }
</script>

<style scoped>

</style>
