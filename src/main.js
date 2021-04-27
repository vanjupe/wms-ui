import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import route from '@/route';

import GlobalComponents from './global/GlobalComponents'

Vue.config.productionTip = false;
const router = route.getRouter(Vue)
GlobalComponents.load(Vue)


new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
