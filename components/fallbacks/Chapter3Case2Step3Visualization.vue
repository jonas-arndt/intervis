<template>
  <div class="chapter3-case2-step3-visualization">
    <div class="visualization-1">
      <img src="~/assets/fallback/chapter3_example2_mehrheitsbevoelkerung_foerderschule.png">
      <div class="legend">
        <span class="digit" v-html="$t('chapter3-example2-vis5')" />
        <span class="details" v-html="$t('chapter3-example2-vis6')" />
      </div>
    </div>
    <div class="visualization-2">
      <img src="~/assets/fallback/chapter3_example2_sinti_zze_rom_nja_foerderschule.png">
      <div class="legend">
        <span class="digit" v-html="$t('chapter3-example2-vis7')" />
        <span class="details" v-html="$t('chapter3-example2-vis8')" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter3-case2-step3-visualization {
  .visualization-1 {
    position: relative;
    width: 85%;

    left: 5%;
    top: 7%;
    padding-bottom: 1rem;

    img {
      position: relative;
      width: width-from-img-width(1137);
      left: 30%;
    }
  }

  .visualization-2 {
    position: absolute;
    width: 85%;

    left: 5%;
    bottom: 7%;

    img {
      position: relative;
      width: width-from-img-width(1699);
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
