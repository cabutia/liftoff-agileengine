<template>
  <div class="w-full fixed top-0 left-0 z-30">
    <transition name="fade-modal">
      <div class="modal-overlay" @click.stop="visible = false" v-if="visible">
      </div>
    </transition>
    <transition name="swipe-modal">
      <ModalContent v-if="visible" :title="title" @close-click="hideModal">
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
      eventService.on(eventService.events.modals.show, name => {
        if (name === this.name) this.showModal()
      })
      eventService.on(eventService.events.modals.hide, name => {
        if (name === this.name) this.hideModal()
      })
      eventService.on(eventService.events.modals.toggle, payload => {
        if (payload.name === this.name) this.toggleModal(payload)
      })
    },
    showModal () {
      this.visible = true
      this.setBodyOverflow(false)
    },
    hideModal () {
      this.visible = false
      this.setBodyOverflow(true)
    },
    toggleModal (payload) {
      this.name === payload.name && payload.state
        ? this.showModal()
        : this.hideModal()
    },
    setBodyOverflow (overflow) {
      document.body.style.overflow = overflow ? 'auto' : 'hidden'
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
