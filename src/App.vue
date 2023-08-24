<script>
import Header from "./components/TheHeader.vue"
import CardList from "./components/TheCardList.vue"
export default {
  components: {
    Header,
    CardList,
  }
}
</script>

<template>
  <Header />

  <main>
    <div class="container mt-4">
      <div class="row mx-0 mb-3 cards-title-bar">
        <h4>found</h4>
      </div>
      <CardList/>
    </div>
  </main>
</template>

<style lang="scss">

.cards-title-bar {
  background-color: #303030;
  color: white;
  padding: .25rem;
}

</style>
