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
      chapterDimensions: {},
      activeChapterDimensions: undefined
    }
  },
  computed: {
    ...mapState(['articleScrollPosition', 'activeArticleChapterId'])
  },
  watch: {
    articleScrollPosition (scrollPosition) {
      // if current chapter is undefined or not active anymore
      if (this.activeArticleChapterId === undefined || scrollPosition < this.activeChapterDimensions.y1 || scrollPosition > this.activeChapterDimensions.y2) {
        for (const [chapterId, dimensions] of Object.entries(this.chapterDimensions)) {
          if (scrollPosition >= dimensions.y1 && scrollPosition <= dimensions.y2) {
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
    window.addEventListener('resize', this.handleResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapMutations(['setActiveArticleChapterId']),
    handleResize () {
      this.updateAllChapterDimensions()
    },
    updateAllChapterDimensions () {
      for (const chapterRef in this.chapterDimensions) {
        this.updateChapterDimensions(chapterRef)
      }
    },
    updateChapterDimensions (chapterRef) {
      const boundingClientRect = this.$refs[chapterRef].$el.getBoundingClientRect()
      const y1 = this.articleScrollPosition + Math.round(boundingClientRect.top)
      const y2 = y1 + Math.round(boundingClientRect.height)

      this.chapterDimensions[chapterRef] = { y1, y2 }
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
