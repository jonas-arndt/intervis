<template>
  <div ref="scroller" class="scroll-container" @scroll="setVerticalScrollPosition($refs.scroller.scrollTop)">
    <slot />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
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
      const verticalViewportCenter = this.getVerticalViewportCenter()
      this.setVerticalViewportCenter(verticalViewportCenter)
    },
    getVerticalViewportCenter () {
      const boundingClientRect = this.$refs.scroller.getBoundingClientRect()
      return Math.round(boundingClientRect.height / 2)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.scroll-container {
  position: relative;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
