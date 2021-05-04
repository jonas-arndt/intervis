<template>
  <div class="article-content">
    <div class="content-with-background">
      <div class="background">
        <LineVisualization />
      </div>
      <div class="foreground">
        <Title />
        <Introduction />
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
      verticalViewportCenter: 0,
      chapterDimensions: {},
      activeChapterDimensions: undefined
    }
  },
  computed: {
    ...mapState(['articleScrollPosition', 'activeArticleChapterId']),
    centeredScrollPosition () {
      return Math.max(0, this.articleScrollPosition - this.verticalViewportCenter)
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

    this.updateVerticalViewportCenter()
  },
  methods: {
    ...mapMutations(['setActiveArticleChapterId']),
    handleCallToChapterEvent (chapterId) {
      if (chapterId in this.chapterDimensions) {
        this.updateChapterDimensions(chapterId)
        this.$nuxt.$emit('scrollArticle', this.chapterDimensions[chapterId].y1)
      }
    },
    handleWindowResizeEvent () {
      this.updateVerticalViewportCenter()
      this.updateAllChapterDimensions()
    },
    updateVerticalViewportCenter () {
      this.verticalViewportCenter = Math.floor(window.innerHeight / 2)
    },
    updateAllChapterDimensions () {
      for (const chapterId in this.chapterDimensions) {
        this.updateChapterDimensions(chapterId)
      }
    },
    updateChapterDimensions (chapterId) {
      const boundingClientRect = this.$refs[chapterId].$el.getBoundingClientRect()
      const y1 = this.articleScrollPosition + Math.round(boundingClientRect.top)
      const y2 = y1 + Math.round(boundingClientRect.height)

      this.chapterDimensions[chapterId] = { y1, y2 }
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

    .background {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      z-index: 100;
    }

    .foreground {
      position: relative;
      z-index: 200;
    }
  }
}

</style>
