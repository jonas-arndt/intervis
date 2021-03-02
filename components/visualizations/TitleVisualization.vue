<template>
  <div class="title-visualization">
    <img :src="require('~/assets/visualizations/zugang_integration_teilhabe_anerkennung.svg')" alt="Zugang, Integration, Teilhabe, Anerkennung">
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.title-visualization {
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
      left: 10%;
    }
  }
}
</style>
