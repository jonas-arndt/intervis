<template>
  <div class="discrimination-visualization">
    <div class="fallback">
      <Chapter2Visualization />
    </div>
    <div class="interactive-visualization">
      <DiscriminationAnimation
        :active="active"
        :breakpoints="animationBreakpoints"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState([
      'viewport',
      'discriminationChapterStartPosition',
      'caseStudyChapterStartPosition'
    ]),
    totalChapterHeight () {
      return this.caseStudyChapterStartPosition - this.discriminationChapterStartPosition
    },
    prefixHeight () {
      return this.viewport.height
    },
    introHeight () {
      return 0.5 * this.viewport.height
    },
    transitionStepHeight () {
      return 0.5 * this.viewport.height
    },
    outroHeight () {
      return 0.5 * this.viewport.height
    },
    suffixHeight () {
      return this.viewport.height
    },
    animationBreakpoints () {
      const fixedElementsHeight = this.prefixHeight + this.introHeight + 2 * this.transitionStepHeight + this.outroHeight + this.suffixHeight
      const animationPauseHeight = (this.totalChapterHeight - fixedElementsHeight) / 3

      const introStart = this.discriminationChapterStartPosition + this.prefixHeight
      const introEnd = introStart + this.introHeight
      const firstTransitionStart = introEnd + animationPauseHeight
      const firstTransitionEnd = firstTransitionStart + this.transitionStepHeight
      const outroStart = firstTransitionEnd + 2 * animationPauseHeight + this.transitionStepHeight
      const outroEnd = outroStart + this.outroHeight

      return {
        introStart,
        introEnd,
        firstTransitionStart,
        firstTransitionEnd,
        outroStart,
        outroEnd
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/_variables";

.discrimination-visualization {
  .fallback, .interactive-visualization {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;

    &.interactive-visualization {
      display: none;
    }
  }

  .case-container {
    position: relative;
    height: 25vh;
    top: 10vh;

    .visual {
      position: relative;
      top: 10%;
      display: inline-block;
      width: 30%;
      vertical-align: middle;
      margin-right: 5%;
      height: 90%;

      & > .inside {
        position: relative;
        display: block;
        height: 90%;

        margin: 0 auto;
        text-align: right;
      }

      img {
        position: relative;
        max-width: 100%;
        max-height: 100%;
      }
    }

    .description {
      display: inline-block;

      position: relative;
      width: 60%;
      vertical-align: middle;

      font-family: $font-family-signika;
      font-size: $font-size-small;
      line-height: 1.3em;

      .title {
        display: block;
        font-weight: 700;
        margin-bottom: 0.6em;
      }
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    left: 55%;
    width: 40%;

    padding-left: 0;
    padding-right: 0;
  }
}

.page.js .discrimination-visualization {
  .fallback {
    display: none;
  }

  .interactive-visualization {
    display: block;
  }
}
</style>
