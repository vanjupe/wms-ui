<template>
  <wrapper>
    <v-row>
      <v-col cols="12" sm="12" style="display: grid; justify-content: center">
        <v-autocomplete :items="clientes" item-value="idCliente" item-text="nombre" label="Cliente"
                        @change="getProductosPorCliente" />
      </v-col>
      <v-col v-if="productosCliente.length > 0" cols="12">
        <v-data-table  :headers="headers" :items="productosCliente">
          <template v-slot:item.movimientos="{ item }">
            <v-btn icon class="primary--text" @click="abrirDialogMovimiento(item)"><v-icon small>mdi-folder-open</v-icon></v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <dialogo v-model="dialogoMovimientos" title="Movimientos">
      <v-tabs>
        <v-tab>

        </v-tab>
        <v-tab-item>

        </v-tab-item>
      </v-tabs>
      <v-card rounded>
        <v-card-text>
          <h4>Movimiento </h4>
          <h4 class="caption font-weight-bold">Cantidad:</h4>
          <v-card-text>
            fhfhdh
          </v-card-text>
        </v-card-text>
      </v-card>
    </dialogo>
  </wrapper>
</template>

<script>
    import Cliente from "../../services/Cliente";
    import ProductoServices from "../../services/ProductoServices";

    export default {
        name: "Existencias",
        data () {
            return{
              clientes: [],
              productosCliente: [],
                headers: [
                    { text: 'SKU', value: 'sku' },
                    { text: 'Código', value: 'codigoDeBarras' },
                    { text: 'Descripción', value: 'descripcion' },
                    { text: 'Manufactura', value: 'manufactura' },
                    { text: 'Existencias', value: 'existencia' },
                    { text: 'Movimientos', value: 'movimientos' }
                    ],
                dialogoMovimientos: false
            }
        },
      async created () {
        this.$loader = true
        try {
          this.clientes = await Cliente.getClientesActivos()
        } catch (e) {
          console.log(e)
        }
        this.$loader = false
      },
        methods: {
          async getProductosPorCliente (idCliente) {
            this.$loader = true
            try {
              this.productosCliente = await ProductoServices.getProductosByCliente(idCliente)
            } catch (e) {
              console.log(e)
            }
            this.$loader = false
          },
            abrirDialogMovimiento () {
                this.dialogoMovimientos = true
            }
        }
    }
</script>

<style scoped>

</style>
