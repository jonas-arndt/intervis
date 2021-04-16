<template>
  <div class="case-study school">
    <SlideInToggleButton>
      {{ $t('disclosure-hint3') }}
    </SlideInToggleButton>

    <SchoolVisualization class="background-visualization" />

    <div class="narrative">
      <div class="step">
        <h3 class="case-study-title">
          {{ $t('chapter3-example2-title') }}
        </h3>
        <p>
          {{ $t('chapter3-example2-text1') }}
        </p>
      </div>

      <div class="step">
        <blockquote>
          {{ $t('chapter3-example2-quote') }}
        </blockquote>
        <p>
          {{ $t('chapter3-example2-text2') }}
        </p>
      </div>

      <div class="step">
        <p>
          {{ $t('chapter3-example2-text3') }}
        </p>
      </div>

      <div class="step">
        <p>
          {{ $t('chapter3-example2-text4') }}
        </p>
        <blockquote>
          {{ $t('chapter3-example2-trend') }}
        </blockquote>
        <p>
          {{ $t('chapter3-example2-text5') }}
        </p>
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
