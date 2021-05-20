<template>
  <div class="background-visualization">
    <div class="grid-container" :style="gridStyles">
      <div class="red-grid" :style="{ opacity: redOpacity }" />
      <div class="grey-grid" :style="{ opacity: greyOpacity }" />
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
      'nextStepsChapterStartPosition'
    ]),
    redOpacity () {
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
        .domain(domain).range(range).clamp(true)(this.verticalScrollPosition)
    },
    greyOpacity () {
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
        .domain(domain).range(range).clamp(true)(this.verticalScrollPosition)
    },
    gridStyles () {
      const size = scaleLinear()
        .domain([
          this.discriminationChapterStartPosition - 2 * this.verticalViewportCenter,
          this.discriminationChapterStartPosition
        ])
        .range([200, 100])
        .clamp(true)(this.verticalScrollPosition)

      const position = scaleLinear()
        .domain([
          this.discriminationChapterStartPosition - 2 * this.verticalViewportCenter,
          this.discriminationChapterStartPosition
        ])
        .range([-50, 0])
        .clamp(true)(this.verticalScrollPosition)

      scaleLinear()
      return {
        width: size + '%',
        height: size + '%',
        top: position + 'vh',
        left: position + 'vw'
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
    left: -50vh;

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
