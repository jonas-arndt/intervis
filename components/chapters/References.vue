<template>
  <div class="references">
    <FullWidthChapter>
      <h2 class="chapter-title" v-html="$t('references-title')" />
      <div class="reference-list">
        <ul>
          <li v-for="reference, index in references" :key="index" class="reference">
            <span v-if="reference.author" class="author">{{ reference.author }}</span>
            <span v-if="reference.title" class="title">{{ reference.title }}</span>
            <span v-if="reference.source" class="source">{{ reference.source }}</span>
            <span v-if="reference.link">
              {{ $t('references-downloaded') }}
              <a :href="reference.link" class="link">{{ reference.link }}</a>
            </span>
            <span v-if="reference['request date']" class="request-date">({{ reference['request date'] }})</span>
          </li>
        </ul>
      </div>

      <div class="imprint-link">
        <a href="#">Impressum</a>
      </div>
    </FullWidthChapter>
  </div>
</template>

<script>
import ReferenceData from '~/data/references.json'

export default {
  data () {
    return {
      references: ReferenceData
    }
  }
}

</script>

<style lang="scss" scoped>
@import "../../styles/_variables";

.references {
  background-color: $color-light-grey;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .chapter-title {
    font-weight: 700;
    margin-bottom: 0.6em;
  }

  h2 {
    font-size: $font-size-title;
    margin-bottom: 1.8rem;
  }

  a {
    font-weight: normal;
    color: $color-black;

    &:hover {
      color: $color-red;
    }
  }

  .reference-list {
    font-size: $font-size-smaller;
    line-height: normal;
    overflow-wrap: break-word;
    margin-bottom: 2rem;

    ul li {
      margin-bottom: 1em;
    }
  }

  @media (min-width: $media-breakpoint-min-m) {
    padding-top: 3rem;
    padding-bottom: 5rem;

    .reference-list {
      ul {
        // TODO: Add IE workaround (https://stackoverflow.com/a/14745429)
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;

        column-gap: 3em;
        -webkit-column-gap: 3em;
        -moz-column-gap: 3em;
      }

      .reference {
        .title {
          font-style: italic;
        }
        .link {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
