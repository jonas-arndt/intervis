<template>
  <div class="hijab-animation" :style="componentStyles">
    <Blob
      ref="shape1"
      class="shape1"
      :shape="shapes['chapter3_example1_sandrabauer.svg']"
      :rect="shape1Rect"
      :scale="shape1Scale"
      :style="shape1Styles"
      :disable-auto-scale="true"
      clip-path-id="chapter3_example1_shape1"
    >
      <div class="background">
        <div class="lines" />
        <div class="grid" />
      </div>
    </Blob>

    <Blob
      ref="shape2"
      class="shape2"
      :shape="shapes['chapter3_example1_meyremoeztuerk.svg']"
      :rect="shape2Rect"
      :scale="shape2Scale"
      :style="shape2Styles"
      :disable-auto-scale="true"
      clip-path-id="chapter3_example1_shape2"
    >
      <div class="background">
        <div class="lines" />
        <div class="grid" />
      </div>
    </Blob>

    <div class="legend legend-shape1" :style="legendStyles">
      <span class="digit" v-html="$t('chapter3-exampl1-vis1')" />
      <span class="details" v-html="$t('chapter3-exampl1-vis2')" />
    </div>

    <div class="legend legend-shape2" :style="legendStyles">
      <span class="digit" v-html="$t('chapter3-exampl1-vis3')" />
      <span class="details" v-html="$t('chapter3-exampl1-vis4')" />
    </div>

    <div class="quote" :style="quoteStyles">
      <p class="text" v-html="$t('chapter3-example1-quote')" />
    </div>
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

      availableDimensions: { width: 0, height: 0 },
      shape1Rect: { top: 0, left: 0, width: 0, height: 0 },
      shape2Rect: { top: 0, left: 0, width: 0, height: 0 },
      windowSizeScale: 0.5,

      componentOpacity: 0,
      legendOpacity: 0,
      quoteOpacity: 0,
      shape1VisibilityScale: 0,
      shape1Opacity: 1,
      shape2VisibilityScale: 0,
      shape2QuoteResizeScale: 1,
      shape2Opacity: 1,

      defaultTransparentShapeOpacity: 0.5
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition']),
    shape1Scale () {
      return this.shape1VisibilityScale * this.windowSizeScale
    },
    shape2Scale () {
      return this.shape2QuoteResizeScale * this.shape2VisibilityScale * this.windowSizeScale
    },
    shape2FitWindowRatio () {
      const maxWidth = 0.8

      const shapeRect = this.shapes['chapter3_example1_meyremoeztuerk.svg'].rect
      const windowRect = this.availableDimensions

      return (windowRect.width * maxWidth) / (shapeRect.width * this.windowSizeScale)
    },

    // style aggregations
    componentStyles () {
      return {
        opacity: this.componentOpacity
      }
    },
    shape1Styles () {
      return {
        opacity: this.shape1Opacity
      }
    },
    shape2Styles () {
      return {
        opacity: this.shape2Opacity
      }
    },
    legendStyles () {
      return {
        opacity: this.legendOpacity
      }
    },
    quoteStyles () {
      return {
        opacity: this.quoteOpacity
      }
    },

    // scales
    componentOpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.startScreen,
          this.breakpoints.statisticScreenStart,
          this.breakpoints.quoteScreenEnd,
          this.breakpoints.endScreen
        ])
        .range([0, 1, 1, 0])
        .clamp(true)
    },
    shapeScaleScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.startScreen,
          this.breakpoints.statisticScreenStart,
          this.breakpoints.statisticScreenEnd,
          this.breakpoints.shapeScreenStart
        ])
        .range([0, 1, 1, 0])
        .clamp(true)
    },
    shape2OpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.shapeScreenEnd,
          this.breakpoints.quoteScreenStart
        ])
        .range([1, this.defaultTransparentShapeOpacity])
        .clamp(true)
    },
    legendOpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.legendAppearanceStart,
          this.breakpoints.statisticScreenStart,
          this.breakpoints.statisticScreenEnd,
          this.breakpoints.legendDisappearanceEnd
        ])
        .range([0, 1, 1, 0])
        .clamp(true)
    },
    quoteOpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.shapeScreenEnd,
          this.breakpoints.quoteScreenStart
        ])
        .range([0, 1])
        .clamp(true)
    },
    shape2QuoteResizeScaleScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statisticScreenEnd,
          this.breakpoints.shapeScreenStart
        ])
        .range([1, this.shape2FitWindowRatio])
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
      if (!this.active) {
        return
      }

      this.componentOpacity = verticalScrollPosition < this.breakpoints.startScreen && verticalScrollPosition > this.breakpoints.endScreen
        ? 0
        : this.componentOpacityScale(verticalScrollPosition)

      this.shape1VisibilityScale = verticalScrollPosition < this.breakpoints.startScreen && verticalScrollPosition > this.breakpoints.shapeScreenStart
        ? 0
        : this.shapeScaleScale(verticalScrollPosition)

      this.shape1Opacity = verticalScrollPosition < this.breakpoints.statisticScreenEnd
        ? 1
        : verticalScrollPosition > this.breakpoints.shapeScreenStart
          ? 0
          : this.shapeScaleScale(verticalScrollPosition)

      this.shape2VisibilityScale = verticalScrollPosition < this.breakpoints.startScreen
        ? 0
        : verticalScrollPosition > this.breakpoints.statisticScreenStart
          ? 1
          : this.shapeScaleScale(verticalScrollPosition)

      this.shape2QuoteResizeScale = verticalScrollPosition < this.breakpoints.statisticScreenEnd
        ? 1
        : verticalScrollPosition > this.breakpoints.shapeScreenStart
          ? this.shape2FitWindowRatio
          : this.shape2QuoteResizeScaleScale(verticalScrollPosition)

      this.shape2Opacity = verticalScrollPosition < this.breakpoints.shapeScreenEnd
        ? 1
        : verticalScrollPosition > this.breakpoints.quoteScreenStart
          ? this.defaultTransparentShapeOpacity
          : this.shape2OpacityScale(verticalScrollPosition)

      this.legendOpacity = verticalScrollPosition < this.breakpoints.legendAppearanceStart && verticalScrollPosition > this.breakpoints.legendDisappearanceEnd
        ? 0
        : this.legendOpacityScale(verticalScrollPosition)

      this.quoteOpacity = verticalScrollPosition < this.breakpoints.shapeScreenEnd
        ? 0
        : verticalScrollPosition > this.breakpoints.quoteScreenStart
          ? 1
          : this.quoteOpacityScale(verticalScrollPosition)
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
      this.updateAvailableDimensions(parentRect)
      this.updateShapeRect(parentRect, 'shape1Rect', 'shape1')
      this.updateShapeRect(parentRect, 'shape2Rect', 'shape2')
    },
    updateAvailableDimensions (rect) {
      this.availableDimensions = { width: rect.width, height: rect.height }
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

.hijab-animation {
  opacity: 0;

  .background {
    position: absolute;

    .grid, .lines {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .shape1 {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 40%;

    .grid {
      background: url('~assets/grid/dark_gray.png');
      background-size: cover;
    }
    .lines {
      background: url('~assets/grid/chapter2_frontlayer_shape2.png');
      background-size: cover;
      z-index: 10;
    }
  }

  .shape2 {
    position: absolute;
    top: 60%;
    left: 10%;
    width: 80%;
    height: 30%;

    .grid {
      background: url('~assets/grid/chapter3_frauenmithijab.png');
      background-size: cover;
    }
  }

  .quote {
    opacity: 0;
  }

  .legend-shape1, .legend-shape2 {
    opacity: 0;

    &.legend-shape1 {
      right: inherit;
      left: 0;
    }
  }
}
</style>
