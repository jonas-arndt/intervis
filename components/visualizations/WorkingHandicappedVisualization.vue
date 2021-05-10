<template>
  <div class="working-handicapped-visualization">
    <div class="step-1">
      <div class="inside">
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
    </div>

    <div class="step-2">
      <div class="inside">
        <div class="visualization-1">
          <img src="~/assets/fallback/chapter3_example3_frauen_mitbehinderung_erwerbstaetigkeit.png">
          <div class="legend">
            <span class="digit" v-html="$t('chapter3-example3-vis3')" />
            <span class="details" v-html="$t('chapter3-example3-vis4')" />
          </div>
        </div>
        <div class="visualization-2">
          <img src="~/assets/fallback/chapter3_example3_frauen_ohnebehinderung_erwerbstaetigkeit.png">
          <div class="legend">
            <span class="digit" v-html="$t('chapter3-example3-vis5')" />
            <span class="details" v-html="$t('chapter3-example3-vis6')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/_variables";

.working-handicapped-visualization {
  .step-1 {
    position: absolute;
    top: 25%;
    height: 25%;
    min-height: 100vh;
    width: 100%;

    .inside {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }

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
  }

  .step-2 {
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

    .visualization-1 {
      position: relative;
      width: 85%;

      left: 5%;
      top: 7%;
      padding-bottom: 2rem;

      img {
        position: relative;
        width: width-from-img-width(1355);
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
        width: width-from-img-width(1479);
      }

      .legend {
        margin-bottom: 1rem;
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

  @media (min-width: $media-breakpoint-min-m) {}
}
</style>
