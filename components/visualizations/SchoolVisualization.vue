<template>
  <div class="school-visualization">
    <div class="step-1">
      <img class="shape" src="~/assets/fallback/chapter3_example2_quote.png">
      <div class="quote">
        <p class="text" v-html="$t('chapter3-example2-quote')" />
      </div>
    </div>
    <div class="step-2">
      <div class="inside">
        <div class="visualization-1">
          <img src="~/assets/fallback/chapter3_example2_mehrheitsbevoelkerung_gymnasium.png">
          <div class="legend">
            <span class="digit" v-html="$t('chapter3-example2-vis1')" />
            <span class="details" v-html="$t('chapter3-example2-vis2')" />
          </div>
        </div>
        <div class="visualization-2">
          <img src="~/assets/fallback/chapter3_example2_sinti_zze_rom_nja_gymnasium.png">
          <div class="legend">
            <span class="digit" v-html="$t('chapter3-example2-vis3')" />
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
      opacity: 0.5;
    }

    .quote {
      position: sticky;
      display: block;
      height: 100vh;
      top: 0;
      margin: 0;
      margin-top: -100vh;

      font-size: $font-size-subtitle;
      font-weight: bold;
      font-style: italic;
      max-width: 100vw;

      .text {
        display: table-cell;
        height: 100vh;
        vertical-align: middle;
      }
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
