<template>
  <div ref="page" class="page index">
    <DialogContainer class="intro">
      <Teaser />
    </DialogContainer>

    <SliderContainer :slided-in="designDecisionsAreVisible" class="design-decisions-container">
      <!-- SliderContainer: main content start -->
      <template v-slot:main>
        <FlipContainer ref="flipContainer" :flipped="projectDisclosureIsVisible">
          <!-- FlipContainer: front content start -->
          <template v-slot:front>
            <ArticleContent />
          </template>
          <!-- FlipContainer: front content end -->

          <!-- FlipContainer: back content start-->
          <template v-slot:back>
            <ProjectDisclosure />
          </template>
          <!-- FlipContainer: back content end -->
        </FlipContainer>
      </template>
      <!-- SliderContainer: main content end -->

      <!-- SliderContainer: slide in content start -->
      <template v-slot:slide-in>
        test
        <SlideInContent />
      </template>
      <!-- SliderContainer: slide in content end -->
    </SliderContainer>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['projectDisclosureIsVisible', 'designDecisionsAreVisible'])
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
