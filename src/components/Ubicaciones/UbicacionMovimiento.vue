<template>
  <v-card :color="esRecepcion ? 'grey lighten-2' : undefined">
    <v-card-title>{{ titulo }}</v-card-title>
    <v-card-subtitle>
      <strong>{{ ubicacion.nombre }}</strong>
      <br />
      <small>{{ ubicacion.zona.nombre }}</small>
    </v-card-subtitle>
  </v-card>
</template>

<script>
  import UbicacionServices from "../../services/UbicacionServices";

  export default {
    name: "UbicacionMovimiento",
    props: {
      titulo: { type: String, default: null },
      ubicacion: { type: Object, required: true }
    },
    computed: {
      esRecepcion () {
        return UbicacionServices.esUbicacionRecepcion(this.ubicacion)
      }
    }
  }
</script>

<style scoped>

</style>
