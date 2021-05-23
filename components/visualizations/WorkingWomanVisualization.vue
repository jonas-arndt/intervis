<template>
  <div class="case-study-visalization working-woman-visualization">
    <div class="fallback">
      <div class="step-1">
        <div class="inside">
          <Chapter3Case1Step1Visualization />
        </div>
      </div>
      <div class="step-2">
        <div class="inside">
          <Chapter3Case1Step2Visualization />
        </div>
      </div>
    </div>
    <div class="interactive-visualization">
      <HijabAnimation :breakpoints="animationBreakpoints" :active="active" />
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
      'case1ChapterStartPosition',
      'case2ChapterStartPosition'
    ]),

    // breakpoints
    chapterStart () {
      return this.case1ChapterStartPosition
    },
    chapterEnd () {
      return this.case2ChapterStartPosition
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
    shapeTransitionHeight () {
      return 0.5 * this.viewport.height
    },
    outroHeight () {
      return 0.5 * this.viewport.height
    },
    suffixHeight () {
      return this.viewport.height
    },

    // breakpoint aggregation
    animationBreakpoints () {
      const fixedElementsHeight = this.prefixHeight + this.shapeAppearanceHeight + 2 * this.shapeTransitionHeight + this.outroHeight + this.suffixHeight
      const animationPauseHeight = (this.chapterEnd - this.chapterStart - fixedElementsHeight) / 4

      const startScreen = this.chapterStart + this.prefixHeight + animationPauseHeight
      const statisticScreenStart = startScreen + this.shapeTransitionHeight
      const statisticScreenEnd = statisticScreenStart + animationPauseHeight
      const shapeScreenStart = statisticScreenEnd + this.shapeTransitionHeight
      const shapeScreenEnd = shapeScreenStart + animationPauseHeight
      const quoteScreenStart = shapeScreenEnd + this.shapeTransitionHeight
      const quoteScreenEnd = quoteScreenStart + animationPauseHeight
      const endScreen = quoteScreenEnd + this.outroHeight

      return {
        startScreen,
        statisticScreenStart,
        statisticScreenEnd,
        shapeScreenStart,
        shapeScreenEnd,
        quoteScreenStart,
        quoteScreenEnd,
        endScreen,

        legendAppearanceStart: statisticScreenStart - this.textAppearanceHeight,
        legendDisappearanceEnd: statisticScreenEnd + this.textAppearanceHeight,
        quoteAppearanceStart: quoteScreenStart - this.textAppearanceHeight
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/_variables";

.working-woman-visualization {
  .interactive-visualization {
    display: none;
  }
}

.page.js .working-woman-visualization {
  .fallback {
    display: none;
  }

  .interactive-visualization {
    position: sticky;
    display: block;
    top: 0;
    height: 100vh;
  }
}

.working-woman-visualization .fallback {
  .step-1, .step-2 {
    position: absolute;
    width: 100%;
    min-height: 100vh;

    & > .inside {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }

    // step specific styles

    &.step-1 {
      top: 0;
      height: 30%;
    }

    &.step-2 {
      top: 40%;
      height: 60%;
    }
  }
}
</style>
