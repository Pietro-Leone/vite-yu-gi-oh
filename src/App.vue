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
      <div class="col-2">
        <select class="form-select" v-model="selectArchetype" @click="fetchCards(selectArchetype)"
          aria-label="SelectArchetype">
          <option value="" disabled selected hidden>Select Archetype</option>
          <option value=""></option>
          <option :value="archetype.archetype_name" v-for="archetype in archetypes">{{ archetype.archetype_name }}
          </option>
        </select>
      </div>
      <!-- Cards Container -->
      <div class="row mx-0 my-3 cards-title-bar">
        <h4>{{ store.cardsLength }}</h4>
      </div>
      <CardList @archetypesNum="x => archetypes.push(...x)"
        @archetype="x => selectArchetype = x" @fetchCards="x => fetchCards = x" />
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
