<template>
  <div class="measures-animation">
    <Blob
      ref="shape1"
      :shape="shapes['chapter4_1.svg']"
      clip-path-id="clip-path-4-1"
      class="visual top-left"
      :active="active"
      :style="{ opacity: blobFadeIn }"
      :scale="blobFadeIn"
      @parentPositionRequested="handlePositionRequest"
    >
      <div class="background">
        <div class="lines" :style="{ opacity: linesFadeOut }" />
        <div class="grid" :style="{ opacity: gridFadeOut }" />
      </div>
    </Blob>
    <Blob
      ref="shape2"
      :shape="shapes['chapter4_2.svg']"
      clip-path-id="clip-path-4-2"
      class="visual bottom-right"
      :active="active"
      :style="{ opacity: blobFadeIn }"
      :scale="blobFadeIn"
      @parentPositionRequested="handlePositionRequest"
    >
      <div class="background" :style="{ opacity: gridFadeOut }" />
    </Blob>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { scaleLinear } from 'd3-scale'
import shapes from '~/data/shapes.json'

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    breakpoints: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {
      shapes
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition']),
    trimmedScrollPosition () {
      if (this.verticalScrollPosition <= this.breakpoints[0]) {
        return this.breakpoints[0]
      }

      if (this.verticalScrollPosition >= this.breakpoints[this.breakpoints.length - 1]) {
        return this.breakpoints[this.breakpoints.length - 1]
      }

      return this.verticalScrollPosition
    },

    // blob animation
    blobFadeInScale () {
      return scaleLinear()
        .domain([
          this.breakpoints[1],
          this.breakpoints[2]
        ])
        .range([0, 1])
        .clamp(true)
    },
    blobFadeIn () {
      return this.blobFadeInScale(this.trimmedScrollPosition)
    },

    // lines animation
    linesFadeOutScale () {
      return scaleLinear()
        .domain([
          this.breakpoints[2],
          this.breakpoints[3]
        ])
        .range([1, 0])
        .clamp(true)
    },
    linesFadeOut () {
      return this.linesFadeOutScale(this.trimmedScrollPosition)
    },

    // grid animations
    gridFadeOutScale () {
      return scaleLinear()
        .domain([
          this.breakpoints[3],
          this.breakpoints[4]
        ])
        .range([1, 0])
        .clamp(true)
    },
    gridFadeOut () {
      return this.gridFadeOutScale(this.trimmedScrollPosition)
    }
  },
  methods: {
    handlePositionRequest (requestingComponent) {
      requestingComponent.updateParentRect(this.$el.getBoundingClientRect())
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/_variables";

  .measures-animation {
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
  }
</style>
