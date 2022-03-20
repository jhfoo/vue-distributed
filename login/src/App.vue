<template>
  <LoginView/>
  <router-view/>
</template>

<style>
</style>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'app',
  components: {
    LoginView: defineAsyncComponent(() => import(/* webpackPrefetch: true */ './components/LoginView.vue')),
  }
}
</script>