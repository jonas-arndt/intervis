<template>
  <div class="chapter intersectional_measures">
    <MeasuresVisualization class="background-visualization" :active="active" />
    <div class="narrative right">
      <div class="step">
        <h2 class="chapter-title" v-html="$t('chapter4-title')" />
        <p v-html="$t('chapter4-text1')" />
      </div>

      <div class="step">
        <p v-html="$t('chapter4-text2')" />
      </div>

      <div class="step">
        <p v-html="$t('chapter4-text3')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

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
    position: absolute;
    top: 0;
    z-index: -100;
    height: 100%;
    width: 100%;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .narrative {
      position: relative;
      padding-bottom: 100vh;

      .step {
        margin-top: 50vh;
      }
    }
  }
}

</style>
