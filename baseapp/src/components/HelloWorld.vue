<template>
  <div class="hello">
  HelloWorld.vue
    <LoginView/>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    LoginView: defineAsyncComponent(() => import('login/LoginView')),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
