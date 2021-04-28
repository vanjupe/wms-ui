<template>
  <v-app>
    <bar/>
    <v-main>
      <router-view/>
    </v-main>
    <loader/>
  </v-app>
</template>

<script>

import Loader from "./components/General/Loader";
import Bar from "./components/General/Bar";
export default {
  name: "App",

  components: {Bar, Loader},

  data: () => ({
    //
  }),
};
</script>
