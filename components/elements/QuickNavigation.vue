<template>
  <nav class="quick-navigation">
    <ul>
      <li v-for="key, index of entryKeys" :key="index" :class="{ 'entry': true, 'active': index == activeIndex }">
        <div class="inside">
          <span class="index">{{ index }}</span>
          <span class="title" v-html="$t(key)" />
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      entryKeys: {
        1: 'chapter1-bar',
        2: 'chapter2-bar',
        3: 'chapter3-bar',
        4: 'chapter4-bar',
        5: 'chapter5-bar'
      }
    }
  },
  computed: {
    activeIndex () {
      return this.$store.getters.getActiveChapter
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.quick-navigation {
  font-family: $font-family-signika;
  font-size: $font-size-small;
  color: $color-white;
  font-weight: 600;

  .entry {
    margin-bottom: 0.5em;

    .title {
      display: none;
    }

    .inside {
      position: relative;
      height: 2em;
      display: inline-block;
      background: $color-black;
      border-radius: 0 1em 1em 0;

      padding: 0.5em;
      padding-right: 0.75em;
    }

    &.active, &:hover {
      cursor: pointer;

      .title {
        display: inline;
      }
    }
  }
}

</style>
