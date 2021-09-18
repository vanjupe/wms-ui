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
    <dialogo v-model="dialogoMovimientos" title="Movimientos" ancho="700">
      <v-tabs>
        <v-tab>

        </v-tab>
        <v-tab-item>

        </v-tab-item>
      </v-tabs>
      <movimiento-producto v-for="(movimiento, index) in movimientosParaMostrar" :key="index" :movimiento="movimiento" />
    </dialogo>
  </wrapper>
</template>

<script>
    import Cliente from "../../services/Cliente";
    import ProductoServices from "../../services/ProductoServices";
    import MovimientoServices from "../../services/MovimientoServices";
    import MovimientoProducto from "../Movimientos/MovimientoProducto";

    export default {
        name: "Existencias",
      components: {MovimientoProducto},
      data () {
            return{
              clientes: [],
              productosCliente: [],
                headers: [
                    { text: 'SKU', value: 'sku' },
                    { text: 'Código', value: 'codigoDeBarras' },
                    { text: 'Descripción', value: 'descripcion' },
                    { text: 'Editorial', value: 'editorial' },
                    { text: 'Existencia', value: 'existencia' },
                    { text: 'Movimientos', value: 'movimientos' }
                    ],
              movimientosParaMostrar: [],
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
          async abrirDialogMovimiento (producto) {
            if (!producto.movimientos) {
              this.$loader = true
              try {
                this.$set(producto, 'movimientos', await MovimientoServices.getMovimientoByIdProducto(producto.id))
                this.$set(producto, 'existencia', ProductoServices.getExistenciaDisponible(producto.movimientos))
              } catch (e) {
                producto.movimientos = []
              }
              this.$loader = false
            }

            this.movimientosParaMostrar = producto.movimientos
            this.dialogoMovimientos = true
          }
        }
    }
</script>

<style scoped>

</style>
