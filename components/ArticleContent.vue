<template>
  <div class="article-content">
    <div class="content-with-background">
      <div class="background">
        <LineVisualization />
      </div>
      <div class="foreground">
        <Title />
        <Introduction />
        <Intersectionality />
        <DiscriminationAndPrivilege />
        <CaseStudies />
        <Measures />
      </div>
    </div>
    <NextSteps />
    <Sources />
  </div>
  </div>
</template>

<script>
import scrollama from 'scrollama'

export default {
  data () {
    return {
      scroller: scrollama(),
      scrollProgress: 0
    }
  },
  mounted () {
    // this.scroller.setup({
    //   step: '.step',
    //   offset: 0.5,
    //   order: false,
    //   debug: false
    // })

    window.addEventListener('resize', () => {
      this.scroller.resize()
    })
    window.addEventListener('scroll', () => {
      // set scroll progress
      this.scrollProgress = window.scrollY / (this.$refs.page.clientHeight - window.innerHeight)
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables";

.article-content {
    background-color: #F9FAFF;

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

    .design-decisions-toggle-button {
        position: fixed;
        right: 0;
        top: 20px;
        z-index:1000;
    }
}

</style>
