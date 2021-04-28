<template>
  <div class="chapter intersectional_measures">
    <MeasuresVisualization class="background-visualization" />
    <div class="narrative">
      <div class="step right">
        <h2 class="chapter-title" v-html="$t('chapter4-title')" />
        <p v-html="$t('chapter4-text1')" />
      </div>

      <div class="step right">
        <p v-html="$t('chapter4-text2')" />
      </div>

      <div class="step right">
        <p v-html="$t('chapter4-text3')" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../../styles/_variables";

.chapter.intersectional_measures {
  .narrative {
    padding-top: 20vh;
    padding-bottom: 100vh;

    .step {
      margin-bottom: 150vh;

      &:last-child {
        margin-bottom: inherit;
      }
    }

    h2 {
      color: $color-red;
    }

    p.highlight {
      font-size: $font-size-subtitle;
      font-weight: 700;
      font-style: italic;

      margin-bottom: 0;
    }
  }

  .background-visualization {
    z-index: -100;
    position: sticky;
    top: 0;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .narrative {
      position: relative;
      padding-bottom: 100vh;

      .step {
        margin-top: 50vh;

        &.right {
          position: relative;
          left: 50%;
        }
      }
    }
  }
}

</style>
