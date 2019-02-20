import {
    Vue, Vuetify
} from 'corelib'
import router from './router'
import App from './App.vue'

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})