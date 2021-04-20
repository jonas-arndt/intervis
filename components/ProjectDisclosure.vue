<template>
  <div class="project-disclosure content">
    <button class="red-bordered-button return-button" @click="$store.commit('toggleDisclosureVisibility')" v-html="$t('backside-button')" />

    <header>
      <h1 v-html="$t('backside-title')" />
      <DisclosureNavigation />
    </header>

    <main>
      <ProjectDisclosurePart1 v-if="activeDisclosureChapterId == 0" />
      <ProjectDisclosurePart2 v-if="activeDisclosureChapterId == 1" />
      <ProjectDisclosurePart3 v-if="activeDisclosureChapterId == 2" />
      <ProjectDisclosurePart4 v-if="activeDisclosureChapterId == 3" />
      <ProjectDisclosurePart5 v-if="activeDisclosureChapterId == 4" />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['activeDisclosureChapterId'])
  }

}
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

.project-disclosure {
  background-color: $color-white;
  position: relative;
  height: 100%;
  overflow: scroll;

  .return-button {
    position: fixed;
    width: 94%;
    left: 3%;
    bottom: 3%;
  }

  @media (min-width: $media-breakpoint-min-m) {
    .return-button {
      width: auto;
      top: 1rem;
      left: 1rem;
      bottom: auto;
    }
  }
}

</style>
