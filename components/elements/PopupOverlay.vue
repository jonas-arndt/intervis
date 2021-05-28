<template>
  <div class="popup-overlay">
    <div class="close-button">
      <a @click.prevent="$emit('close')">
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
  z-index: 2000;

  & > .inside {
    position: relative;
    height: 100%;
    width: 100%;
    overflow-x: hidden;

    padding: 1rem;

    background-color: #ECEEF8;
  }

  .chapter-title {
    font-weight: bold;
    font-size: $font-size-subtitle;
    padding-right: 2rem;
    margin-bottom: 1.2em;
  }

  .close-button {
    position: fixed;
    right: 1.5rem;
    top: 1.5rem;
    z-index: 10;
    cursor: pointer;

    background-color: $color-light-grey;
  }

  @media (min-width: $media-breakpoint-min-m) {
    padding: 1rem;

    & > .inside {
      position: relative;
      height: 100%;
      width: auto;
      padding: 2.5rem 0 2.5rem 0;
    }

    .chapter-title {
      font-size: $font-size-title;
      padding-left: 2rem;
    }

    .content {
      position: absolute;
      top: 15%;
      height: 85%;
      width: 100%;
      overflow-y: hidden;
      overflow-x: scroll;

      font-size: $font-size-small;
    }
  }
}

</style>
