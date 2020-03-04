<template>
  <div class="w-full fixed top-0 left-0">
    <transition name="fade-modal">
      <div class="modal-overlay" @click.stop="visible = false" v-if="visible">
      </div>
    </transition>
    <transition name="swipe-modal">
      <ModalContent v-if="visible" :title="title">
        <slot/>
      </ModalContent>
    </transition>
  </div>
</template>

<script>
import ModalContent from '@/components/modals/ModalContent'
import eventService from '@/services/eventService'

export default {
  name: 'Modal',
  components: {
    ModalContent
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: false
    }
  },
  beforeMount () {
    this.listenToModalChanges()
  },
  methods: {
    listenToModalChanges () {
      eventService.on(eventService.events.modals.show, this.showModal)
      eventService.on(eventService.events.modals.hide, this.hideModal)
      eventService.on(eventService.events.modals.toggle, this.toggleModal)
    },
    showModal (name) {
      if (this.name === name) {
        this.visible = true
      }
    },
    hideModal (name) {
      if (this.name === name) {
        this.visible = false
      }
    },
    toggleModal (payload) {
      this.name === payload.name && payload.state
        ? this.showModal()
        : this.hideModal()
    }
  }
}
</script>

<style>
  .fade-modal-enter,
  .fade-modal-leave-to {
    opacity: 0;
    visibility: hidden;
  }

  .fade-modal-enter-to,
  .fade-modal-leave {
    opacity: 1;
    visibility: visible;
  }

  .fade-modal-enter-active,
  .fade-modal-leave-active {
    transition: opacity .2s ease,
                visibility .2s ease;
  }

  .swipe-modal-enter,
  .swipe-modal-leave-to {
    right: -100%;
  }

  .swipe-modal-enter-to,
  .swipe-modal-leave {
    right: 0;
  }

  .swipe-modal-enter-active,
  .swipe-modal-leave-active {
    transition: right .2s ease;
  }
</style>
