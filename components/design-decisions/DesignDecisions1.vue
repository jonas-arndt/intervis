<template>
  <div class="design-decisions-1">
    <h1 class="title" v-html="$t('slidein1-subtitle')" />
    <p class="teaser" v-html="$t('slidein1-intro')" />

    <QuestionWithHiddenAnswer>
      <span v-html="$t('slidein1-heading1')" />
      <template v-slot:toggle>
        <span v-html="$t('slidein1-button1')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('slidein1-text1')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('slidein1-heading2')" />
      <template v-slot:toggle>
        <span v-html="$t('slidein1-button2')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('slidein1-text2')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('slidein1-heading3')" />
      <template v-slot:toggle>
        <span v-html="$t('slidein1-button3')" />
      </template>
      <template v-slot:answer>
        <img src="~/assets/disclosure/alternative1.jpg" :alt="$t('alt-tag-alternative1')">
        <p v-html="$t('slidein1-text3')" />
      </template>
    </QuestionWithHiddenAnswer>
  </div>
</template>

<style lang="scss" scoped>

.design-decisions-1 {
  .title {
    margin-bottom: 1.2rem;
  }

  .teaser {
    font-style: italic;
    margin-bottom: 1.8rem;
  }
}
</style>
