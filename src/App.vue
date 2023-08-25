<script>
import Header from "./components/TheHeader.vue"
import CardList from "./components/TheCardList.vue"
export default {
  components: {
    Header,
    CardList,
  },
  data() {
    return {
      cardN: 0,
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
        <h4>found {{ cardN.length }} cards</h4>
      </div>
      <CardList @cardNum="x => cardN = x" @archetypesNum="x => archetypes.push(...x)"
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
