<template>
  <div class="dialog-container">
    <div class="content-container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.dialog-container {
  position: absolute;
  width: 100vw;
  min-height: 100vh;

  background-color: rgba(30, 30, 30, 0.75);
  overflow-y: auto;
  padding: 1rem;

  .content-container {
    position: relative;
    background-color: $color-light-grey;

    padding: 1rem;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .content-container {
      position: absolute;
      top: 20%;
      left: 20%;
      transform: translate(-10%, -10%);
      padding: 2rem;
    }
  }

  @media (min-width: $media-breakpoint-min-l) {
    .content-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      padding: 3rem;
    }
  }
}

</style>
