<template>
  <div class="disabilities-animation">
    <Blob
      ref="shape1"
      class="shape1"
      :shape="shapes['chapter3_example3_frauen*mitbehinderung_gewalt.svg']"
      :rect="shape1Rect"
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
      clip-path-id="chapter3_example3_shape2"
    >
      <div class="background">
        <div class="lines" />
        <div class="grid" />
      </div>
    </Blob>

    <div class="legend legend-shape1">
      <span class="digit" v-html="$t('chapter3-example3-vis3')" />
      <span class="details step1" v-html="$t('chapter3-example3-vis1')" />
      <span class="details step2" v-html="$t('chapter3-example3-vis4')" />
    </div>

    <div class="legend legend-shape2">
      <span class="digit" v-html="$t('chapter3-example3-vis5')" />
      <span class="details step1" v-html="$t('chapter3-example3-vis1')" />
      <span class="details step2" v-html="$t('chapter3-example3-vis6')" />
    </div>

    <div class="quote">
      <p class="text" v-html="$t('chapter3-example1-quote')" />
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
