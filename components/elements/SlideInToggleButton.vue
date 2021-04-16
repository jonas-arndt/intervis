<template>
  <a :class="['slide-in-toggle-button', designDecisionsAreVisible ? 'active' : '']" @click="$store.commit('toggleDesignDecisionsVisibility')">
    <span class="label"><slot /></span>
  </a>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['designDecisionsAreVisible'])
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";
/* Rectangle */

.slide-in-toggle-button {
  position: absolute;
  display: inline-block;
  right: 0px;
  top: 20px;
  z-index:1000;

  min-width: 45px;
  height: 45px;

  background: $color-black;
  border-radius: 22.5px 0px 0px 22.5px;

  background-image: url('~assets/icons/slide-in/light-bulp.svg');
  background-repeat: no-repeat;
  background-position: 13px center;
  background-color: $color-black;

  transition: 1s;

  .label {
    display: none;
    margin-top: 8px;
    margin-left: 40px;
    margin-right: 10px;

    font-size: $font-size-small;
    color: $color-white;
    font-family: $font-family-signika;
    line-height: 1.4em;
  }

  &.active {
      background-image: url('~assets/icons/slide-in/back.svg');
      background-position: 19px center;
  }

  &:hover {
    cursor: pointer;
    font-size: $font-size-small;

    .label {
      display: block;
    }

  }

}

</styles>
