<template>
  <div>
    <div v-for="sectionData, sectionKey in furtherReadingData" :key="sectionKey" :class="['further-reading', sectionKey]">
      <h4 class="title" v-html="$t(sectionData.titleKey)" />
      <ul>
        <li v-for="link, index in sectionData.entries" :key="index">
          <a :href="link.Link">
            <span class="title">{{ link.Title }}</span>
            <span v-if="link.Authors" class="author">{{ link.Authors }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import StructuredLinkData from '~/data/links_structured.json'

export default {
  data () {
    return {
      linkData: StructuredLinkData
    }
  },
  computed: {
    furtherReadingData () {
      return {
        books: {
          entries: this.linkData.book,
          titleKey: 'chapter5-heading1'
        },
        articles: {
          entries: this.linkData.article,
          titleKey: 'chapter5-heading2'
        },
        others: {
          entries: this.linkData.other,
          titleKey: 'chapter5-heading3'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.further-reading {
  padding-left: 2rem;

  a {
    color: $color-black;
    font-weight: inherit;

    &:hover {
      color: $color-red;
    }
  }

  h4 {
    margin-top: 2em;
    margin-bottom: 0.7em;
  }

  & > .title {
    position: relative;

    &:before {
      position: absolute;
      width: 1.5rem;
      height: 100%;
      content: " ";
      margin-left: -2rem;
    }
  }

  ul {
    font-family: $font-family-signika;
    font-size: $font-size-small;
    line-height: 1.4em;
  }

  li {
    position: relative;
    margin-bottom: 1.3em;

    .title, .author {
      display: block;
    }

    .title {
      font-weight: 600;
    }
  }

  &.books {
    & > .title:before {
      background: url('~assets/icons/links/books.svg') center right no-repeat;
      background-size: contain;
    }
  }

  &.articles {
    left: 33%;

    & > .title:before {
      background: url('~assets/icons/links/articles.svg') center right no-repeat;
      background-size: contain;
    }
  }

  &.others {
    left: 66%;

    & > .title:before {
      background: url('~assets/icons/links/others.svg') center right no-repeat;
      background-size: contain;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    position: relative;
    width: 33%;
  }
}
</style>
