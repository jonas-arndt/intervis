<template>
  <div class="case-study-container">
    <SlideInToggleButton>
      <span v-html="$t('disclosure-hint3')" />
    </SlideInToggleButton>

    <div class="background-visualization">
      <slot name="background-visualization" />
    </div>

    <div class="narrative">
      <slot name="content" />
    </div>

    <SliderContent>
      <DesignDecisions3 />
    </SliderContent>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.case-study-container {
  position: relative;

  padding-top: 100vh;
  padding-bottom: 100vh;

  .case-study-title {
    font-size: $font-size-subtitle;
    margin-bottom: 0.6em;
  }

  .step {
    margin-bottom: 100vh;

    blockquote {
      font-size: $font-size-title-caption;
    }

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
      background: none;

      blockquote {
        position: relative;
        left: 5rem;
        text-align: right;
        margin-top: 2em;
        margin-bottom: 2em;
      }
    }

    .background-visualization {
      left: 45%;
      width: 50%;
    }
  }
}
</style>
