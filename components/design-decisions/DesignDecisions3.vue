<template>
  <div>
    <h1>{{ $t('slidein3-subtitle') }}</h1>

    <QuestionWithHiddenAnswer>
      {{ $t('slidein3-heading1') }}
      <template v-slot:toggle>
        {{ $t('slidein3-button1') }}
      </template>
      <template v-slot:answer>
        <p />{{ $t('slidein3-text1') }}
        </p>
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('slidein3-heading2') }}
      <template v-slot:toggle>
        {{ $t('slidein3-button2') }}
      </template>
      <template v-slot:answer>
        {{ $t('slidein3-text2') }}
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('slidein3-heading3') }}
      <template v-slot:toggle>
        {{ $t('slidein3-button3') }}
      </template>
      <template v-slot:answer>
        {{ $t('slidein3-text3') }}
      </template>
    </QuestionWithHiddenAnswer>
  </div>
</template>
