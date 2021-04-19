<template>
  <div class="project-disclosure content">
    <button @click="$store.commit('toggleDisclosureVisibility')" v-html="$t('backside-button')" />
    <ProjectDisclosurePart1 />
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

</style>
