import Vue from 'vue'
import dayjs from 'dayjs'
import Vuetify, {
  VApp,
  VCard, VBtn
} from 'vuetify/lib'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard, VBtn
  }
})

export const CoreLib = {
  Vue,
  dayjs,
  Vuetify
};