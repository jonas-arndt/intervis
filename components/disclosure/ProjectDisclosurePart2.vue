<template>
  <div class="disclosure content">
    <h1>{{ $t('backside-menu2') }}</h1>
    <h2>{{ $t('backside-decision–subtitle1') }}</h2>
    <p>
      {{ $t('backside-decision–intro') }}
    </p>

    <QuestionWithHiddenAnswer>
      {{ $t('backside-decision-heading1') }}
      <template v-slot:toggle>
        {{ $t('backside-decision-button1') }}
      </template>
      <template v-slot:answer>
        {{ $t('backside-decision-text1') }}
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('backside-decision-heading2') }}
      <template v-slot:toggle>
        {{ $t('backside-decision-button2') }}
      </template>
      <template v-slot:answer>
        {{ $t('backside-decision-text2') }}
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('backside-decision-heading3') }}
      <template v-slot:toggle>
        {{ $t('backside-decision-button3') }}
      </template>
      <template v-slot:answer>
        <img src="~/assets/images/disclosure/alternative-drafts-1.png">
        <img src="~/assets/images/disclosure/alternative-drafts-2.png">
        <p>
          {{ $t('backside-decision-text3') }}
        </p>
      </template>
    </QuestionWithHiddenAnswer>

    <h2>{{ $t('backside-decision-subtitle2') }}</h2>

    <QuestionWithHiddenAnswer>
      {{ $t('backside-decision-heading4') }}
      <template v-slot:toggle>
        {{ $t('backside-decision-button4') }}
      </template>
      <template v-slot:answer>
        {{ $t('backside-decision-text4') }}
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('backside-decision-heading5') }}
      <template v-slot:toggle>
        {{ $t('backside-decision-button5') }}
      </template>
      <template v-slot:answer>
        <p>
          {{ $t('backside-decision-text5') }}
        </p>
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('backside-decision-heading6') }}
      <template v-slot:toggle>
        {{ $t('backside-decision-button6') }}
      </template>
      <template v-slot:answer>
        {{ $t('backside-decision-text6') }}
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('backside-decision-heading7') }}
      <template v-slot:toggle>
        {{ $t('backside-decision-button7') }}
      </template>
      <template v-slot:answer>
        <p>
          {{ $t('backside-decision-text7') }}
        </p>
      </template>
    </QuestionWithHiddenAnswer>

    <h2>{{ $t('backside-decision-subtitle3') }}</h2>

    <QuestionWithHiddenAnswer>
      {{ $t('backside-decision-heading8') }}
      <template v-slot:toggle>
        {{ $t('backside-decision-button8') }}
      </template>
      <template v-slot:answer>
        <p>
          {{ $t('backside-decision-text8') }}
        </p>
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('backside-decision-heading9') }}
      <template v-slot:toggle>
        {{ $t('backside-decision-button9') }}
      </template>
      <template v-slot:answer>
        {{ $t('backside-decision-text9') }}
      </template>
    </QuestionWithHiddenAnswer>

    <QuestionWithHiddenAnswer>
      {{ $t('backside-decision-heading10') }}
      <template v-slot:toggle>
        {{ $t('backside-decision-button10') }}
      </template>
      <template v-slot:answer>
        {{ $t('backside-decision-text10') }}
      </template>
    </QuestionWithHiddenAnswer>
  </div>
</template>
