<template>
  <div class="case-study-visalization school-visualization">
    <div class="fallback">
      <div class="step-1">
        <div class="inside">
          <Chapter3Case2Step1Visualization />
        </div>
      </div>
      <div class="step-2">
        <div class="inside">
          <Chapter3Case2Step2Visualization />
        </div>
      </div>
      <div class="step-3">
        <div class="inside">
          <Chapter3Case2Step3Visualization />
        </div>
      </div>
    </div>
    <div class="interactive-visualization">
      <SchoolAnimation :breakpoints="animationBreakpoints" :active="active" />
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
      'case2ChapterStartPosition',
      'case3ChapterStartPosition'
    ]),

    // breakpoints
    chapterStart () {
      return this.case2ChapterStartPosition
    },
    chapterEnd () {
      return this.case3ChapterStartPosition
    },

    // transition heights
    prefixHeight () {
      return this.viewport.height
    },
    shapeAppearanceHeight () {
      return 0.5 * this.viewport.height
    },
    quoteAppearanceHeight () {
      return 0.5 * this.viewport.height
    },
    shapeTransitionHeight () {
      return 0.5 * this.viewport.height
    },
    statisticTransitionHeight () {
      return 0.75 * this.viewport.height
    },
    textAppearanceHeight () {
      return 0.25 * this.viewport.height
    },
    outroHeight () {
      return 0.5 * this.viewport.height
    },
    suffixHeight () {
      return this.viewport.height
    },

    // breakpoint aggregation
    animationBreakpoints () {
      const fixedElementsHeight = this.prefixHeight + this.shapeAppearanceHeight + this.quoteAppearanceHeight + this.shapeTransitionHeight + this.statisticTransitionHeight + this.outroHeight + this.suffixHeight
      const animationPauseHeight = (this.chapterEnd - this.chapterStart - fixedElementsHeight) / 4

      const startScreen = this.chapterStart + this.prefixHeight + animationPauseHeight
      const quoteScreenStart = startScreen + this.shapeAppearanceHeight
      const quoteScreenEnd = quoteScreenStart + animationPauseHeight
      const quoteDisappearanceEnd = quoteScreenEnd + this.quoteAppearanceHeight
      const statistic1ScreenStart = quoteDisappearanceEnd + this.shapeTransitionHeight
      const statistic1ScreenEnd = statistic1ScreenStart + animationPauseHeight
      const statistic2ScreenStart = statistic1ScreenEnd + this.statisticTransitionHeight
      const statistic2ScreenEnd = statistic2ScreenStart + animationPauseHeight
      const endScreen = statistic2ScreenEnd + this.outroHeight

      return {
        startScreen,
        quoteScreenStart,
        quoteScreenEnd,
        quoteDisappearanceEnd,
        statistic1ScreenStart,
        statistic1ScreenEnd,
        statistic2ScreenStart,
        statistic2ScreenEnd,
        endScreen,

        statistic1LegendTextAppearanceStart: statistic1ScreenStart - this.textAppearanceHeight,
        statistic1LegendTextDisappearanceEnd: statistic1ScreenEnd + this.textAppearanceHeight,
        statistic2LegendTextAppearanceStart: statistic2ScreenStart - this.textAppearanceHeight,
        statistic2LegendTextDisappearanceEnd: statistic2ScreenEnd + this.textAppearanceHeight
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/_variables";

.school-visualization {
  .interactive-visualization {
    display: none;
  }
}

.page.js .school-visualization {
  .fallback {
    display: none;
  }

  .interactive-visualization {
    position: -webkit-sticky;
    position: sticky;
    display: block;
    top: 0;
    height: 100vh;
  }
}

.school-visualization .fallback {
  .step-1, .step-2, .step-3 {
    position: absolute;
    min-height: 100vh;
    width: 100%;
    height: 25%;

    & > .inside {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }

    // step specific styles

    &.step-1 {
      top: 25%;
    }

    &.step-2 {
      top: 50%;
    }

    &.step-3 {
      top: 75%;
    }
  }
}
</style>
