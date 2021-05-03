export const state = () => ({
  projectDisclosureIsVisible: false,
  designDecisionsAreVisible: false,
  teaserIsVisible: true,

  conceptDevelopmentIsVisible: false,
  discriminationDimensionsAreVisible: false,

  activeDisclosureChapterId: 0,
  activeArticleChapterId: undefined,

  articleScrollPosition: 0
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
  setScrollPosition (state, scrollPosition) {
    state.articleScrollPosition = scrollPosition
  },
  setActiveArticleChapterId (state, chapterId) {
    state.activeArticleChapterId = chapterId
  }
}
