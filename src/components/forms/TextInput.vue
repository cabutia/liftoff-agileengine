<template>
  <div class="w-full flex flex-col mb-3">
    <InputLabel :label="label" :name="name"/>
    <input
      type="text"
      :name="name"
      :placeholder="placeholder"
      @input="emitValue"
      class="shadow focus:shadow-lg border border-transparent focus:border-purple-600 rounded text-sm text-gray-800 px-2 py-1">
  </div>
</template>

<script>
import InputLabel from '@/components/forms/InputLabel'

export default {
  name: 'TextInput',
  components: {
    InputLabel
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    emitValue (ev) {
      this.$emit('input', ev.target.value)
    }
  }
}
</script>
