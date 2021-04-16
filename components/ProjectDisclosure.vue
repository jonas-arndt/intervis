<template>
  <div class="project-disclosure content">
    <button @click="$store.commit('toggleDisclosureVisibility')">
      {{ $t('backside-button') }}
    </button>

    <ProjectDisclosurePart1 />
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

</style>
