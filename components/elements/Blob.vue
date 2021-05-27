<template>
  <div class="blob">
    <div class="frame" :style="frameStyles">
      <div class="shape" :style="shapeStyles">
        <div class="shape-background-wrapper">
          <slot />
        </div>
      </div>
    </div>
    <div v-if="$slots.unclipped" class="outside" :style="frameStyles">
      <slot name="unclipped" />
    </div>
    <svg :viewBox="viewBox">
      <defs>
        <clipPath :id="clipPathId">
          <path :transform="`translate(${clipPathTranslateX} ${clipPathTranslateY}) scale(${clipPathScale})`" :d="shape.path" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    shape: {
      type: Object,
      required: true,
      default: () => {}
    },
    clipPathId: {
      type: String,
      required: true,
      default: () => 'shape-clip-path'
    },
    scale: {
      type: Number,
      default: 1
    },
    rect: {
      type: Object,
      required: true,
      default: () => { return { top: 0, left: 0, width: 0, height: 0 } }
    },
    disableAutoScale: {
      type: Boolean,
      default: () => false
    },
    verticalAlign: {
      type: String,
      default: () => 'center'
    },
    horizontalAlign: {
      type: String,
      default: () => 'center'
    }
  },
  computed: {
    viewBox () {
      return `0 0 ${this.rect.width} ${this.rect.height}`
    },
    shapeWidth () {
      return this.shape.rect.width * this.clipPathScale
    },
    shapeHeight () {
      return this.shape.rect.height * this.clipPathScale
    },

    // style aggregations
    frameStyles () {
      return {
        top: -this.rect.top + 'px',
        left: -this.rect.left + 'px'
      }
    },
    shapeStyles () {
      return `-webkit-clip-path:url(#${this.clipPathId}); clip-path:url(#${this.clipPathId});`
    },

    // scale
    clipPathScale () {
      let scale = this.scale
      if (!this.disableAutoScale) {
        scale *= this.containBasedScale
      }
      return Number.isNaN(scale) ? 1 : scale
    },
    containBasedScale () {
      return Math.min(
        this.rect.width / this.shape.rect.width,
        this.rect.height / this.shape.rect.height
      )
    },

    // translate x
    clipPathTranslateX () {
      const translateX = this.rect.left + this.scaleBasedTranslateX + this.horizontalAlignBasedTranslateY
      return Number.isNaN(translateX) ? 0 : translateX
    },
    scaleBasedTranslateX () {
      return (this.rect.width - this.shapeWidth) / 2
    },
    horizontalAlignBasedTranslateY () {
      switch (this.horizontalAlign) {
        case 'left': {
          return (this.shapeWidth - this.rect.width) / 2
        }
        case 'center': {
          return 0
        }
        case 'right': {
          return (this.shapeWidth - this.rect.width) / -2
        }
      }

      return 0
    },

    // translate y
    clipPathTranslateY () {
      const translateY = this.rect.top + this.scaleBasedTranslateY + this.verticalAlignBasedTranslateY
      return Number.isNaN(translateY) ? 0 : translateY
    },
    scaleBasedTranslateY () {
      return (this.rect.height - this.shapeHeight) / 2
    },
    verticalAlignBasedTranslateY () {
      switch (this.verticalAlign) {
        case 'top': {
          return (this.shapeHeight - this.rect.height) / 2
        }
        case 'center': {
          return 0
        }
        case 'bottom': {
          return (this.shapeHeight - this.rect.height) / -2
        }
      }

      return 0
    }
  }
}
</script>

<style lang="scss" scoped>
.blob {
  .frame {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .shape {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .shape-background-wrapper {
    & > * {
      width: 100vw;
      height: 100vh;
    }
  }

  .outside {
    position: absolute;
    width: 100vw;
    height: 100vh;

    z-index: -10;
  }
}
</style>
