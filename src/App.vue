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
      <div class="row cards-title-bar">
        <h3>found</h3>
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
