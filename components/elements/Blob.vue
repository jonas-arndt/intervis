<template>
  <div class="blob">
    <div ref="inside" class="inside">
      <svg v-if="width > 0 && height > 0" :viewBox="viewBox">
        <foreignObject
          :width="width"
          :height="height"
          :clip-path="`url(#${clipPathId})`"
          requiredExtensions="http://www.w3.org/1999/xhtml"
        >
          <div
            :style="{ top: -top+'px', left: -left+'px' }"
            class="shape-background-wrapper"
          >
            <slot />
          </div>
        </foreignObject>
        <defs>
          <clipPath :id="clipPathId">
            <path :transform="`scale(${shapeScale})`" :d="shape.path" />
          </clipPath>
        </defs>
      </svg>
    </div>
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
    }
  },
  mounted () {
    this.updateDimensions()
    this.$emit('parentPositionRequested', this)
  },
  methods: {
    updateParentRect (parentRect) {
      const rect = this.$el.getBoundingClientRect()
      this.top = parentRect.top > 0 ? rect.top - parentRect.top : rect.top
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
    position: relative;

    & > * {
      width: 100vw;
      height: 100vh;
    }
  }
}
</style>
