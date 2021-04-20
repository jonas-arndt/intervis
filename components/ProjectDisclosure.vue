<template>
  <div class="project-disclosure content">
    <button class="red-bordered-button return-button" @click="$store.commit('toggleDisclosureVisibility')" v-html="$t('backside-button')" />
    <ProjectDisclosurePart1 />
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

.project-disclosure {
  background-color: $color-white;

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
