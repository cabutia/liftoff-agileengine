<template>
  <div class="w-full flex flex-row mb-3 radio-input-wrapper">
    <input
      type="radio"
      :value="value"
      :name="name"
      :checked="selected"
      :id="id"
      @change="emitValue"
      class="hidden">
    <label :for="id" class="flex flex-row items-center">
      <div class="icon-status icon-selected">
        <ion-icon name="radio-button-on-outline"/>
      </div>
      <div class="icon-status icon-unselected">
        <ion-icon name="radio-button-off-outline"/>
      </div>
      <span class="ml-2 text-gray-800 label-text text-sm">
        {{  label }}
      </span>
    </label>
  </div>
</template>

<script>

export default {
  name: 'RadioInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    selected: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean]
    }
  },
  methods: {
    normalizeValue (value) {
      return value.trim().replace(' ', '-')
    },
    emitValue (ev) {
      this.$emit('input', ev.target.value)
    }
  },
  computed: {
    id () {
      return this.name + '_' + this.normalizeValue(this.value)
    }
  }
}
</script>

<style>
  .radio-input-wrapper input:not(:checked) + label .icon-selected {
    @apply .hidden;
  }
  .radio-input-wrapper input:checked + label .icon-unselected {
    @apply .hidden;
  }

  .radio-input-wrapper input:checked + label .label-text {
    @apply .text-purple-600;
  }

  .radio-input-wrapper .icon-status {
    @apply .text-purple-600 .flex .items-center
  }
</style>
