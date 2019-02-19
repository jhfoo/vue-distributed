import { Vue } from 'corelib'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => {
          return loadScript('../../app-sub/dist/subapp-bundle.js')
          .then(() => {
              return SubappLib.Home
          })
      }
    }
  ]
})
