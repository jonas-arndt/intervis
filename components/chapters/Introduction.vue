<template>
  <div class="chapter grid-visualization">
    <TitleVisualization class="background-visualization" />
    <div class="narrative">
      <div class="step">
        <p>
          {{ $t('teaser-text1') }}
        </p>
      </div>
      <div class="step">
        <p>
          {{ $t('teaser-text2') }}
        </p>
      </div>
      <div class="step">
        <p>
          {{ $t('teaser-text3') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.chapter.grid-visualization {
  position: relative;

  .narrative {
    position: relative;
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
    padding-bottom: 80vh;

    .narrative {
      padding-top: 10rem;
      padding-bottom: 100vh;
    }
  }
}

</style>
