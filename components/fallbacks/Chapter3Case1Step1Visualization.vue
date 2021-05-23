<template>
  <div class="chapter3-case1-step1-visualization">
    <div class="visualization-1">
      <img src="~/assets/fallback/chapter3_example1_sandrabauer.png">
      <div class="legend">
        <span class="digit" v-html="$t('chapter3-exampl1-vis1')" />
        <span class="details" v-html="$t('chapter3-exampl1-vis2')" />
      </div>
    </div>
    <div class="visualization-2">
      <img src="~/assets/fallback/chapter3_example1_meyremoeztuerk.png">
      <div class="legend">
        <span class="digit" v-html="$t('chapter3-exampl1-vis3')" />
        <span class="details" v-html="$t('chapter3-exampl1-vis4')" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter3-case1-step1-visualization {
  .visualization-1 {
    position: relative;
    width: 85%;

    left: 5%;
    top: 7%;
    padding-bottom: 2rem;

    img {
      position: relative;
      width: width-from-img-width(1648);
    }
  }

  .visualization-2 {
    position: absolute;
    width: 85%;

    left: 5%;
    bottom: 17%;

    img {
      position: relative;
      width: width-from-img-width(685);
      left: 30%;
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
