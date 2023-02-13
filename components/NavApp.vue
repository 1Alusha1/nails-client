<template>
  <div class="navbar">
    <logo-app />
    <div :class="burger ? 'navbar-wrapper active' : 'navbar-wrapper'">
      <ul class="navbar-list">
        <li class="navbar-list__item active">Услуги</li>
        <li class="navbar-list__item">Обо мне</li>
        <li class="navbar-list__item">Портфолио</li>
        <li class="navbar-list__item">Записать на маникюр</li>
        <contact-info-app />
      </ul>
    </div>
    <burger-app />
  </div>
</template>

<script>
import ContactInfoApp from './ContactInfoApp.vue'
import LogoApp from './LogoApp.vue'
import BurgerApp from './ui/BurgerApp.vue'
import { mapGetters } from 'vuex'

export default {
  components: { LogoApp, ContactInfoApp, BurgerApp },
  computed: {
    ...mapGetters({
      burger: 'burger/burger',
    }),
  },
}
</script>

<style ContactInfoApp></style>
