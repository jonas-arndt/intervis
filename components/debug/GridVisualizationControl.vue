<template>
  <div class="grid-visualization-control-component">
    <b>Grid visualization</b>
    <div class="step">
      <span>Step</span>
      <input v-model.number="step" type="number" min="0" max="8">
    </div>
    <div class="progress">
      <span>Progress</span>
      <input v-model.number="progressBarValue" type="range" min="0" max="1000">
      <span class="value">{{ progress }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      progressMultiplier: 1000,
      progressBarValue: 0,
      step: 0
    }
  },
  computed: {
    progress () {
      return this.progressBarValue / 1000
    }
  },
  mounted () {}
}
</script>

<style scoped lang="scss">
.grid-visualization-control-component {
  width: 200px;

  .progress {
    display: flex;
  }
}
</style>
