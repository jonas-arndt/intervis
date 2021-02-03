<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import "../styles/_variables";
@import "../styles/_fonts";
@import "../styles/_defaults";

// custom style definitions

html {
  background-color: #F9FAFF;
}

.page {
  overflow: hidden;
}

.chapter {
  padding: 1rem;
}

a.cross-reference {
  &:before {
    content: "→ ";
  }
}

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
