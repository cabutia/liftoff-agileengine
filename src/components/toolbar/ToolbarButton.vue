<template>
  <div class="px-1 flex relative">
    <button type="button" class="toolbar-button" @click="ev => $emit('click', ev)">
      <ion-icon :name="icon"/>
      <div class="text-sm">
        <slot/>
      </div>
    </button>
    <div class="button-tooltip" v-if="tooltip">
      {{ tooltip }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToolbarButton',
  props: {
    icon: {
      type: String,
      default: null
    },
    tooltip: {
      type: String,
      default: null
    }
  }
}
</script>
