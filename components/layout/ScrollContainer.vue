<template>
  <div ref="scroller" class="scroll-container" @scroll="$emit('scrollPositionUpdated', $refs.scroller.scrollTop)">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.scroll-container {
  position: relative;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>
