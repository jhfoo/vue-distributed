// import {
//     Vue
// } from 'corelib'
import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import App from './App.vue'
import Vuetify, {
    VApp,
    VCard, VBtn,
    VContainer, VLayout, VFlex
  } from 'vuetify/lib'
  import 'vuetify/dist/vuetify.min.css'
  
  Vue.use(Router)
  Vue.use(Vuetify, {
    components: {
      VApp,
      VCard, VBtn,
      VContainer, VLayout, VFlex
    }
  })
  

  

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
