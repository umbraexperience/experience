import Vue from 'vue'
import App from './App.vue'
import VueAnime from 'vue-animejs';
import fullscreen from 'vue-fullscreen'
import Vue2TouchEvents from 'vue2-touch-events'
import VuePlyr from 'vue-plyr'




Vue.use(VueAnime)
Vue.use(fullscreen)
Vue.use(Vue2TouchEvents)
// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  emit: ['ended', 'timeupdate']
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
