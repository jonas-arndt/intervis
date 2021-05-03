<template>
  <div ref="scroller" class="scroll-container" @scroll="$emit('scrollPositionUpdated', $refs.scroller.scrollTop)">
    <slot />
  </div>
</template>

<script>
export default {
  mounted () {
    this.$nuxt.$on('scrollArticle', (y) => {
      this.$refs.scroller.scrollTo(0, y)
    })
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
