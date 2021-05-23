<template>
  <div class="article-content">
    <Title id="title" ref="title" class="intersecting" />
    <Introduction id="introduction" ref="introduction" class="intersecting" @hook:mounted="updateChapterDimensions('introduction')" />
    <Intersectionality id="chapter1" ref="chapter1" class="intersecting" @hook:mounted="updateChapterDimensions('chapter1')" />
    <DiscriminationAndPrivilege id="chapter2" ref="chapter2" class="intersecting" :active="'chapter2' in chapterActiveState && chapterActiveState.chapter2" @hook:mounted="updateChapterDimensions('chapter2')" />
    <CaseStudies id="chapter3" ref="chapter3" class="intersecting" :chapter-active-state="chapterActiveState" @hook:mounted="updateChapterDimensions('chapter3')" />
    <Measures id="chapter4" ref="chapter4" class="intersecting" :active="'chapter4' in chapterActiveState && chapterActiveState.chapter4" @hook:mounted="updateChapterDimensions('chapter4')" />
    <NextSteps id="chapter5" ref="chapter5" class="intersecting" @hook:mounted="updateChapterDimensions('chapter5')" />
    <ProjectInformation id="project-information" class="intersecting" />
    <References id="references" class="intersecting" />
    <Imprint id="imprint" class="intersecting" />
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
      observer: undefined,
      chapterActiveState: {},
      scrollArticleChapterOffsets: {
        chapter2: 1.75,
        chapter4: 1.5
      }
    }
  },
  computed: {
    ...mapState(['verticalScrollPosition', 'activeArticleChapterId', 'viewport'])
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
      'setCaseStudyChapterStartPosition',
      'setMeasuresChapterStartPosition',
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
          self.handleElementEnter(entry)
        } else {
          self.handleElementLeave(entry)
        }
      })
    },
    handleElementEnter (entry) {
      this.setActiveArticleChapterId(entry.target.id)
      this.$set(this.chapterActiveState, entry.target.id, true)
    },
    handleElementLeave (entry) {
      this.$set(this.chapterActiveState, entry.target.id, false)
    },
    handleCallToChapterEvent (chapterId) {
      const rect = this.$refs[chapterId].$el.getBoundingClientRect()
      const chapterOffset = chapterId in this.scrollArticleChapterOffsets
        ? this.scrollArticleChapterOffsets[chapterId] * this.viewport.height
        : 0
      this.$nuxt.$emit('scrollArticle', this.verticalScrollPosition + rect.top + chapterOffset)
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
        case 'chapter3': {
          this.setCaseStudyChapterStartPosition(y)
          break
        }
        case 'case1': {
          this.setCase1ChapterStartPosition(y)
          break
        }
        case 'case2': {
          this.setCase2ChapterStartPosition(y)
          break
        }
        case 'case3': {
          this.setCase3ChapterStartPosition(y)
          break
        }
        case 'chapter4': {
          this.setMeasuresChapterStartPosition(y)
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
