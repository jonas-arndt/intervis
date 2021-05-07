<template>
  <div class="full-width-chapter">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.full-width-chapter {
  padding: 1rem;
  background-color: $color-light-grey;

  @media (min-width: $media-breakpoint-min-m) {
    padding: 3rem 20% 5rem 20%;
  }
}
</style>
