export const state = () => ({
  projectDisclosureIsVisible: false,
  designDecisionsAreVisible: false,
  teaserIsVisible: true,

  conceptDevelopmentIsVisible: false,
  discriminationDimensionsAreVisible: false,

  activeDisclosureChapterId: 0,
  activeArticleChapterId: undefined,

  verticalScrollPosition: 0,
  verticalViewportCenter: 0
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
  }
}
