<template>
  <div class="article-content">
    <div id="introduction" class="intersecting">
      <Title ref="title" />
      <Introduction ref="introduction" @hook:mounted="updateChapterDimensions('introduction')" />
    </div>
    <Intersectionality id="chapter1" ref="chapter1" class="intersecting" @hook:mounted="updateChapterDimensions('chapter1')" />
    <DiscriminationAndPrivilege id="chapter2" ref="chapter2" class="intersecting" @hook:mounted="updateChapterDimensions('chapter2')" />
    <CaseStudies id="chapter3" ref="chapter3" class="intersecting" @hook:mounted="updateChapterDimensions('chapter3')" />
    <Measures id="chapter4" ref="chapter4" class="intersecting" @hook:mounted="updateChapterDimensions('chapter4')" />
    <div id="chapter5" class="intersecting">
      <NextSteps ref="chapter5" @hook:mounted="updateChapterDimensions('chapter5')" />
      <ProjectInformation />
      <References />
      <Imprint />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      intersectionObserverConfig: {
        root: this.$el, // setting root to null sets it to viewport
        rootMargin: '0px',
        threshold: 0
      },
      observer: undefined
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition'])
  },
  mounted () {
    this.$nuxt.$on('windowResized', this.handleWindowResizeEvent)
    this.$nuxt.$on('scrollToChapter', this.handleCallToChapterEvent)

    this.addIntersectionObserver()
  },
  methods: {
    ...mapMutations([
      'setActiveArticleChapterId',
      'setIntroductionStartPosition',
      'setIntersectionalityChapterStartPosition',
      'setDiscriminationChapterStartPosition',
      'setNextStepsChapterStartPosition'
    ]),
    addIntersectionObserver () {
      const self = this
      this.observer = new IntersectionObserver(
        this.handleIntersectionObserverCallback,
        this.intersectionObserverConfig
      )

      const domElements = document.querySelectorAll('.intersecting')
      domElements.forEach((domElement) => {
        self.observer.observe(domElement)
      })
    },
    handleIntersectionObserverCallback (entries) {
      const self = this
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          self.handleElementIntersection(entry)
        }
      })
    },
    handleElementIntersection (entry) {
      this.setActiveArticleChapterId(entry.target.id)
    },
    handleCallToChapterEvent (chapterId) {
      const rect = this.$refs[chapterId].$el.getBoundingClientRect()
      this.$nuxt.$emit('scrollArticle', this.verticalScrollPosition + rect.top)
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
      const y = this.verticalScrollPosition + Math.round(boundingClientRect.top)

      // set break point values
      switch (chapterId) {
        case 'introduction': {
          this.setIntroductionStartPosition(y)
          break
        }
        case 'chapter1': {
          this.setIntersectionalityChapterStartPosition(y)
          break
        }
        case 'chapter2': {
          this.setDiscriminationChapterStartPosition(y)
          break
        }
        case 'chapter5': {
          this.setNextStepsChapterStartPosition(y)
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
  position: relative;
}

</style>
