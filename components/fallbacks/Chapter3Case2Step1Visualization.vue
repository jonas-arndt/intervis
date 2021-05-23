<template>
  <div class="chapter3-case2-step1-visualization">
    <div class="shape">
      <img src="~/assets/fallback/chapter3_example2_quote.png">
    </div>
    <div class="quote">
      <p class="text" v-html="$t('chapter3-example2-quote')" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter3-case2-step1-visualization {
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
