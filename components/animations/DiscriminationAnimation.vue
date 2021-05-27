<template>
  <div class="discrimination-animation" :style="componentStyles">
    <div class="case-container">
      <div class="visual shape1">
        <div class="inside">
          <Blob
            ref="shape1"
            :shape="shapes['chapter2_1.svg']"
            :rect="shape1Rect"
            :scale="shapeScale"
            clip-path-id="clip-path-2-1"
          >
            <div class="background">
              <div class="text" :style="shape1TextStyles">
                <Words />
              </div>
              <div class="grid" />
            </div>
          </Blob>
        </div>
      </div>
      <div class="description" :style="descriptionStyles">
        <span class="title" v-html="$t('chapter2-vis2-title1')" />
        <span class="examples" v-html="$t('chapter2-vis2-examples1')" />
      </div>
    </div>
    <div class="case-container">
      <div class="visual shape2">
        <div class="inside">
          <Blob
            ref="shape2"
            :shape="shapes['chapter2_2.svg']"
            :rect="shape2Rect"
            :scale="shapeScale"
            clip-path-id="clip-path-2-2"
          >
            <div class="background">
              <div class="lines" />
              <div class="text" :style="shape2TextStyles">
                <Words />
              </div>
              <div class="grid" />
            </div>
          </Blob>
        </div>
      </div>
      <div class="description" :style="descriptionStyles">
        <span class="title" v-html="$t('chapter2-vis2-title2')" />
        <span class="examples" v-html="$t('chapter2-vis2-examples2')" />
      </div>
    </div>
    <div class="case-container">
      <div class="visual">
        <div class="inside shape3">
          <Blob
            ref="shape3"
            :shape="shapes['chapter2_3.svg']"
            :rect="shape3Rect"
            :scale="shapeScale"
            clip-path-id="clip-path-2-3"
          >
            <div class="background">
              <div class="lines" />
              <div class="text" :style="shape3TextStyles">
                <Words />
              </div>
              <div class="grid" />
            </div>
          </Blob>
        </div>
      </div>
      <div class="description" :style="descriptionStyles">
        <span class="title" v-html="$t('chapter2-vis2-title3')" />
        <span class="examples" v-html="$t('chapter2-vis2-examples3')" />
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

      shapeKeys: {
        shape1: 'chapter2_1.svg',
        shape2: 'chapter2_2.svg',
        shape3: 'chapter2_3.svg'
      },

      shape1Rect: { top: 0, left: 0, width: 0, height: 0 },
      shape2Rect: { top: 0, left: 0, width: 0, height: 0 },
      shape3Rect: { top: 0, left: 0, width: 0, height: 0 },

      componentOpacity: 0,
      shapeScale: 0,
      descriptionOpacity: 0
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition']),

    // text positions
    shape1TextStyles () {
      return this.getStylesFromRect(this.shape1Rect, this.shapeKeys.shape1)
    },
    shape2TextStyles () {
      return this.getStylesFromRect(this.shape2Rect, this.shapeKeys.shape2)
    },
    shape3TextStyles () {
      return this.getStylesFromRect(this.shape3Rect, this.shapeKeys.shape3)
    },

    // style aggregations
    componentStyles () {
      return {
        opacity: this.componentOpacity
      }
    },
    descriptionStyles () {
      return {
        opacity: this.descriptionOpacity
      }
    },

    // scales
    shapeScaleScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.introStart,
          this.breakpoints.introEnd
        ])
        .range([0, 1])
        .clamp(true)
    },
    descriptionOpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.firstTransitionStart,
          this.breakpoints.firstTransitionEnd
        ])
        .range([0, 1])
        .clamp(true)
    },
    componentOpacityScale () {
      return scaleLinear()
        .domain([
          this.breakpoints.introStart,
          this.breakpoints.introEnd,
          this.breakpoints.outroStart,
          this.breakpoints.outroEnd
        ])
        .range([0, 1, 1, 0])
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

      this.shapeScale = verticalScrollPosition < this.breakpoints.introStart
        ? 0
        : verticalScrollPosition > this.breakpoints.introEnd
          ? 1
          : this.shapeScaleScale(verticalScrollPosition)

      this.descriptionOpacity = verticalScrollPosition < this.breakpoints.firstTransitionStart
        ? 0
        : verticalScrollPosition > this.breakpoints.firstTransitionEnd
          ? 1
          : this.descriptionOpacityScale(verticalScrollPosition)

      this.componentOpacity = verticalScrollPosition > this.breakpoints.introStart && verticalScrollPosition < this.breakpoints.outroEnd
        ? this.componentOpacityScale(verticalScrollPosition)
        : 0
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
    getStylesFromRect (containerRect, shapeKey) {
      const shapeRect = this.shapes[shapeKey].rect
      const shapeRatio = Math.min(containerRect.width / shapeRect.width, containerRect.height / shapeRect.height)

      const width = shapeRatio * shapeRect.width
      const height = shapeRatio * shapeRect.height

      const styles = {}
      styles.width = width + 'px'
      styles.height = height + 'px'
      styles.top = containerRect.top + (containerRect.height - height) / 2 + 'px'
      styles.left = containerRect.left + (containerRect.width - width) / 2 + 'px'

      return styles
    },
    updateShapeRects () {
      const parentRect = this.$el.getBoundingClientRect()
      this.updateShapeRect(parentRect, 'shape1Rect', 'shape1')
      this.updateShapeRect(parentRect, 'shape2Rect', 'shape2')
      this.updateShapeRect(parentRect, 'shape3Rect', 'shape3')
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

.discrimination-animation {
  opacity: 0;

  .background {
    position: absolute;

    .grid, .lines {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &.grid {
        z-index: 10;
      }
      &.lines {
        z-index: 30;
      }
    }
    .text {
      position: absolute;
      z-index: 20;

      transform-origin: center;
      transform: scale(0.7);
    }
  }

  // specific form definitions

  .shape1 .grid {
    background: url('~assets/grid/dark_gray.jpg');
    background-size: cover;
  }
  .shape2 {
    .grid {
      background: url('~assets/grid/dark_gray.jpg');
      background-size: cover;
    }
    .lines {
      background: url('~assets/grid/chapter2_frontlayer_shape2.png');
      background-size: cover;
    }
  }
  .shape3 {
    .grid {
      background: url('~assets/grid/dark_gray.jpg');
      background-size: cover;
    }
    .lines {
      background: url('~assets/grid/chapter2_frontlayer_shape3.png');
      background-size: cover;
    }
  }
}
</style>
