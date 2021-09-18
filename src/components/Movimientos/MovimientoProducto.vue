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
          <v-card>
            <v-card-title>Origen</v-card-title>
            <v-card-subtitle>
              <strong>{{ movimiento.origen.ubicacion.nombre }}</strong>
              <br />
              <small>{{ movimiento.origen.ubicacion.zona.nombre }}</small>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="2" align-self="center">
          <v-chip color="primary" style="width: 100%" class="align-content-center">
            <v-icon v-if="!$vuetify.breakpoint.smAndDown">mdi-forward</v-icon>
            {{ movimiento.destino.cantidad }}
          </v-chip>
        </v-col>

        <v-col cols="5">
          <v-card>
            <v-card-title>Destino</v-card-title>
            <v-card-subtitle>
              <strong>{{ movimiento.destino.ubicacion.nombre }}</strong>
              <br />
              <small>{{ movimiento.destino.ubicacion.zona.nombre }}</small>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: "MovimientoProducto",
    props: { movimiento: { type: Object, required: true } },
  }
</script>

<style scoped>

</style>
