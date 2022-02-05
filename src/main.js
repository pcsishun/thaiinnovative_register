import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
import VueRouter from 'vue-router'
import router from './router.js'
import VueQrcodeReader from "vue-qrcode-reader";
import VueCookies from 'vue-cookies';


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCookies)
Vue.use(VueQrcodeReader)

new Vue({
  data:{
    state: store.state
  },
  render: h => h(App),
  router
}).$mount('#app')
