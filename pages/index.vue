<template>
  <div ref="page" class="page index">
    <DialogContainer v-if="teaserIsVisible" class="intro">
      <Teaser />
    </DialogContainer>

    <FlipContainer ref="flipContainer" :flipped="projectDisclosureIsVisible">
      <!-- FlipContainer: front content start -->
      <template v-slot:front>
        <SliderContainer :slided-in="designDecisionsAreVisible" class="design-decisions-container">
          <ArticleContent />
        </SliderContainer>
      </template>
      <!-- FlipContainer: front content end -->

      <!-- FlipContainer: back content start-->
      <template v-slot:back>
        <ProjectDisclosure />
      </template>
      <!-- FlipContainer: back content end -->
    </FlipContainer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['projectDisclosureIsVisible', 'designDecisionsAreVisible', 'teaserIsVisible'])
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

.page {
  height: 100%;

  .intro {
    z-index: 500;
  }

  .design-decisions-container {
    height: 100%;
  }
}

</style>
