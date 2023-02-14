<template>
  <div class="app">
    <header-app />
    <services-app />
    <about-app />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '~/components/HeaderApp.vue'
import ServicesApp from '~/components/ServicesApp.vue'
import AboutApp from '~/components/AboutApp.vue'

export default Vue.extend({
  components: { ServicesApp, AboutApp },
  name: 'IndexPage',
})
Header
</script>
