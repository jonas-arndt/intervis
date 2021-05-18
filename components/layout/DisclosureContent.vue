<template>
  <div class="disclosure content">
    <slot />
  </div>
</template>

<style lang="scss">
@import "../../styles/_variables";

.disclosure.content {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  h2 {
    margin-bottom: 1.2rem;

    &.spaced-title {
      margin-top: 3.2rem;
      margin-bottom: -1.2rem;
    }
  }

  h3 {
    font-size: $font-size-title-caption;
    font-style: italic;
    font-family: $font-family-pt-serif;
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;
  }

  img {
    max-width: 100%;
  }
}
</style>
