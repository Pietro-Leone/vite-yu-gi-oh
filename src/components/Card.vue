<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div class="card h-100">
    <img :src="card.card_images[0].image_url" alt="card">
  </div>
</template>

<style lang="scss" scoped></style>