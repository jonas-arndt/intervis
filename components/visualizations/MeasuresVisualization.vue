<template>
  <div class="measures-visualization">
    <div class="fallback">
      <div class="step-1">
        <Chapter4Step1Visualization />
      </div>
      <div class="step-2">
        <Chapter4Step2Visualization />
      </div>
      <div class="step-3">
        <Chapter4Step3Visualization />
      </div>
    </div>
    <div class="interactive-visualization chapter-4-visualization">
      <Blob
        ref="shape1"
        :point-list="shapes['chapter4_1.svg'].points"
        clip-path-id="clip-path-4-1"
        class="visual top-left"
        :parent-rect="parentRect"
      >
        <div class="background" />
      </Blob>
      <Blob ref="shape2" :point-list="shapes['chapter4_2.svg'].points" :parent-rect="parentRect" clip-path-id="clip-path-4-2" class="visual bottom-right">
        <div class="background" />
      </Blob>
    </div>
  </div>
</template>

<script>
import shapes from '~/data/shapes.json'

export default {
  data () {
    return {
      shapes,
      parentRect: { top: 0, left: 0 }
    }
  },
  mounted () {
    const rect = this.$el.getBoundingClientRect()
    this.parentRect = { top: rect.top, left: rect.left }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.measures-visualization {
  .interactive-visualization {
    display: none;
  }

  .visual.bottom-right, .visual.top-left {
    .background {
      background: url('~assets/lines/grey_merged.jpg');
      background-size: cover;
    }
  }

  .fallback {
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

      & > * {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100vh;
      }
    }
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
</style>
