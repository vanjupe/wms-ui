<template>
    <v-app-bar app>
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="$navegador = !$navegador"/>
        <v-tabs v-else grow show-arrows>
            <v-tab v-for="(opcion, index) in $menu" :key="index" active-class="menu-seleccionado" :to="opcion.to">
                {{ opcion.texto }}
            </v-tab>
        </v-tabs>
        <v-spacer/>
    </v-app-bar>
</template>

<script>
    export default {
        name: "Bar"
    }
</script>

<style scoped>

</style>
