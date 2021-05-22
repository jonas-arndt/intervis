<template>
  <div class="measures-animation">
    <Blob
      ref="shape1"
      :shape="shapes['chapter4_1.svg']"
      clip-path-id="clip-path-4-1"
      class="visual top-left"
      :rect="shape1Rect"
      :style="{ opacity: blobFadeIn }"
      :scale="blobFadeIn"
    >
      <div class="background">
        <div class="lines" :style="{ opacity: linesFadeOut }" />
        <div class="text" :style="shape1TextStyles">
          <Words />
        </div>
        <div class="grid" :style="{ opacity: gridFadeOut }" />
      </div>
    </Blob>
    <Blob
      ref="shape2"
      :shape="shapes['chapter4_2.svg']"
      clip-path-id="clip-path-4-2"
      class="visual bottom-right"
      :rect="shape2Rect"
      :style="{ opacity: blobFadeIn }"
      :scale="blobFadeIn"
    >
      <div class="background">
        <div class="grid" :style="{ opacity: gridFadeOut }" />
        <div class="text" :style="shape2TextStyles">
          <Words />
        </div>
      </div>

      <template v-slot:unclipped>
        <div class="unclipped-text" :style="shape2UnclippedTextStyles">
          <Words />
        </div>
      </template>
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
      type: Object,
      required: true,
      default: () => { return {} }
    }
  },
  data () {
    return {
      shapes,
      shape1Rect: { top: 0, left: 0, width: 0, height: 0 },
      shape2Rect: { top: 0, left: 0, width: 0, height: 0 }
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition', 'viewport']),
    trimmedScrollPosition () {
      if (this.verticalScrollPosition <= this.breakpoints.chapterStart) {
        return this.breakpoints.chapterStart
      }

      if (this.verticalScrollPosition >= this.breakpoints.outroEnd) {
        return this.breakpoints.outroEnd
      }

      return this.verticalScrollPosition
    },

    // blob animation
    blobFadeInScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.introStart,
          this.breakpoints.introEnd
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
          this.breakpoints.introEnd,
          this.breakpoints.firstStepEnd
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
          this.breakpoints.firstStepEnd,
          this.breakpoints.secondStepEnd
        ])
        .range([1, 0])
        .clamp(true)
    },
    gridFadeOut () {
      return this.gridFadeOutScale(this.trimmedScrollPosition)
    },

    // text animation
    textScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.secondStepEnd,
          this.breakpoints.outroEnd
        ])
        .range([1, 0])
        .clamp(true)
    },
    textOpacity () {
      return this.textScale(this.trimmedScrollPosition)
    },

    // text styles
    shape1TextPositionStyles () {
      const styles = {}

      if (this.active) {
        const rect = this.$refs.shape1.$el.getBoundingClientRect()
        const parentRect = this.$el.getBoundingClientRect()

        const horizontalPadding = 0.1
        const top = rect.top - parentRect.top
        const left = rect.left - parentRect.left

        styles.left = (left + horizontalPadding * rect.width) + 'px'
        styles.width = ((1 - 2 * horizontalPadding) * rect.width) + 'px'
        styles.top = top + 'px'
        styles.height = rect.height + 'px'
      }

      return styles
    },
    shape1TextStyles () {
      return { opacity: this.textOpacity, ...this.shape1TextPositionStyles }
    },
    shape2TextPositionRawStyles () {
      const styles = {}

      if (this.active) {
        const rect = this.$refs.shape2.$el.getBoundingClientRect()
        const parentRect = this.$el.getBoundingClientRect()

        const horizontalPadding = 0.1
        const top = rect.top - parentRect.top
        const left = rect.left - parentRect.left

        styles.left = (left + horizontalPadding * rect.width)
        styles.width = ((1 - 2 * horizontalPadding) * rect.width)
        styles.top = top
        styles.height = rect.height
      }

      return styles
    },
    shape2TextPositionStyles () {
      const styles = {}
      for (const [key, value] of Object.entries(this.shape2TextPositionRawStyles)) {
        styles[key] = value + 'px'
      }
      return styles
    },
    shape2TextStyles () {
      return { opacity: this.gridFadeOut, ...this.shape2TextPositionStyles }
    },
    shape2UnclippedTextStyles () {
      const styles = { opacity: 1 - this.gridFadeOut, ...this.shape2TextPositionStyles }

      const transformations = {}
      if ('top' in styles) {
        const rect = this.shape2TextPositionRawStyles
        const domain = [this.breakpoints.secondStepEnd, this.breakpoints.outroEnd]

        // scale
        const ratioX = this.viewport.width / rect.width
        const ratioY = this.viewport.height / rect.height
        const ratio = Math.min(ratioX, ratioY)

        const scale = scaleLinear()
          .domain(domain).range([1, ratio]).clamp(true)(this.trimmedScrollPosition)

        // translate
        const widthOffset = (this.viewport.width - ratio * rect.width) / 2
        const translateX = scaleLinear()
          .domain(domain).range([0, rect.left - widthOffset]).clamp(true)(this.trimmedScrollPosition)

        const heightOffset = (this.viewport.height - ratio * rect.height) / 2
        const translateY = scaleLinear()
          .domain(domain).range([0, rect.top - heightOffset]).clamp(true)(this.trimmedScrollPosition)

        transformations.transform = `translate(${-translateX}px, ${-translateY}px) scale(${scale})`
      }
      return { ...styles, ...transformations }
    }
  },
  watch: {
    active (active) {
      if (active) {
        this.updateShapeRects()
      }
    }
  },
  mounted () {
    this.$nuxt.$on('windowResized', this.handleWindowResize)
  },
  methods: {
    handleWindowResize () {
      if (this.active) {
        this.updateShapeRects()
      }
    },
    updateShapeRects () {
      const parentRect = this.$el.getBoundingClientRect()
      this.updateShapeRect(parentRect, 'shape1Rect', 'shape1')
      this.updateShapeRect(parentRect, 'shape2Rect', 'shape2')
    },
    updateShapeRect (parentRect, rectKey, shapeKey) {
      const childRect = this.$refs[shapeKey].$el.getBoundingClientRect()
      const rectData = {
        top: childRect.top - parentRect.top,
        left: childRect.left,
        width: childRect.width,
        height: childRect.height
      }

      let valueChanged = false
      for (const key in this[rectKey]) {
        if (this[rectKey][key] !== rectData[key]) {
          valueChanged = true
          continue
        }
      }

      if (valueChanged) {
        this[rectKey] = rectData
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/_variables";

  .measures-animation {
    .visual {
      overflow: visible;
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
      .text {
        position: absolute;
        z-index: 5;
      }
    }
  }

  .visual.bottom-right {
    img {
      bottom: auto;
      right: auto;
    }

    .background {
      position: absolute;

      .grid {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: url('~assets/grid/chapter4_shape2.png');
        background-size: cover;

        z-index: 20;
      }

      .text {
        position: absolute;
        z-index: 10;
      }
    }

    .unclipped-text {
      position: absolute;
      transform-origin: left top;
    }
  }
}
</style>
