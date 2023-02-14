<template>
  <div class="services">
    <h2 class="services__title"></h2>
    <h3 class="services__subtitle"></h3>
    <div class="cards-wrap">
      <card-app v-for="item in 8" :key="item">
        <img :src="require('../assets/images/Rectangle.png')" alt="" />
        <div class="card-info">
          <div class="card-title">Маникюр + Однотонное покрытиие гель-лак</div>
          <div class="card-price">400 грн</div>
          <div class="card-description">
            Аппаратный/комбинированный маникюр и однотонное покрытие гель-лак
          </div>
        </div>
      </card-app>
    </div>
  </div>
</template>

<script>
import CardApp from './ui/CardApp.vue'
export default {
  components: { CardApp },
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6],
    }
  },
}
</script>

<style></style>
