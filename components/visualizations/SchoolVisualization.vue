<template>
  <div class="school-visualization">
    <div class="step-1">
      <img class="shape" src="~/assets/fallback/chapter3_example2_quote.png">
      <p class="quote" v-html="$t('chapter3-example2-quote')" />
    </div>
    <div class="step-2">
      <div class="inside">
        <div class="visualization-1">
          <img src="~/assets/fallback/chapter3_example2_mehrheitsbevoelkerung_gymnasium.png">
          <div class="legend">
            <span class="digit">24,40%</span>
            <span class="details" v-html="$t('chapter3-example2-vis2')" />
          </div>
        </div>
        <div class="visualization-2">
          <img src="~/assets/fallback/chapter3_example2_sinti_zze_rom_nja_gymnasium.png">
          <div class="legend">
            <span class="digit">2,30%</span>
            <span class="details" v-html="$t('chapter3-example2-vis4')" />
          </div>
        </div>
      </div>
    </div>
    <div class="step-3">
      <div class="inside">
        <div class="visualization-1">
          <img src="~/assets/fallback/chapter3_example2_mehrheitsbevoelkerung_foerderschule.png">
          <div class="legend">
            <span class="digit">4,90%</span>
            <span class="details" v-html="$t('chapter3-example2-vis6')" />
          </div>
        </div>
        <div class="visualization-2">
          <img src="~/assets/fallback/chapter3_example2_sinti_zze_rom_nja_foerderschule.png">
          <div class="legend">
            <span class="digit">10,70%</span>
            <span class="details" v-html="$t('chapter3-example2-vis8')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.school-visualization {
  .step-1 {
    position: absolute;
    top: 25%;
    height: 25%;
    min-height: 100vh;
    width: 100%;

    .shape {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
      z-index: -1;
    }

    .quote {
      position: sticky;
      display: block;
      height: 100vh;
      top: 0;
      margin: 0;
      margin-top: 20%;
      background-color: rgba(255, 255, 255, 0.6);
    }
  }

  .step-2 {
    position: absolute;
    top: 50%;
    height: 25%;
    min-height: 100vh;
    width: 100%;

    .inside {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }
  }

  .step-3 {
    position: absolute;
    top: 75%;
    height: 25%;
    min-height: 100vh;
    width: 100%;

    .inside {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }
  }

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
    padding-bottom: 1rem;

    img {
      position: relative;
      max-width: 40%;
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
      max-width: 80%;
    }

    .legend {
      margin-bottom: 1rem;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {}
}
</style>
