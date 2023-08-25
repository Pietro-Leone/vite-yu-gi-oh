import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  cards: [],
  archetypes: [],
  archetype: "Select Archetype",
  cardsLength: 0,
});

export function fetchCards(archetype) {
  let url = "";
  if (archetype === undefined || archetype === "Select Archetype") {
    url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=20&offset=0";
  } else {
    url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?&archetype=${archetype}&num=20&offset=0`;
  }
  axios.get(url).then((response) => {
    store.cards = response.data.data;
    store.cardsLength = store.cards.length;
  });
}

export function fetchArchetypes() {
  const url = "https://db.ygoprodeck.com/api/v7/archetypes.php";

  axios.get(url).then((response) => {
    store.archetypes = response.data;
  });
}