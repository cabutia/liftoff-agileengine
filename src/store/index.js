import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/modules/user'
import projects from '@/store/modules/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    projects
  }
})
