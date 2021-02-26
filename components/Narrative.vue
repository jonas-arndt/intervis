<template>
  <div class="narrative">
    <button style="position: fixed; right: 0; top: 20px; z-index:1000;" @click="$store.commit('toggleDesignDecisionsVisibility')">
      Einblick in die Visualisierungsentscheidungen
    </button>

    <Title />

    <Introduction />

    <Intersectionality />

    <div class="popup-overlay">
      <div class="horizontal scroll-container">
        <ConceptDevelopment />
      </div>
    </div>

    <DiscriminationAndPrivilege />

    <div class="popup-overlay">
      <div class="horizontal scroll-container">
        <DimensionsDiscrimination />
      </div>
    </div>

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

.narrative {
}

</style>
