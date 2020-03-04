import getters from '@/store/modules/projects/getters'
import state from '@/store/modules/projects/state'
import mutations from '@/store/modules/projects/mutations'
import actions from '@/store/modules/projects/actions'

export default {
  namespaced: true,
  namespace: 'projects',
  state,
  mutations,
  actions,
  getters
}
