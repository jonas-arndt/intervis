<template>
  <a href="#" class="feedback-button">
    <span class="label" v-html="$t('mail-hint')" />
  </a>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.feedback-button {
  display: block;
  right: 0px;

  width: 17rem;
  height: 3rem;

  background: $color-white;
  border-radius: 0 1.5rem 1.5rem 0;

  background-image: url('~assets/icons/feedback-icon.svg');
  background-repeat: no-repeat;
  background-position: 1rem center;

  font-weight: 400;
  color: $color-black;

  .label {
    display: block;
    position: relative;

    top: 0.5rem;
    padding-left: 2.75rem;
    padding-right: 0.8rem;

    font-size: $font-size-small;
    font-family: $font-family-signika;
    line-height: 1.4em;
  }
}

</style>
