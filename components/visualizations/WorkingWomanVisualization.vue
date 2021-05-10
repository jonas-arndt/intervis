<template>
  <div class="working-woman-visualization">
    <div class="step-1">
      <div class="inside">
        <div class="visualization-1">
          <img src="~/assets/fallback/chapter3_example1_sandrabauer.png">
          <div class="legend">
            <span class="digit">18,80%</span>
            <span class="details" v-html="$t('chapter3-exampl1-vis2')" />
          </div>
        </div>
        <div class="visualization-2">
          <img src="~/assets/fallback/chapter3_example1_meyremoeztuerk.png">
          <div class="legend">
            <span class="digit">4,20%</span>
            <span class="details" v-html="$t('chapter3-exampl1-vis4')" />
          </div>
        </div>
      </div>
    </div>
    <div class="step-2">
      <img class="shape" src="~/assets/fallback/chapter3_example1_quote.png">
      <div class="quote">
        <p class="text" v-html="$t('chapter3-example1-quote')" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.working-woman-visualization {
  .step-1 {
    position: absolute;
    top: 0;
    height: 30%;
    min-height: 100vh;
    width: 100%;

    .inside {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }
  }

  .step-2 {
    position: absolute;
    top: 40%;
    height: 60%;
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

      .text {
        display: table-cell;
        height: 100vh;
        vertical-align: middle;
      }
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
    padding-bottom: 2rem;

    img {
      position: relative;
      max-width: 90%;
    }
  }

  .visualization-2 {
    position: absolute;
    width: 85%;

    left: 5%;
    bottom: 17%;

    img {
      position: relative;
      max-width: 30%;
      left: 30%;
    }

    .legend {
      margin-bottom: 1rem;
    }
  }

  &.interactive {
    height: 100vh;
  }

  @media (min-width: $media-breakpoint-min-m) {}
}
</style>
