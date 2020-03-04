<template>
  <div class="w-full border-t border-gray-200 mt-4 pt-2 flex justify-end">
    <button :type="type" class="px-2 py-1 text-sm rounded shadow mt-4 flex items-center" :class="classes" @click="ev => $emit('click', ev)">
      <ion-icon v-if="icon" :name="icon"/>
      <span :class="{'ml-1': icon}">{{ label }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ModalButton',
  props: {
    submit: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    },
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    type () {
      return this.submit ? 'submit' : 'button'
    }
  }
}
</script>
