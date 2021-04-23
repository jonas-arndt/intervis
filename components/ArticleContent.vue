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
    <ProjectInformation @hook:mounted="setComponentMounted('ProjectInformation')" />
    <References @hook:mounted="setComponentMounted('References')" />
  </div>
</template>

<script>
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
      'ProjectInformation',
      'References'
    ]

    const mountedSubComponents = {}
    for (const componentName of subComponents) {
      mountedSubComponents[componentName] = false
    }

    return {
      mountedSubComponents,
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
      }
    }
  },
  methods: {
    setComponentMounted (componentName) {
      this.mountedSubComponents[componentName] = true
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
