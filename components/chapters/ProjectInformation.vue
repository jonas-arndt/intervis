<template>
  <div class="project-information">
    <FullWidthChapter>
      <h2 class="chapter-title" v-html="$t('projectinfo-title')" />
      <p v-html="$t('projectinfo-text1')" />
      <p class="disclosure-link">
        <button class="red-button" @click="$store.commit('toggleDisclosureVisibility')" v-html="$t('projectinfo-button')" />
      </p>
    </FullWidthChapter>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.project-information {
  .chapter-title {
    font-weight: 700;
    margin-bottom: 0.6em;
  }

  h2 {
    font-size: $font-size-title;
    margin-bottom: 1.8rem;
  }

  .disclosure-link {
    margin-top: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }
}
</style>
