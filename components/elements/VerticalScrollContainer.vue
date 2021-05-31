<template>
  <div ref="scroller" class="scroll-container" :style="style" @scroll="setVerticalScrollPosition($refs.scroller.scrollTop)">
    <slot />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      previousScrollPosition: 0
    }
  },
  computed: {
    ...mapState(['designDecisionsAreVisible', 'verticalScrollPosition']),
    style () {
      return this.disabled ? { overflow: 'hidden' } : {}
    }
  },
  watch: {
    // work around for unintended story jump issue
    verticalScrollPosition (verticalScrollPosition) {
      if (!this.designDecisionsAreVisible) {
        this.previousScrollPosition = verticalScrollPosition
      } else if (this.designDecisionsAreVisible && this.previousScrollPosition !== verticalScrollPosition) {
        this.$refs.scroller.scrollTo(0, this.previousScrollPosition)
      }
    }
  },
  mounted () {
    this.initEventListener()
    this.updateVerticalViewportCenter()
  },
  methods: {
    ...mapMutations(['setVerticalScrollPosition', 'setVerticalViewportCenter']),
    initEventListener () {
      this.$nuxt.$on('scrollArticle', (y) => {
        this.$refs.scroller.scrollTo(0, y)
      })

      this.$nuxt.$on('windowResized', () => {
        this.updateVerticalViewportCenter()
      })
    },
    updateVerticalViewportCenter () {
      const boundingClientRect = this.$refs.scroller.getBoundingClientRect()
      const verticalViewportCenter = Math.round(boundingClientRect.height / 2)
      this.setVerticalViewportCenter(verticalViewportCenter)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.scroll-container {
  position: relative;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
