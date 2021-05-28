<template>
  <div class="full-width-chapter">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.full-width-chapter {
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: $media-breakpoint-min-s) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: $media-breakpoint-min-m) {
    padding-left: 20%;
    padding-right: 20%;
  }
}
</style>
