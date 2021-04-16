<template>
  <div>
    <h1>{{ $t('slidein2-subtitle') }}</h1>

    <QuestionWithHiddenAnswer>
      {{ $t('slidein2-heading1') }}
      <template v-slot:toggle>
        {{ $t('slidein2-button1') }}
      </template>
      <template v-slot:answer>
        {{ $t('slidein2-text1') }}
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('slidein2-heading2') }}
      <template v-slot:toggle>
        {{ $t('slidein2-button2') }}
      </template>
      <template v-slot:answer>
        {{ $t('slidein2-text2') }}
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('slidein2-heading3') }}
      <template v-slot:toggle>
        {{ $t('slidein2-button3') }}
      </template>
      <template v-slot:answer>
        <p>
          {{ $t('slidein2-text3') }}
        </p>
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('slidein2-heading4') }}
      <template v-slot:toggle>
        {{ $t('slidein2-button4') }}
      </template>
      <template v-slot:answer>
        <img src="~/assets/intervis_disclosure_figures/alternative2.png">
        <p>
          {{ $t('slidein2-text4') }}
        </p>
      </template>
    </QuestionWithHiddenAnswer>
  </div>
</template>
