import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";

import VueAnime from "vue-animejs";
import Vue2TouchEvents from "vue2-touch-events";
import VuePlyr from "vue-plyr";

Vue.use(VueAnime);
Vue.use(Vue2TouchEvents);

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  emit: ["ended", "play", "timeupdate"]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
