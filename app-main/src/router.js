import Router from 'vue-router'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => {
          console.log('Loading subapp')
          return loadScript('/subapp-bundle.js')
          .then(() => {
              return SubappLib.Home
          })
      }
    }
  ]
})
