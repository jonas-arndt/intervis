<template>
  <div class="chapter grid-visualization">
    <TitleVisualization class="background-visualization" />
    <div class="narrative with-background">
      <div class="step">
        <p v-html="$t('teaser-text1')" />
      </div>
      <div class="step">
        <p v-html="$t('teaser-text2')" />
      </div>
      <div class="step">
        <p v-html="$t('teaser-text3')" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.grid-visualization {
  .narrative {
    padding-top: 30vh;
    padding-bottom: 150vh;

    .step {
      margin-bottom: 150vh;

      &:last-child {
        margin-bottom: inherit;
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
