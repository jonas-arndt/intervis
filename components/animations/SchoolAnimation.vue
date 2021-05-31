<template>
  <div class="school-animation" :style="componentStyles">
    <Blob
      ref="shape1"
      class="shape1"
      :shape="shapes['chapter3_example2_mehrheitsbevoelkerung_gymnasium.svg']"
      :rect="shape1Rect"
      :scale="shape1Scale"
      :style="shape1Styles"
      :disable-auto-scale="true"
      clip-path-id="chapter3_example2_shape1"
    >
      <div class="background">
        <div class="grid" />
      </div>
    </Blob>

    <Blob
      ref="shape2"
      class="shape2"
      :shape="shapes['chapter3_example2_sinti*zze_rom*nja_gymnasium.svg']"
      :rect="shape2Rect"
      :scale="shape2Scale"
      :style="shape2Styles"
      :disable-auto-scale="true"
      horizontal-align="left"
      clip-path-id="chapter3_example2_shape2"
    >
      <div class="background">
        <div class="lines" />
        <div class="grid" />
      </div>
    </Blob>

    <div class="legend legend-shape1" :style="legendStyles">
      <span class="digit step1">{{ shape1Value.toFixed(2) }}%</span>
      <div :style="legendDescriptionStyles">
        <span v-if="statistic1IsActive" class="details statistic1" v-html="$t('chapter3-example2-vis2')" />
        <span v-if="statistic2IsActive" class="details statistic2" v-html="$t('chapter3-example2-vis6')" />
      </div>
    </div>

    <div class="legend legend-shape2" :style="legendStyles">
      <span class="digit step1">{{ shape2Value.toFixed(2) }}%</span>
      <div :style="legendDescriptionStyles">
        <span v-if="statistic1IsActive" class="details statistic1" v-html="$t('chapter3-example2-vis4')" />
        <span v-if="statistic2IsActive" class="details statistic2" v-html="$t('chapter3-example2-vis8')" />
      </div>
    </div>

    <div class="quote" :style="quoteStyles">
      <p class="text" v-html="$t('chapter3-example2-quote')" />
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
      windowSizeScale: 0.8,

      componentOpacity: 0,

      shape1VisibilityScale: 0,
      shape1StatisticScale: 1,
      shape1Opacity: 0,

      shape2VisibilityScale: 0,
      shape2StatisticScale: 1,
      shape2QuoteResizeScale: 1,
      shape2Opacity: 0.5,

      quoteOpacity: 0,
      legendOpacity: 0,
      legendDescriptionOpacity: 1,
      statistic1IsActive: true,

      shape1Value: 24.4,
      shape2Value: 2.3,

      statisticValues: {
        shape1: {
          step1: 24.4,
          step2: 4.9
        },
        shape2: {
          step1: 2.3,
          step2: 10.7
        }
      },

      defaultTransparentShapeOpacity: 0.5
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition']),
    shape1Scale () {
      return this.shape1VisibilityScale * this.shape1StatisticScale * this.windowSizeScale
    },
    shape2Scale () {
      return this.shape2VisibilityScale * this.shape2StatisticScale * this.shape2QuoteResizeScale * this.windowSizeScale
    },
    statistic2IsActive () {
      return !this.statistic1IsActive
    },
    shape2FitWindowRatio () {
      const maxWidth = 0.8

      const shapeRect = this.shapes['chapter3_example2_sinti*zze_rom*nja_gymnasium.svg'].rect
      const windowRect = this.availableDimensions

      return (windowRect.width * maxWidth) / (shapeRect.width * this.windowSizeScale)
    },

    // statistic scales
    shape1StatisticRatio () {
      const statistic1ShapeWidth = this.shapes['chapter3_example2_mehrheitsbevoelkerung_gymnasium.svg'].rect.width
      const statistic2ShapeWidth = this.shapes['chapter3_example2_mehrheitsbevoelkerung_foerderschule.svg'].rect.width

      return statistic2ShapeWidth / statistic1ShapeWidth
    },
    shape2StatisticRatio () {
      const statistic1ShapeWidth = this.shapes['chapter3_example2_sinti*zze_rom*nja_gymnasium.svg'].rect.width
      const statistic2ShapeWidth = this.shapes['chapter3_example2_sinti*zze_rom*nja_foerderschule.svg'].rect.width

      return statistic2ShapeWidth / statistic1ShapeWidth
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
    quoteStyles () {
      return {
        opacity: this.quoteOpacity
      }
    },
    legendStyles () {
      return {
        opacity: this.legendOpacity
      }
    },
    legendDescriptionStyles () {
      return {
        opacity: this.legendDescriptionOpacity
      }
    },

    // scales
    componentVisibilityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.startScreen,
          this.breakpoints.quoteScreenStart,
          this.breakpoints.statistic2ScreenEnd,
          this.breakpoints.endScreen
        ])
        .range([0, 1, 1, 0])
        .clamp(true)
    },
    shape1VisibilityScaleScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.quoteDisappearanceEnd,
          this.breakpoints.statistic1ScreenStart,
          this.breakpoints.statistic2ScreenEnd,
          this.breakpoints.endScreen
        ])
        .range([0, 1, 1, 0])
        .clamp(true)
    },
    shape1OpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.quoteDisappearanceEnd,
          this.breakpoints.statistic1ScreenStart
        ])
        .range([0, 1])
        .clamp(true)
    },
    quoteOpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.quoteScreenEnd,
          this.breakpoints.quoteDisappearanceEnd
        ])
        .range([1, 0])
        .clamp(true)
    },
    statistic1IsActiveScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statistic1ScreenEnd,
          this.breakpoints.statistic2ScreenStart
        ])
        .range([true, false])
        .clamp(true)
    },
    legendOpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statistic1LegendTextAppearanceStart,
          this.breakpoints.statistic1ScreenStart,
          this.breakpoints.statistic2ScreenEnd,
          this.breakpoints.statistic2LegendTextDisappearanceEnd
        ])
        .range([0, 1, 1, 0])
        .clamp(true)
    },
    legendDescriptionOpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statistic1ScreenEnd,
          this.breakpoints.statistic1LegendTextDisappearanceEnd,
          this.breakpoints.statistic2LegendTextAppearanceStart,
          this.breakpoints.statistic2ScreenStart
        ])
        .range([1, 0, 0, 1])
        .clamp(true)
    },
    statisticTransitionProgressScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statistic1ScreenEnd,
          this.breakpoints.statistic2ScreenStart
        ])
        .range([0, 1])
        .clamp(true)
    },
    shape1ValueScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statistic1ScreenEnd,
          this.breakpoints.statistic2ScreenStart
        ])
        .range([
          this.statisticValues.shape1.step1,
          this.statisticValues.shape1.step2
        ])
        .clamp(true)
    },
    shape2ValueScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statistic1ScreenEnd,
          this.breakpoints.statistic2ScreenStart
        ])
        .range([
          this.statisticValues.shape2.step1,
          this.statisticValues.shape2.step2
        ])
        .clamp(true)
    },
    shape1StatisticScaleScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statistic1ScreenEnd,
          this.breakpoints.statistic2ScreenStart
        ])
        .range([1, this.shape1StatisticRatio])
        .clamp(true)
    },
    shape2StatisticScaleScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.statistic1ScreenEnd,
          this.breakpoints.statistic2ScreenStart
        ])
        .range([1, this.shape2StatisticRatio])
        .clamp(true)
    },
    shape2QuoteResizeScaleScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.quoteScreenEnd,
          this.breakpoints.statistic1ScreenStart
        ])
        .range([this.shape2FitWindowRatio, 1])
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

      this.shape1VisibilityScale = verticalScrollPosition < this.breakpoints.quoteDisappearanceEnd && verticalScrollPosition > this.breakpoints.endScreen
        ? 0
        : this.shape1VisibilityScaleScale(verticalScrollPosition)

      this.shape1Opacity = verticalScrollPosition < this.breakpoints.quoteDisappearanceEnd
        ? 0
        : verticalScrollPosition > this.breakpoints.statistic1ScreenStart
          ? 1
          : this.shape1OpacityScale(verticalScrollPosition)

      this.shape2VisibilityScale = verticalScrollPosition < this.breakpoints.startScreen && verticalScrollPosition > this.breakpoints.endScreen
        ? 0
        : this.componentVisibilityScale(verticalScrollPosition)

      this.shape2Opacity = verticalScrollPosition < this.breakpoints.quoteScreenEnd
        ? this.defaultTransparentShapeOpacity
        : verticalScrollPosition > this.breakpoints.quoteDisappearanceEnd
          ? 1
          : 1 - (1 - this.defaultTransparentShapeOpacity) * this.quoteOpacityScale(verticalScrollPosition)

      this.quoteOpacity = verticalScrollPosition < this.breakpoints.quoteScreenEnd
        ? 1
        : verticalScrollPosition > this.breakpoints.quoteDisappearanceEnd
          ? 0
          : this.quoteOpacityScale(verticalScrollPosition)

      this.legendOpacity = verticalScrollPosition < this.breakpoints.statistic1LegendTextAppearanceStart && verticalScrollPosition > this.breakpoints.statistic2LegendTextDisappearanceEnd
        ? 0
        : this.legendOpacityScale(verticalScrollPosition)

      this.legendDescriptionOpacity = verticalScrollPosition < this.breakpoints.statistic1ScreenEnd && verticalScrollPosition > this.breakpoints.statistic2ScreenStart
        ? 1
        : this.legendDescriptionOpacityScale(verticalScrollPosition)

      this.shape2QuoteResizeScale = verticalScrollPosition < this.breakpoints.quoteScreenEnd
        ? this.shape2FitWindowRatio
        : verticalScrollPosition > this.breakpoints.statistic1ScreenStart
          ? 1
          : this.shape2QuoteResizeScaleScale(verticalScrollPosition)

      // shape values
      if (verticalScrollPosition < this.breakpoints.statistic1ScreenEnd) {
        this.statistic1IsActive = true
        this.shape1Value = this.statisticValues.shape1.step1
        this.shape2Value = this.statisticValues.shape2.step1
        this.shape1StatisticScale = 1
        this.shape2StatisticScale = 1
      } else if (verticalScrollPosition > this.breakpoints.statistic2ScreenStart) {
        this.statistic1IsActive = false
        this.shape1Value = this.statisticValues.shape1.step2
        this.shape2Value = this.statisticValues.shape2.step2
        this.shape1StatisticScale = this.shape1StatisticRatio
        this.shape2StatisticScale = this.shape2StatisticRatio
      } else {
        this.statistic1IsActive = this.statisticTransitionProgressScale(verticalScrollPosition) < 0.5
        this.shape1Value = this.shape1ValueScale(verticalScrollPosition)
        this.shape2Value = this.shape2ValueScale(verticalScrollPosition)
        this.shape1StatisticScale = this.shape1StatisticScaleScale(verticalScrollPosition)
        this.shape2StatisticScale = this.shape2StatisticScaleScale(verticalScrollPosition)
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

.school-animation {
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
      background: url('~assets/grid/dark_gray.jpg');
      background-size: cover;
    }
  }

  .shape2 {
    position: absolute;
    bottom: 10%;
    left: 10%;
    width: 80%;
    height: 30%;

    .grid {
      background: url('~assets/grid/chapter3_sintiundroma.png');
      background-size: cover;
    }
  }

  .legend-shape1, .legend-shape2 {
    &.legend-shape1 {
      bottom: 50%;
    }
    &.legend-shape2 {
      bottom: 20%;
      right: inherit;
      left: 60%;
    }
  }
}
</style>
