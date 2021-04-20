<template>
  <nav class="disclosure-navigation">
    <ul>
      <li v-for="labelKey, index in entries" :key="index" :class="{'active': index == chapterId}">
        <a href="#" @click.stop="chapterId = index" v-html="$t(labelKey)" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      entries: [
        'backside-menu1',
        'backside-menu2',
        'backside-menu3',
        'backside-menu4',
        'backside-menu5'
      ]
    }
  },
  computed: {
    chapterId: {
      get () {
        return this.$store.getters.getDisclosureChapter
      },
      set (value) {
        this.$store.commit('setDisclosureChapterId', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.disclosure-navigation {
  li {
    font-family: $font-family-signika;
    font-weight: 600;
    margin-bottom: 0.5em;

    a {
      margin-left: 0.3rem;
      &:hover {
        color: $color-red;
      }
    }

    &.active {
      padding-left: -2px;
      border-left: 2px solid $color-red;
      font-weight: 700;

      a {
        color: $color-red;
      }
    }
  }

}
</style>
