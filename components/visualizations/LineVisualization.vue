<template>
  <div class="background-visualization" :style="{ opacity }">
    <div class="lines" />
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
      'introductionStartPosition'
    ]),
    opacity () {
      const domain = [this.introductionStartPosition - 2 * this.verticalViewportCenter, this.introductionStartPosition]
      const range = [0.3, 1]
      return scaleLinear()
        .domain(domain).range(range)(this.verticalScrollPosition)
    }
  }
}
</script>

<style scoped lang="scss">
.background-visualization {
  position: relative;
  height: 100%;

  .lines {
    position: sticky;
    top: 0;

    width: 100%;
    height: 100vh;

    background: url('~assets/lines/lines-grey.jpg');
    background-size: cover;
  }
}
</style>
