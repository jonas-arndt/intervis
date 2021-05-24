<template>
  <div class="blob">
    <div ref="inside" class="inside" :style="insideStyles">
      <div
        :style="backgroundWrapperStyles"
        class="shape-background-wrapper"
      >
        <slot />
      </div>
    </div>
    <div class="outside" :style="backgroundWrapperStyles">
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
      default: () => 'shape-' + Math.floor(Math.random() * 1000) + '-clip-path'
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
    backgroundWrapperStyles () {
      return {
        top: -this.rect.top + 'px',
        left: -this.rect.left + 'px'
      }
    },
    insideStyles () {
      return {
        clipPath: `url("#${this.clipPathId}")`
      }
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
      const translateX = this.scaleBasedTranslateX + this.horizontalAlignBasedTranslateY
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
      const translateY = this.scaleBasedTranslateY + this.verticalAlignBasedTranslateY
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
  .inside {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }

  .shape-background-wrapper {
    position: absolute;

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
