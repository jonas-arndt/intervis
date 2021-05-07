<template>
  <div class="question-with-hidden-answer">
    <p class="question">
      <slot />
    </p>
    <div class="hidden-content-wrapper">
      <span class="toggle" @click="showAnswer = !showAnswer">
        <slot name="toggle" />
      </span>
      <transition name="fadeHeight" mode="out-in">
        <div v-show="showAnswer" class="answer">
          <slot name="answer" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAnswer: false
    }
  }
}
</script>

<style lang="scss">
@import "../../styles/_variables";

.question-with-hidden-answer {
  margin-bottom: 1.2rem;

  .question {
    font-size: $font-size-title-caption;
    font-style: italic;
    margin-bottom: 0.7rem;
  }

  .toggle {
    display: inline-block;
    margin-bottom: 0.4rem;
    color: $color-red;
  }

  .answer {
    overflow: hidden;

    img {
      max-width: 100%;
      margin-top: 0.4rem;
      margin-bottom: 0.7rem;
    }
  }
}

.js .question-with-hidden-answer {
  .toggle {
    cursor: pointer;
  }

  .fadeHeight-enter-active,
  .fadeHeight-leave-active {
    transition: all 1s;
    max-height: 25em;
  }
  .fadeHeight-enter,
  .fadeHeight-leave-to
  {
    opacity: 0;
    max-height: 0px;
  }
}

</style>
