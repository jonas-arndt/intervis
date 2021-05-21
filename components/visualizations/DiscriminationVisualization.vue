<template>
  <div class="discrimination-visualization">
    <div class="case-container">
      <div class="visual">
        <div class="inside">
          <div class="fallback">
            <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_1_german.png">
            <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_1_english.png">
          </div>
          <div class="interactive-visualization shape-1">
            <Blob
              ref="shape1"
              :shape="shapes['chapter2_1.svg']"
              :rect="shape1Rect"
              clip-path-id="clip-path-2-1"
            >
              <div class="background" />
            </Blob>
          </div>
        </div>
      </div>
      <div class="description">
        <span class="title" v-html="$t('chapter2-vis2-title1')" />
        <span class="examples" v-html="$t('chapter2-vis2-examples1')" />
      </div>
    </div>
    <div class="case-container">
      <div class="visual">
        <div class="inside">
          <div class="fallback">
            <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_2_german.png">
            <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_2_english.png">
          </div>
          <div class="interactive-visualization shape-2">
            <Blob
              ref="shape2"
              :shape="shapes['chapter2_2.svg']"
              :rect="shape2Rect"
              clip-path-id="clip-path-2-2"
            >
              <div class="background">
                <div class="lines" />
                <div class="grid" />
              </div>
            </Blob>
          </div>
        </div>
      </div>
      <div class="description">
        <span class="title" v-html="$t('chapter2-vis2-title2')" />
        <span class="examples" v-html="$t('chapter2-vis2-examples2')" />
      </div>
    </div>
    <div class="case-container">
      <div class="visual">
        <div class="inside">
          <div class="fallback">
            <img v-if="$i18n.locale == 'de'" src="~/assets/fallback/chapter2_3_german.png">
            <img v-if="$i18n.locale == 'en'" src="~/assets/fallback/chapter2_3_english.png">
          </div>
          <div class="interactive-visualization shape-3">
            <Blob
              ref="shape3"
              :shape="shapes['chapter2_3.svg']"
              :rect="shape3Rect"
              clip-path-id="clip-path-2-3"
            >
              <div class="background">
                <div class="lines" />
                <div class="grid" />
              </div>
            </Blob>
          </div>
        </div>
      </div>
      <div class="description">
        <span class="title" v-html="$t('chapter2-vis2-title3')" />
        <span class="examples" v-html="$t('chapter2-vis2-examples3')" />
      </div>
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

.discrimination-visualization {
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 15vh 1rem 10vh 1rem;

  .interactive-visualization {
    display: none;
  }

  .case-container {
    position: relative;
    height: 25vh;

    .visual {
      position: relative;
      top: 10%;
      display: inline-block;
      width: 30%;
      vertical-align: middle;
      margin-right: 5%;
      height: 90%;
      overflow: hidden;

      & > .inside {
        position: relative;
        display: block;
        height: 90%;

        margin: 0 auto;
        text-align: right;
      }

      img {
        position: relative;
        max-width: 100%;
        max-height: 100%;
      }
    }

    .description {
      display: inline-block;

      position: relative;
      width: 60%;
      vertical-align: middle;

      font-family: $font-family-signika;
      font-size: $font-size-small;
      line-height: 1.3em;

      .title {
        display: block;
        font-weight: 700;
        margin-bottom: 0.6em;
      }
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    left: 55%;
    width: 40%;

    padding-left: 0;
    padding-right: 0;
  }
}

.page.js .discrimination-visualization {
  .fallback {
    display: none;
  }

  .interactive-visualization {
    display: block;

    &.shape-1 .background {
      background: url('~assets/grid/dark_gray.png');
      background-size: cover;
    }
    &.shape-2 .background {
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
    &.shape-3 .background {
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
          background: url('~assets/grid/chapter2_frontlayer_shape3.png');
          background-size: cover;
          z-index: 10;
        }
      }
    }
  }
}
</styles>
