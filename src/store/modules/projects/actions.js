export default {
  setCurrentProject: ({ commit }, payload) => {
    /** Look for project in server, and update some data in backend */
    commit('setCurrentProject', payload)
  }
}
