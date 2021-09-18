<template>
  <wrapper>
    <v-row>
      <v-col cols="12" sm="12" style="display: grid; justify-content: center">
        <v-select label="Seleccionar cliente"/>
      </v-col>
      <v-col cols="12">
        <v-data-table  :headers="headers" :items="desserts">
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
    export default {
        name: "Existencias",
        data () {
            return{
                headers: [
                    { text: 'SKU', value: 'sku' },
                    { text: 'Código', value: 'codigo' },
                    { text: 'Descripción', value: 'descripcion' },
                    { text: 'Manufactura', value: 'manufactura' },
                    { text: 'Existencias', value: 'existencias' },
                    { text: 'Movimientos', value: 'movimientos' }
                    ],
                desserts: [
                    {
                        sku: 8837744,
                        codigo: 131318374,
                        descripcion: 'Descripción de ejemplo',
                        manufactura: 'Castillo',
                        existencias: 20,
                        movimientos: ''
                    }
                    ],
                dialogoMovimientos: true
            }
        },
        methods: {
            abrirDialogMovimiento () {
                this.dialogoMovimientos = true
            }
        }
    }
</script>

<style scoped>

</style>
