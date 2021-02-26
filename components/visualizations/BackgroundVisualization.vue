<template>
  <div class="background-visualization">
    <div class="lines" />
    <div class="visualization">
      <img :src="require('~/assets/visualizations/zugang_integration_teilhabe_anerkennung.svg')" alt="Zugang, Integration, Teilhabe, Anerkennung">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 0
    },
    progress: {
      type: Number,
      default: 0
    }
  },
  data () {},
  mounted () {}
}
</script>

<style scoped lang="scss">
.background-visualization {
  position: relative;
  height: 100%;

  .lines {
    position: sticky;
    top: 0;

    width: 100%;
    height: 100vh;

    background: url('~assets/lines/lines-grey.jpg');
    background-size: cover;
  }

  .visualization {
    position: sticky;
    top: 0;

    img {
      position: relative;
      top: 5vh;
      margin-top: 100vh;
      max-width: 100%;
      max-height: 90vh;
    }
  }
}
</style>
