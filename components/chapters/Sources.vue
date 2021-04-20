<template>
  <div class="chapter project-information-and-sources">
    <h2 class="chapter-title" v-html="$t('projectinfo-title')" />
    <p v-html="$t('projectinfo-text1')" />
    <p class="disclosure-link">
      <button class="red-button" @click="$store.commit('toggleDisclosureVisibility')" v-html="$t('projectinfo-button')" />
    </p>

    <h2 class="chapter-title" v-html="$t('references-title')" />
    <div class="references">
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

.chapter.project-information-and-sources {
  background-color: $color-light-grey;
  padding: 1rem;

  h2 {
    font-size: $font-size-title;
    margin-bottom: 1.8rem;
  }

  .disclosure-link {
    margin-top: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  .references {
    font-size: $font-size-smaller;
    line-height: normal;
    overflow-wrap: break-word;
    margin-bottom: 2rem;

    ul li {
      margin-bottom: 1em;
    }
  }
}

@media (min-width: $media-breakpoint-min-m) {
  .chapter.project-information-and-sources {
    padding: 3rem 20% 5rem 20%;

    .references {
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
