<template>
  <div class="working-woman-visualization">
    <img :src="require('~/assets/visualizations/statistic-working-women.jpg')">
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.working-woman-visualization {
  position: relative;
  height: 100vh;

  img {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    top: 5vh;
    left: 1rem;
    max-width: 90%;
    max-height: 90vh;
  }

  @media (min-width: $media-breakpoint-min-m) {
    img {
      position: absolute;
      right: 5%;
      left: auto;
    }
  }
}
</style>
