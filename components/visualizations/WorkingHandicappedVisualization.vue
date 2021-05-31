<template>
  <div class="case-study-visalization working-handicapped-visualization">
    <div class="fallback">
      <div class="step-1">
        <div class="inside">
          <Chapter3Case3Step1Visualization />
        </div>
      </div>

      <div class="step-2">
        <div class="inside">
          <Chapter3Case3Step2Visualization />
        </div>
      </div>
    </div>
    <div class="interactive-visualization">
      <DisabilitiesAnimation :breakpoints="animationBreakpoints" :active="active" />
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
      'case3ChapterStartPosition',
      'measuresChapterStartPosition'
    ]),

    // breakpoints
    chapterStart () {
      return this.case3ChapterStartPosition
    },
    chapterEnd () {
      return this.measuresChapterStartPosition
    },

    // transition heights
    prefixHeight () {
      return this.viewport.height
    },
    shapeAppearanceHeight () {
      return 0.5 * this.viewport.height
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
      const fixedElementsHeight = this.prefixHeight + 3 * this.shapeAppearanceHeight + this.outroHeight + this.suffixHeight
      const animationPauseHeight = (this.chapterEnd - this.chapterStart - fixedElementsHeight) / 4

      const startScreen = this.chapterStart + this.prefixHeight + animationPauseHeight
      const statistic1ScreenStart = startScreen + this.shapeAppearanceHeight
      const statistic1ScreenEnd = statistic1ScreenStart + animationPauseHeight
      const blankScreenStart = statistic1ScreenEnd + this.shapeAppearanceHeight
      const blankScreenEnd = blankScreenStart + animationPauseHeight
      const statistic2ScreenStart = blankScreenEnd + this.shapeAppearanceHeight
      const statistic2ScreenEnd = statistic2ScreenStart + animationPauseHeight
      const endScreen = statistic2ScreenEnd + this.outroHeight

      return {
        startScreen,
        statistic1ScreenStart,
        statistic1ScreenEnd,
        blankScreenStart,
        blankScreenEnd,
        statistic2ScreenStart,
        statistic2ScreenEnd,
        endScreen,

        statistic1LegendTextAppearanceStart: statistic1ScreenStart - this.textAppearanceHeight,
        statistic1LegendTextDisappearanceEnd: statistic1ScreenEnd + this.textAppearanceHeight,
        statistic2LegendTextAppearanceStart: statistic2ScreenStart - this.textAppearanceHeight,
        statistic2LegendTextDisappearanceEnd: statistic2ScreenStart + this.textAppearanceHeight
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/_variables";

.working-handicapped-visualization {
  .interactive-visualization {
    display: none;
  }
}

.page.js .working-handicapped-visualization {
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

.working-handicapped-visualization {
  .step-1, .step-2 {
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
      top: 75%;
    }
  }
}
</style>
