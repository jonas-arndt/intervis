<template>
  <div class="project-disclosure">
    <div class="header">
      <h1 class="title" v-html="$t('backside-title')" />
      <DisclosureNavigation class="navigation" />
    </div>

    <div class="content">
      <ProjectDisclosurePart1 v-if="activeDisclosureChapterId == 0" />
      <ProjectDisclosurePart2 v-if="activeDisclosureChapterId == 1" />
      <ProjectDisclosurePart3 v-if="activeDisclosureChapterId == 2" />
      <ProjectDisclosurePart4 v-if="activeDisclosureChapterId == 3" />
      <ProjectDisclosurePart5 v-if="activeDisclosureChapterId == 4" />
    </div>

    <RedBorderedButton class="return-button" :action="toggleDisclosureVisibility">
      <span v-html="$t('backside-button')" />
    </RedBorderedButton>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['activeDisclosureChapterId'])
  },
  methods: {
    ...mapMutations(['toggleDisclosureVisibility'])
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

.project-disclosure {
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;
  background-color: $color-white;

  .header {
    padding: 1.5rem;
    padding-bottom: 0.5rem;

    .title {
      font-weight: 700;
      font-size: $font-size-subtitle;
      margin-bottom: 1rem;
    }

    .navigation {
      margin-left: -0.3rem;
    }
  }

  .content {
    overflow-y: auto;

    & > * {
      padding: 0.5rem 1.5rem 3.5rem 1.5rem;
    }
  }

  .return-button {
    display: none;
  }

  @media (min-width: $media-breakpoint-min-m) {
    flex-direction: row;

    .header {
      min-width: 10rem;
      flex-shrink: 0;

      padding-top: 5rem;
    }

    .content > * {
      padding-top: 5rem;
    }

    .return-button {
      display: block;

      position: fixed;
      top: 1rem;
      left: 1rem;
      background-color: $color-white;
    }
  }
}

</style>
