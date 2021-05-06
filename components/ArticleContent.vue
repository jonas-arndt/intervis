<template>
  <div class="article-content">
    <div class="content-with-background">
      <div class="background">
        <LineVisualization />
      </div>
      <div class="foreground">
        <Title />
        <Introduction ref="introduction" @hook:mounted="updateChapterDimensions('introduction')" />
        <Intersectionality ref="chapter1" @hook:mounted="updateChapterDimensions('chapter1')" />
        <DiscriminationAndPrivilege ref="chapter2" @hook:mounted="updateChapterDimensions('chapter2')" />
        <CaseStudies ref="chapter3" @hook:mounted="updateChapterDimensions('chapter3')" />
        <Measures ref="chapter4" @hook:mounted="updateChapterDimensions('chapter4')" />
      </div>
    </div>
    <NextSteps ref="chapter5" @hook:mounted="updateChapterDimensions('chapter5')" />
    <ProjectInformation />
    <References />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      chapterDimensions: {},
      activeChapterDimensions: undefined
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition', 'verticalViewportCenter', 'activeArticleChapterId']),
    centeredScrollPosition () {
      return Math.max(0, this.verticalScrollPosition - this.verticalViewportCenter)
    }
  },
  watch: {
    centeredScrollPosition (scrollPosition) {
      // if current chapter is undefined or not active anymore
      if (this.activeArticleChapterId === undefined || scrollPosition < this.activeChapterDimensions.y1 || scrollPosition > this.activeChapterDimensions.y2) {
        for (const [chapterId, dimensions] of Object.entries(this.chapterDimensions)) {
          if (scrollPosition >= dimensions.y1 && scrollPosition <= dimensions.y2) {
            // TODO: Update chapter dimensions when page is completely loaded
            this.updateAllChapterDimensions()

            this.setActiveArticleChapterId(chapterId)
            this.activeChapterDimensions = dimensions
            return
          }
        }

        // reset values if no matching chapter was found
        this.setActiveArticleChapterId(undefined)
        this.activeChapterDimensions = undefined
      }
    }
  },
  mounted () {
    this.$nuxt.$on('windowResized', this.handleWindowResizeEvent)
    this.$nuxt.$on('scrollToChapter', this.handleCallToChapterEvent)
  },
  methods: {
    ...mapMutations([
      'setActiveArticleChapterId',
      'setIntroductionStartPosition',
      'setIntersectionalityChapterStartPosition',
      'setDiscriminationChapterStartPosition',
      'setMeasuresChapterEndPosition'
    ]),
    handleCallToChapterEvent (chapterId) {
      if (chapterId in this.chapterDimensions) {
        this.updateChapterDimensions(chapterId)
        this.$nuxt.$emit('scrollArticle', this.chapterDimensions[chapterId].y1)
      }
    },
    handleWindowResizeEvent () {
      this.updateAllChapterDimensions()
    },
    updateAllChapterDimensions () {
      for (const chapterId in this.chapterDimensions) {
        this.updateChapterDimensions(chapterId)
      }
    },
    updateChapterDimensions (chapterId) {
      const boundingClientRect = this.$refs[chapterId].$el.getBoundingClientRect()
      const y1 = this.verticalScrollPosition + Math.round(boundingClientRect.top)
      const y2 = y1 + Math.round(boundingClientRect.height)

      this.chapterDimensions[chapterId] = { y1, y2 }

      // set break point values
      switch (chapterId) {
        case 'introduction': {
          this.setIntroductionStartPosition(y1)
          break
        }
        case 'chapter1': {
          this.setIntersectionalityChapterStartPosition(y1)
          break
        }
        case 'chapter2': {
          this.setDiscriminationChapterStartPosition(y1)
          break
        }
        case 'chapter4': {
          this.setMeasuresChapterEndPosition(y2)
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

.article-content {
  background-color: $color-white;
  position: relative;

  .content-with-background {
    position: relative;

    & > .background {
      position: sticky;
      top: 0;
      left: 0;

      width: 100%;
      height: 100vh;

      z-index: 100;
    }

    & > .foreground {
      position: relative;
      z-index: 200;
      top: -100vh;
      margin-bottom: -100vh;
    }
  }
}

</style>
