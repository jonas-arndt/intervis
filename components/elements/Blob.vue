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
    verticalAlign: {
      type: String,
      default: () => 'center'
    }
  },
  computed: {
    viewBox () {
      return `0 0 ${this.rect.width} ${this.rect.height}`
    },
    clipPathTranslateX () {
      const translateX = this.scaleBasedTranslateX
      return Number.isNaN(translateX) ? 0 : translateX
    },
    clipPathTranslateY () {
      const translateY = this.scaleBasedTranslateY + this.verticalAlignBasedTranslateY
      return Number.isNaN(translateY) ? 0 : translateY
    },
    clipPathScale () {
      const scale = this.containBasedScale * this.scale
      return Number.isNaN(scale) ? 1 : scale
    },
    containBasedScale () {
      return Math.min(
        this.rect.width / this.shape.rect.width,
        this.rect.height / this.shape.rect.height
      )
    },
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
    shapeHeight () {
      return this.shape.rect.height * this.clipPathScale
    },
    scaleBasedTranslateX () {
      return (1 - this.scale) * (this.rect.width / 2)
    },
    scaleBasedTranslateY () {
      return (1 - this.scale) * (this.shapeHeight / 2)
    },
    verticalAlignBasedTranslateY () {
      switch (this.verticalAlign) {
        case 'top': {
          return 0
        }
        case 'center': {
          return (this.rect.height - this.shapeHeight) / 2
        }
        case 'bottom': {
          return this.rect.height - this.shapeHeight
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
