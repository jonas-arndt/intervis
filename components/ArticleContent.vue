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
      scroller: scrollama()
    }
  },
  mounted () {
    // setup the instance, pass callback functions
    this.scroller
      .setup({
        step: '.step',
        progress: true,
        debug: true
      })
      .onStepEnter((response) => {
        // { element, index, direction }
      })
      .onStepExit((response) => {
        // { element, index, direction }
      })
      .onStepProgress((response) => {
        // { element: DOMElement, index: number, progress: number }
      })

    // setup resize event
    window.addEventListener('resize', this.scroller.resize)
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
