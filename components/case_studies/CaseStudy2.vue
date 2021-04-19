<template>
  <div class="case-study school">
    <SlideInToggleButton>
      <span v-html="$t('disclosure-hint3')" />
    </SlideInToggleButton>

    <SchoolVisualization class="background-visualization" />

    <div class="narrative">
      <div class="step">
        <h3 class="case-study-title" v-html="$t('chapter3-example2-title')" />
        <p v-html="$t('chapter3-example2-text1')" />
      </div>

      <div class="step">
        <blockquote v-html="$t('chapter3-example2-quote')" />
        <p v-html="$t('chapter3-example2-text2')" />
      </div>

      <div class="step">
        <p v-html="$t('chapter3-example2-text3')" />
      </div>

      <div class="step">
        <p v-html="$t('chapter3-example2-text4')" />
        <blockquote v-html="$t('chapter3-example2-trend')" />
        <p v-html="$t('chapter3-example2-text5')" />
      </div>
    </div>

    <SliderContent>
      <DesignDecisions3 />
    </SliderContent>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.case-study.school {
  position: relative;

  .case-study-title {
    font-size: $font-size-subtitle;
    margin-bottom: 0.6em;
  }

  .step {
    margin-bottom: 100vh;
  }

  .background-visualization {
    z-index: -100;
    position: sticky;
    top: 0;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .step {
      margin-bottom: 30vh;
    }
  }
}
</style>
