<template>
  <v-app>
    <bar/>
    <navigator/>
    <v-main>
      <router-view/>
    </v-main>
    <loader/>
    <alerta/>
  </v-app>
</template>

<script>

import Loader from "./components/General/Loader";
import Bar from "./components/General/Bar";
import Navigator from "./components/General/Navigator";
import Alerta from "./components/General/Alerta";
export default {
  name: "App",

  components: {Alerta, Navigator, Bar, Loader},

  data: () => ({
    //
  }),
};
</script>
