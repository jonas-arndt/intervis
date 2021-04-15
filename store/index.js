export const state = () => ({
  projectDisclosureIsVisible: false,
  designDecisionsAreVisible: false
  conceptDevelopmentIsVisible: false,
  discriminationDimensionsAreVisible: false
})

export const mutations = {
  toggleDisclosureVisibility (state) {
    state.projectDisclosureIsVisible = !state.projectDisclosureIsVisible
  },
  toggleDesignDecisionsVisibility (state) {
    state.designDecisionsAreVisible = !state.designDecisionsAreVisible
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
