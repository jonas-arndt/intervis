export const state = () => ({
  projectDisclosureIsVisible: false,
  designDecisionsAreVisible: false,
  teaserIsVisible: true,

  conceptDevelopmentIsVisible: false,
  discriminationDimensionsAreVisible: false
})

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
  }
}
