<template>
  <div class="working-handicapped-visualization">
    <div class="step-1">
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

    <div class="step-2">
      <div class="visualization-1">
        <img src="~/assets/fallback/chapter3_example3_frauen_mitbehinderung_erwerbstaetigkeit.png">
        <div class="legend">
          <span class="digit">47%</span>
          <span class="details" v-html="$t('chapter3-example3-vis4')" />
        </div>
      </div>
      <div class="visualization-2">
        <img src="~/assets/fallback/chapter3_example3_frauen_ohnebehinderung_erwerbstaetigkeit.png">
        <div class="legend">
          <span class="digit">74%</span>
          <span class="details" v-html="$t('chapter3-example3-vis6')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.working-handicapped-visualization {
  position: relative;
  height: 100vh;

  .legend {
    position: absolute;
    bottom: 0;
    right: 0;

    span {
      display: block;
    }

    .digit {
      font-size: $font-size-title;
      font-style: italic;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .details {
      font-size: $font-size-small;
    }
  }

  .visualization-1 {
    position: relative;
    width: 85%;

    left: 5%;
    top: 7%;
    padding-bottom: 2rem;

    img {
      position: relative;
      max-width: 50%;
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
      max-width: 80%;
    }

    .legend {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    left: 45%;
    width: 50%;
  }
}
</style>
