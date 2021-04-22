<template>
  <div class="article-content">
    <div class="content-with-background">
      <div class="background">
        <LineVisualization @hook:mounted="setComponentMounted('LineVisualization')" />
      </div>
      <div class="foreground">
        <Title @hook:mounted="setComponentMounted('Title')" />
        <Introduction @hook:mounted="setComponentMounted('Introduction')" />
        <Intersectionality @hook:mounted="setComponentMounted('Intersectionality')" />
        <DiscriminationAndPrivilege @hook:mounted="setComponentMounted('DiscriminationAndPrivilege')" />
        <CaseStudies @hook:mounted="setComponentMounted('CaseStudies')" />
        <Measures @hook:mounted="setComponentMounted('Measures')" />
      </div>
    </div>
    <NextSteps @hook:mounted="setComponentMounted('NextSteps')" />
    <Sources @hook:mounted="setComponentMounted('Sources')" />
  </div>
</template>

<script>
import scrollama from 'scrollama'

export default {
  data () {
    const subComponents = [
      'LineVisualization',
      'Title',
      'Introduction',
      'Intersectionality',
      'DiscriminationAndPrivilege',
      'CaseStudies',
      'Measures',
      'NextSteps',
      'Sources'
    ]

    const mountedSubComponents = {}
    for (const componentName of subComponents) {
      mountedSubComponents[componentName] = false
    }

    return {
      mountedSubComponents,
      scroller: undefined
    }
  },
  computed: {
    subComponentsFullyMounted () {
      for (const componentName in this.mountedSubComponents) {
        if (!this.mountedSubComponents[componentName]) {
          return false
        }
      }
      return true
    }
  },
  watch: {
    subComponentsFullyMounted (subComponentsFullyMounted) {
      if (subComponentsFullyMounted) {
        this.initScrollama()
      }
    }
  },
  methods: {
    setComponentMounted (componentName) {
      this.mountedSubComponents[componentName] = true
    },
    initScrollama () {
      this.scroller = scrollama()
      this.scroller.setup({
        step: '.chapter',
        progress: true,
        debug: false
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
