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
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-color: rgba(30, 30, 30, 0.75);

  .content-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-light-grey;

    padding: 3rem;
  }
}

</style>
