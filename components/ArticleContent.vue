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
    <ProjectInformation />
    <References />
  </div>
</template>

<script>
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
  methods: {
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
