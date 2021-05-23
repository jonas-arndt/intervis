<template>
  <div class="chapter3-case1-step2-visualization">
    <div class="shape">
      <img src="~/assets/fallback/chapter3_example1_quote.png">
    </div>
    <div class="quote">
      <p class="text" v-html="$t('chapter3-example1-quote')" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter3-case1-step2-visualization {
  .shape {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;
    opacity: 0.5;

    img {
      position: absolute;
      width: 80%;
      bottom: 10%;
    }
  }
}
</style>
