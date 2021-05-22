<template>
  <div class="measures-animation" :style="componentStyles">
    <Blob
      ref="shape1"
      :shape="shapes['chapter4_1.svg']"
      clip-path-id="clip-path-4-1"
      class="visual top-left"
      :rect="shape1Rect"
      :scale="introProgress"
    >
      <div class="background">
        <div class="lines" :style="shape1LinesStyles" />
        <div class="text" :style="shape1TextStyles">
          <Words />
        </div>
        <div class="grid" :style="gridStyles" />
      </div>
    </Blob>
    <Blob
      ref="shape2"
      :shape="shapes['chapter4_2.svg']"
      clip-path-id="clip-path-4-2"
      class="visual bottom-right"
      :rect="shape2Rect"
      :scale="introProgress"
    >
      <div class="background">
        <div class="grid" :style="gridStyles" />
        <div class="text" :style="shape2TextStyles">
          <Words />
        </div>
      </div>

      <template v-slot:unclipped>
        <div class="unclipped-text" :style="shape2UnclippedTextStyles">
          <div class="inside">
            <Words ref="unclippedText" />
          </div>
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
      shape2Rect: { top: 0, left: 0, width: 0, height: 0 },

      introProgress: 0,
      firstStepProgress: 0,
      secondStepProgress: 0,
      outroProgress: 0
    }
  },
  computed: {
    ...mapState(['viewport', 'verticalScrollPosition']),

    // text positions
    shape1TextPositionStyles () {
      return this.getStylesFromRect(this.shape1Rect)
    },
    shape2TextPositionStyles () {
      return this.getStylesFromRect(this.shape2Rect)
    },

    // text scale ratios
    shape2TextRatio () {
      return Math.min(
        this.viewport.width / this.shape2Rect.width,
        this.viewport.height / this.shape2Rect.height
      )
    },

    // general styles
    componentStyles () {
      return {
        opacity: this.introProgress
      }
    },
    gridStyles () {
      return {
        opacity: 1 - this.secondStepProgress
      }
    },

    // shape1 styles
    shape1LinesStyles () {
      return {
        opacity: 1 - this.firstStepProgress
      }
    },
    shape1TextStyles () {
      return { opacity: 1 - this.outroProgress, ...this.shape1TextPositionStyles }
    },

    // shape2 styles
    shape2TextStyles () {
      return { opacity: 1 - this.secondStepProgress, ...this.shape2TextPositionStyles }
    },
    shape2UnclippedTextStyles () {
      const offsetX = this.outroProgress * this.shape2Rect.left
      const offsetY = this.outroProgress * this.shape2Rect.top
      const ratio = 1 + this.outroProgress * (this.shape2TextRatio - 1)

      return {
        ...this.shape2TextPositionStyles,
        opacity: this.secondStepProgress,
        transform: `translate(${-offsetX}px, ${-offsetY}px) scale(${ratio})`
      }
    },

    // scales
    introProgressScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.introStart,
          this.breakpoints.introEnd
        ])
        .range([0, 1])
        .clamp(true)
    },
    firstStepProgressScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.introEnd,
          this.breakpoints.firstStepEnd
        ])
        .range([0, 1])
        .clamp(true)
    },
    secondStepProgressScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.firstStepEnd,
          this.breakpoints.secondStepEnd
        ])
        .range([0, 1])
        .clamp(true)
    },
    outroProgressScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.secondStepEnd,
          this.breakpoints.outroEnd
        ])
        .range([0, 1])
        .clamp(true)
    }
  },
  watch: {
    active (active) {
      if (active) {
        this.updateShapeRects()
      }
    },
    verticalScrollPosition (verticalScrollPosition) {
      this.introProgress = verticalScrollPosition < this.breakpoints.introStart
        ? 0
        : verticalScrollPosition > this.breakpoints.introEnd
          ? 1
          : this.introProgressScale(verticalScrollPosition)

      this.firstStepProgress = verticalScrollPosition < this.breakpoints.introEnd
        ? 0
        : verticalScrollPosition > this.breakpoints.firstStepEnd
          ? 1
          : this.firstStepProgressScale(verticalScrollPosition)

      this.secondStepProgress = verticalScrollPosition < this.breakpoints.firstStepEnd
        ? 0
        : verticalScrollPosition > this.breakpoints.secondStepEnd
          ? 1
          : this.secondStepProgressScale(verticalScrollPosition)

      this.outroProgress = verticalScrollPosition < this.breakpoints.secondStepEnd
        ? 0
        : verticalScrollPosition > this.breakpoints.outroEnd
          ? 1
          : this.outroProgressScale(verticalScrollPosition)
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
    getStylesFromRect (rect) {
      const styles = {}
      for (const [key, value] of Object.entries(rect)) {
        styles[key] = value + 'px'
      }
      return styles
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

      if (!this.rectsAreEqual(this[rectKey], rectData)) {
        this[rectKey] = rectData
      }
    },
    rectsAreEqual (rect1, rect2) {
      for (const key in rect1) {
        if (rect1[key] !== rect2[key]) {
          return false
        }
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.measures-animation {
  .visual {
    overflow: visible;

    .background {
      position: absolute;

      .grid, .lines {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .text {
        position: absolute;
      }
    }
  }

  .visual.top-left .background {
    .grid {
      background: url('~assets/grid/dark_gray.png');
      background-size: cover;
    }
    .lines {
      background: url('~assets/grid/chapter2_frontlayer_shape2.png');
      background-size: cover;
      z-index: 10;
    }

    .text {
      z-index: 5;
      transform-origin: center;
      transform: scale(0.8);
    }
  }

  .visual.bottom-right {
    img {
      bottom: auto;
      right: auto;
    }

    .background {
      .grid {
        background: url('~assets/grid/chapter4_shape2.png');
        background-size: cover;
        z-index: 20;
      }

      .text {
        z-index: 10;
        transform-origin: center;
        transform: scale(0.8);
      }
    }

    .unclipped-text {
      position: absolute;
      transform-origin: left top;

      & > .inside {
        transform-origin: center;
        transform: scale(0.8);
      }
    }
  }
}
</style>
