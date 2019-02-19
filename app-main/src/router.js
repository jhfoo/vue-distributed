import { Vue } from 'corelib'
import Router from 'vue-router'
import { Home } from 'subapplib'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
