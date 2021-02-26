<template>
  <div class="popup-overlay">
    <div class="horizontal scroll-container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.popup-overlay .scroll-container {
  background-color: #ECEEF8;
  overflow-y: hidden;
}

@media (min-width: $media-breakpoint-min-m) {
  .popup-overlay {
    position: relative;
    height: 100vh;
    width: 100vw;

    padding: 2rem;

    .scroll-container {
      position: relative;
      height: 100%;
      width: auto;
    }
  }
}

</style>
