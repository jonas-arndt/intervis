<template>
  <div class="question-with-hidden-answer">
    <p class="question">
      <slot />
    </p>
    <div class="hidden-content-wrapper">
      <span class="toggle"><slot name="toggle" /></span>
      <div class="answer">
        <slot name="answer" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

</style>
