<template>
  <div class="project-information">
    <FullWidthContent>
      <h2 class="chapter-title" v-html="$t('projectinfo-title')" />
      <p v-html="$t('projectinfo-text1')" />
      <p class="disclosure-link">
        <RedButton @click="$store.commit('toggleDisclosureVisibility')">
          <span v-html="$t('projectinfo-button')" />
        </RedButton>
      </p>
    </FullWidthContent>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/_variables";

.project-information {
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

  .disclosure-link {
    margin-top: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  @media (min-width: $media-breakpoint-min-m) {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
}
</style>
