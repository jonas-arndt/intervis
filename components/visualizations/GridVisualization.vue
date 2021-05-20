<template>
  <div class="background-visualization">
    <div class="grid-container" :style="gridContainerStyles">
      <div class="red-grid" :style="redGridStyles" />
      <div class="grey-grid" :style="greyGridStyles" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'

export default {
  computed: {
    ...mapState([
      'verticalScrollPosition',
      'verticalViewportCenter',
      'introductionStartPosition',
      'intersectionalityChapterStartPosition',
      'discriminationChapterStartPosition',
      'nextStepsChapterStartPosition',
      'viewport'
    ]),
    redOpacityScaleFunction () {
      const domain = [
        // 0 > 1
        this.intersectionalityChapterStartPosition - 4 * this.verticalViewportCenter,
        this.intersectionalityChapterStartPosition - 2 * this.verticalViewportCenter,

        // 1 > 0
        this.discriminationChapterStartPosition - 2 * this.verticalViewportCenter,
        this.discriminationChapterStartPosition
      ]
      const range = [0, 1, 1, 0]
      return scaleLinear()
        .domain(domain).range(range).clamp(true)
    },
    redOpacity () {
      return this.redOpacityScaleFunction(this.verticalScrollPosition)
    },
    redGridStyles () {
      return {
        opacity: this.redOpacity
      }
    },
    greyOpacityScaleFunction () {
      const domain = [
        // 0.3 > 1
        this.introductionStartPosition - 2 * this.verticalViewportCenter,
        this.introductionStartPosition,

        // 1 > 0.3
        this.discriminationChapterStartPosition - 2 * this.verticalViewportCenter,
        this.discriminationChapterStartPosition,

        // 0.3 > 0
        this.nextStepsChapterStartPosition - 5 * this.verticalViewportCenter,
        this.nextStepsChapterStartPosition - 3 * this.verticalViewportCenter
      ]
      const range = [0.3, 1, 1, 0.3, 0.3, 0]
      return scaleLinear()
        .domain(domain).range(range).clamp(true)
    },
    greyOpacity () {
      return this.greyOpacityScaleFunction(this.verticalScrollPosition)
    },
    greyGridStyles () {
      return {
        opacity: this.greyOpacity
      }
    },
    gridTransformDomain () {
      return [
        this.discriminationChapterStartPosition - 2 * this.verticalViewportCenter,
        this.discriminationChapterStartPosition
      ]
    },
    gridScaleFunction () {
      return scaleLinear()
        .domain(this.gridTransformDomain)
        .range([1, 0.5])
        .clamp(true)
    },
    gridScale () {
      return this.gridScaleFunction(this.verticalScrollPosition)
    },
    gridContainerStyles () {
      return {
        transform: `scale(${this.gridScale})`
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/_variables";

.background-visualization {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .grid-container {
    position: absolute;
    top: -50vh;
    left: -50vw;

    width: 200%;
    height: 200%;
  }

  .grey-grid, .red-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &.grey-grid {
      background: url('~assets/lines/grey_merged.jpg');
      background-size: cover;
      z-index: 10;
      opacity: 0.3;
    }

    &.red-grid {
      background: url('~assets/lines/red_merged.jpg');
      background-size: cover;
      z-index: 20;
      opacity: 0;
    }
  }
}
</style>
