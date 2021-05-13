<template>
    <v-dialog v-model="$alerta.model" scrollable persistent :max-width="$alerta.ancho + 'px'"
              @keydown.esc="$alerta.model = false" transition="dialog-top-transition">
        <v-card style="border-radius: 15px">
            <v-card-text>
                <v-row class="pa-9">
                    <v-col cols="12" sm="12" class="text-sm-center">
                        <v-icon :class="$alerta.color +'--text'" size="50px">{{ $alerta.icon }}</v-icon>
                    </v-col>
                    <v-col cols="12" sm="12" class="text-sm-center">
                        <h2>{{ $alerta.mensaje }}</h2>
                    </v-col>
                </v-row>
                <slot/>
            </v-card-text>

            <v-card-actions>
                <v-spacer/>
                <template v-if="$alerta.accion">
                    <v-btn text plain @click="$alerta.model = false">Cancelar</v-btn>
                    <v-btn text plain color="primary"  @click="$alerta.accion()">Aceptar</v-btn>
                </template>
                <v-btn v-else text plain color="primary" @click="$alerta.model = false">Ok</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "Alerta"
    }
</script>

<style scoped>

</style>
