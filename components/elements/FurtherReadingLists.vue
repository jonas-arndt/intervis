<template>
  <div>
    <div v-for="sectionData, sectionKey in furtherReadingData" :key="sectionKey" :class="['further-reading', sectionKey, toggleMore[sectionKey] ? 'more' : 'less']">
      <h4 class="title" v-html="$t(sectionData.titleKey)" />
      <ul>
        <li v-for="link, index in sectionData.entries" :key="index" :class="[index > 2 ? 'toggleable' : 'fixed']">
          <a :href="link.Link">
            <span class="title">{{ link.Title }}</span>
            <span v-if="link.Authors" class="author">{{ link.Authors }}</span>
          </a>
        </li>
      </ul>
      <a class="toggle-button" @click.prevent="toggleMore[sectionKey] = !toggleMore[sectionKey]">
        <span class="more-label" v-html="$t('chapter5-button1')" />
        <span class="less-label" v-html="$t('chapter5-button2')" />
      </a>
    </div>
  </div>
</template>

<script>
import StructuredLinkData from '~/data/links_structured.json'

export default {
  data () {
    return {
      linkData: StructuredLinkData,
      toggleMore: {
        books: false,
        articles: false,
        others: false
      }
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
  margin-bottom: 4em;

  &:last-child {
    margin-bottom: inherit;
  }

  a {
    color: $color-black;
    font-weight: inherit;
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

  .toggle-button {
    display: none;
  }

  ul {
    font-family: $font-family-signika;
    font-size: $font-size-smaller;
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
    left: 25%;

    & > .title:before {
      background: url('~assets/icons/links/articles.svg') center right no-repeat;
      background-size: contain;
    }
  }

  &.others {
    left: 50%;

    & > .title:before {
      background: url('~assets/icons/links/others.svg') center right no-repeat;
      background-size: contain;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    position: relative;
    width: 50%;
  }
}

.js .further-reading {

  .toggle-button {
    display: block;
    font-size: $font-size-smaller;
    font-family: $font-family-signika;
    color: $color-red;
    cursor: pointer;

    .more-label {
      display: none;
    }

    &:before {
      content: " ";
      position: relative;
      display: inline-block;
      width: 1.2em;
      height: 1.2em;
      margin-right: 0.2em;
      top: 0.25em;

      background: url('~assets/icons/toggle/toggle-open.svg') left center no-repeat;
      background-size: 75% 75%;
    }

    &.more {
      .more-label {
        display: none;
      }

    }
  }

  &.less {
    li.toggleable {
      display: none;
    }

    .toggle-button {

      .less-label {
        display: none;
      }

      .more-label {
        display: inline-block;
      }

      &:before {
        background-image: url('~assets/icons/toggle/toggle-close.svg');
      }
    }
  }
}
</style>
