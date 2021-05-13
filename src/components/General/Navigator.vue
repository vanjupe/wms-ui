<template>
        <v-navigation-drawer absolute dark width="200" permanent color="indigo darken-4" clipped app>
            <v-list>
                <v-list-item v-for="(opcion, index) in $menu" :key="index" link :to="opcion.to"
                             active-class="menu-navigation white indigo--text text--darken-4">
                    <v-list-item-icon>
                        <v-icon>{{ opcion.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold">{{ opcion.texto }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Navigator",
        data() {
            return {
                items: [
                    ['mdi-factory', 'Almacenes'],
                    ['mdi-map-clock', 'Zonas'],
                    ['mdi-map-marker', 'Ubicaciones'],
                ],


            }
        }
    }
</script>

<style scoped>
    .menu-navigation{
        border-radius: 40px 0 0 40px;
    }
    .theme--dark.v-list-item--active:hover::before, .theme--dark.v-list-item--active::before{
        opacity: 0;
    }

</style>
