<template>
  <wrapper>
    <v-row v-if="paquetes && paquetes.length > 0">
      <v-col cols="12" align="center" class="mb-3">
        <h2 class="indigo--text">{{ clienteSeleccionado.id }} - {{ clienteSeleccionado.nombre }}</h2>
        <h4 class="caption font-weight-bold">{{ciclo}}</h4>
      </v-col>
      <v-row v-for="(paquete, index) in paquetes" :key="index" class="ma-2">
        <v-col cols="12">
          <h3 class="blue--text ml-3">{{ paquete.nombre }}</h3>
        </v-col>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="paquete.detalles">
            <template v-slot:item.acciones="{ }">
              <v-btn icon class="primary--text"><v-icon small>mdi-google-maps</v-icon></v-btn>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-row>
    <dialogo v-model="dialogBuscarCliente" title="Buscar cliente">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="12" md="6" align="center">
          <v-autocomplete v-model="clienteSeleccionado" :items="clientes" item-value="id" return-object item-text="nombre" label="Cliente" />
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
        cliente: null,
        clientes: [],
        ciclo: null,
        ciclos: [],
        paquetes: [],
        dialogBuscarCliente: true,
        headers: [
          {text: 'ISBN13', value: 'libro.isbn13'},
          {text: 'Título', value: 'libro.titulo'},
          {text: 'Editorial', value: 'libro.editorial.nombreEditorial'},
          {text: 'Categoría', value: 'libro.editorial.categoria'},
          {text: '', value: 'acciones'}
        ],
        clienteSeleccionado: {}
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
        this.paquetes = []
        this.$loader = true
        try {
          this.paquetes = await ClienteServices.getPaquetesPorClienteCiclo(this.clienteSeleccionado.id, this.ciclo)
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
