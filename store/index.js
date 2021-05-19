export const state = () => ({
  projectDisclosureIsVisible: false,
  designDecisionsAreVisible: false,
  teaserIsVisible: true,
  questionnaireLinkIsVisible: false,

  conceptDevelopmentIsVisible: false,
  discriminationDimensionsAreVisible: false,

  activeDisclosureChapterId: 0,
  activeArticleChapterId: undefined,

  verticalScrollPosition: 0,
  verticalViewportCenter: 0,

  // logging
  loggingId: '0',

  // article break points
  introductionStartPosition: undefined,
  intersectionalityChapterStartPosition: undefined,
  discriminationChapterStartPosition: undefined,
  nextStepsChapterStartPosition: undefined
})

export const getters = {
  getDisclosureChapter (state) {
    return state.activeDisclosureChapterId
  }
}

export const mutations = {
  toggleDisclosureVisibility (state) {
    state.projectDisclosureIsVisible = !state.projectDisclosureIsVisible
  },
  toggleDesignDecisionsVisibility (state) {
    state.designDecisionsAreVisible = !state.designDecisionsAreVisible
  },
  hideTeaser (state) {
    state.teaserIsVisible = false
  },
  showConceptDevelopment (state) {
    state.conceptDevelopmentIsVisible = true
  },
  hideConceptDevelopment (state) {
    state.conceptDevelopmentIsVisible = false
  },
  showDiscriminationDimensions (state) {
    state.discriminationDimensionsAreVisible = true
  },
  hideDiscriminationDimensions (state) {
    state.discriminationDimensionsAreVisible = false
  },
  setDisclosureChapterId (state, chapterId) {
    state.activeDisclosureChapterId = chapterId
  },
  setVerticalViewportCenter (state, verticalViewportCenter) {
    state.verticalViewportCenter = verticalViewportCenter
  },
  setVerticalScrollPosition (state, verticalScrollPosition) {
    state.verticalScrollPosition = verticalScrollPosition
  },
  setActiveArticleChapterId (state, chapterId) {
    state.activeArticleChapterId = chapterId
  },
  setQuestionnaireLinkIsVisible (state, visibility) {
    state.questionnaireLinkIsVisible = visibility
  },

  // logging
  setLoggingId (state, loggingId) {
    state.loggingId = loggingId.toString()
  },

  // article break points
  setIntroductionStartPosition (state, verticalPosition) {
    state.introductionStartPosition = verticalPosition
  },
  setIntersectionalityChapterStartPosition (state, verticalPosition) {
    state.intersectionalityChapterStartPosition = verticalPosition
  },
  setDiscriminationChapterStartPosition (state, verticalPosition) {
    state.discriminationChapterStartPosition = verticalPosition
  },
  setNextStepsChapterStartPosition (state, verticalPosition) {
    state.nextStepsChapterStartPosition = verticalPosition
  }
}
