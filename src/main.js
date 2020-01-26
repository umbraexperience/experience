import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import VueAnime from "vue-animejs";
import Vue2TouchEvents from "vue2-touch-events";

Vue.use(VueAnime);
Vue.use(Vue2TouchEvents);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
