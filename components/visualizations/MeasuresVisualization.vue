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
        :shape="shapes['chapter4_1.svg']"
        clip-path-id="clip-path-4-1"
        class="visual top-left"
        :active="active"
        @parentPositionRequested="handlePositionRequest"
      >
        <div class="background">
          <div class="lines" />
          <div class="grid" />
        </div>
      </Blob>
      <Blob
        ref="shape2"
        :shape="shapes['chapter4_2.svg']"
        clip-path-id="clip-path-4-2"
        class="visual bottom-right"
        :active="active"
        @parentPositionRequested="handlePositionRequest"
      >
        <div class="background" />
      </Blob>
    </div>
  </div>
</template>

<script>
import shapes from '~/data/shapes.json'

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      shapes
    }
  },
  methods: {
    handlePositionRequest (requestingComponent) {
      requestingComponent.updateParentRect(this.$refs.interactiveVisualization.getBoundingClientRect())
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

  .visual.top-left {
    .background {
      position: absolute;
      .grid, .lines {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &.grid {
          background: url('~assets/grid/dark_gray.png');
          background-size: cover;
        }
        &.lines {
          background: url('~assets/grid/chapter2_frontlayer_shape2.png');
          background-size: cover;
          z-index: 10;
        }
      }
    }
  }

  .visual.bottom-right {
    .background {
      background: url('~assets/grid/chapter4_shape2.png');
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
