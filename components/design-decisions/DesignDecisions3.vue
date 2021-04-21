<template>
  <div class="design-decisions-3">
    <h1 class="title" v-html="$t('slidein3-subtitle')" />

    <QuestionWithHiddenAnswer>
      <span v-html="$t('slidein3-heading1')" />
      <template v-slot:toggle>
        <span v-html="$t('slidein3-button1')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('slidein3-text1')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('slidein3-heading2')" />
      <template v-slot:toggle>
        <span v-html="$t('slidein3-button2')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('slidein3-text2')" />
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      <span v-html="$t('slidein3-heading3')" />
      <template v-slot:toggle>
        <span v-html="$t('slidein3-button3')" />
      </template>
      <template v-slot:answer>
        <p v-html="$t('slidein3-text3')" />
      </template>
    </QuestionWithHiddenAnswer>
  </div>
</template>

<style lang="scss" scoped>

.design-decisions-3 {
  .title {
    margin-bottom: 1.2rem;
  }
}
</style>
