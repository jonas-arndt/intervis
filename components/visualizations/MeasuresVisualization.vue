<template>
  <div class="measures-visualization">
    <div class="fallback">
      <div class="step-1">
        <div class="inside">
          <Chapter4Step1Visualization />
        </div>
      </div>
      <div class="step-2">
        <div class="inside">
          <Chapter4Step2Visualization />
        </div>
      </div>
      <div class="step-3">
        <div class="inside">
          <Chapter4Step3Visualization />
        </div>
      </div>
    </div>
    <div ref="interactiveVisualization" class="interactive-visualization chapter-4-visualization">
      <MeasuresAnimation :breakpoints="animationBreakpoints" :active="active" />
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
      'measuresChapterStartPosition',
      'nextStepsChapterStartPosition'
    ]),
    totalChapterHeight () {
      return this.nextStepsChapterStartPosition - this.measuresChapterStartPosition
    },
    prefixHeight () {
      return this.viewport.height
    },
    introHeight () {
      return 0.5 * this.viewport.height
    },
    outroHeight () {
      return 1.5 * this.viewport.height
    },
    animationBreakpoints () {
      const fixedElementsHeight = this.prefixHeight + this.introHeight + this.outroHeight
      const transitionStepHeight = (this.totalChapterHeight - fixedElementsHeight) / 2

      const chapterStart = this.measuresChapterStartPosition
      const prefixEnd = chapterStart + this.prefixHeight
      const introEnd = prefixEnd + this.introHeight
      const firstStepEnd = introEnd + transitionStepHeight
      const secondStepEnd = firstStepEnd + transitionStepHeight
      const outroEnd = secondStepEnd + this.outroHeight

      return [
        chapterStart,
        prefixEnd,
        introEnd,
        firstStepEnd,
        secondStepEnd,
        outroEnd
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.measures-visualization {
  .interactive-visualization {
    display: none;
  }

}

.page.js .measures-visualization {
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

.measures-visualization .fallback {
  .step-1, .step-2, .step-3 {
    position: absolute;
    top: 0%;
    height: 33%;
    min-height: 100vh;
    width: 100%;

    &.step-2 {
      top: 33%;
    }

    &.step-3 {
      top: 67%;
    }

    & > .inside {
      position: sticky;
      top: 0;
      width: 100%;
      height: 100vh;
    }
  }
}
</style>
