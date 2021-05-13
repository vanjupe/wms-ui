<template>
    <v-container pa-2 fluid class="fill-height" style="background: #f5f5fb;  display: grid;
    justify-content: center;align-items: center;">
        <v-layout column style="display: block !important;">
            <v-card class="pa-2 ma-4 tarjeta elevation-0">
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
