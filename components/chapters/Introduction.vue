<template>
  <div class="chapter grid-visualization">
    <TitleVisualization class="background-visualization" />
    <div class="narrative with-background">
      <div class="step step1">
        <p v-html="$t('teaser-text1')" />
      </div>
      <div class="step step2">
        <p v-html="$t('teaser-text2')" />
      </div>
      <div class="step step3">
        <p v-html="$t('teaser-text3')" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.grid-visualization {
  margin-top: 1rem; // add small offset to prevent chapter activation on page load

  .narrative {
    height: 600vh;

    .step {
      position: relative;

      &.step1 {
        top: 50vh;
      }
      &.step2 {
        top: 200vh;
      }
      &.step3 {
        top: 350vh;
      }
    }
  }

  .background-visualization {
    z-index: -100;
    position: sticky;
    top: 0;
  }

  @media (min-width: $media-breakpoint-min-m) {
    padding-top: 80vh;

    .narrative {
      padding-top: 10rem;
      padding-bottom: 180vh;
    }
  }
}

</style>
