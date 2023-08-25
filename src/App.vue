<script>
import Header from "./components/TheHeader.vue"
import CardList from "./components/TheCardList.vue"
import { store } from "./store"
export default {
  components: {
    Header,
    CardList,
  },
  data() {
    return {
      store,
      archetypes: [],
      selectArchetype: undefined,
      fetchCards: 0,
    }
  }
}
</script>

<template>
  <Header />

  <main>
    <div class="container mt-4">
      <!-- Select Archetype -->
      <div class="col-3">
        <select class="form-select" v-model="selectArchetype">
          <option selected @click="fetchCards(selectArchetype)" value="Select Archetype" class="text-body-tertiary">Select
            Archetype</option>
          <option @click="fetchCards(selectArchetype)" :value="archetype.archetype_name" v-for="archetype in archetypes">
            {{ archetype.archetype_name }}
          </option>
        </select>
      </div>
      <!-- Cards Container -->
      <div class="row mx-0 my-3 cards-title-bar">
        <h4>Found {{ store.cardsLength }} cards</h4>
      </div>
      <CardList @archetypesNum="x => archetypes.push(...x)" @archetype="x => selectArchetype = x"
        @fetchCards="x => fetchCards = x" />
    </div>
  </main>
</template>

<style lang="scss">
main {
  padding-bottom: 3rem;
}

.cards-title-bar {
  background-color: #303030;
  color: white;
  padding: .25rem;
}
</style>
