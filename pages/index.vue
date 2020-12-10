<template>
  <div ref="page" class="page">
    <DebugControl class="debug-control" />

    <Title />

    <Introduction />

    <Intersectionality />

    <DiscriminationAndPrivilege />

    <CaseStudies />

    <Measures />

    <NextSteps />

    <Sources />
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
    this.scroller.setup({
      step: '.step',
      offset: 0.5,
      order: false,
      debug: false
    })

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

<style lang="scss">
@import "../styles/_variables";

.debug-control {
  position: fixed;
  right: 2rem;
  top: 1.5rem;

  z-index: 1000;
}

</style>
