<template>
    <v-container pa-2 fluid class="fill-height">
        <v-layout column style="display: block !important;">
            <v-card class="pa-2 ma-4 mt-3 tarjeta elevation-0">
                <v-card v-if="titulo" color="transparent" elevation="0" align="center" class="justify-center mb-15">
                    <h1 class="primary--text">{{ titulo }}</h1>
                </v-card>
                <slot/>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Wrapper",
        props: { titulo: { type: String, default: null } }
    }
</script>

<style scoped>
    .tarjeta {
        max-height: calc(100% - 56px);
        border-radius: 20px;
        box-shadow: 10px 10px 10px #b1b5c5;
    }
    .barra {
        position: fixed;
        z-index: 2;
        top: 55px;
        height: 54px !important;
    }
</style>
