<template>
  <div class="disabilities-animation" :style="componentStyles">
    <Blob
      ref="shape1"
      class="shape1"
      :shape="shapes['chapter3_example3_frauen*mitbehinderung_gewalt.svg']"
      :rect="shape1Rect"
      :scale="shapeScale"
      clip-path-id="chapter3_example3_shape1"
    >
      <div class="background">
        <div class="grid" />
      </div>
    </Blob>

    <Blob
      ref="shape2"
      class="shape2"
      :shape="shapes['chapter3_example3_frauen*ohnebehinderung_gewalt.svg']"
      :rect="shape2Rect"
      :scale="shapeScale"
      clip-path-id="chapter3_example3_shape2"
    >
      <div class="background">
        <div class="lines" />
        <div class="grid" />
      </div>
    </Blob>

    <div class="statistic1" :style="statistic1Styles">
      <div class="legend legend-shape1">
        <span class="details" v-html="$t('chapter3-example3-vis1')" />
      </div>
      <div class="legend legend-shape2">
        <span class="details" v-html="$t('chapter3-example3-vis2')" />
      </div>
    </div>

    <div class="statistic2" :style="statistic2Styles">
      <div class="legend legend-shape1">
        <span class="digit" v-html="$t('chapter3-example3-vis3')" />
        <span class="details" v-html="$t('chapter3-example3-vis4')" />
      </div>
      <div class="legend legend-shape2">
        <span class="digit" v-html="$t('chapter3-example3-vis5')" />
        <span class="details" v-html="$t('chapter3-example3-vis6')" />
      </div>
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

      shape1Rect: { top: 0, left: 0, width: 0, height: 0 },
      shape2Rect: { top: 0, left: 0, width: 0, height: 0 },

      componentOpacity: 0,
      shapeVisibility: 0,
      statistic1Opacity: 0,
      statistic2Opacity: 0
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition']),

    // style aggregations
    componentStyles () {
      return {
        opacity: this.componentOpacity
      }
    },
    shapeScale () {
      return this.shapeVisibility
    },
    statistic1Styles () {
      return {
        opacity: this.statistic1Opacity
      }
    },
    statistic2Styles () {
      return {
        opacity: this.statistic2Opacity
      }
    },

    // scales
    componentVisibilityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.startScreen,
          this.breakpoints.statistic1ScreenStart,
          this.breakpoints.statistic1ScreenEnd,
          this.breakpoints.blankScreenStart,
          this.breakpoints.blankScreenEnd,
          this.breakpoints.statistic2ScreenStart,
          this.breakpoints.statistic2ScreenEnd,
          this.breakpoints.endScreen
        ])
        .range([0, 1, 1, 0, 0, 1, 1, 0])
        .clamp(true)
    },
    statistic1OpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statistic1LegendTextAppearanceStart,
          this.breakpoints.statistic1ScreenStart,
          this.breakpoints.statistic1ScreenEnd,
          this.breakpoints.statistic1LegendTextDisappearanceEnd
        ])
        .range([0, 1, 1, 0])
        .clamp(true)
    },
    statistic2OpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statistic2LegendTextAppearanceStart,
          this.breakpoints.statistic2ScreenStart
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
      if (!this.active) {
        return
      }

      this.componentOpacity = verticalScrollPosition < this.breakpoints.startScreen && verticalScrollPosition > this.breakpoints.endScreen
        ? 0
        : this.componentVisibilityScale(verticalScrollPosition)

      this.shapeVisibility = verticalScrollPosition < this.breakpoints.startScreen
        ? 0
        : verticalScrollPosition > this.breakpoints.statistic2ScreenStart
          ? 1
          : this.componentVisibilityScale(verticalScrollPosition)

      this.statistic1Opacity = verticalScrollPosition < this.breakpoints.statistic1LegendTextAppearanceStart && verticalScrollPosition > this.breakpoints.statistic1LegendTextDisappearanceEnd
        ? 0
        : this.statistic1OpacityScale(verticalScrollPosition)

      this.statistic2Opacity = verticalScrollPosition < this.breakpoints.statistic2LegendTextAppearanceStart
        ? 0
        : verticalScrollPosition > this.breakpoints.statistic2ScreenStart
          ? 1
          : this.statistic2OpacityScale(verticalScrollPosition)
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

.disabilities-animation {
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
      background: url('~assets/grid/chapter3_frauenmitbehinderung.png');
      background-size: cover;
    }
  }

  .shape2 {
    position: absolute;
    top: 60%;
    left: 10%;
    width: 80%;
    height: 30%;

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
}
</style>
