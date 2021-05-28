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
        <v-data-table :headers="headers" :items="paquetes" />
      </v-col>
    </v-row>
    <dialogo v-model="dialogBuscarCliente" title="Buscar cliente">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="6" align="center">
          <v-autocomplete v-model="idCliente" :items="clientes" item-value="id" item-text="nombre" label="Cliente" />
        </v-col>
        <v-col cols="12" sm="12" md="6" align="center">
          <v-select v-model="ciclo" :items="ciclos" label="Ciclo" />
        </v-col>
      </v-row>
      <template slot="actions">
        <v-btn text color="primary" @click="buscarPaquetes">Buscar</v-btn>
      </template>
    </dialogo>
    <v-btn color="success" dark fab fixed bottom right @click="dialogBuscarCliente = true">
      <v-icon>mdi-text-box-search-outline</v-icon>
    </v-btn>
  </wrapper>
</template>

<script>
  import ClienteServices from "../../services/ClienteServices";

  export default {
    name: "PaquetesCliente",
    data() {
      return {
        idCliente: null,
        clientes: [],
        ciclo: null,
        ciclos: [],
        paquetes: [],
        dialogBuscarCliente: true,
        headers: [
          {text: 'ISBN13', value: 'isbn13'},
          {text: 'Título', value: 'libro.isbn13'},
          {text: 'Editorial', value: 'libro.titulo'},
          {text: 'Categoría', value: 'libro.editorial.nombreEditorial'},
          {text: '', value: 'accions'}
        ]
      }
    },
    async created() {
      this.$loader = true
      let vm = this
      ClienteServices.getClientes()
        .then(clientes => (vm.clientes = clientes))
        .then(() => (vm.$loader = false))


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
    methods: {
      async buscarPaquetes () {
        console.log(this.idCliente)
        this.paquetes = []
        this.$loader = true
        try {
          this.paquetes = await ClienteServices.getPaquetesPorClienteCiclo(this.idCliente, this.ciclo)
          console.log(this.paquetes)
        } catch (e) {
          console.log(e)
          // snackbar de no encontró paquetes
        }
        this.dialogBuscarCliente = false
        this.$loader = false
      }
    }
  }
</script>

<style scoped>

</style>
