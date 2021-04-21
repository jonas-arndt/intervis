<template>
  <div class="popup-overlay">
    <div class="close-button">
      <a @click.stop="$emit('close')">
        <img :src="require('~/assets/icons/close.svg')">
      </a>
    </div>
    <div class="scroll-container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.popup-overlay {
  position: fixed;
  height: 100vh;
  width: 100vw;

  top: 0;
  left: 0;

  padding: 0.8rem;
  z-index: 2000;

  .close-button {
    position: fixed;
    right: 1.5rem;
    top: 1.5rem;
    z-index: 10;

    button {
      outline: none;
      background: none;
      border: none;
    }
  }

  .scroll-container {
    position: relative;
    height: 100%;
    width: 100%;

    background-color: #ECEEF8;
    overflow-y: scroll;
  }
}

@media (min-width: $media-breakpoint-min-m) {
  .popup-overlay {
    padding: 1rem;

    .scroll-container {
      position: relative;
      height: 100%;
      width: auto;
    }
  }
}

</style>
