<template>
  <div class="case-study-container">
    <div class="background-visualization">
      <slot name="background-visualization" />
    </div>

    <div class="narrative">
      <slot name="content" />
    </div>
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

    padding-left: 1rem;
    padding-right: 1rem;

    & > * {
      position: relative;
      height: 100%;
    }
  }

  @media (min-width: $media-breakpoint-min-s) {
    .background-visualization {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    .step {
      margin-bottom: 30vh;

      blockquote {
        text-align: right;
        margin-top: 2em;
        margin-bottom: 2em;
        font-style: italic;
      }
    }

    .background-visualization {
      left: 55%;
      width: 35%;
      padding-left: inherit;
      padding-right: inherit;
    }
  }

  @media (min-width: $media-breakpoint-min-l) {
    .step {
      background: none;
    }
  }
}
</style>
