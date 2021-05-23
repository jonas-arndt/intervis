<template>
  <div class="disabilities-animation" />
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    breakpoints: {
      type: Object,
      required: true,
      default: () => { return {} }
    }
  }
}
</script>
