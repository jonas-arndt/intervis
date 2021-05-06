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
      'measuresChapterEndPosition'
    ]),
    opacity () {
      const domain = [
        // first transition
        this.introductionStartPosition - 2 * this.verticalViewportCenter,
        this.introductionStartPosition,

        // second transition
        this.discriminationChapterStartPosition - 2 * this.verticalViewportCenter,
        this.discriminationChapterStartPosition,

        // third transition
        this.measuresChapterEndPosition - 5 * this.verticalViewportCenter,
        this.measuresChapterEndPosition - 3 * this.verticalViewportCenter
      ]
      const range = [0.3, 1, 1, 0.3, 0.3, 0]
      return scaleLinear()
        .domain(domain).range(range)(this.verticalScrollPosition)
    },
    greyLinesStyles () {
      const size = scaleLinear()
        .domain([
          this.discriminationChapterStartPosition - 2 * this.verticalViewportCenter,
          this.discriminationChapterStartPosition
        ])
        .range([300, 100])
        .clamp(true)(this.verticalScrollPosition)

      const position = scaleLinear()
        .domain([
          this.discriminationChapterStartPosition - 2 * this.verticalViewportCenter,
          this.discriminationChapterStartPosition
        ])
        .range([-100, 0])
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
    top: -100vh;
    left: -100vh;

    width: 300%;
    height: 300%;

    background: url('~assets/lines/grey_merged.jpg');
    background-size: cover;
  }
}
</style>
