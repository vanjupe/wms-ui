<template>
    <v-dialog v-model="value" scrollable persistent :fullscreen="!noFullscreen && $vuetify.breakpoint.smAndDown"
              :max-width="ancho + 'px'" @keydown.esc="cerrarDialog">
        <v-card style="border-radius: 10px">
            <v-card-title>
                <v-btn v-if="esConsulta" icon color="gray" class="mr-2" @click="cerrarDialog">
                    <v-icon>fas fa-chevron-left</v-icon>
                </v-btn>
                <span>{{ title }}</span>
            </v-card-title>

            <v-card-text>
                <slot/>
            </v-card-text>

            <v-card-actions v-if="!esConsulta">
                <v-spacer/>
                <v-btn text @click="cerrarDialog">Cancelar</v-btn>
                <slot name="actions"/>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Dialogo",
        props: {
            value: { type: Boolean },
            ancho: { type: String, default: '400' },
            title: { type: String, required: true },
            noFullscreen: { type: Boolean, default: false },
            esConsulta: { type: Boolean, default: false }
        },
        methods: {
            cerrarDialog () {
                this.$emit('input', false)
            }
        }
    }
</script>

<style scoped>

</style>
