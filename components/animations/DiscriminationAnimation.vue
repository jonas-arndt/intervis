<template>
  <div class="discrimination-animation">
    <div class="case-container">
      <div class="visual shape1">
        <div class="inside">
          <Blob
            ref="shape1"
            :shape="shapes['chapter2_1.svg']"
            :rect="shape1Rect"
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
      <div class="description">
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
      <div class="description">
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
      <div class="description">
        <span class="title" v-html="$t('chapter2-vis2-title3')" />
        <span class="examples" v-html="$t('chapter2-vis2-examples3')" />
      </div>
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
      shapes,
      shape1Rect: { top: 0, left: 0, width: 0, height: 0 },
      shape2Rect: { top: 0, left: 0, width: 0, height: 0 },
      shape3Rect: { top: 0, left: 0, width: 0, height: 0 }
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition']),
    shape1TextStyles () {
      return this.getStylesFromRect(this.shape1Rect)
    },
    shape2TextStyles () {
      return this.getStylesFromRect(this.shape2Rect)
    },
    shape3TextStyles () {
      return this.getStylesFromRect(this.shape3Rect)
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
    background: url('~assets/grid/dark_gray.png');
    background-size: cover;
  }
  .shape2 {
    .grid {
      background: url('~assets/grid/dark_gray.png');
      background-size: cover;
    }
    .lines {
      background: url('~assets/grid/chapter2_frontlayer_shape2.png');
      background-size: cover;
    }
  }
  .shape3 {
    .grid {
      background: url('~assets/grid/dark_gray.png');
      background-size: cover;
    }
    .lines {
      background: url('~assets/grid/chapter2_frontlayer_shape3.png');
      background-size: cover;
    }
  }
}
</style>
