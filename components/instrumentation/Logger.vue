<template>
  <div />
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      id: 0,
      eventType: {
        windowResize: 20,
        scrollPosition: 50,
        stateChange: 60,
        languageChange: 70,
        linkClick: 80
      },
      packageType: {
        init: 10,
        stack: 20
      },
      packageCounter: 0,
      eventStack: [],
      hostUrl: 'uclab.fh-potsdam.de',
      instrumentationUrl: '/intervis/instrumentation/instrumentation.php'
    }
  },
  computed: {
    ...mapState([
      'projectDisclosureIsVisible',
      'designDecisionsAreVisible',
      'teaserIsVisible',
      'questionnaireLinkIsVisible',

      'conceptDevelopmentIsVisible',
      'discriminationDimensionsAreVisible',

      'activeDisclosureChapterId',
      'activeArticleChapterId',

      'verticalScrollPosition'
    ]),
    locale () {
      return this.$i18n.locale
    }
  },
  watch: {
    projectDisclosureIsVisible (newValue) {
      this.handleStateChange('projectDisclosureIsVisible', newValue)
    },
    designDecisionsAreVisible (newValue) {
      this.handleStateChange('designDecisionsAreVisible', newValue)
    },
    teaserIsVisible (newValue) {
      this.handleStateChange('teaserIsVisible', newValue)
    },
    questionnaireLinkIsVisible (newValue) {
      this.handleStateChange('questionnaireLinkIsVisible', newValue)
    },
    conceptDevelopmentIsVisible (newValue) {
      this.handleStateChange('conceptDevelopmentIsVisible', newValue)
    },
    discriminationDimensionsAreVisible (newValue) {
      this.handleStateChange('discriminationDimensionsAreVisible', newValue)
    },
    activeDisclosureChapterId (newValue) {
      this.handleStateChange('activeDisclosureChapterId', newValue)
    },
    activeArticleChapterId (newValue) {
      this.handleStateChange('activeArticleChapterId', newValue)
    },
    verticalScrollPosition (newValue) {
      this.handleScrollPositionChange(newValue)
    },
    locale (language) {
      this.handleLanguageChange(language)
    }
  },
  mounted () {
    if (window.location.href.includes(this.hostUrl)) {
      this.$nuxt.$on('windowResized', () => {
        this.handleWindowResize()
      })

      this.$nuxt.$on('questionnaireLinkWasClicked', () => {
        this.handleQuestionnaireClick()
      })

      this.initLogging()
    }
  },
  methods: {
    // log handling
    initLogging () {
      this.id = Date.now()
      this.sendInitialLog()
      window.setInterval(this.sendLog, 5000)
    },
    logEvent (type, data) {
      const eventData = {
        timeOffset: Date.now() - this.id,
        type,
        data
      }
      this.eventStack.push(eventData)
    },

    // handle events
    handleWindowResize () {
      this.logEvent(this.eventType.windowResize, this.getWindowSize())
    },
    handleQuestionnaireClick () {
      this.logEvent(this.eventType.linkClick, 'questionnaire')
    },
    handleScrollPositionChange (scrollPosition) {
      this.logEvent(this.eventType.scrollPosition, scrollPosition)
    },
    handleStateChange (state, value) {
      this.logEvent(this.eventType.stateChange, { state, value })
    },
    handleLanguageChange (language) {
      this.logEvent(this.eventType.languageChange, language)
    },

    // server communication
    sendInitialLog () {
      const data = {
        windowSize: this.getWindowSize(),
        projectDisclosureIsVisible: this.projectDisclosureIsVisible,
        designDecisionsAreVisible: this.designDecisionsAreVisible,
        teaserIsVisible: this.teaserIsVisible,
        questionnaireLinkIsVisible: this.questionnaireLinkIsVisible,
        conceptDevelopmentIsVisible: this.conceptDevelopmentIsVisible,
        discriminationDimensionsAreVisible: this.discriminationDimensionsAreVisible,
        activeDisclosureChapterId: this.activeDisclosureChapterId,
        activeArticleChapterId: this.activeArticleChapterId,
        verticalScrollPosition: this.verticalScrollPosition
      }
      this.sendPackage(this.packageType.init, data)
    },
    sendLog () {
      if (this.eventStack.length > 0) {
        const data = this.eventStack
        this.eventStack = []
        this.sendPackage(this.packageType.stack, data)
      }
    },
    sendPackage (type, data) {
      axios
        .post(this.instrumentationUrl, {
          id: this.id,
          num: this.packageCounter,
          type,
          data
        })
        .then(function (response) {})
        .catch(function (error) {
          this.$emit('logSendErrorOccured', error)
        })

      this.packageCounter++
    },

    // helper functions
    getWindowSize () {
      return {
        x: window.innerWidth,
        y: window.innerHeight
      }
    }
  }
}
</script>
