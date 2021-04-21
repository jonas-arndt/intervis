<template>
  <div class="project-disclosure content">
    <div class="header">
      <h1 v-html="$t('backside-title')" />
      <DisclosureNavigation />
    </div>

    <div class="content">
      <ProjectDisclosurePart1 v-if="activeDisclosureChapterId == 0" />
      <ProjectDisclosurePart2 v-if="activeDisclosureChapterId == 1" />
      <ProjectDisclosurePart3 v-if="activeDisclosureChapterId == 2" />
      <ProjectDisclosurePart4 v-if="activeDisclosureChapterId == 3" />
      <ProjectDisclosurePart5 v-if="activeDisclosureChapterId == 4" />
    </div>

    <button class="red-bordered-button return-button" @click="$store.commit('toggleDisclosureVisibility')" v-html="$t('backside-button')" />
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
  position: relative;
  display: flex;
  flex-direction: column;

  height: 100%;

  background-color: $color-white;

  .header, .content {
    display: table-row;
  }

  .content {
    overflow-y: scroll;
    padding-bottom: 4rem;
  }

  .return-button {
    position: fixed;
    width: 94%;
    left: 3%;
    bottom: 3%;
  }

  @media (min-width: $media-breakpoint-min-m) {
    flex-direction: row;

    .return-button {
      width: auto;
      top: 1rem;
      left: 1rem;
      bottom: auto;
    }
  }
}

</style>
