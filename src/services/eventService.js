import eventBus from '@/services/eventBus'

export default {
  events: {
    modals: {
      show: 'modal.show',
      hide: 'modal.hide'
    },
    loaders: {
      show: 'loader.show',
      hide: 'loader.hide'
    },
    tasks: {
      updated: 'task.updated'
    },
    sidebar: {
      show: 'sidebar.show',
      hide: 'sidebar.hide',
      toggle: 'sidebar.toggle'
    }
  },
  emit: (event, payload) => {
    eventBus.$emit(event, payload)
  },
  on: (event, callback) => {
    eventBus.$on(event, callback)
  }
}
