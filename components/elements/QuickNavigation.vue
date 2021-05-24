<template>
  <nav class="quick-navigation">
    <ul>
      <li v-for="entry in entries" :key="entry.id" :class="{ 'entry': true, 'active': entry.keys.includes(activeArticleChapterId) }" @click="$nuxt.$emit('scrollToChapter', entry.id)">
        <div class="inside">
          <span class="index passive">{{ entry.num }}</span>
          <span class="index active">&bull;</span>
          <span class="title" v-html="$t(entry.labelKey)" />
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      entries: [
        { id: 'chapter1', num: 1, labelKey: 'chapter1-bar', keys: ['chapter1'] },
        { id: 'chapter2', num: 2, labelKey: 'chapter2-bar', keys: ['chapter2'] },
        { id: 'chapter3', num: 3, labelKey: 'chapter3-bar', keys: ['chapter3', 'case1', 'case2', 'case3'] },
        { id: 'chapter4', num: 4, labelKey: 'chapter4-bar', keys: ['chapter4'] },
        { id: 'chapter5', num: 5, labelKey: 'chapter5-bar', keys: ['chapter5', 'project-information', 'references', 'imprint'] }
      ]
    }
  },
  computed: {
    ...mapState(['activeArticleChapterId'])
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

    .index {
      position: relative;
      display: inline-block;
      width: 0.6em;

      &.active {
        display: none;
      }
    }

    .title {
      display: none;
    }

    .inside {
      position: relative;
      display: inline-block;
      background: $color-black;
      border-radius: 0 1em 1em 0;

      padding: 0.5em;
      padding-right: 0.75em;
    }

    &.active {
      .index {
        &.active {
          display: inherit;
        }
        &.passive {
          display: none;
        }
      }
    }

    &:hover {
      cursor: pointer;

      .title {
        display: inline;
      }
    }
  }
}

</style>
