<template>
    <v-app-bar app clipped-left color="white" flat>
            <img v-if="!$vuetify.breakpoint.smAndDown" :src="require('../../assets/vanjupe.png')"
                 width="180"/>
        <v-spacer/>
        <v-btn icon>
            <v-icon>mdi-account-circle</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: "Bar"
    }
</script>

<style scoped>

</style>
