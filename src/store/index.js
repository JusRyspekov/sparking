import { createStore } from 'vuex'

export default createStore({
  state: {
    sidebar: true
  },
  mutations: {
    turnOffSidebar() {
      state.sidebar = false
    }
  },
  actions: {
  },
  modules: {
  }
})
