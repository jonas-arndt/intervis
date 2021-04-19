<template>
  <div>
    <h1 v-html="$t('slidein1-subtitle')" />
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
        <img src="~/assets/intervis_disclosure_figures/alternative1.png">
        <p v-html="$t('slidein1-text3')" />
      </template>
    </QuestionWithHiddenAnswer>
  </div>
</template>
