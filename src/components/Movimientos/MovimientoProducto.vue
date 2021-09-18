<template>
  <v-card rounded class="my-2">
    <v-card-title>{{ movimiento.movimientoInventario.tipo | tipoMovimiento }}</v-card-title>
    <v-card-subtitle>
      <strong>{{ movimiento.movimientoInventario.fecha | fecha }}</strong>
      <br />
      {{ movimiento.movimientoInventario.relacion }}
    </v-card-subtitle>

    <v-card-text>
      <v-row dense align-content="center" justify="space-between">
        <v-col cols="5">
          <ubicacion-movimiento titulo="Origen" :ubicacion="movimiento.origen.ubicacion" />
        </v-col>

        <v-col cols="2" align-self="center">
          <v-chip color="primary" style="width: 100%" class="align-content-center">
            <v-icon v-if="!$vuetify.breakpoint.smAndDown">mdi-forward</v-icon>
            {{ movimiento.destino.cantidad }}
          </v-chip>
        </v-col>

        <v-col cols="5">
          <ubicacion-movimiento titulo="Destino" :ubicacion="movimiento.destino.ubicacion" />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  import UbicacionMovimiento from "../Ubicaciones/UbicacionMovimiento";
  export default {
    name: "MovimientoProducto",
    components: {UbicacionMovimiento},
    props: { movimiento: { type: Object, required: true } },
  }
</script>

<style scoped>

</style>
