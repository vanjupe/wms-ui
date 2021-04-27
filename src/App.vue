<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <loader/>
  </v-app>
</template>

<script>

import Loader from "./components/General/Loader";
export default {
  name: "App",

  components: {Loader},

  data: () => ({
    //
  }),
};
</script>
