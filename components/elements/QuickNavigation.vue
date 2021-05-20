<template>
  <nav class="quick-navigation">
    <ul>
      <li v-for="entry, index of entries" :key="entry.id" :class="{ 'entry': true, 'active': entry.id == activeArticleChapterId }" @click="$nuxt.$emit('scrollToChapter', entry.id)">
        <div class="inside">
          <span v-if="entry.id != activeArticleChapterId" class="index">{{ index }}</span>
          <span v-else class="index">&bull;</span>
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
        { id: 'introduction', labelKey: 'chapter0-bar' },
        { id: 'chapter1', labelKey: 'chapter1-bar' },
        { id: 'chapter2', labelKey: 'chapter2-bar' },
        { id: 'chapter3', labelKey: 'chapter3-bar' },
        { id: 'chapter4', labelKey: 'chapter4-bar' },
        { id: 'chapter5', labelKey: 'chapter5-bar' }
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

    &:hover {
      cursor: pointer;

      .title {
        display: inline;
      }
    }
  }
}

</style>
