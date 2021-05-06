<template>
  <div class="background-visualization" :style="{ opacity }">
    <div class="grey-lines" :style="greyLinesStyles" />
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
    opacity () {
      const domain = [
        // first transition: 0.3 > 1
        this.introductionStartPosition - 2 * this.verticalViewportCenter,
        this.introductionStartPosition,

        // second transition: 1 > 0
        this.intersectionalityChapterStartPosition - 4 * this.verticalViewportCenter,
        this.intersectionalityChapterStartPosition - 2 * this.verticalViewportCenter,

        // third transition: 0 > 1
        this.intersectionalityChapterStartPosition,
        this.intersectionalityChapterStartPosition + 2 * this.verticalViewportCenter,

        // fourth transition: 1 > 0.3
        this.discriminationChapterStartPosition - 2 * this.verticalViewportCenter,
        this.discriminationChapterStartPosition,

        // fifth transition: 0.3 > 0
        this.nextStepsChapterStartPosition - 5 * this.verticalViewportCenter,
        this.nextStepsChapterStartPosition - 3 * this.verticalViewportCenter
      ]
      const range = [0.3, 1, 1, 0, 0, 1, 1, 0.3, 0.3, 0]
      return scaleLinear()
        .domain(domain).range(range).clamp(true)(this.verticalScrollPosition)
    },
    greyLinesStyles () {
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
.background-visualization {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .grey-lines {
    position: absolute;
    top: -50vh;
    left: -50vh;

    width: 200%;
    height: 200%;

    background: url('~assets/lines/grey_merged.jpg');
    background-size: cover;
  }
}
</style>
