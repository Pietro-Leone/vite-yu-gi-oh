<script>

import { store, fetchCards, fetchArchetypes } from "../store"
import Card from "./Card.vue"
export default {
  components: {
    Card,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    
    fetchCards();
    fetchArchetypes();
    setTimeout(() => {
      this.$emit("cardNum", store.cards)
    }, 1000);
    setTimeout(() => {
      this.$emit("archetypesNum", store.archetypes)
    }, 1000);
  }
}
</script>

<template>
  <div class="row gy-3">
    <div class="col-3" v-for="singleCard in store.cards">
      <Card :card="singleCard" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>