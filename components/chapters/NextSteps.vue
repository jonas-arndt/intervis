<template>
  <div class="and-now">
    <FullWidthChapter>
      <h2 class="chapter-title" v-html="$t('chapter5-title')" />
      <p v-html="$t('chapter5-text1')" />

      <h3 v-html="$t('chapter5-subtitle2')" />
      <p v-html="$t('chapter5-text2')" />

      <ul class="personal-suggestions">
        <li v-html="$t('chapter5-point1')" />
        <li v-html="$t('chapter5-point2')" />
        <li v-html="$t('chapter5-point3')" />
        <li v-html="$t('chapter5-point4')" />
        <li v-html="$t('chapter5-point5')" />
        <li v-html="$t('chapter5-point6')" />
        <li v-html="$t('chapter5-point7')" />
        <li v-html="$t('chapter5-point8')" />
        <li v-html="$t('chapter5-point9')" />
      </ul>

      <h3 v-html="$t('chapter5-subtitle3')" />
      <p v-html="$t('chapter5-text3')" />

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
    </FullWidthChapter>
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

.and-now {
  .chapter-title {
    font-weight: 700;
    margin-bottom: 0.6em;
  }

  a {
    color: $color-black;
    font-weight: inherit;

    &:hover {
      color: $color-red;
    }
  }

  h2 {
    margin-bottom: 1.8rem;
  }

  h3 {
    font-size: $font-size-subtitle;
    margin-top: 4rem;
    margin-bottom: 1.6rem;
    font-weight: 400;
  }

  h4 {
    margin-top: 2em;
    margin-bottom: 0.7em;
  }

  ul.personal-suggestions {
    padding-left: 1em;
    font-size: $font-size-small;
    font-weight: 600;

    li {
      margin-bottom: 2em;
    }
  }

  .further-reading {
    padding-left: 2rem;

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
    }

    li {
      position: relative;
      margin-bottom: 1em;

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
  }

  @media (min-width: $media-breakpoint-min-m) {
    ul.personal-suggestions {

      li {
        width: 45%;

        &:nth-child(2n) {
          position: relative;
          left: 55%;
        }
      }
    }

    .further-reading {
      position: relative;
      width: 33%;
    }
  }
}
</style>
