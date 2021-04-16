<template>
  <div class="case-study working-handicapped">
    <SlideInToggleButton>
      {{ $t('disclosure-hint3') }}
    </SlideInToggleButton>

    <WorkingHandicappedVisualization class="background-visualization" />

    <div class="narrative">
      <div class="step">
        <h3 class="case-study-title">
          {{ $t('chapter3-example3-title') }}
        </h3>
        <p>
          {{ $t('chapter3-example3-text1') }}
        </p>
      </div>

      <div class="step">
        <p>
          {{ $t('chapter3-example3-text2') }}
        </p>
      </div>

      <div class="step">
        <p>
          {{ $t('chapter3-example3-text3') }}
        </p>
      </div>

      <div class="step">
        <p>
          {{ $t('chapter3-example3-text4') }}
        </p>
        <blockquote>
          {{ $t('chapter3-example3-trend') }}
        </blockquote>
        <p>
          {{ $t('chapter3-example3-text5') }}
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

.case-study.working-handicapped {
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
