<template>
  <v-overlay :value="$loader" z-index="205">
    <v-progress-circular indeterminate color="primary" size="64" />
  </v-overlay>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped>

</style>
