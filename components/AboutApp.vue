<template>
  <div class="about">
    <div class="container">
      <h2 class="about__title">ОБО МНЕ</h2>
      <img
        :src="require('../assets/images/Rectangle.png')"
        alt=""
        class="card-photo"
      />
      <div class="about__info">
        <p class="about__info-name">Светлана Загородняя</p>
        <p class="about__info-experience">ТОП-мастер</p>
        <p class="about__info-description">Опыт работы 10 лет</p>
      </div>
    </div>
  </div>
</template>

<script>
import CardApp from './ui/CardApp.vue'
export default {
  components: { CardApp },
}
</script>

<style></style>
