<template>
  <div class="case-study-visalization working-woman-visualization">
    <div class="fallback">
      <div class="step-1">
        <div class="inside">
          <Chapter3Case1Step1Visualization />
        </div>
      </div>
      <div class="step-2">
        <div class="inside">
          <Chapter3Case1Step2Visualization />
        </div>
      </div>
    </div>
    <div class="interactive-visualization">
      <HijabAnimation :breakpoints="animationBreakpoints" :active="active" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState([
      'viewport',
      'case1ChapterStartPosition',
      'case2ChapterStartPosition'
    ]),
    chapterStart () {
      return this.case2ChapterStartPosition
    },
    chapterEnd () {
      return this.case3ChapterStartPosition
    },
    animationBreakpoints () {
      return {}
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/_variables";

.working-woman-visualization {
  .interactive-visualization {
    display: none;
  }
}

.page.js .working-woman-visualization {
  .fallback {
    display: none;
  }

  .interactive-visualization {
    position: sticky;
    display: block;
    top: 0;
    height: 100vh;
  }
}

.working-woman-visualization .fallback {
  .step-1, .step-2 {
    position: absolute;
    width: 100%;
    min-height: 100vh;

    & > .inside {
      position: sticky;
      top: 0;
      height: 100vh;
      width: 100%;
    }

    // step specific styles

    &.step-1 {
      top: 0;
      height: 30%;
    }

    &.step-2 {
      top: 40%;
      height: 60%;
    }
  }
}
</style>
