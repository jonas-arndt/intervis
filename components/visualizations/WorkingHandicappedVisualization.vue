<template>
  <div class="working-handicapped-visualization">
    <div class="visualization-1">
      <img :src="require('~/assets/fallback/case-studies/statistic-working-handicapped-1.png')">
      <div class="legend">
        <span class="digit" v-html="$t('chapter3-example3-vis3')" />
        <span class="details" v-html="$t('chapter3-example3-vis4')" />
      </div>
    </div>
    <div class="visualization-2">
      <img :src="require('~/assets/fallback/case-studies/statistic-working-handicapped-2.png')">
      <div class="legend">
        <span class="digit" v-html="$t('chapter3-example3-vis5')" />
        <span class="details" v-html="$t('chapter3-example3-vis6')" />
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
