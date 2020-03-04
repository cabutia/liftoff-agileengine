import getters from '@/store/modules/user/getters'
import state from '@/store/modules/user/state'
import mutations from '@/store/modules/user/mutations'
import actions from '@/store/modules/user/actions'

export default {
  namespaced: true,
  namespace: 'user',
  state,
  mutations,
  actions,
  getters
}
