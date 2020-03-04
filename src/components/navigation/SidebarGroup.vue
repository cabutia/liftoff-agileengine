<template>
  <ul class="mb-4">
    <li class="text-xs uppercase pl-2 text-gray-600" v-if="title">{{ title }}</li>
    <slot/>
  </ul>
</template>

<script>
export default {
  name: 'SidebarGroup',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>
