<template>
  <div class="chapter3-case3-step1-visualization">
    <div class="visualization-1">
      <img src="~/assets/fallback/chapter3_example3_frauen_mitbehinderung_gewalt.png">
      <div class="legend">
        <span class="details" v-html="$t('chapter3-example3-vis1')" />
      </div>
    </div>
    <div class="visualization-2">
      <img src="~/assets/fallback/chapter3_example3_frauen_ohnebehinderung_gewalt.png">
      <div class="legend">
        <span class="details" v-html="$t('chapter3-example3-vis2')" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter3-case3-step1-visualization {
  .visualization-1 {
    position: relative;
    width: 85%;

    left: 5%;
    top: 7%;
    padding-bottom: 2rem;

    img {
      position: relative;
      width: width-from-img-width(1802);
      left: 30%;
    }
  }

  .visualization-2 {
    position: absolute;
    width: 85%;

    left: 5%;
    bottom: 5%;

    img {
      position: relative;
      width: width-from-img-width(907);
    }

    .legend {
      margin-bottom: 1rem;
    }
  }

  .legend {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
