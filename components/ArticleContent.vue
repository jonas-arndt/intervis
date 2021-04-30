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
    }
  },
  computed: {
  },
  watch: {
    }
  },
  mounted () {
    window.addEventListener('resize', this.handleResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    ...mapMutations(['setChapterDimensions']),
    handleResize () {
      this.updateAllChapterDimensions()
    },
    updateAllChapterDimensions () {
      const chapterRefs = ['chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5']
      for (const chapterRef of chapterRefs) {
        this.updateChapterDimensions(chapterRef)
      }
    },
    updateChapterDimensions (chapterRef) {
      this.setChapterDimensions({
        chapterId: chapterRef,
        chapterDimensions: this.$refs[chapterRef].$el.getBoundingClientRect()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

.article-content {
  background-color: $color-white;

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
