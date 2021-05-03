<template>
  <div class="popup-overlay">
    <div class="close-button">
      <a @click.stop="$emit('close')">
        <img :src="require('~/assets/icons/close.svg')">
      </a>
    </div>
    <div class="inside">
      <h2 class="chapter-title">
        <slot name="title" />
      </h2>
      <div class="content">
        <slot name="content" />
      </div>
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

  & > .inside {
    position: relative;
    height: 100%;
    width: 100%;
    overflow-x: hidden;

    padding: 1rem;

    background-color: #ECEEF8;
  }

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
}

@media (min-width: $media-breakpoint-min-m) {
  .popup-overlay {
    padding: 1rem;

    & > .inside {
      position: relative;
      height: 100%;
      width: auto;
    }

    .content {
      position: absolute;
      top: 20%;
      height: 80%;
      width: 100%;
      overflow-y: hidden;
      overflow-x: scroll;
    }
  }
}

</style>
