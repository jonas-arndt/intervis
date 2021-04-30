<template>
  <div class="case-study working-women">
    <SlideInToggleButton>
      <span v-html="$t('disclosure-hint3')" />
    </SlideInToggleButton>

    <WorkingWomanVisualization class="background-visualization" />
    <div class="narrative">
      <div class="step">
        <h3 class="case-study-title" v-html="$t('chapter3-example1-title')" />
        <p v-html="$t('chapter3-example1-text1')" />
      </div>

      <div class="step">
        <p v-html="$t('chapter3-example1-text2')" />
        <blockquote v-html="$t('chapter3-example1-trend')" />
        <p v-html="$t('chapter3-example1-text3')" />
      </div>

      <div class="step">
        <p v-html="$t('chapter3-example1-text4')" />
      </div>
      <div class="step">
        <p v-html="$t('chapter3-example1-text5')" />
        <blockquote v-html="$t('chapter3-example1-quote')" />
      </div>
    </div>

    <SliderContent>
      <DesignDecisions3 />
    </SliderContent>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.case-study.working-women {
  position: relative;

  padding-top: 100vh;
  padding-bottom: 100vh;

  .case-study-title {
    font-size: $font-size-subtitle;
    margin-bottom: 0.6em;
  }

  .step {
    margin-bottom: 100vh;

    &:last-child {
      margin-bottom: inherit;
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
    .step {
      margin-bottom: 30vh;
    }

    .background-visualization {
      left: 45%;
      width: 50%;
    }
  }
}
</style>
