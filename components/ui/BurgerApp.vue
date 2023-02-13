<template>
  <div class="burger" @click="changeBurger">
    <div class="burger-wrapper">
      <span :class="burger ? 'f active' : 'f'"></span>
      <span :class="burger ? 's active' : 's'"></span>
      <span :class="burger ? 'l active' : 'l'"></span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    changeBurger() {
      this.$store.commit('burger/setBurger')
    },
  },
  computed: {
    ...mapGetters({
      burger: 'burger/burger',
    }),
  },
}
</script>

<style></style>
