<template>
  <div class="slide-in-toggle-button-wrapper">
    <a :class="['button', designDecisionsAreVisible ? 'active' : '']" @click="$store.commit('toggleDesignDecisionsVisibility')">
      <span class="label"><slot /></span>
    </a>
  </div>
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

.slide-in-toggle-button-wrapper {
  position: -webkit-sticky;
  position: sticky;
  width: 100%;

  top: 20px;
  z-index:1000;

  .button {
    position: absolute;
    display: inline-block;
    right: 0px;

    min-width: 45px;
    height: 45px;

    border-radius: 22.5px 0px 0px 22.5px;

    background: $color-red;
    background-image: url('~assets/icons/slide-in/light-bulp.svg');
    background-repeat: no-repeat;
    background-position: 13px center;

    transition: 1s;

    .label {
      display: none;
      margin-top: 8px;
      margin-left: 40px;
      margin-right: 10px;

      font-size: $font-size-smaller;
      color: $color-white;
      font-family: $font-family-signika;
      line-height: 1.4em;
      font-weight: 400;
    }

    &.active {
        background-image: url('~assets/icons/slide-in/back.svg');
        background-position: 19px center;
    }

    &:hover {
      cursor: pointer;

      .label {
        display: block;
      }

    }

  }

}

</styles>
