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
          <path :transform="`translate(${translateX} ${translateY}) scale(${shapeScale * this.scale})`" :d="shape.path" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
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
    }
  },
  data () {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0
    }
  },
  computed: {
    viewBox () {
      return `0 0 ${this.width} ${this.height}`
    },
    shapeScale () {
      const widthScale = this.width / this.shape.rect.width
      const heightScale = this.height / this.shape.rect.height
      return Math.min(widthScale, heightScale)
    },
    backgroundWrapperStyles () {
      return {
        top: -this.top + 'px',
        left: -this.left + 'px'
      }
    },
    insideStyles () {
      return {
        clipPath: `url("#${this.clipPathId}")`
      }
    },
    translateX () {
      return (1 - this.scale) * (this.width / 2)
    },
    translateY () {
      return (1 - this.scale) * (this.height / 2)
    }
  },
  watch: {
    active (active) {
      if (active) {
        this.$emit('parentPositionRequested', this)
        this.updateDimensions()
      }
    }
  },
  mounted () {
    this.updateDimensions()
    this.$emit('parentPositionRequested', this)
  },
  methods: {
    updateParentRect (parentRect) {
      const rect = this.$el.getBoundingClientRect()
      this.top = rect.top - parentRect.top
      this.left = rect.left
    },
    updateDimensions () {
      const boundingRect = this.$refs.inside.getBoundingClientRect()
      this.width = boundingRect.width
      this.height = boundingRect.height
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
