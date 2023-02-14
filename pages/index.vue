<template>
  <div class="container">
    <header-app />
    <services-app />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '~/components/HeaderApp.vue'
import ServicesApp from '~/components/ServicesApp.vue'

export default Vue.extend({
  components: { ServicesApp },
  name: 'IndexPage',
})
Header
</script>
