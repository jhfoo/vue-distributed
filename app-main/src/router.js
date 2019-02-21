import Router from 'vue-router'
import Home from './views/Home.vue'
import LoadApp from './views/LoadApp.vue'
import Page404 from './views/Page404.vue'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sub/:name',
      name: 'loadapp',
      component: LoadApp
    },
    {
      path: '*',
      name: '404',
      component: Page404
    }
  ]
})
