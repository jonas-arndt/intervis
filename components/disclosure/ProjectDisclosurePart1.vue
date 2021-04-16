<template>
  <div class="disclosure content">
    <h1>{{ $t('backside-menu1') }}</h1>
    <h2>{{ $t('backside-process-subtitle1') }}</h2>
    <p>
      {{ $t('backside-process-intro1') }}
    </p>

    <img v-if="$i18n.locale == 'de'" src="~/assets/intervis_disclosure_figures/process1_de.png">
    <img v-if="$i18n.locale == 'en'" src="~/assets/intervis_disclosure_figures/process1_en.png">

    <h3>{{ $t('backside-process-heading1') }}</h3>
    <p>
      {{ $t('backside-process-text1') }}
    </p>

    <h3>{{ $t('backside-process-heading2') }}</h3>
    <p>
      {{ $t('backside-process-text2') }}
    </p>

    <h3>{{ $t('backside-process-heading3') }}</h3>
    <img src="~/assets/intervis_disclosure_figures/designdrafts.png">
    <p>
      {{ $t('backside-process-text3') }}
    </p>

    <h3>{{ $t('backside-process-heading4') }}</h3>
    <p>
      {{ $t('backside-process-text4') }}
    </p>

    <h2>{{ $t('backside-process-subtitle2') }}</h2>
    <p>
      {{ $t('backside-process-intro2') }}
    </p>

    <img v-if="$i18n.locale == 'de'" src="~/assets/intervis_disclosure_figures/process2_de.png">
    <img v-if="$i18n.locale == 'en'" src="~/assets/intervis_disclosure_figures/process2_en.png">

    <h3>{{ $t('backside-process-heading5') }}</h3>
    <p>
      {{ $t('backside-process-text5') }}
    </p>

    <h3>{{ $t('backside-process-heading6') }}</h3>
    <p>
      {{ $t('backside-process-text6') }}
    </p>

    <h3>{{ $t('backside-process-heading7') }}</h3>
    <p>
      {{ $t('backside-process-text7') }}
    </p>

    <h3>{{ $t('backside-process-heading8') }}</h3>
    <p>
      {{ $t('backside-process-text8') }}
    </p>
  </div>
</template>
