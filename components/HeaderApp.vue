<template>
  <header class="header">
    <nav-app />
    <div class="header-content">
      <h1 class="header-content__title">
        <span>САЛОН</span> МАНИКЮРА И <span>ПЕДЕКЮРА</span>
      </h1>
      <h3 class="header-content__subtitle">
        <span>Квалифицированный</span> дипломированный специалист
      </h3>
      <button class="btn">ЗАПИСАТЬСЯ НА МАНИКЮР</button>
    </div>
  </header>
</template>

<script>
import NavApp from './NavApp.vue'
export default {
  components: { NavApp },
}
</script>

<style></style>
