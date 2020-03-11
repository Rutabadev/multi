export const state = () => ({
  user: undefined
})

export const mutations = {
  setUser(state, { photoURL, displayName }) {
    state.user = { photoURL, displayName }
  },

  removeUser(state) {
    state.user = null
  }
}
